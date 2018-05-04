var n=0;
function tab_forward(){
    var imgs=["img1","img2","img3","img4"];
    var text2s=["text2-1","text2-2","text2-3","text2-4"];
    var text5s=["text5-1","text5-2","text5-3","text5-4"];
    n=n+1;
    if(n==4){
        n=0;}
    else{
    for(var i=0;i<4;i++){
        if(i==n){
            document.getElementById(imgs[i]).style.display="block";
            document.getElementById(text2s[i]).style.display="block";
            document.getElementById(text5s[i]).style.display="block";}
        else{
            document.getElementById(imgs[i]).style.display="none";
            document.getElementById(text2s[i]).style.display="none"
            document.getElementById(text5s[i]).style.display="none";
        }
    }
}
}
function tab_back(){
    var imgs=["img1","img2","img3","img4"];
    var text2s=["text2-1","text2-2","text2-3","text2-4"];
    var text5s=["text5-1","text5-2","text5-3","text5-4"];
    n=n-1;
    if(n<=0){
        n=4;
    }
    else{
    for(var i=0;i<4;i++){
        if(i==n){
            document.getElementById(imgs[i]).style.display="block";
            document.getElementById(text2s[i]).style.display="block";
            document.getElementById(text5s[i]).style.display="block";}
        else{
            document.getElementById(imgs[i]).style.display="none";
            document.getElementById(text2s[i]).style.display="none";
            document.getElementById(text5s[i]).style.display="none";
        }
    }
    }
}