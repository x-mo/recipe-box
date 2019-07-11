const Joi = require('joi');
const mongoose  = require('mongoose');


const ingredientSchema = new mongoose.Schema({
    _id: {type: Number, select: false},
    __v: {type: Number, select: false},
    ingName: String,
    ingWeight: Number,
    ingPrice: Number
});

const ingredient  = {
    _id: Joi.number(),
    __v: Joi.number(),
    ingName: Joi.string().min(3).max(30).required(),
    ingWeight: Joi.number().precision(2).required(),
    ingPrice: Joi.number().required()
}

const ingredientModel = mongoose.model('ingredient',ingredientSchema);


module.exports.ingredientSchema = ingredientSchema;
module.exports.ingredient = ingredient;
module.exports.ingredientModel = ingredientModel;
