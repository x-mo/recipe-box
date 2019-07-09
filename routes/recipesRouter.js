const express = require('express');
const RecipeModel = require('../models/recipeModel');
const Joi = require('joi');
const recipesRouter = express.Router();

recipesRouter.get('/',(req,res) => {
  RecipeModel.RecipeModel.find({}, (err, recipes) => {
      res.send(recipes);
  })
});

recipesRouter.get('/add',(req,res) => {
  res.render("pages/recipes/add")
});

recipesRouter.get('/api',(req,res,next) => {
  RecipeModel.RecipeModel.find({}, (err, recipes) => {
      res.send(recipes);
  })
});

recipesRouter.post('/add',(req,res,next) => {
  console.log(req.body);
  const result = Joi.validate(req.body, RecipeModel.Recipe);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  }
  else {
    const newRecipe = new RecipeModel.RecipeModel(req.body);
    newRecipe.save()
    .then(item => {
      res.send("recipe saved to database");
    })
    .catch(err => {
      res.status(400).send(err.errmsg);
    });
  }
});

recipesRouter.get('/:name',(req,res) => {
  //res.send(req.params.id);
  //res.send(req.query);
  const recipe = recipes.find(c => c.name === parseInt(req.params.name));
  if(!recipe) res.status(404).send('The requested recipe is not found!');
  res.send(recipe);
});


recipesRouter.post('/',(req,res) => {
  var recipe = {
    recipeName: req.body.name,
    recipeIngr: req.body.ingr,
    recipePrice: req.body.price
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
