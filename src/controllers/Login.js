const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function Login(req,res){
    try{

    
    const {email,password} = req.body
    console.log(req.body);

    const user = await User.findOne({email});
    console.log(user);
    if(!user) return res.status(404).json({message:"User Not Found!"});
    console.log("password",password);
    console.log("userpass",user.password)

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch) res.status(400).json({message:"Wrong Creadentials"});

    const token = jwt.sign({id:user._id},process.env.JWT_KEY,{expiresIn:"10m"})

    res.json({userId:user._id,auth:token})
    }catch(err){
        console.log("there is osme ",err)
        res.json({message:err})
    }

}

module.exports = Login