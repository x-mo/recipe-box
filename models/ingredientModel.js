const Joi = require('joi');
const mongoose  = require('mongoose');


const ingredientSchema = new mongoose.Schema({
    ingName: String,
    ingWeight: Number,
    ingPrice: Number
});

const ingredient  = {
    ingName: Joi.string().min(3).max(30).required(),
    ingWeight: Joi.number().precision(2).required(),
    ingPrice: Joi.number().required()
}

const ingredientModel = mongoose.model('ingredient',ingredientSchema);


module.exports.ingredientSchema = ingredientSchema;
module.exports.ingredient = ingredient;
module.exports.ingredientModel = ingredientModel;