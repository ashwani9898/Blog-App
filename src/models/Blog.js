const mongoose = require('mongoose');

const {Schema} = mongoose;

const blogSchema = new Schema({
    title:String,
    body:String,
    author_name:String,
    author:{type:Schema.Types.ObjectId,ref:"User"},
    comments:[{body:String,date:Date}],
    date:{type:Date,default:Date.now},
    hidden:Boolean,
    meta:{
        fav:Number,
        vote:Number
    }
})

const Blog = mongoose.model("Blog",blogSchema);
module.exports = Blog