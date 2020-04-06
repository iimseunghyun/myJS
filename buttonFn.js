
var myObj = {
    toX : 200,
    toY : 200,
    oneStep: 20,
    //move// toX,Y +- oneStep
    el : document.getElementsByTagName('button'),
    //좌표값 변경과, 이동기능(좌표값 실행) 분리하지 않은 함수 //분리해볼 것.
    myFn0 : function(){
        var lo1 = myObj.toX - myObj.oneStep;
        var lo2 = myObj.toY - myObj.oneStep;
        if(myObj.areaCheck(lo1,lo2)){
        myObj.toX -=myObj.oneStep; //this = 자신을 호출한 객체가 됨. 버튼을 눌러 호출되기 때문에 this = button
        myObj.toY -=myObj.oneStep;            
        }
        myObj.el[9].style.left = myObj.toX +'px'; 
        myObj.el[9].style.top = myObj.toY +'px';
    },        
    myFn1 : function(){
        myObj.toY-= myObj.oneStep;
        myObj.el[9].style.top = myObj.toY +'px';
    },    
    myFn2 : function(){
        myObj.toX += myObj.oneStep;
        myObj.toY -= myObj.oneStep;
        myObj.el[9].style.left = myObj.toX +'px'; 
        myObj.el[9].style.top = myObj.toY +'px';
    
    },    
    myFn3 : function(){
        myObj.toX -= myObj.oneStep;
        myObj.el[9].style.left = myObj.toX +'px';        
    },    
    myFn5 : function(){
        myObj.toX += myObj.oneStep;
        myObj.el[9].style.left = myObj.toX +'px';
    },    
    myFn6 : function(){
        myObj.toX -= myObj.oneStep;
        myObj.toY += myObj.oneStep;
        myObj.el[9].style.left = myObj.toX +'px'; 
        myObj.el[9].style.top = myObj.toY +'px';
    },    
    myFn7 : function(){
        myObj.toY += myObj.oneStep;
        myObj.el[9].style.top = myObj.toY +'px';

    },    
    myFn8 : function(){
        myObj.toX += myObj.oneStep;
        myObj.toY += myObj.oneStep;
        myObj.el[9].style.left = myObj.toX +'px'; 
        myObj.el[9].style.top = myObj.toY +'px';
    },    
    myFn9 : function(){
        myObj.toX = myObj.toY = 200;
        myObj.el[9].style.left = myObj.toX +'px'; 
        myObj.el[9].style.top = myObj.toY +'px';
    },
    areaCheck : function(lo){
        var result = true;
        if(myObj.toX < 0 || myObj.toY> 450){ result = false;
        }
        return result
    }

};

myObj.myFn9();

// for(var i=0; i<8; i++){
// myObj.el[i].onclick = myObj.myFn+i;
// }
myObj.el[0].onclick = myObj.myFn0;
myObj.el[1].onclick = myObj.myFn1;
myObj.el[2].onclick = myObj.myFn2;
myObj.el[3].onclick = myObj.myFn3;
myObj.el[4].onclick = myObj.myFn9;
myObj.el[5].onclick = myObj.myFn5;
myObj.el[6].onclick = myObj.myFn6;
myObj.el[7].onclick = myObj.myFn7;
myObj.el[8].onclick = myObj.myFn8;