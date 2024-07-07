import express from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import CategoryRoutes from "./routes/CategoryRoutes.js"
import productRoutes from "./routes/productRoutes.js";
import cors from 'cors';
import path from 'path';

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',CategoryRoutes)
app.use('/api/v1/product',productRoutes)

//rest api 
app.get('/',(req,res) => {
    res.send('<h1>Welcome</h1>')
})

//static files
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
//PORT
const PORT = process.env.PORT || 8080;

//run
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})