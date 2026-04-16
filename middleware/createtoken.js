const jwt=require("jsonwebtoken")
const generatetoken=(req,res,next)=>{
    const user=req.user
    if(!user){
        return res.status(400).json({message:"Not getting the data"})
    }
    const token=jwt.sign({name: user.name},process.env.secretkey,{expiresIn:"1h"})
     if(!token){
        return res.status(400).json({message:"token ot created"})
    }
    req.token=token
    next()
   
}

module.exports=generatetoken