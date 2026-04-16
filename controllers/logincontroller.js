const bcrypt=require("bcrypt")
const User=require("../model/Schema")
const jwt=require("jsonwebtoken")
const generatetoken=require("../middleware/createtoken")
const login1=(req,res)=>{
    res.status(200).json({message:"get method from user "})
}

const login2=async (req,res,next)=>{
    try{
   const {name,password}=req.body
   if(!name || !password){
    return res.status(400).json({message:"not filled all values"})
   }
   const user=await User.findOne({name})
   if(!user){
    return res.status(404).json({message:"user not found"})
   }
    const check= await bcrypt.compare(password,user.password)
    if(!check){
        return res.status(400).json({message:"password is not matched"})
    }
   req.user=user
   next()
}
  catch(err){
    return res.status(500).json({message:"not getting"})
  }
    
}


module.exports={login1,login2}