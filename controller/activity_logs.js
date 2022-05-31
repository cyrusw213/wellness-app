// dependencies
const express = require("express");
const router = express.Router();
const Activity = require('../models/activities')

router.use(express.urlencoded({extended: false}))


//seed


//index
router.get('/', (req, res) => {
    Activity.find({}, (err, foundActivity) => {
    res.render('activities/index.ejs', {
        activities: foundActivity
    })
    })
})

//new
router.get('/new', (req, res) => {
    res.render('activities/new.ejs')
})

//delete
router.delete('/:id', (req, res) => {
    Activity.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/activities')
    })
})

//update


//create
router.post('/', (req, res) => {
    Activity.create(req.body, (err, createdActivity) => {
        res.redirect('/activities')

    })
})

//edit

//show
router.get('/:id', (req, res) => {
    Activity.findById(req.params.id, (err, foundActivity) => {
        res.render('activities/show.ejs', {
            activities: foundActivity
        })
    })
})

module.exports = router;