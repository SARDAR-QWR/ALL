const express=require("express")
const app=express()
require("dotenv").config()
const cors=require("cors")
const router=require("./router/all")
const mybd=require("./util/connectbd")
app.use(express.json())
app.use(cors())
app.use("/aa",router)
mybd()


app.listen(process.env.port,()=>{
    console.log("server started")
})