const express = require("express");
const { registerController } = require("../controllers/authController");

//ROUTER OBJECT
const router = express.Router();

//ROUTING
// REGISTER || POST
router.post('/register', registerController);


module.exports = router;