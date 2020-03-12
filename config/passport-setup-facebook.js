const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
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
    new FacebookStrategy({
        clientID: keys.facebook.appID,
        clientSecret: keys.facebook.appSecret,
        callbackURL: '/auth/facebook/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        //console.log(profile)
        //change googleifd by facebookid
        User.findOne({googleid: profile.id}).then((currentUser)=>{
            if(currentUser){
                //alreay have the user
                console.log('user is: ', currentUser)
                done(null, currentUser)
            }
            else{
                //if not, create a user in db
                new User({
                    username: profile.displayName,
                    googleid: profile.id
                    //thumbnail:
                }).save().then((newUser)=>{
                    console.log('new user created: '+ newUser)
                    done(null, newUser)
                })

            }
        })
    })
)