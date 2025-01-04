const express = require('express');
const AddBlog = require('../controllers/AddBlog');
const GetAllBlogs = require('../controllers/GetAllBlogs')
const authHandle = require('../controllers/AuthHandle');
const blogRouter = express.Router();

blogRouter.post('/add',authHandle,AddBlog)
blogRouter.get('/blogs',authHandle, GetAllBlogs)


module.exports = blogRouter