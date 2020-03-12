const router = require('express').Router()
const passport = require('passport')

router.get('/login', (req, res)=>{
    res.render('login', {user: req.user})
})
router.get('/logout',(req, res)=>{
    //handle with passport
    req.logout()
    res.redirect('/')
})
router.get('/signup', (req, res)=>{
    res.render('signup', {user: req.user})
})
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}))
router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{
    res.render('home', {user: req.user})
})
router.get('/facebook', passport.authenticate('facebook',{
    //scope: [profile]
}))

router.get('/facebook/redirect', 
    passport.authenticate('facebook'),
    (req, res)=>{
        res.render('home', {user: req.user})
    }
)

module.exports = router