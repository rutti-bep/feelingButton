"use strict";
const express = require("express");
const bodyParser = require('body-parser');
var app = express();

var feels = ["good","bad"];
var feelPowers = [10,10];

app.use(bodyParser.urlencoded({
      extended: true
}));
app.use(bodyParser.json());

var server = app.listen(3000, function(){
      console.log("Node.js is listening to PORT:" + server.address().port);
});

app.post("/feeling/:feel",function(req, res){
  console.log(req.body);
  for (var i = 0;i< feels.length;i++){
    if(feels[i] == req.params.feel){
      feelPowers[i]++;
    }
  }
  res.send(feelPowers);
})

app.get("/",function(req,res,body){
  res.sendFile(__dirname+'/feeling.html');
})

app.get("/feelingFront.js",function(req,res,body){
  res.sendFile(__dirname+"/feelingFront.js") 
})

app.get("/feeling.css",function(req,res,body){
  res.sendFile(__dirname+"/feeling.css")
})
