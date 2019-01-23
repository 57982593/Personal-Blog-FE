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
        xhr.setRequestHeader('Content-Type','application/x-www-from-urlencoded');
      }
      if(type.toLowerCase()=='post'&&data!==undefined){
        xhr.send(data);
      }else{xhr.send(null)};
    })
} 

(async function(){
  var ped=document.getElementsByClassName('aww_left_head_a');
  for(var id of ped){
    id.onclick=function(){
      var pid=this.getAttribute('data-num');
      ajax1(pid);
    }
  }
  function ajax1(pid){
   ajax({ 
    url:`http://127.0.0.1:3000/index/today?pno=${pid}`,
    type:'get',
    dataType:'json'
  }).then(res=>{
    var html='';
    html+=` 
    <!-- 今日特惠 -->    
    <div class="aww_left">
        <div class="left_one">
            <div class="left_label">
                <div class='left_img' >
                    <img class='left_imgs' src="${res[0].img}">
                </div>
                <div class="left_text">
                    <p class="p1">${res[0].title}</p>
                    <p class="p2">${res[0].content}</p>
                    <p class="p3 pd">￥${res[0].price}</p>
                </div>
            </div>
            <div class="left_labels">
                <div class="left_img2">
                    <img class='left_imgs2' src="${res[1].img}">
                </div>
                <div class="left_text2">
                    <p class="ap1">${res[1].title}</p>
                    <p class="ap2">${res[1].content}</p>
                    <p class="p3">￥${res[1].price}</p>
                </div>
            </div>
            <div class="left_labels">
                <div class="left_img2">
                    <img class='left_imgs2' src="${res[2].img}">
                </div>
                <div class="left_text2">
                    <p class="ap1">${res[2].title}</p>
                    <p class="ap2">${res[2].content}</p>
                    <p class="p3">￥${res[2].price}</p>
                </div>
            </div>
        </div>
        
        <div class="left_one">
        <div class="left_label">
            <div class='left_img' >
                <img class='left_imgs' src="${res[3].img}">
            </div>
            <div class="left_text">
                <p class="p1">${res[3].title}</p>
                <p class="p2">${res[3].content}</p>
                <p class="p3 pd">￥${res[3].price}</p>
            </div>
        </div>
        <div class="left_labels">
            <div class="left_img2">
                <img class='left_imgs2' src="${res[4].img}">
            </div>
            <div class="left_text2">
                <p class="ap1">${res[4].title}</p>
                <p class="ap2">${res[4].content}</p>
                <p class="p3">￥${res[4].price}</p>
            </div>
        </div>
        <div class="left_labels">
            <div class="left_img2">
                <img class='left_imgs2' src="${res[5].img}">
            </div>
            <div class="left_text2">
                <p class="ap1">${res[5].title}</p>
                <p class="ap2">${res[5].content}</p>
                <p class="p3">￥${res[5].price}</p>
            </div>
        </div>
    </div> 
    </div>`;

  var left_onea=document.querySelector('.aww_lefta');
  left_onea.innerHTML=html;
  })
}
ajax1(0);
})();
(async function(){
    ajax({ 
        url:`http://127.0.0.1:3000/index/carousel`,
        type:'get',
        dataType:'json'
      }).then(res=>{
          var html='';
          for(var i=0;i<res.length;i++){
          html+=`<img src="${res[i].urls}">`;}
          var carousel=document.querySelector('#carousel>.carousel-lb');  
          carousel.innerHTML=html;
        
        // 轮播图
        var list = document.querySelectorAll('#carousel>#list>li');
        var imgs = document.querySelectorAll('#carousel>.carousel-lb>img');
        var c = 0;
        list[0].style.background='red';
        var timer=function(){
            c++;
            if(c==4){c=0};
            for(var i=0;i<imgs.length;i++){
              list[i].style.background = 'yellow';
              imgs[i].style.display = 'none';
            }
            list[c].style.background = 'red';
            imgs[c].style.display = 'block';
        }
        var time = setInterval(timer,2000);
        for (var li of list){
            li.onmouseover=function(){
                clearInterval(time);
                time=null;
                var a = this.getAttribute('data-num');
                for(var i=0;i<imgs.length;i++){
                  list[i].style.background = 'yellow';
                  imgs[i].style.display = 'none'; 
                }
                this.style.background = 'red';
                imgs[a].style.display = 'block'; 
            }
            li.onmouseout=function(){
                time=setInterval(timer,2000);
            }
        }
      })
})();

