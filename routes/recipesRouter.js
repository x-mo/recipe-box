const express = require('express');
const RecipeModel = require('../models/recipeModel');
const Joi = require('joi');
const recipesRouter = express.Router();

recipesRouter.get('/api',(req,res,next) => {
  RecipeModel.RecipeModel.find({}, (err, recipes) => {
      res.send(recipes);
  })
});

recipesRouter.get('/api/:name',(req,res) => {
  //res.send(req.params.id);
  //res.send(req.query);
  RecipeModel.RecipeModel.find({recipeName : req.params.name}, (err, recipe) => {
    res.send(recipe);
  });
});


recipesRouter.post('/api/add',(req,res,next) => {
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


recipesRouter.delete('/api/delete/:name', (req, res, next) => {
    RecipeModel.RecipeModel.deleteOne({recipeName : req.params.name },(err) => {
      if(err)
      res.send(err);
      res.send("Deleted!");
    });

});

recipesRouter.put('/api/update/:name', (req, res, next) => {
  RecipeModel.RecipeModel.findOneAndUpdate({recipeName : req.params.name }, req.body, (err) =>{
    if(err)
    res.send(err);
    res.send("Updated!");
  });

})

module.exports = recipesRouter;
