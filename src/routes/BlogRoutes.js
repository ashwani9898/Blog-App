const express = require('express');
const AddBlog = require('../controllers/AddBlog');
const GetAllBlogs = require('../controllers/GetAllBlogs')
const authHandle = require('../controllers/AuthHandle');
const GetAllUserBlogs = require('../controllers/GetAllUserBlogs');
const blogRouter = express.Router();

blogRouter.post('/add',authHandle,AddBlog)
blogRouter.get('/blogs', GetAllBlogs)
blogRouter.get('/userblogs',authHandle,GetAllUserBlogs)

module.exports = blogRouter