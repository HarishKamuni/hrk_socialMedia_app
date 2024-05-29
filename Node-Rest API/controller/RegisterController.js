const UserModel = require("../mongoose/models/User");
const asyncHandler = require("express-async-handler");


const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
        res.status(404).send("User already exist");
    }
    
    const user = await UserModel.create({
        userName,
        email,
        password
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            userName: user.userName,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404).send("Error");
        
    }
});

const loginUser = asyncHandler(async(req,res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user && (await user.matchPassword(password.toString()))) {
        res.status(201).json({
            _id: user._id,
            userName: user.userName,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(400).send("Invailid email or password");
    }
})
module.exports = {registerUser,loginUser};