const express = require('express');
const auth = require('./auth');
const UserModel = require('../models/userModel');
const RecipeModel = require('../models/recipeModel');
const OrderModel = require('../models/orderModel');

const mainRouter = express.Router();

mainRouter.get('/',auth.required,(req,res,next) => {
  const { payload: { id } } = req;

  return UserModel.UserModel.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }
      return res.status(200).json({ user: user.toAuthJSON() });
    });
});

mainRouter.get('/api/totIng/:name',auth.required,(req,res,next) => {
  OrderModel.OrderModel.find({"orderItems.recipeIngr.ingName" : req.params.name},(err, noIng) =>{
    if(err)
    res.status(200).send(err);
    res.status(200).send(noIng.length);
  });
});

module.exports = mainRouter;
