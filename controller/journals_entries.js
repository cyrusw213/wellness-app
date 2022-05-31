//dependencies
const express = require('express')
const router = express.Router()
const journalEntry = require('../models/journal')

router.use(express.urlencoded({extended: false}))

//seed

//index
router.get('/', (req, res) => {
    journalEntry.find({}, (err, foundEntry) => {
    res.render('journal/index.ejs', {
        entries : foundEntry
    })
    })
})
//new

//delete

//update

//create
router.post('/', (req, res) => {
    journalEntry.create(req.body, (err, createdEntry) => {
        res.redirect('/entries')
    })
})

//edit

//show

module.exports = router