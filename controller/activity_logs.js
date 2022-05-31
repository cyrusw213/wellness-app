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


//update


//create
router.post('/', (req, res) => {
    Activity.create(req.body, (err, createdActivity) => {
        res.redirect('/activities')

    })
})

//edit

module.exports = router;