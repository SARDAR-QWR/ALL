const express=require("express")
const router=express.Router()
const profile=require("../controllers/proflecontroller")
router.post("/l",profile)


module.exports=router