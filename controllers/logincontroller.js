const bcrypt=require("bcrypt")
const User=require("../model/Schema")
const jwt=require("jsonwebtoken")
const login1=(req,res)=>{
    res.status(200).json({message:"get method from user "})
}

const login2=async (req,res)=>{
    const secretkey=process.env.secretkey
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
        return res.status(200).json({message:"password is not matched"})
    }
    const token=jwt.sign({name,password},secretkey,{expiresIn:"10sec"})
    return res.status(200).json({message:"token created successfully",
        token
    })


}
  catch(err){
    return res.status(500).json({message:err.message})
  }
    
}


module.exports={login1,login2}