// 当季热门度假
(async function(){
    ajax({url:`http://127.0.0.1:3000/index/hotel`,
    type:'get',
    dataType:'json'
}).then(res=>{
    var html='';
    for(var i=0;i<3;i++){
    html+=`
    <div class="card1">
        <div class="card-img">
                <img src="${res[i].img_url}">
                <p class="card-loge"><img src="${res[i].imgs_url}"></p>
            <div class="card-bg">
                <p class="card-p1"><a href="#">${res[i].title}</a></p>
                <p class="card-p2"><a href="#">${res[i].dateday}</a></p>
            </div>
        </div>
        <div class="card-text">
            <p class="card-p3"><a href="#">${res[i].details}</a></p>
            <p class="card-p4">￥${res[i].price}</p>
        </div>
    </div>`}
        var html2='';
    for(var i=3;i<6;i++){
        html2+=`
    <div class="card1">
        <div class="card-img">
                <img src="${res[i].img_url}">
                <p class="card-loge"><img src="${res[i].imgs_url}"></p>
            <div class="card-bg">
                <p class="card-p1"><a href="#">${res[i].title}</a></p>
                <p class="card-p2"><a href="#">${res[i].dateday}</a></p>
            </div>
        </div>
        <div class="card-text">
            <p class="card-p3"><a href="#">${res[i].details}</a></p>
            <p class="card-p4">￥${res[i].price}</p>
        </div>
    </div>`
    }
var hotel=document.querySelectorAll('.holiday-one');
    hotel[0].innerHTML=html;
    hotel[1].innerHTML=html2;
})
})();

// 当季热门景点

    (function (){
    ajax({url:`http://127.0.0.1:3000/index/holiday`,
    type:'get',
    dataType:'json'
}).then(res=>{
    var html2='';
    html2+=`
    <div class="Hot_spots_img">
        <img src="${res[0].img_url}">
    </div>
    <div class="Hot_spots_img2">
        <img src="${res[1].img_url}">
        <p class="Hot_spots_p1">${res[1].title}</p>
        <p class="Hot_spots_p2">${res[1].details}</p>
        <p class="card-p4">￥${res[1].price}</p>
    </div>`;
    var html3='';
    for(var i=2;i<5;i++){
        html3+=`
        <div class="Hot_spots_img2">
            <img src="${res[i].img_url}">
            <p class="Hot_spots_p1">${res[i].title}</p>
            <p class="Hot_spots_p2">${res[i].details}</p>
            <p class="card-p4">￥${res[i].price}</p>
        </div>`
    }
    
    var  hotel=document.querySelectorAll('.holiday-one');
        hotel[2].innerHTML=html2;
        hotel[3].innerHTML=html3;
       
})
})();

