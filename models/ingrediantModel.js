const Joi = require('joi');
const mongoose  = require('mongoose');


const ingrediantSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    price: Number
});

const Ingrediant  = {
    name: Joi.string().alphanum().min(3).max(30).required(),
    weight: Joi.number().precision(2).required(),
    price: Joi.number().required()
}

const IngrediantModel = mongoose.model('Ingrediant',ingrediantSchema);


module.exports.IngrediantSchema = ingrediantSchema;
module.exports.Ingrediant = Ingrediant;
module.exports.IngrediantModel = IngrediantModel;
