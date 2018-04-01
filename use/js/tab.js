function tab(pid){
   var tabs=["tab1","tab2","tab3","tab4"];
     for(var i=0;i<4;i++){
        if(tabs[i]==pid){
             document.getElementById(tabs[i]).style.display="block";}
        else{
                 document.getElementById(tabs[i]).style.display="none";
        }
    }
}