// 超值酒店团购推荐
(function(){
    var a=document.querySelectorAll('.Hot_spots_hover1');
    var a=a[0].querySelectorAll('a');
    for(var i of a){
        i.onclick=function(){
        var pno=this.getAttribute('data-num');
        ajax3(pno);
        }
    } 
    function ajax3(pno){
        ajax({url:`http://127.0.0.1:3000/index/holidays?pno=${pno}`,
        type:'get',
        dataType:'json'
    }).then(res=>{
        var html4='';
        html4+=`
        <div class="Hot_spots_img">
            <img src="${res[0].img_url}">
        </div>
        <div class="Hot_spots_img2">
            <img src="${res[1].img_url}">
            <p class="Hot_spots_p1">${res[1].title}</p>
            <p class="Hot_spots_p2">${res[1].details}</p>
            <p class="card-p4">￥${res[1].price}</p>
        </div>`;
        var html5='';
    for(var i=2;i<5;i++){
        html5+=`
        <div class="Hot_spots_img2">
            <img src="${res[i].img_url}">
            <p class="Hot_spots_p1">${res[i].title}</p>
            <p class="Hot_spots_p2">${res[i].details}</p>
            <p class="card-p4">￥${res[i].price}</p>
        </div>`
        var  hotel=document.querySelectorAll('.holiday-one');
        hotel[4].innerHTML=html4;
        hotel[5].innerHTML=html5;
    }
    })
    }
    ajax3(0)
})();
// 旅行攻略
(function(){
    var gl = document.querySelectorAll('#gl>a');
        for (var a of gl){
            a.onclick=function(){
               var pno = this.getAttribute('data-nums');
               ajax2(pno);
            }
        }
    function ajax2(pno){
    ajax({url:`http://127.0.0.1:3000/index/travel?pno=${pno}`,
    type:'get',
    dataType:'json'
}).then(res=>{
    var html='';
    html+=`
        <img src="${res[0].img_url}">
        <div class="mn-hover">
            <a href="#" class="mn-text-color">${res[0].title}</a>
            <div class="mn-hovera">
                <div>
                    <img src="${res[0].tx}">
                </div>
                <div>
                    <p class="mn-text-pcolor"><span class="mn-text-spcolor">${res[0].author}</span>&nbsp;&nbsp;|&nbsp;&nbsp;${res[0].DateOfDeparture}</p>
                    <p class="mn-text-pcolor">${res[0].dates}&nbsp;&nbsp;|&nbsp;&nbsp;${res[0].photos}</p>
                </div>
            </div>
        </div>`;
    var html2='';
    for(var i=1;i<3;i++){
    html2+=`
    <div class="mn-img-a  mn-position-overflow">
    <img src="${res[i].img_url}">
    <div class="mn-hover">
        <a href="#" class="mn-text-color">${res[i].title}</a>
        <div class="mn-hovera">
            <div>
                <img src="${res[i].tx}">
            </div>
            <div>
                <p class="mn-text-pcolor"><span class="mn-text-spcolor">${res[i].author}</span>&nbsp;&nbsp;|&nbsp;&nbsp;${res[i].DateOfDeparture}</p>
                <p class="mn-text-pcolor">${res[i].dates}&nbsp;&nbsp;|&nbsp;&nbsp;${res[i].photos}</p>
            </div>
            </div>
        </div>
    </div>`;}
    var html3='';
    for(var i=3;i<5;i++){
    html3+=`
    <div class="mn-img-a  mn-position-overflow">
    <img src="${res[i].img_url}">
    <div class="mn-hover">
        <a href="#" class="mn-text-color">${res[i].title}</a>
        <div class="mn-hovera">
            <div>
                <img src="${res[i].tx}">
            </div>
            <div>
                <p class="mn-text-pcolor"><span class="mn-text-spcolor">${res[i].author}</span>&nbsp;&nbsp;|&nbsp;&nbsp;${res[i].DateOfDeparture}</p>
                <p class="mn-text-pcolor">${res[i].dates}&nbsp;&nbsp;|&nbsp;&nbsp;${res[i].photos}</p>
            </div>
            </div>
        </div>
    </div>`;}
        var trave = document.querySelector('.mn-img1');
        var trave2 = document.querySelectorAll('.mn-imga');
        trave.innerHTML=html;
        trave2[0].innerHTML=html2;
        trave2[1].innerHTML=html3;       
})
}
ajax2(0);
})();

// 骆驼书
(function(){
    var btn=document.querySelectorAll('.Hot_spots_hover');
    var btn=btn[2].querySelectorAll('.Hot_spots_hover1>a');
    for(var item of btn){
        item.onclick=function(){
        var pno=this.getAttribute('data-num');
            ajax1(pno);
        }
    }
    function ajax1(pno){
        ajax({url:`http://127.0.0.1:3000/index/lts?pno=${pno}`,
        type:'get',
        dataType:'json'
    }).then(res=>{
        var html='';
        var lts=document.querySelector('.bottom-zt');
        for (var i=0;i<=2;i++){
        html+=`
        <div class="bottom-imga">
            <img src="${res[i].img_url}">
            <div class="bottom-bg">
                <p class="bottom-p1">${res[i].title}</p>
                <p class="bottom-p2">${res[i].title2}</p>
                <p class="bottom-p3">——</p>
                <p class="bottom-p4">作者：${res[i].author}</p>
                <p class="bottom-p5">更新时间：${res[i].gxdate}</p>
                <p class="bottom-p6"> <a href='javaScript:;'>下载</a></p>  
            </div>
        </div>` ;}  
        console.log(lts);
        lts.innerHTML=html;
    })
    }
    ajax1(0);
})();


