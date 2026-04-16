const express=require("express")
const router=express.Router()
const login=require("./login")
const register=require("./register")
const profile=require("../router/profile")
router.use("/ab",login)
router.use("/bc",register)
router.use("/ef",profile)
module.exports=router