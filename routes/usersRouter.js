const express = require('express');
const UserModel = require('../models/userModel');
const Joi = require('joi');

const usersRouter = express.Router();

usersRouter.get('/',(req,res,next) => {
  res.send('Hello World');
});

usersRouter.get('/registration',(req,res,next) => {
  res.render('pages/registration');
})

usersRouter.post('/registration',(req,res,next) => {
  const result = Joi.validate(req.body, UserModel.User);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  }
  else {
    const newUser = new UserModel.UserModel(req.body);
    newUser.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  }
});

module.exports = usersRouter;
