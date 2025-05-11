const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");

//CONFIGURE ENV
dotenv.config();

//REST OBJECT
const app = express();

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



