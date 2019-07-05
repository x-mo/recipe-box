const Joi = require('joi');
const mongoose  = require('mongoose');


const ingrediantSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    price: Number
});

const Ingrediant  = {
    ingrediantName: Joi.string().alphanum().min(3).max(30).required(),
    ingrediantWeight: Joi.number(),
    ingrediantPrice: Joi.number()
}

const IngrediantModel = mongoose.model('Ingrediant',ingrediantSchema);


module.exports.Ingrediant = ingrediantSchema;
module.exports.IngrediantModel = IngrediantModel;
