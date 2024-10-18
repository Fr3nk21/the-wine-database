const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

// Protected route
router.get('/dashboard', auth, (req, res) => {
  res.json({ msg: 'This is a protected route', user: req.user })
})

// Another protected route
router.get('/profile', auth, (req, res) => {
  res.json({ msg: 'This is your profile', user: req.user })
})

module.exports = router
