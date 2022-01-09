const express = require("express")
const app = express()

app.get("/",function(req,res){
    res.send("hello")
})
app.listen(80,"0.0.0.0",function() {cons
    ole.log("Listening on 0.0.0.0:8080")})