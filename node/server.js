var express = require('express');
var bodyParser= require('body-parser');
var app=express();
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var cors= require('cors');

mongoose.connect("mongodb://localhost:27017/ShopingCart",(err) =>{
if(!err){
    console.log("Db connected..")
}
else{
    console.log("connection error");
}
var db=mongoose.connection;
var Roter= require('./route/router');

app.use(express.static(__dirname + '/uploads'));

app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200' }));
// app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db
    })
  }));

app.use(Roter);

app.listen(2020,()=>{
    console.log("app listen 2020");
});
});