//dependencies
const express = require('express')
const router = express.Router()
const journal = require('../models/journal')

//seed

//index
router.get('/', (req, res) => {
    res.render('journal/index.ejs')
})
//new

//delete

//update

//create

//edit

//show

module.exports = router