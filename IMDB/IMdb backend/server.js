var express= require('express');
var app=express();
var cors= require('cors')
movieroutes=require('./routes/movie')
bodyParser = require('body-parser');

// support parsing of application/json type post data

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var movieroutes=require('./routes/movie')
app.get('/',function(req,res){
  res.send("hai")
})
app.use('/add',movieroutes)
app.listen(3000,()=>{"server started"})