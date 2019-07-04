const express = require('express');
const recipesModel = require('../models/recipeModel');

const recipesRouter = express.Router();

var recipes = [
  {id:1,name:'recipe 1'},
  {id:2,name:'recipe 2'},
  {id:3,name:'recipe 3'},
  {id:4,name:'recipe 4'},
];

recipesRouter.get('/',(req,res) => {
  res.send(recipes);
})

recipesRouter.get('/:id',(req,res) => {
  //res.send(req.params.id);
  //res.send(req.query);
  const recipe = recipes.find(c => c.id === parseInt(req.params.id));
  if(!recipe) res.status(404).send('The requested recipe is not found!');
  res.send(recipe);
});


recipesRouter.post('/',(req,res) => {
  var recipe = {
    id: recipes.length +1,
    name: req.body.name,
  };

  recipes.push(recipe);
  res.send(recipe);
});

recipesRouter.delete('/:id', (req, res, next) => {
    res.send('DELETE /:id')
})

recipesRouter.put('/:id', (req, res, next) => {
    res.send('PUT /:id')
})

module.exports = recipesRouter;
