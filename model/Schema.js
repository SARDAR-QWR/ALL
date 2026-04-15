const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    name:String,
    age:Number,
    password:String
})

const user=new mongoose.model("real",userschema)

module.exports=user
