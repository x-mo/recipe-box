const express = require('express');

const mainRouter = express.Router();

mainRouter.get('/',(req,res,next) => {
  res.render('pages/homepage');
});

module.exports = mainRouter;
