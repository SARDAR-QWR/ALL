const mongoose=require("mongoose")
mybd=async (req,res)=>{
    try{
        mongoose.connect(process.env.url)
        console.log("connected to database")
    }
    catch(err){
        console.log("not connected to databse")
    }
}

module.exports=mybd