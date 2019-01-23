const express=require('express');
const bodyParser=require('body-parser');
const index=require('./router/index.js');
const register=require('./router/register');
const login=require('./router/login');
const cors=require('cors');
var app=express();
app.listen(3000);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors({
  origin:['http://127.0.0.1:5500','http://localhost:5500']
}));
app.use('/index',index);
app.use('/register',register);
app.use('/login',login);


