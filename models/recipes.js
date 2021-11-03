const mongoose = require('mongoose');

const recipesSchema = new mongoose.Schema({
    description: String,
    complete: Boolean
});

const Recipes = mongoose.model('Recipes', recipesSchema);

module.exports = Recipes;



//this is a comment
