const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
async function Signup(req,res){

    const {name,email,password} = req.body
    const existingUser = await User.findOne({email});
    if(existingUser) res.status(400).json({message:"User Already Exists!"})

    const hashPassword = await bcrypt.hash(password,10);
    const user = new User({
        name,
        email,
        password:hashPassword
    })
    await user.save();
    res.status(201).json({message:"User Created!!"})
    
}

module.exports = Signup