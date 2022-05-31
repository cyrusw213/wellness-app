const mongoose = require('mongoose')

const journalSchema = new mongoose.Schema({
    title: {type: String, required: true},
    entry: {type: String, required: true}},
    {timestamps: true});

const journalEntry = mongoose.model('journalEntry', journalSchema)

module.exports = journalEntry