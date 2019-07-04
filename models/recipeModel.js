const Joi = require('joi');
const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/recipe-box')
.then(()=>console.log('Connected to MongoDB ...'))
.catch(err => console.log(err));


const Recipe  = {
    recipeName: Joi.string().alphanum().min(3).max(30).required(),
    recipeItems: {},
    recipePrice: Joi.number()})
}
const recipeSchema = new mongoose.Schema({
    recipeName: String,
    recipeItems:{},
    recipePrice: Number,
});

const RecipeModel = mongoose.model('Recipe',recipeSchema);


module.exports.Recipe = Recipe;
module.exports.RecipeModel = RecipeModel;
