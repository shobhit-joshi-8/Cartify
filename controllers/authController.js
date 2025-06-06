const { hashPassword, comparePassword } = require("../helpers/authHelper");
const userModels = require("../models/userModels");
const jsonWebToken = require("jsonwebtoken");

//REGISTER CONTROLLER
registerController = async (req, res) => {
    try {
        const {name, email, password, phone, address, answer} = req.body;

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

        if(!answer){
            return res.status(500).send({
                success: false,
                message: "Answer is required",
            });
        }

        //CHECK USER
        const existingUser = await userModels.findOne({email})
        
        //EXISTING USER
        if(existingUser){
            return res.status(200).send({
                success: false,
                message: "User Already Exist"
            })
        }

        //REGISTER USER
        const hashedPassword = await hashPassword(password);

        //SAVE
        const user = await new userModels({name, email, password: hashedPassword, phone, address, answer}).save();

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

//LOGIN CONTROLLER
loginController = async (req, res) => {
    try {
        //VALIDATIONS
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(200).send({
                success: false,
                message: "Invalid Credentials",
            });
        }

        const user = await userModels.findOne({email});

        if(!user){
            return res.status(404).send({
                success: false,
                message: "Email is not registered",
            });
        }

        const match = await comparePassword(password, user.password);

        if(!match){
            return res.status(200).send({
                success: false,
                message: "Invalid Credentials",
            });
        }

        //TOKEN
        const token = await jsonWebToken.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        
        res.status(200).send({
            success: true,
            message: "User Login Successfull!",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role
            },
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login user",
            error
        });
    }
}

// FORGOT PASSWORD CONTROLLER
forgotPasswordController = async (req, res) => {
    try {
        const {email, answer, newPassword} = req.body;

        if(!email){
            return res.status(400).send({
                success: false,
                message: "Email is required"
            })
        }

        if(!answer){
            return res.status(400).send({
                success: false,
                message: "Answer is required"
            })
        }

        if(!newPassword){
            return res.status(400).send({
                success: false,
                message: "New Password is required"
            })
        }

        //CHECK
        const user = await userModels.findOne({email, answer});

        //VALIDATION
        if(!user){
            return res.status(200).send({
                success: false,
                message: "Wrong Email or Answer"
            })
        }

        const hashed = await hashPassword(newPassword);

        await userModels.findByIdAndUpdate(user._id, {password: hashed});

        res.status(200).send({
            success: true,
            message: "Password Reset Successfully!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in gforgot password API"
        })
    }
}

//TEST CONTROLLER
testController = async (req, res) => {
    return res.status(200).send({
        success: true,
        message: "Protected Route"
    })
}

module.exports = {registerController, loginController, testController, forgotPasswordController};