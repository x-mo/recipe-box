const Joi = require('joi');
const mongoose  = require('mongoose');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost/recipe-box')
.then(()=>console.log('Connected to MongoDB ...'))
.catch(err => console.log(err));

const User  = {
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    birthyear: Joi.number().min(1850).max(2012),
    email: Joi.string().email({ minDomainSegments: 2 }),
    is_admin: Joi.boolean()
}

const LoginUser  = {
    email: Joi.string().email({ minDomainSegments: 2 }),
    password: Joi.string(),
    is_admin: Joi.boolean()
}

const userSchema = new mongoose.Schema({
    username: { type: String, index: { unique: true }},
    email: { type: String, index: { unique: true }},
    password: String,
    birthyear: Number,
    is_admin: Boolean
});

userSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
    is_admin: this.is_admin,
  }, 'secret');
}

userSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
    is_admin: this.is_admin,
  };
};


const UserModel = mongoose.model('User',userSchema);


module.exports.User = User;
module.exports.UserSchema = userSchema;
module.exports.LoginUser = LoginUser;
module.exports.UserModel = UserModel;
