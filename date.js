(function(cmf){
  cmf.showDcalendar=function(){
   var fnname=cmf.fn
   var id="cmfrili2"
   var yy=f23timeselecta1.value,mm=f23timeselecta2.value-1
   var newdara=new Date()
   var dd=newdara.getDate();
   var d=new Date(yy,mm,1),t
   console.log(Date(yy,mm,1));
   if(mm==0){mm=12;yy--}
   var a,b,c,d2
   t='<table width=100% onselectstart="return false"><tr align=center>'
   var ds='<font color=#ff0000>日</font>,一,二,三,四,五,<font color="#009900">六</font>'.split(",")
   for(x=0;x<7;x++)t+='<td><b>'+ds[x]+'</b></td>'
   t+='</tr><tr>'
   //计算显示上个月有几号在日历上
   a=d.getDay()
   if(a==0)a=7
   r=[]
   var c2=0
   for(var x=0;x<a;x++)
   {
    d2=new Date(d-24*3600*1000*(a-x))
    r[r.length]="1"+d2.getDate()
    c2++
   }
    
  //计算显示这个月有几号在日历上
   mm++
   if(mm==13){mm=1;yy++}
   c=cmf.getMonthM(yy,mm)//计算哪年哪月 有多少天
    
   d=new Date(yy,mm,1)
   for(var x=1;x<=c;x++)r[r.length]="2"+x
   
   //计算显示下个月有几号在日历上
   c2+=c//r数组有多少个
    
   d2=new Date(yy,mm-1,c)
    
   a=d2.getDay()//这个月最后一天星期几
    
   a=7-a
   if(c2<36)a+=7
   
   for(var x=1;x<a;x++)
   {
    r[r.length]="3"+x
   }
   var yy1=yy.toString()
   var mm1=mm.toString()
   for(var x=0;x<r.length;x++)
   {
     
    if(x%7==0)t+='<tr align=center>'
    t+='<td height=25 onclick="'+fnname+'('+yy1+mm1+r[x].toString().substring(1)+',this)" onmouseover=this.bgColor="#33eeff" onmouseout=this.bgColor=""'
    if(r[x]=="2"+dd)t+=' style="border:1px solid #aa0000"'
    t+='>'
    var cl=""
    if(r[x].charAt(0)!=2)cl='999999'
    else if(x%7==0)cl='ff0000'
    else if(x%7==6)cl='009900'
    if(cl!="")t+='<font color="#'+cl+'">'
    t+=r[x].substring(1)
    if(cl!="")t+='</font>'
    t+='</td>'
    if(x%7==6)t+='</tr>'
     
   }
   t+='</table>'
    
   document.getElementById(id).innerHTML=t
  }
   
  cmf.getMonthM=function(y,m){//计算哪年哪月 有多少天 月份从1开始
   if(m==4 || m==6 || m==9 || m==11)return 30
   if(m==2)return (y%4==0 && y%100!=0)|| y%400==0?29:28
   return 31
  }
  cmf.showd=function(id,fn){
   cmf.fn=fn
   var g='<div id="cmfrili1"></div><div id="cmfrili2"></div>'
   var newdara=new Date()
   var yy=newdara.getFullYear();
   var mm=newdara.getMonth()+1;
   document.getElementById(id).innerHTML=g
   var s='border-width:1px;border-style:solid;border-color:#000000 #cccccc #cccccc #000000;width: 44px;'
   var t=''
   +'<table bgcolor="#ffffff" width=100% cellpadding=0 cellspacing=0><tr align=center><td height=44>'
   +cmf.timeselect_ms(1,'<input type=text value="'+yy+'" id="f23timeselecta1" onchange="cmf.showDcalendar()" style="width:44;text-align:center;'+s+'">年')
   +'</td><td>'
   +cmf.timeselect_ms(2,'<input type=text value="'+mm+'" id="f23timeselecta2" onchange="cmf.showDcalendar()" style="width:22;text-align:center;'+s+'">月')
   +'</td>'
   document.getElementById("cmfrili1").innerHTML=t
   cmf.showDcalendar()
    
  }
  cmf.timeselect_ms=function(n,m,n2)
  {
   var t='<table cellpadding=0 cellspacing=0 height=20><tr align=center>'
   t+='<td onmouseup="cmf.timeselect_up('+n+',2)" onselectstart="return false" style="font-size:16px;cursor:pointer;"><b>◄</b></td>'
   if(m!=null)t+='<td>'+m+'</td>'
   t+='<td onmouseup="cmf.timeselect_up('+n+',1)" onselectstart="return false" style="font-size:16px;cursor:pointer;"><b>►</b></td>'
   if(n2!=null)t+='<td>'+n2+'</td>'
   t+='</tr></table>'
   return t
  }
   
  cmf.timeselect_up=function(n,m){
   var o=document.getElementById("f23timeselecta"+n),c=o.value
   if(c=="")c=1
   if(n==1)//年
   {
    if(m==2){//减
     c--
    }else if(m==1){//加
     c++
    }
   }
   else
   {
    if(m==2){//减
     if(c<2) return
     c--
    }else if(m==1){//加
     if(c==12) return
     c++
    }
   }
   o.value=c
   if(m==1 || m==2)cmf.showDcalendar()
  }
 })(window.cmf={})