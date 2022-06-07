const express=require("express");
const router=express.Router();
const {users}=require("../data")
const {validate}=require("../middlewares/auth")
const registeruser=require("../controllers/register")

router.post('/',validate,registeruser )

module.exports=router