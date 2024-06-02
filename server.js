import express from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import { connect } from "mongoose";
import connectDB from "./config/db.js";

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express()

//middleware
app.use(express.json())
app.use(morgan('dev'))

//rest api 
app.get('/',(req,res) => {
    res.send('<h1>Welcome</h1>')
})

//PORT
const PORT = process.env.PORT || 8080;

//run
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})