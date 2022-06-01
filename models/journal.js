const mongoose = require('mongoose')

const journalSchema = new mongoose.Schema({
    date: {type: Date, required: true},
    title: {type: String, required: true},
    entry: {type: String, required: true},
    picture: {type: String}},
    {timestamps: true});

const journalEntry = mongoose.model('journalEntry', journalSchema)

module.exports = journalEntry