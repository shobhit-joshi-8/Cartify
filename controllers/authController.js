const { hashPassword } = require("../helpers/authHelper");
const userModels = require("../models/userModels");


registerController = async (req, res) => {
    try {
        const {name, email, password, phone, address} = req.body;

        //VALIDATIONS
        if(!name){
            return res.status(500).send({
                success: false,
                message: "Name is required",
            });
        }

        if(!email){
            return res.status(500).send({
                success: false,
                message: "Email is required",
            });
        }

        if(!password){
            return res.status(500).send({
                success: false,
                message: "Password is required",
            });
        }

        if(!phone){
            return res.status(500).send({
                success: false,
                message: "Phone is required",
            });
        }

        if(!address){
            return res.status(500).send({
                success: false,
                message: "Address is required",
            });
        }

        //CHECK USER
        const existingUser = await userModels.findOne({email})
        
        //EXISTING USER
        if(existingUser){
            return res.status(500).send({
                success: false,
                message: "User Already Exist"
            })
        }

        //REGISTER USER
        const hashedPassword = await hashPassword(password);

        //SAVE
        const user = await new userModels({name, email, password: hashedPassword, phone, address}).save();

        res.status(201).send({
            success: true,
            message: "User Registered Successfully!",
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registeration",
            error: error
        });
    }
}

module.exports = {registerController};