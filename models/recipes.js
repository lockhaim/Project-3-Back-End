const mongoose = require('mongoose');

const recipesSchema = new mongoose.Schema({
    title: String,
    description: String,
    ingredients: [String],
    time: Number,
    image: String,
    complete: Boolean
});

const Recipes = mongoose.model('Recipes', recipesSchema);

module.exports = Recipes;



//this is a comment
