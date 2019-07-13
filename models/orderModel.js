const Joi = require('joi');
const mongoose  = require('mongoose');
const jwt = require('jsonwebtoken');
const RecipeModel = require('./ingredientModel');
const recipeSchema = RecipeModel.RecipeSchema;
const recipe = RecipeModel.Recipe;

mongoose.connect('mongodb://localhost/recipe-box')
.then(()=>console.log('Connected to MongoDB ...'))
.catch(err => console.log(err));

const Order  = {
    orderNumber: Joi.number().required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    order: Joi.array().items(recipe).required()
}

const orderSchema = new mongoose.Schema({
    orderNumber: Number,
    username: { type: String, index: { unique: true }},
    order: [recipeSchema]
});


const OrderModel = mongoose.model('Order',orderSchema);


module.exports.Order = Order;
module.exports.OrderSchema = orderSchema;
module.exports.OrderModel = OrderModel;
