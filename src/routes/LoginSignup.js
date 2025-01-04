const express = require('express');
const loginSignupRoutes = express.Router();
const auth = require('../controllers/AuthHandle')
const signup = require('../controllers/Signup')
const login = require('../controllers/Login')


loginSignupRoutes.post('/signup',signup);
loginSignupRoutes.post('/login',login);

module.exports = loginSignupRoutes;

