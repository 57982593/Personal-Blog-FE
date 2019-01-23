
// 单程往返
(function(){
var head_radio=document.getElementsByClassName('head-radio')[0].firstElementChild;
var head_radio2=document.getElementsByClassName('head-radio')[0].lastElementChild;
head_radio.onclick=function(){
    var head_air_input2=document.getElementsByClassName('head-input')[3];
    var head_air_input3=document.getElementsByClassName('head-air-input2')[1];
    head_air_input2.disabled=true;
    head_air_input3.style.background='#EBEBE4';   
}
head_radio2.onclick=function(){
    var head_air_input2=document.getElementsByClassName('head-input')[3];
    var head_air_input3=document.getElementsByClassName('head-air-input2')[1];
    head_air_input2.disabled=false;
    head_air_input3.style.background='white';
}
})();
// 国际国内
(function(){
    var gn=document.querySelector('div.head-air-onea>a:first-child');
    var gn1=document.querySelectorAll('div.head-airs')[0];
    var gn2=document.querySelectorAll('div.head-airs')[1];
    var gj=document.querySelector('div.head-air-onea>a:last-child');
    gj.onclick=function() {
        gn2.style.display='block';
        gn1.style.display='none';
    }
    gn.onclick=function(){
        gn2.style.display='none';
        gn1.style.display='block';
    }
})();
// 换
 (function(){
    var wf=document.querySelectorAll('div.head-air-text');
    var exchange=document.getElementsByClassName('head-absolute-span'); 
    exchange[0].onclick=function(){
            var wf2=wf[0].innerHTML;
            wf[0].innerHTML=wf[1].innerHTML;
            wf[1].innerHTML=wf2;
    }
    exchange[1].onclick=function(){
        var wf2=wf[4].innerHTML;
        wf[4].innerHTML=wf[5].innerHTML;
        wf[5].innerHTML=wf2;
    }
 })();
 (function(){
     var gjwf=document.getElementsByClassName('head-radio')[1].querySelectorAll('input');
     var wf=document.getElementsByClassName('head-air-input')[7];
     gjwf[0].onclick=function(){
         wf.style.visibility='hidden'
     }
     gjwf[1].onclick=function(){
         wf.style.visibility=''
     }
    
 })();
 (function(){
     var sp=document.querySelector('span.headTextsSp>a');
     var sp1=document.querySelector('span.headTextsSp');
     sp.onclick=function(){
       sp1.style.display='none';
     }
 })();
 (function(){
     var ipt=document.getElementsByClassName('head-input');
     ipt[0].onblur=function(){
            this.value='深圳';
     }
     ipt[0].onfocus=function(){
         this.value='';
     }
     ipt[1].onblur=function(){
         this.placeholder='请输入\\国家\\地区';
     }
     ipt[1].onfocus=function(){
         this.placeholder='';
     }
 })();
//  tab切换
 (function(){
     var sps=document.querySelectorAll('.head-three>.head-three-left>.head-three-nav>span');
     var div=document.getElementsByClassName('head-air');
     for(var sp of sps){
         sp.onclick=function(){
            this.parentNode.getElementsByClassName("item")[0].className='';
            this.className='item';
            var c=this.getAttribute('data-num');
            for(var i=0;i<sps.length;i++){
                 div[i].style.display='none';
             }
             div[c].style.display='block';

         }
     }
 })();