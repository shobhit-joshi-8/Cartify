const express = require("express");
const { registerController, loginController, testController } = require("../controllers/authController");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");

//ROUTER OBJECT
const router = express.Router();

//ROUTING
// REGISTER || POST
router.post('/register', registerController);

//LOGIN || POST
router.post('/login', loginController);

//TEST ROUTE
router.get('/test', requireSignIn, isAdmin, testController)


module.exports = router;    