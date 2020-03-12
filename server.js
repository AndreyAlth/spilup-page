const express = require('express')
const path = require('path')
const passportSetup = require('./config/passport-setup')
const passportSetupFacebook = require('./config/passport-setup-facebook')
const passport = require('passport')
const homeRoutes = require('./routes/home-routes')
const authRoutes = require('./routes/auth-routes')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')

const app = express()

//set up view engine
app.set('view engine', 'ejs')

//cookie-session
app.use(cookieSession({
    //millisecond in a day
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}))

//initialize passport
app.use(passport.initialize())
app.use(passport.session())

//static files
app.use(express.static(path.join(__dirname, '/public')))

//conected to mongodb
mongoose.connect(keys.mongodb.dbURI, ()=>{
    console.log('connected to mongodb')
})


//set up routes
app.use('/auth', authRoutes)
app.use('/home', homeRoutes)

//create home route
app.get('/', (req,res)=>{
    res.render('home', {user: req.user})
})

app.listen(3000, ()=>{
    console.log('app now listening for request on port 3000')
})
