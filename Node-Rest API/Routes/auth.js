const router = require('express').Router();

const { loginUser, registerUser } = require('../controller/RegisterController');

//Register
// router.post('/reg',async(req,res)=>{
//     //generate new password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);
//     console.log(hashedPassword)
//     try {

//         //create newUser
//         const newUser = new User({
//             username: req.body.username,
//             email: req.body.email,
//             password: hashedPassword
//         })

//         //save user and respond
//         const user = await newUser.save();
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json(error)
//     }

// })
router.post('/register', registerUser);

//Login
// router.post("/login", async(req,res)=>{
//     try {
//         const user = await User.findOne({email: req.body.email});
//         !user && res.status(404).json("user not found");

//         const vailidPassword = await bcrypt.compare(req.body.password, user.password);
//         !vailidPassword && res.status(400).json("Wrong Password")

//         res.status(200).json(user)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

router.post('/login', loginUser);
module.exports = router;
