function demo(pid){
    var demos=["demo1","demo2","demo3","demo4","demo5"];
      for(var i=0;i<5;i++){
         if(demos[i]==pid){
             var motai=document.getElementById('mo');
             var moimg=document.getElementById("moimg");
             var realimg=document.getElementById(demos[i]);
             var caption=document.getElementById("caption");
             motai.style.display="block";
             moimg.src=realimg.src;
             caption.innerHTML=realimg.alt;
         } 
      }
var span=document.getElementById("close");
 span.onclick=function(){
  motai.style.display="none";
 }
}