const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const MONGODB_URI = process.env.Cluster0
const db = mongoose.connection;
const cors = require('cors')
const methodOverride = require('method-override')

app.use(express.json())
app.use(cors())
app.use(methodOverride('_method'))


//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

//////////////////
//CONTROLLERS
const recipesController = require('./controllers/recipes.js')
app.use('/recipes', recipesController)

const userController = require('./controllers/user.js')
app.use('/user', userController)
//////////////////


app.get('/', (req, res) => {
  res.redirect('/recipes')
})


// Connect to Mongo
mongoose.connect(MONGODB_URI , { useNewUrlParser: true}
);

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(process.env.PORT, ()=>{
    console.log('listening...');
});
