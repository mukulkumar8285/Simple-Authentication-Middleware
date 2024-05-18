const express = require("express");


const server = express();

const API_KEY = "MUKUL_PROJECT";

function RequestApi(req , res , next){
    const apikey = req.headers["api-key-enter"];
    if(apikey && apikey === API_KEY){
        next();
}else{
    res.status(401).send("Unauthorized")
}
}

server.use("/Protected" , RequestApi);

server.use("/Protected" , (req , res)=>{
    res.send("Welcome to the protected route")
})

server.use("/" , (req , res)=>{
    res.send("Welcome to the home page")
})

server.listen(3000, ()=>{
    console.log("Server is running on port 200")
})