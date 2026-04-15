const express=require("express")
const router=express.Router()
const {login1,login2}=require("../controllers/logincontroller")
router.get("/c",login1)

router.post("/d",login2)

module.exports=router