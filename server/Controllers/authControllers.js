const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');

module.exports.signup = (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        
    }
}
