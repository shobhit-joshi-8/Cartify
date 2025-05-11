const express = require("express");
const { registerController, loginController } = require("../controllers/authController");

//ROUTER OBJECT
const router = express.Router();

//ROUTING
// REGISTER || POST
router.post('/register', registerController);

//LOGIN || POST
router.post('/login', loginController);


module.exports = router;