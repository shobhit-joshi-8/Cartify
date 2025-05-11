const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoute");

//CONFIGURE ENV
dotenv.config();

//DATABASE CONFIG
connectDb();

//REST OBJECT
const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));

//ROUTES
app.use('/api/v1/auth', authRoutes);

//REST API
app.get('/', (req, res) =>{
    res.send({
        message: "Welcome to Cartify!"
    });
})

//PORT
const PORT = process.env.PORT || 8080;

//RUN LISTEN
app.listen(PORT, ()=>{
    console.log(`Server is running on mode ${process.env.DEV_MODE} on port : ${PORT}`.bgCyan.white);
});



