const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection;


//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;


const recipesController = require('./controllers/recipes.js')
app.use('/recipes', recipesController)


console.log(MONGODB_URI);

// Connect to Mongo
mongoose.connect(MONGODB_URI  ,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

app.listen(3000, ()=>{
    console.log('listening...');
});
