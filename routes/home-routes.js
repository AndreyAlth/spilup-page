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
router.get('/fomis', (req, res)=>{
  res.render('foamy', {user: req.user})
})
router.get('/audifonos', (req, res)=>{
  res.render('headset', {user: req.user})
})
router.get('/juguetes', (req, res)=>{
  res.render('toys', {user: req.user})
})
router.get('/papeles', (req, res)=>{
  res.render('paper', {user: req.user})
})
router.get('/lapices', (req, res)=>{
  res.render('pencils', {user: req.user})
})
router.get('/lapices', (req, res)=>{
  res.render('pencils', {user: req.user})
})
router.get('/audifonos', (req, res)=>{
  res.render('headset', {user: req.user})
})
router.get('/juguet', (req, res)=>{
  res.render('toys', {user: req.user})
})
router.get('/libret', (req, res)=>{
  res.render('notebooks', {user: req.user})
})
router.get('/resis', (req, res)=>{
  res.render('glues', {user: req.user})
})


<<<<<<< HEAD
module.exports = router
=======

module.exports = router
>>>>>>> 6a2cf291b88d7be68f97c969f21fa69ea018342c
