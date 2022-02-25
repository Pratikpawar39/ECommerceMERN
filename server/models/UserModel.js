const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//validator package validate isEmail
const {isEmail} = require('validator');

//Schema for User
const UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : [true, 'please enter an email'],//attach custom error message
        unique : true,
        lowercase : true,
        validate : [isEmail, 'please enter valid email id']
    },
    password : {
        type : String,
        required : [true, 'please enter valid password'],
        minlength : [6, 'Minimum password lenght must be 6 character']
    },
    register_date : {
        type : Date,
        default : Date.now
    }
})

module.exports = User = mongoose.model('user',UserSchema);

//We export the User model created and we will be calling this collection as ‘user’. So, in the database, MongoDB will pluralize it and will save the collection name as ‘users