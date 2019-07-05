const express = require('express');
const IngrediantModel = require('../models/ingrediantModel');
const Joi = require('joi');

const ingrediantsRouter = express.Router();

ingrediantsRouter.get('/',(req,res,next) => {
  IngrediantModel.IngrediantModel.find({}, (err, ingrediants) => {
      res.send(ingrediants);
  })
});

module.exports = ingrediantsRouter;
