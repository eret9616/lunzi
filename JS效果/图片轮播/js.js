var index = 1;
var moveWidth;


var myleft = document.getElementById("left");
var myright = document.getElementById("right");
var mycontainer = document.getElementsByClassName("container");

myleft.addEventListener("click",function(){

   index++;

   moveWidth = 320*index ;
   mycontainer[0].style.cssText = "transform:translate3d(-"+moveWidth+"px,0px,0px); transition-duration: .3s;  ";
   console.log(index);
   if(index == 4){

setTimeout( function(){  index=1;    moveWidth = 320*index ;mycontainer[0].style.cssText = "transform:translate3d(-"+moveWidth+"px,0px,0px); transition:0s;" },300);}
});


myright.addEventListener("click",function(){

   index--;

   moveWidth = 320*index ;
   mycontainer[0].style.cssText = "transform:translate3d(-"+moveWidth+"px,0px,0px);transition-duration: .3s;";
   console.log(index);
   if(index == 0){
   setTimeout(function(){index=3;    moveWidth = 320*index ; mycontainer[0].style.cssText = "transform:translate3d(-"+moveWidth+"px,0px,0px);transition-duration:0s;" },300);}
});
