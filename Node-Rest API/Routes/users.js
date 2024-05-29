const router = require("express").Router();
const User = require("../mongoose/models/User")
const bcrypt = require("bcrypt");

//Update user
router.put("/:id", async(req,res)=>{
    console.log(req.body.userId)
    console.log(req.params.id)
    if(req.body.userId === req.params.id || req.user.isAdmin){
        
        if(req.body.password){
            try{
                req.body.password = await bcrypt.hash(req.body.password,10);
            }catch(error){
                return res.status(500).json(error);
            }

            try {
                const user = await User.findByIdAndUpdate(req.params.id,{$set:req.body},)
                res.status(200).json("Account has been updated")
            } catch (error) {
                return res.status(500).json(error);
            }
        }
    }else{
        return res.status(403).json("You can update only your account!");
    }
})
//delete user
//get user
//follow a user
//unfollow a user



module.exports = router;