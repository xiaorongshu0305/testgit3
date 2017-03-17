
function win(){
    var img = document.getElementById("img");
    var upN = document.getElementById("up");
    var tlNode=document.getElementById("turn-left");
    var trNode=document.getElementById("turn-right");
    var ntNode=document.getElementById("too");
    var naNode=document.getElementById("acc");
    var pNode=document.getElementById("pro");
    var ntdiv = document.getElementById("nt");
    var nadiv=document.getElementById("na");
    var pdiv=document.getElementById("p");
    var hoNode=document.getElementById("hole");
    var tc=document.getElementById("tc");
    var ac=document.getElementById("ac");
    var pc=document.getElementById("pc");
    var imglist=document.getElementById("imglist");
    var bodynav=document.getElementById("body-nav");
    var i;
    var timer;
    var imgArr = ["images/1.png","images/2.jpg","images/3.png","images/4.jpg","images/5.jpg","images/1.png"];
    var index = 0;
    // autochange();
    // function tl(){
    //     panduan1();
        // index++;
        // if (index >= imgArr.length) {
        //    index = index % imgArr.length; 
        // }
        // img.src=imgArr[index];
        // clearInterval(timer);
        // index++;
           
    //            move(imglist, "left", -1056*index, 20, function(){
    //         }) ;
    // }
    // function tr(){
         // clearInterval(timer);
       //   panduan2();
       //  index--;
       //     move(imglist, "left", -1056*index, 20, function(){
       //   });
       // }  
    //     index--;
    //     if(index<0){
    //         index = imgArr.length - 1;
    //     }
    //     img.src = imgArr[index];
     function tl(){
        clearInterval(timer);
        index++;
        // index %= imgArr.length;
        index %= imgArr.length;

        move(imglist, "left", -1056*index, 30, function(){});
         if(index >= imgArr.length - 1){

            move(imglist, "left", -1056*index, 30, function(){ 
                imglist.style.cssText="left:0;";
                index = 0;
               });
        }
        autochange();
     }

     function tr(){
        clearInterval(timer);
        if(index == 0){
                imglist.style.cssText="left:-5280px;";
                index = imgArr.length -1;
            move(imglist, "left", -index*1056, 30, function(){
         });  
        }
        index--;
        move(imglist, "left", -index*1056, 30, function(){
         });
       
        if(index <= 0){
            move(imglist, "left", -1056*index, 30, function(){
            imglist.style.cssText="left:-5280px;";
            index = imgArr.length -1;
        });
        }
    autochange();     
 }



 //自动切换
function autochange(){
    timer=setInterval(function(){
         index++;
        move(imglist, "left", -1056*index, 20, function(){});
        if(index >= imgArr.length -1){
            move(imglist, "left", -1056*index, 20, function(){ 
                // imglist.style.cssText="left:0;";
                //  index %= imgArr.length;
                index %= imgArr.length - 1;
                imglist.style.cssText = "left:0;";
               });
        }
    },3000);    
}
    // function panduan1(){
    //      if (index >= imgArr.length - 1) {
    //             imglist.style.cssText="left:0px;";
    //             index = 0; 
    //         }else{move(imglist, "left", -1056*index, 20, function(){}) ;};
    // }
    // function panduan2(){
    //     if (index < 0) {
    //         index = imgArr.length -1;
    //         imglist.style.cssText="left:-5280px;";
    //     }
    // }
    // function fun(){  
    //     if(i){
    //         index = index + 1;
    //         if (index >= imgArr.length){
    //         index = 0;
    //         }
    //     img.src = imgArr[index]; 
    //     }else{
    //         clearInterval(timer);
    //     }   
    // }
    // function setr(){
    //         var i=1;
    //         return;
    // }
    // function setfal(){
    //         var i=0;
    //         return;
    // }
    // function autochange(){
    //    var timer = setInterval(function(){
    //     index++;
    //         if (index > imgArr.length-1) {
    //             index = 0;
    //             imglist.style.cssText="left:0px;";
    //             move(imglist, "left", -1056*index, 20, function(){
    //         });
    //         }else{
    //            move(imglist, "left", -1056*index, 20, function(){
    //         }); 
    //         }
             
    //    },3000);
    // }
    function left(){
            ntdiv.style.display="block";
            nadiv.style.display="none";
            pdiv.style.display="none";
}
    function middle(){
        
        nadiv.style.display="block";
        ntdiv.style.display="none";
        pdiv.style.display="none";
    }
    function right(){
       
        pdiv.style.display="block";
        ntdiv.style.display="none";
        nadiv.style.display="none";
    }
    function lb(){
       ntNode.style.cssText="background:#fff;";
       naNode.style.cssText="background:#013b69;";
       pNode.style.cssText="background:#013b69;";
       tc.style.cssText="color:#333;";
       ac.style.cssText="color:#fff;";
       pc.style.cssText="color:#fff;";
       hoNode.style.cssText="top:87.1%;"
    }
    function mb(){
       naNode.style.cssText="background:#fff;height:88px;";
       ntNode.style.cssText="background:#013b69; height:64px;";
       pNode.style.cssText="background:#013b69;";
       ac.style.cssText="color:#333;";
       tc.style.cssText="color:#fff;padding-top:46px;";
       pc.style.cssText="color:#fff;padding-top:46px;";
       hoNode.style.cssText="top:84.5%;"
    }
    function rb(){
        pNode.style.cssText="background:#fff;height:88px;";
        naNode.style.cssText="background:#013b69;";
        ntNode.style.cssText="background:#013b69; height:64px;";
        pc.style.cssText="color:#333;";
        ac.style.cssText="color:#fff;padding-top:46px;";
        tc.style.cssText="color:#fff;padding-top:46px;";
        hoNode.style.cssText="top:84.5%;"

    }
    tlNode.onclick=tl;
    trNode.onclick=tr;
    // var timer=setInterval(fun,5000);
    // upN.onmouseover = setfal;
    // console.log(i);
    // upN.onmouseout = setr;
    naNode.addEventListener("click",mb,false);
    ntNode.addEventListener("click",lb,false);
    pNode.addEventListener("click",rb,false);
    naNode.addEventListener("click",middle,false);
    ntNode.addEventListener("click",left,false);
    pNode.addEventListener("click",right,false);
    autochange();

}
    window.onload=win;

    