const express = require('express');
const auth = require('./auth');
const UserModel = require('../models/userModel');

const mainRouter = express.Router();

mainRouter.get('/',auth.required,(req,res,next) => {
  const { payload: { id } } = req;

  return UserModel.UserModel.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }
      return res.json({ user: user.toAuthJSON() });
    });
});

module.exports = mainRouter;
