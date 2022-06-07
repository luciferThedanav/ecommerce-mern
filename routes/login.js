const express=require("express");
const {users}=require("../data")
const router=express.Router();
const {authorize}=require("../middlewares/auth")
const welcomeuser=require("../controllers/login")


router.post('/',authorize,welcomeuser )
 module.exports=router