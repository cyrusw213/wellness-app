//dependencies
const express = require('express')
const router = express.Router()
const journalEntry = require('../models/journal')

router.use(express.urlencoded({extended: false}))

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