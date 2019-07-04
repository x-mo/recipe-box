const Joi = require('joi');
const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/recipe-box')
.then(()=>console.log('Connected to MongoDB ...'))
.catch(err => console.log(err));

const User  = {
  username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    birthyear: Joi.number().min(1850).max(2012),
    email: Joi.string().email({ minDomainSegments: 2 })
}
const userSchema = new mongoose.Schema({
  username: String,
    password: String,
    birthyear: Number,
    email: String
});

const UserModel = mongoose.model('User',userSchema);


module.exports.User = User;
module.exports.UserModel = UserModel;
