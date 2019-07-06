const Joi = require('joi');
const mongoose  = require('mongoose');
const IngrediantModel = require('./ingrediantModel');
const ingrediantSchema = IngrediantModel.IngrediantSchema;
const Recipe  = {
    recipeName: Joi.string().alphanum().min(3).max(30).required(),
    recipeIngr: {},
    recipePrice: Joi.number()
}

const recipeSchema = new mongoose.Schema({
    recipeName: String,
    recipeIngr: {ingrediantSchema},
    recipePrice: Number,
});

const RecipeModel = mongoose.model('Recipe',recipeSchema);


module.exports.Recipe = Recipe;
module.exports.RecipeModel = RecipeModel;
