const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    Date: {type: Date, required: true},
    Title: {type: String, required: true},
    Duration: {type: Number, required: true},
    Notes: {type: String},
    Photo: {type: String}},
    {timestamps: true
})

const Activity = mongoose.model('Activity', activitySchema)
module.exports = Activity