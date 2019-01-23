const pool = require('../pool.js');
const express = require('express');
var router = express.Router();
  router.get('/select',(req,res)=>{
    var $uname = req.query.uname;
    console.log($uname);
    pool.query('select * from loging where uname=?',[$uname],(err,result)=>{
      if(err)throw err;
    })
  })

  router.post('/denglu',(req,res)=>{
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    console.log(uname,upwd);
    var sql='select * from loging where uname=? and upwd=?'
    pool.query(sql,[uname,upwd],(err,result)=>{
      if(err)throw err;
      res.send(result);
    })
  })
  
  
module.exports = router;