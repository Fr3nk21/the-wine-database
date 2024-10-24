const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const router = express.Router()

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body

    //Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create new user
    const user = new User({ email, password: hashedPassword })
    await user.save()

    res.status(201).json({ message: 'User created successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Check if user exists
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    // Create and send JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })
    res.json({ token })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Logout (optional, as JWT is stateless)
router.post('/logout', (req, res) => {
  // In a stateless JWT setup, logout is typically handled client-side by removing the token from storage. Here's a simple server response:
  res.json({ message: 'Logout successful' })
})

module.exports = router
