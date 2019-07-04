const express = require('express');
const UserModel = require('../models/userModel');
const Joi = require('joi');

const usersRouter = express.Router();

usersRouter.get('/',(req,res) => {
  res.send('Hello World');
});

usersRouter.get('/registration',(req,res) => {
  res.render('pages/registration');
})

usersRouter.post('/registration',(req,res) => {
  console.log(req.body);
  const result = Joi.validate(req.body, UserModel.User);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  }
  else {
    console.log(result);
  }
});

module.exports = usersRouter;
