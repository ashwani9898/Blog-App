const Blog = require('../models/Blog'); 
const User = require('../models/User');

const AddBlog = async function (req,res){

    const {title,body} = req.body
    console.log(req.user);
    const user = req.user;
    const userData = await User.findOne({_id:user});
    const userName = userData.name;
    const blog = new Blog({title,body,author:user,author_name:userName})
    blog.save()
    res.status(301).json({
        message:"Blog Added!"
    })



}

module.exports = AddBlog