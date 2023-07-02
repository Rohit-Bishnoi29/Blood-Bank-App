const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT||8080
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use("/api/v1/test",require("./routes/testRoute"));
app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.DEV_MODE} on port ${PORT} `)})