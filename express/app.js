const express=require("express");
const app=express();

app.use(function(request,response,next){
    console.log("Middleware1");
    next();
});

app.use(function(request,response,next){
    console.log("Middleware2");
    next();
});

app.get("/",function(request,response){
    console.log("Route /");
    response.send("Hello");
});

app.listen(3000);