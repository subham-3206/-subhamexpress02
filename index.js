const express = require('express')
const app = express()
 
app.get("/",(req,res)=>{
    res.send("Home")
})

app.get("/Service",(req,res)=>{
    res.send("Service")
})

app.get("/contact",(req,res)=>{
    res.send("contact")

}) 

app.get("/About",(req,res)=>{
    res.send("About")
})
  
app.listen(5500,()=>{
    console.log("Server is running at port 5500")
})