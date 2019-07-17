const express = require('express');
const OrderModel = require('../models/orderModel');
const Joi = require('joi');
const orderRouter = express.Router();

orderRouter.get('/api',(req,res,next) => {
  OrderModel.OrderModel.find({}, (err, orders) => {
      res.send(orders);
  })
});

orderRouter.get('/api/findByUsername/:name',(req,res) => {
  OrderModel.OrderModel.find({username : req.params.name}, (err, orders) => {
    res.send(orders);
  });
});

orderRouter.get('/api/findOrder/:num',(req,res) => {
  OrderModel.OrderModel.find({orderNumber : ParseInt(req.params.num)}, (err, order) => {
    res.send(order);
  });
});

orderRouter.get('/api/findOpenOrders',(req,res) => {
  OrderModel.OrderModel.find({orderStatus : "Open"}, (err, orders) => {
    res.send(orders);
  });
});

orderRouter.get('/api/findClosedOrders',(req,res) => {
  OrderModel.OrderModel.find({orderStatus : "Done"}, (err, orders) => {
    res.send(orders);
  });
});

orderRouter.post('/api/add',(req,res,next) => {
  console.log(req.body);
  const result = Joi.validate(req.body, OrderModel.Order);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  }
  else {
    const newOrder = new OrderModel.OrderModel(req.body);
    newOrder.save()
    .then(item => {
      res..status(200).send("order saved to database");
    })
    .catch(err => {
      res.status(400).send(err.errmsg);
    });
  }
});


orderRouter.delete('/api/delete/:num', (req, res, next) => {
      OrderModel.OrderModel.deleteOne({orderNumber : req.params.num },(err) => {
      if(err)
      res.send(err);
      res.send("Deleted!");
    });

});

orderRouter.put('/api/update/:num', (req, res, next) => {
    OrderModel.OrderModel.findOneAndUpdate({orderNumber : req.params.num }, req.body, (err) =>{
    if(err)
    res.send(err);
    res.send("Updated!");
  });

})

module.exports = orderRouter;
