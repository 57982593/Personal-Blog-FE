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
var uname = document.getElementById('uname');
var upwd = document.getElementById('upwd');
var sp1 =document.getElementById('sp1');
var sp2 = document.getElementById('sp2');
var sp3 = document.getElementById('sp3');
var sp4 = document.getElementById('sp4');
var btn = document.getElementById('btn');
var yzm = document.getElementById('yzm');
var sp5 = document.getElementById('sp5');
var d1 = document.getElementById('d1');
var reg = /^1[3-8]\d{9}$/g;
var reg2 = /^\w{8,16}$/g;

uname.onblur=function(){
  if(reg.test(uname.value)==true){
    sp3.style.color = '#009BB5';
    sp3.innerHTML = '手机号格式正确';
    return;
  }
  if(!uname.value){
    sp3.style.color = 'greenyellow';
    sp3.innerHTML = '手机号不能为空';
    return;
  }
  if(reg.test(uname.value)==false){
    sp3.style.color = 'red';
    sp3.innerHTML = '手机号码格式错误';
  }
}
upwd.onblur=function(){
  if(reg2.test(upwd.value)==true){
    sp4.innerHTML = '';
    return;
  }
  if(!upwd.value){
    sp4.style.color = 'greenyellow';
    sp4.innerHTML = '密码不能为空';
    return;
  }
  if(!reg2.test(upwd.value)){
    sp4.style.color = 'red';
    sp4.innerHTML = '密码格式错误';
    return;
  }
}

var b= 'abcdefghijklmnopqrestuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var b= b.split('');
  var d ='';
  for(var i=0;i<4;i++){
    d+=b[parseInt(Math.random()*b.length)];
    }
    sp1.innerHTML=d;
sp2.onclick=function(){
  var a = 'abcdefghijklmnopqrestuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var a = a.split('');
  var c = '';
  for(var i=0;i<4;i++){
  c+=a[parseInt(Math.random()*a.length)];
  }
  var r = parseInt(Math.random()*255);
  var g = parseInt(Math.random()*255);
  var b = parseInt(Math.random()*255);
  sp1.style.color=`rgb(${r},${g},${b})`
  sp1.innerHTML= c;
}

yzm.onblur=function(){
  if(yzm.value == sp1.innerHTML){
    sp5.innerHTML = '';
    return;
  }
  if(yzm.value != sp1.innerHTML){
    sp5.style.color = 'red';
    sp5.innerHTML='验证码错误';
    return;
  }
}

btn1.onclick=function(){
  if(btn1.checked == true){
    btn.style.background= '#FF8200';
    btn.disabled=false;
    return;
  }else if(btn1.checked == false){
    btn.style.background='#999';
    btn.disabled=true;
    return;
  }
}

btn.onclick=function(e){
  e.preventDefault();
  select();
}
function select2(){
  ajax({ 
    url:`http://127.0.0.1:3000/login/select?uname=${uname.value}`,
    type:'get',
    dataType:'json'
  }).then(res=>{
  })
}

function select(){
  ajax({
    url:`http://127.0.0.1:3000/login/denglu`,
    type:'post',
    data:`uname=${uname.value}&upwd=${upwd.value}`,
    dataType:'json'
  }).then(res=>{
    console.log(res);
    if(res.length==0){
      sp3.style.color = 'red';
      sp3.innerHTML = '账号或者密码错误';
      return;
    }
    if(yzm.value != sp1.innerHTML){
      sp5.style.color = 'red';
      sp5.innerHTML='验证码错误';
      return;
    }
    if(res.length>0 && yzm.value == sp1.innerHTML){
      d1.style.display= 'block';
      setInterval(function(){
        location.href='index.html';
      },3000)
    }
   
  })
}