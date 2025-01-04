const  jwt  = require("jsonwebtoken");

async function auth(req,res,next){

       
    try{
        const token = req.header('Authorization');

        if(!token) return res.status(401).json({message:"No token found"});

        const decoded = await jwt.verify(token,process.env.JWT_KEY);
        if(!decoded) res.status(401).json({message:"Invalid token"});
        req.user = decoded.id;
        next();

    }catch(err){
        console.log(err);
        res.status(400).json({message:"Invalid token"});
    }
   
}

module.exports = auth