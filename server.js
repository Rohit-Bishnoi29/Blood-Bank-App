const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
//configs
dotenv.config();
connectDB();
// app setup
const app = express();
const PORT = process.env.PORT || 8080
//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
// routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/test", require("./routes/testRoute"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
//listen
app.listen(PORT, () => {
    console.log(`server is running in ${process.env.DEV_MODE} on port ${PORT} `)
})