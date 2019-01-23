(function(){
    var div=document.querySelector('#fixation2 .fixation2-one>div:first-child');
    var divs=document.querySelector('#fixation2');
    var tb=document.querySelector('#fixation');
    var sm=document.querySelector('#fixation2>.fixation2-three>div:first-child');
    var ewm=document.querySelector('#fixation2>.fixation2-three>div:last-child');
    div.onclick=function(){
       divs.style.display='none';
       tb.style.display='block';
    }
    tb.onclick=function(){
        tb.style.display='none';
        divs.style.display='block';
    }
    sm.onmouseover=function(){
        ewm.style.display='block';
    }
    sm.onmouseout=function(){
        ewm.style.display='none';
    }
    ewm.onmouseover=function(){
        ewm.style.display='block';
    }
    ewm.onmouseout=function(){
        ewm.style.display='none';
    }
})();

