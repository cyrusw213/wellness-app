//dependencies
const bcrypt = require('bcrypt')
const express = require('express')
const userRouter = express.Router()
const User = require('../models/users')

//I
//New - registration page
userRouter.get('/new', (req, res) => {
    res.render('users/new.ejs', {
        currentUser: req.session.currentUser
    })
})
//D
//U
//C - registration route
userRouter.post('/', (req, res) => {
    //overwriting password w/ hash and passing to our database
    req.body.password=bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (error, createdUser) => {
        res.redirect('/')
    })
})
//E
//S

//export user router

module.exports = userRouter