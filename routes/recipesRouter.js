const express = require('express');
const RecipeModel = require('../models/recipeModel');

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

usersRouter.post('/add',(req,res,next) => {
  const result = Joi.validate(req.body, RecipeModel.Recipe);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  }
  else {
    const newUser = new RecipeModel.RecipeModel(req.body);
    newUser.save()
    .then(item => {
      res.send("recipe saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  }
});

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
