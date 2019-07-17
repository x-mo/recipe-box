const express = require('express');
const UserModel = require('../models/userModel');
const Joi = require('joi');
const auth = require('./auth');
const bcrypt = require('bcrypt-nodejs');
var salt = bcrypt.genSaltSync(10);

const usersRouter = express.Router();

usersRouter.get('/api',auth.optional,(req,res,next) => {
  UserModel.UserModel.find({}, (err, users) => {
      res.status(200).send(users);
  })
});

usersRouter.get('/api/:name',(req,res) => {
  UserModel.UserModel.find({username : req.params.name}, (err, user) => {
    res.status(200).send(user);
  });
});

usersRouter.post('/api/login',(req,res,next) => {
  const result = Joi.validate(req.body, UserModel.LoginUser);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  }
  else {
    UserModel.UserModel.find({email: req.body.email}, (err, users) => {
        if(bcrypt.compareSync(req.body.password, users[0].password)) {
          users[0].token = users[0].generateJWT();
            console.log("Welcome!");
            console.log(users[0].toAuthJSON());
            return res.status(200).json({ user: users[0].toAuthJSON() });
        } else {
          console.log("Wrong credintials");
          return res.status(400).send("Wrong credintials");
        }
    });
  }
});


usersRouter.post('/api/registration',auth.optional,(req,res,next) => {
  const result = Joi.validate(req.body, UserModel.User);
  let hash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = hash;
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  }
  else {
    const newUser = new UserModel.UserModel(req.body);
    newUser.save()
    .then(item => {
      console.log("new user saved to database");
      console.log(newUser.toAuthJSON());
      res.status(200).json({ user: newUser.toAuthJSON()});
    })
    .catch(err => {
      res.status(400).send(err.errmsg);
    });
  }
});

usersRouter.put('/api/makeAdmin/:email', (req, res, next) => {
  UserModel.UserModel.findOneAndUpdate({email: req.params.email}, {$set:{is_admin: true}}, ( err, obj ) => {
    if(err)
    res.statis(400).send(err);
    else {
      res.status(200).send("updated!, is now an admin");
    }
  });

})

module.exports = usersRouter;
