//dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require("method-override")
const activityController = require('./controller/activity_logs')
const journalController = require('./controller/journals_entries')
const app = express()
const userController = require('./controller/users');
const session = require('express-session')
const sessionsController = require('./controller/sessions')


//database connection
mongoose.connect(process.env.MONGODB_URI)
const PORT = process.env.PORT


//middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended : false}))
app.use(methodOverride("_method"))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

//routes/controllers
app.use('/activities', activityController)
app.use('/entries', journalController)
app.use('/users', userController);
app.use('/sessions', sessionsController)

//landing page index router
app.get('/', (req, res) => {
	if (req.session.currentUser) {
		res.render('dashboard.ejs', {
			currentUser: req.session.currentUser
		});
	} else {
		res.render('index.ejs', {
			currentUser: req.session.currentUser
		});
	}
});

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


app.listen(PORT, () => {console.log(`listening on port: ${PORT}`)})
