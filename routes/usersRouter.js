const express = require('express');
const UserModel = require('../models/userModel');
const Joi = require('joi');

const usersRouter = express.Router();

usersRouter.get('/',(req,res,next) => {
  res.send('Welcome, please sign in.');
});

usersRouter.get('/login',(req,res,next) => {
  res.render('pages/users/login');
});

usersRouter.post('/login',(req,res,next) => {
  const result = Joi.validate(req.body, UserModel.LoginUser);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  }
  else {
    UserModel.UserModel.find({email: req.body.email}, (err, users) => {
        if(req.body.password == users[0].password){
          console.log("Welcome!");
          res.redirect('/');
        }else{
          console.log("Wrong credintials");
        }
    })
  }
});

usersRouter.get('/registration',(req,res,next) => {
  res.render('pages/users/registration');
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
      res.send("new user saved to database");
    })
    .catch(err => {
      res.status(400).send(err.errmsg);
    });
  }
});

module.exports = usersRouter;
