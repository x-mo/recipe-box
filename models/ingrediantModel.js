const Joi = require('joi');
const mongoose  = require('mongoose');


const ingrediantSchema = new mongoose.Schema({
    ingName: String,
    ingWeight: Number,
    ingPrice: Number
});

const Ingrediant  = {
    ingName: Joi.string().min(3).max(30).required(),
    ingWeight: Joi.number().precision(2).required(),
    ingPrice: Joi.number().required()
}

const IngrediantModel = mongoose.model('Ingrediant',ingrediantSchema);


module.exports.IngrediantSchema = ingrediantSchema;
module.exports.Ingrediant = Ingrediant;
module.exports.IngrediantModel = IngrediantModel;
