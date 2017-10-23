window.onload = function(){
  

  waterfall();
   var  dataInt={"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'}]};
   var oBox = document.getElementsByClassName("box");
    	 
   window.onscroll = function(){

	if(checkScrollSlide){
		var oParent = document.getElementById("main");
		for(var i =0; i<dataInt.data.length;i++){
             var oBox = document.createElement("div");
             oBox.className = "box";
             oParent.appendChild(oBox);
             var oPic = document.createElement("div");
             oPic.className = "content";
             oBox.appendChild(oPic);
             var oImg = document.createElement('img');
             oImg.src = "image/"+dataInt.data[i].src;
             oPic.appendChild(oImg);
		}
		waterfall();
	}
}

}




 function waterfall(){

   var mybox = document.getElementsByClassName('box');
 
     
   var myheightarray = [];

   for(var i=0;i<5 ; i++)                      //首先规定了一行5个，先把0-4的排好
   {
   	 myheightarray.push(mybox[i].offsetHeight);
   }

    
     for(var i=5 ;i<mybox.length;i++ )    //下面排后面的图片，选取一个最矮的，然后把图片插上去，再计算最矮的再插上去
     {

     	   var min = Math.min.apply(null,myheightarray);
           var index = getindex(myheightarray,min);
       

            mybox[i].style.position = "absolute";
            mybox[i].style.top = min +'px';
            mybox[i].style.left = index*237 + 'px';
      
            myheightarray[index] += mybox[i].offsetHeight;
            
     }


}

   function getindex(array,min){
     for(var i =0; i<5;i++)
     {
     	if(array[i]==min)
     		return i;
     }	
    }

    function checkScrollSlide(){
    	var oBox = document.getElementsByClassName("box");
    	var lastBoxH = oBox[oBox.length-1].offsetTop;
    	var scrollTop = document.body.scrollTop;
    	var height = document.body.clientHeight;
    	return (lastBoxH<scrollTop+height)?true:false;


    }