function setup(){
//create canvas

var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent('pattern');
 var x = 0;
 var y = 0;
 var gridWidth = 1000;
for(var i = 0; i<100; i++){

//console.log(i);
    drawPattern(x,y);
//increment our x
    x +=120;//same as x = x +=120
    //check if x is past the grid width
    if(x > gridWidth){
    //set x back to the beginning
        x=0;
        //move y down
        y+=300;
    }end if

}//end for loop

}//end for setup

function draw(){

 function drawPattern(startX, startY){

    triangle(0,30,40,0,40,30);



}
}
