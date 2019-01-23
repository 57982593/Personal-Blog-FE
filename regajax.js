function ajax({url,type,data,dataType}){
  return new Promise(function(open,err){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4&&xhr.status==200){
        if(dataType!==undefined&&dataType.toLowerCase()==='json'){
          var res=JSON.parse(xhr.responseText)
        }else{var res=xhr.responseText}
        open(res);
      }
    }
    if(type.toLowerCase()=='get'&&data!=undefined){url+='?'+data}
    xhr.open(type,url,true);
    if(type.toLowerCase()==='post'){
      xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    }
    if(type.toLowerCase()=='post'&&data!==undefined){
      xhr.send(data);
    }else{xhr.send(null)};
  })
}

var mobile = document.getElementById('mobile');
var upwd = document.getElementById('upwd');
var yzm = document.getElementById('yzm');
var key = document.getElementById('key');
var btn = document.getElementById('btn');
var btn2 = document.getElementById('agreement');
var sp1 = document.getElementById('sp1');
var sp2 = document.getElementById('sp2');
var sp3 = document.getElementById('sp3');
var sp4 = document.getElementById('sp4');
var zc = document.getElementById('zc');

var reg = /^1[3-8]\d{9}$/;
var reg2 = /^\w{8,16}$/;

btn2.onclick=function(){
  if(btn2.checked == true){
    btn.style.background= '#FF8200';
    btn.disabled=false;
    return;
  }else if(btn2.checked == false){
    btn.style.background='#999';
    btn.disabled=true;
    return;
  }
}
  var b= 'abcdefghijklmnopqrestuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var b= b.split('');
  var d ='';
  for(var i=0;i<4;i++){
    d+=b[parseInt(Math.random()*b.length)];
    }
    sp4.innerHTML=d;
sp3.onclick=function(){
  var a = 'abcdefghijklmnopqrestuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var a = a.split('');
  var c = '';
  for(var i=0;i<4;i++){
  c+=a[parseInt(Math.random()*a.length)];
  }
  var r = parseInt(Math.random()*255);
  var g = parseInt(Math.random()*255);
  var b = parseInt(Math.random()*255);
  sp4.style.color=`rgb(${r},${g},${b})`
  sp4.innerHTML= c;
}

yzm.onblur = function(){
  if(!yzm.value){
    sp4.style.color = 'greenyellow';
    sp4.innerHTML = '请输入验证码';
    return;
  }
  if(yzm.value!=sp4.innerHTML){
    sp4.style.color = 'red';
    sp4.innerHTML = '验证码错误'
    return;
  }
}
mobile.onblur = function(){ 
  select(); 
}
upwd.onblur = function(){
  if(!upwd.value){
    sp2.style.color='greenyellow';
    sp2.innerHTML = '密码不能为空';
    return;
  }
 if(reg2.test(upwd.value)==true){
    sp2.style.color = '#3596D9';
    sp2.innerHTML = '密码正确';
    return;
  }else if(reg2.test(upwd.value)==false){
    sp2.style.color = 'red';
    sp2.innerHTML = '密码错误';
    return;
  } 
}

function select(){
  ajax({url:'http://127.0.0.1:3000/register/select?uname='+mobile.value,
  type:'get',
  dataType:'json'
}).then(res=>{
  if(!mobile.value){
    sp1.style.color='greenyellow';
    sp1.innerHTML = '手机号不能为空';
    return;
  }
  if(reg.test(mobile.value)==false){
    sp1.style.color = 'red';
    sp1.innerHTML = '手机号格式不正确';
    return;
  }
   if(res.length>0){
    sp1.style.color = '#3596D9';
    sp1.innerHTML = '手机号已被注册';
    return;
  }else if(reg.test(mobile.value)==true||res.length==0){
    sp1.style.color = '#3596D9';
    sp1.innerHTML = '手机号可以注册';
    return;
  } 
})
}
  function select2(){
    ajax({url:'http://127.0.0.1:3000/register/select?uname='+mobile.value,
    type:'get',
    dataType:'json'
  }).then(res=>{
    if(res.length==0 && sp2.innerHTML=='密码正确' && yzm.value==sp4.innerHTML){
      inster();
      zc.style.display = 'block';
      setInterval(function(){       
        zc.style.display='none';
        if(zc.style.display=='none'){
        location.href='login.html';}
      },4000) 
    }
  })
  }
btn.onclick=function(e){
  e.preventDefault(); 
  select2();
}
function inster(){
  ajax({ 
    url:`http://127.0.0.1:3000/register/reg`,
    type:'post',
    data:`uname=${mobile.value}&upwd=${upwd.value}`,
    dataType:'json'
  }).then(res=>{
  })
}
