const express=require("express")
const router=express.Router()
const login=require("./login")
const register=require("./register")
router.use("/ab",login)
router.use("/bc",register)

module.exports=router