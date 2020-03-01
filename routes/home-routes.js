const router = require('express').Router()

router.get('/papers', (req, res)=>{
    res.render('paper',{user: req.user})
})
router.get('/headset', (req, res)=>{
    res.render('headset',{user: req.user})
})
router.get('/folders', (req, res)=>{
    res.render('folders',{user: req.user})
})
router.get('/foamy', (req, res)=>{
    res.render('foamy',{user: req.user})
})
router.get('/pencils', (req, res)=>{
    res.render('pencils',{user: req.user})
})
router.get('/glues', (req, res)=>{
    res.render('glues', {user: req.user})
})
router.get('/notebooks', (req, res)=>{
    res.render('notebooks', {user: req.user})
})
router.get('/toys', (req, res)=>{
    res.render('toys', {user: req.user})
})
router.get('/others', (req, res)=>{
    res.render('others', {user: req.user})
})

module.exports = router