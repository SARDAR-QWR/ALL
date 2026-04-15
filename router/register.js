const express=require("express")
const router=express.Router()
const {register1,register2}=require("../controllers/registercontroller")

router.get("/a",register1)


router.post("/b",register2)

module.exports=router