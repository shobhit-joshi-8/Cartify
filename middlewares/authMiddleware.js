const jsonWebToken = require("jsonwebtoken");
const userModels = require("../models/userModels");

//PROTECTED ROUTES TOKEN BASED
const requireSignIn = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).send({
                success: false,
                message: "Authorization token is required"
            });
        }
        const decode = jsonWebToken.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            success: false,
            message: "Invalid or expired token"
        })
    }
}

//CHECK USER ROLE
const isAdmin = async (req, res, next) => {
    try {
        const user = await userModels.findById(req.user._id);

        if(!user){
            return res.status(404).send({
                success: false,
                message: "User Not Found"
            })
        }

        if (user.role !== 1) {
            return res.status(403).send({
                success: false,
                message: "Unauthorized Access"
            })
        }
        else {
            next();
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Admin Middleware"
        })
    }
}

module.exports = { requireSignIn, isAdmin };