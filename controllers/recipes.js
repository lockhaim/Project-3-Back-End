const express = require('express');
const router = express.Router();
const Recipes = require('../models/recipes')


router.get('/', (req, res)=>{
    Recipes.find({}, (err, foundRecipes) => {
      res.json(foundRecipes)
    })
});

router.post('/', (req, res) => {
  Recipes.create(req.body, (err, createdRecipe) => {
    res.json(createdRecipe)
  })
})

router.delete('/:id', (req, res) => {
  Recipes.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
    res.json(deletedRecipe)
  })
})



module.exports = router;
