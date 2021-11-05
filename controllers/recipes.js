const express = require('express');
const router = express.Router();
const Recipes = require('../models/recipes')

//index route
router.get('/', (req, res)=>{
    Recipes.find({}, (err, foundRecipes) => {
      res.json(foundRecipes)
    })
});

//create route
router.post('/', (req, res) => {
  Recipes.create(req.body, (err, createdRecipe) => {
    res.json(createdRecipe)
  })
})

//delete route
router.delete('/:id', (req, res) => {
  Recipes.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
    res.json(deletedRecipe)
  })
})

//edit route
router.put('/:id', (req, res) => {
    Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRecipe) => {
        res.json(updatedRecipe)
    })
})

module.exports = router;
