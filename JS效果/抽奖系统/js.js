var data = ["iphoneX",'ipad','三星笔记本电脑','佳能数码相机','谢谢参与！'],
    timer = null;

var x;
var random;
var flag = 0;

window.onload=function(){
 
//x0为开始 x1为停止
 x = document.getElementsByTagName("span");
 x[0].onclick=function(){play();   x[0].style.backgroundColor="red";  } 


 x[1].onclick=function(){stop();  x[0].style.backgroundColor="yellow"; }
  
  document.onkeyup = function(event){
    if(event.keyCode == 13 && flag==0 )  {play(); x[0].style.backgroundColor="red"; flag=1;} 
    else if(event.keyCode == 13 && flag==1) {stop(); x[0].style.backgroundColor="yellow"; flag=0;} 
  }

}


function play(){
 clearInterval(timer); //加定时前前要先关闭
  timer = setInterval(function(){ random = Math.floor(Math.random()*5); change();},50);
}

function change(){
   document.getElementById("title").innerHTML = data[random];


}

function stop(){
   clearInterval(timer);

}


   

