const Joi = require('joi');
const mongoose  = require('mongoose');
const IngrediantModel = require('./ingrediantModel');
const ingrediantSchema = IngrediantModel.IngrediantSchema;

const Recipe  = {
    recipeName: Joi.string().min(3).max(30).required(),
    recipeIngr: Joi.array().items(Joi.object({
                ingName: Joi.string().min(3).max(30).required(),
                ingWeight: Joi.number().precision(2).required(),
                ingPrice: Joi.number().required()
              }).optional()),
    recipePrice: Joi.number()
}


const recipeSchema = new mongoose.Schema({
    recipeName: String,
    recipeIngr: [ingrediantSchema],
    recipePrice: Number,
});

const RecipeModel = mongoose.model('Recipe',recipeSchema);


module.exports.Recipe = Recipe;
module.exports.RecipeModel = RecipeModel;
