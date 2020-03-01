const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./keys')
const User = require('../models/user-model')

passport.serializeUser((user, done)=>{
    done(null, user.id)
})
passport.deserializeUser((id, done)=>{
    User.findById(id).then((user) =>{
        done(null, user)
    })
})

passport.use(
    new GoogleStrategy({
        //options for the google start
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done)=>{
        console.log(profile)
        User.findOne({ googleid: profile.id }).then((currentUser)=>{
            if(currentUser){
                //already have the user
                console.log('user is: ', currentUser)
                done(null, currentUser)
            }
            else{
                //if not, create a user in db
                new User({
                    username: profile.displayName,
                    googleid: profile.id,
                    thumbnail: profile._json.picture
                }).save().then((newUser)=>{
                    console.log('new user created: ' + newUser)
                    done(null, newUser)
                })

            }
        }

        )
    }
    )
)