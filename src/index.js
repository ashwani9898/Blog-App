const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const router = express.Router();
const blogRouter = require('./routes/BlogRoutes')
const loginSignupRoutes = require('./routes/LoginSignup')
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.use('/api',blogRouter);
app.use('/api',blogRouter);
app.use('/api',loginSignupRoutes);

dotenv.config();

main().catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(process.env.DB_URL)
    console.log("database connected")
}


app.listen(3000,()=>{
    console.log("server is running");
})


