const express = require('express')
const user = express.Router()
const User = require('../models/user.js')
const bcrypt = require('bcrypt')

user.get('/', (req, res) => {
  User.find({username}, (err, foundUsers) => {
    res.json(foundUsers)
  })
})

user.post('/newaccount', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err)
    } else {
      console.log('User created ', createdUser)
      res.json(createdUser)
    }
  })
})

user.put('/login', (req, res) => {
  User.findOne({username: req.body.username}, (err, foundUser) => {
    if (err) {
      res.json('Database error. Please try again')
    } else {
      if (!foundUser) {
        res.json('<a href="/login">Username not found</a>')
      } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        res.json({username: foundUser.username})
      } else {
        res.json("<a href='/login'>Password not found</a>")
      }
    }
  })
})

module.exports = user
