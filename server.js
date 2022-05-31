//dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const methodOverride = require("method-override")
const activityController = require('./controller/activity_logs')
const journalController = require('./controller/journals_entries')

//middleware
app.use(express.urlencoded({extended : true}))
app.use(methodOverride("_method"))
app.use(express.static('public'))
app.use('/activities', activityController)
app.use('/journal', journalController)

//landing page index router
app.get('/', (req, res) => {
    res.render('index.ejs')
})


//database connection
mongoose.connect(process.env.DATABASE_URL)
const PORT = process.env.PORT

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


app.listen(PORT, () => {console.log(`listening on port: ${PORT}`)})
