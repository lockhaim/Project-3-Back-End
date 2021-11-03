const express = require('express');
const app = express();

const recipesController = require('.controllers/recipes.js')
app.use('/recipes', recipesController)


app.listen(3000, ()=>{
    console.log('listening...');
});
