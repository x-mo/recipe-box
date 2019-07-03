const Joi = require('joi');
const mongoose  = require('mongoose');

const User  = {
  username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email({ minDomainSegments: 2 })
}
const userSchema = new mongoose.Schema({
  username: String,
    password: String,
    birthyear: Date,
    email: String
});

const UserS = mongoose.model('User',userSchema);




module.exports = User;
