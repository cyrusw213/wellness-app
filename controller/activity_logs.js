// dependencies
const express = require("express")
const activities = require('../models/activities')
const router = express.Router();

//seed


//index
router.get('/', (req, res) => {
    res.render('activities/index.ejs')
})

//new


//delete


//update


//create


//edit

module.exports = router;