const express = require('express');
const ingredientModel = require('../models/ingredientModel');
const Joi = require('joi');

const ingredientsRouter = express.Router();

ingredientsRouter.get('/api',(req,res,next) => {
  ingredientModel.ingredientModel.find({}, (err, ingredients) => {
      res.send(ingredients);
  })
});

ingredientsRouter.get('/api/:name',(req,res) => {
  ingredientModel.ingredientModel.find({ingName : req.params.name}, (err, ingredient) => {
    res.send(ingredient);
  });
});

ingredientsRouter.post('/api/add',(req,res,next) => {
  console.log(req.body);
  const result = Joi.validate(req.body, ingredientModel.ingredient);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  }
  else {
    const newingredient = new ingredientModel.ingredientModel(req.body);
    newingredient.save()
    .then(item => {
      console.log("ingredient saved to database");
      res.status(200).send("ingredient saved to database");
    })
    .catch(err => {
      res.status(400).send(err.errmsg);
    });
  }
});

ingredientsRouter.delete('/api/delete/:name', (req, res, next) => {
    ingredientModel.ingredientModel.deleteOne({ingName : req.params.name },(err) => {
      if(err)
      res.send(err);
      res.status(200).send("Deleted!");
    });

});

ingredientsRouter.put('/api/update/:name', (req, res, next) => {
  ingredientModel.ingredientModel.findOneAndUpdate({ingName : req.params.name }, req.body, (err) =>{
    if(err)
    res.send(err);
    res.send("Updated!");
  });

})

module.exports = ingredientsRouter;
