const bcrypt=require("bcrypt")
const User=require("../model/Schema")
const register1=(req,res)=>{
    res.status(200).json({measage:"get method from register"})
}


const register2=async (req,res)=>{
    try{
    const {name,age,password}=req.body;
    if(!name || !password){
        return res.status(400).jon({message:"provide all fields"})
    }
    const hashpass=await bcrypt.hash(password,10)
    const newuser=new User({
        name,
        age,
        password:hashpass
    })
    await newuser.save();
    res.status(200).json({meassage:"pass is bycrpyted and user is addedto db"})
    }
    catch(err){
       res.status(500).json({message:"pass is not bycrtypted"})
    }
    
}


module.exports={register1,register2}