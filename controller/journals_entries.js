//dependencies
const express = require('express')
const { append } = require('express/lib/response')
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
router.get('/new', (req, res) => {
    res.render('journal/new.ejs')
})
//delete
router.delete('/:id', (req, res) => {
    journalEntry.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/entries')
    })
})
//update
router.put('/:id', (req, res) => {
    journalEntry.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/entries')
    })
})

//create
router.post('/', (req, res) => {
    journalEntry.create(req.body, (err, createdEntry) => {
        res.redirect('/entries')
    })
})

//edit
router.get('/:id/edit', (req, res) => {
    journalEntry.findById(req.params.id, (err, foundEntry) => {
        res.render('journal/edit.ejs', {
            entries : foundEntry
        })
    })
})
//show
router.get('/:id', (req, res) => {
    journalEntry.findById(req.params.id, (err, foundEntry) => {
        res.render('journal/show.ejs', {
            entries: foundEntry
        })
    })
})

module.exports = router