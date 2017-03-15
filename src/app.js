var express = require("express"); 
var app = express(); 
app.use(express.static("public")); 

app.all('*',function (req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	next();
})

app.get("/",function(req,res){
	res.sendFile(__dirname+"/data/1.json")
})

app.get('/list2', function (req,res){
	res.sendFile(__dirname+'/data/2.json');
})

app.get('/list3', function (req,res){
	res.sendFile(__dirname+'/data/3.json');
})

app.get('/list4', function (req,res){
	res.sendFile(__dirname+'/data/4.json');
})

app.get('/list5', function (req,res){
	res.sendFile(__dirname+'/data/5.json');
})


var server = app.listen("3003", function(){ 
	console.log(server.address().address, server.address().port);
})