var myul = document.getElementsByTagName('ul');
var myinput = document.getElementsByTagName('input');
var myli = document.getElementsByTagName('li');
var index = -1;
 


window.onload = function(){

myinput[0].onclick = show;

myul[0].onclick = set;

document.onclick = function(){myul[0].style.display="none";}

document.onkeyup = keyfunction;

}

 

function show(event){
myul[0].style.display="block";
event.stopPropagation();
}


function set(e){
var x =	e.target.innerHTML;
myinput[0].value = x;
myul[0].style.display="none";
e.stopPropagation();
}

function keyfunction(e){
 
if (e.keyCode == 38)
{

    index--;
    
     if(index< 0)
    {
       index=4;
    }


    myinput[0].value = myli[index].innerHTML;
    
}

else if (e.keyCode == 40)	
{
    
    index++;

    if(index>4)
	{
	index=0;
    }
      
	myinput[0].value = myli[index].innerHTML;

}
}

