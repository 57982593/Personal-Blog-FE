const pool=require('../pool.js');
const express=require('express');
var router=express.Router();
  // 今日特惠
  router.get('/today',(req,res)=>{
    var pno=parseInt(req.query.pno);
    pool.query('select * from today limit ?,6',[pno],(err,result)=>{
      if(err)throw err;
      res.send(result);
    })
  });
  // 轮播图
  router.get('/carousel',(req,res)=>{
    pool.query('select * from carousel',(err,result)=>{
      if(err)throw err;
      res.send(result);
    })
  });
  // 当季热门度假
  router.get('/hotel',(req,res)=>{
    pool.query('select * from hotel',(err,result)=>{
      if(err)throw err;
      res.send(result);
    })
  })

  //当季热门景点
  router.get('/holiday',(req,res)=>{
    pool.query('select * from Holiday',(err,result)=>{
      if(err)throw err;
      res.send(result);
    })
  })
  //超值酒店团购推荐
  router.get('/holidays',(req,res)=>{
    var pno=parseInt(req.query.pno);
    pool.query('select * from Holidays limit ?,5',[pno],(err,result)=>{
      if(err)throw err;
      res.send(result);
    })
  })
  //旅游攻略
  router.get('/travel',(req,res)=>{
    var pno = parseInt(req.query.pno);
    pool.query('select * from mn limit ?,5',[pno],(err,result)=>{
      if(err)throw err;
      res.send(result);
    })
  })

  // 骆驼书
  router.get('/lts',(req,res)=>{
    var pno = parseInt(req.query.pno);
    pool.query('select * from lts limit ?,3',[pno],(err,result)=>{
      if(err)throw err;
      res.send(result);
    })
  })
module.exports=router;