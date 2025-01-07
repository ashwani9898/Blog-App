const Blog = require('../models/Blog');

async function GetAllUserBlogs(req,res){

    const user = req.user
    const blogs = await Blog.find({author:user});
    
    res.status(200).json(blogs)

}

module.exports = GetAllUserBlogs;