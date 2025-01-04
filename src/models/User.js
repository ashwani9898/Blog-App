const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    name: {type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:String,
    blogs:[{type:Schema.Types.ObjectId,ref:"Blog"}]
    
})

const User = mongoose.model("User",userSchema);

module.exports = User;