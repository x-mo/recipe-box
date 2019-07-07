const express = require('express');
const IngrediantModel = require('../models/ingrediantModel');
const Joi = require('joi');

const ingrediantsRouter = express.Router();

ingrediantsRouter.get('/',(req,res,next) => {
  IngrediantModel.IngrediantModel.find({}, (err, ingrediants) => {
      res.render("pages/ingrediants/ingrediants" ,{ingrediants : ingrediants});
  })
});

ingrediantsRouter.get('/api',(req,res,next) => {
  IngrediantModel.IngrediantModel.find({}, (err, ingrediants) => {
      res.send(ingrediants);
  })
});

ingrediantsRouter.get('/add',(req,res,next) => {
  res.render("pages/ingrediants/add");
});

ingrediantsRouter.post('/add',(req,res,next) => {
  console.log(req.body);
  const result = Joi.validate(req.body, IngrediantModel.Ingrediant);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  }
  else {
    const newIngrediant = new IngrediantModel.IngrediantModel(req.body);
    newIngrediant.save()
    .then(item => {
      res.send("Ingrediant saved to database");
    })
    .catch(err => {
      res.status(400).send(err.errmsg);
    });
  }
});

module.exports = ingrediantsRouter;
