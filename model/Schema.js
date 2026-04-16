const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    name:String,
    password:String
})

const user=new mongoose.model("real1",userschema)

module.exports=user
