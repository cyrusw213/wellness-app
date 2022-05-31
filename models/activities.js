const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    Title: {type: String, required: true},
    Duration: {type: Number, required: true},
    Notes: {type: String}
})

const Activity = mongoose.model('Activity', activitySchema)
module.exports = Activity