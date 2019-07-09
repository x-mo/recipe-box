const Joi = require('joi');
const mongoose  = require('mongoose');
const ingredientModel = require('./ingredientModel');
const ingredientSchema = ingredientModel.ingredientSchema;
const ingredient = ingredientModel.ingredient;

const Recipe  = {
    recipeImage: Joi.string().required(),
    recipeName: Joi.string().min(3).max(30).required(),
    recipeIngr: Joi.array().items(ingredient),
    recipePrice: Joi.number()
}


const recipeSchema = new mongoose.Schema({
    recipeImage: String,
    recipeName: String,
    recipeIngr: [ingredientSchema],
    recipePrice: Number,
});

const RecipeModel = mongoose.model('Recipe',recipeSchema);


module.exports.Recipe = Recipe;
module.exports.RecipeModel = RecipeModel;
