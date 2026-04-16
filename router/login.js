const express=require("express")
const router=express.Router()
const {login1,login2}=require("../controllers/logincontroller")
const generatetoken=require("../middleware/createtoken")
router.get("/c",login1)

router.post("/d",login2,generatetoken,(req,res)=>{
  res.status(200).json({
    message:"token created successfully",
    token:req.token
  })
})

module.exports=router