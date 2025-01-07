const Blog = require('../models/Blog');

async function GetAllBlogs(req,res){

    
    const blogs = await Blog.find();
    
    res.status(200).json(blogs)

}

module.exports = GetAllBlogs;