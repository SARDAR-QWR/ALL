const jwt=require("jsonwebtoken")
const profile=(req,res)=>{
    const token=req.headers.authorization
    if(!token){
        return res.status(401).json({message:"not getting any message"})
    }
    const token1=token.split(" ")[1]
   const ok= jwt.verify(token1,process.env.secretkey)
  
    return res.status(200).json({message:"token valid",user:ok})
}

module.exports=profile