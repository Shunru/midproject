function setup(){
//create canvas

var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent('pattern');
 var x = 40;
 var y = 40;
 var gridWidth = 1000;
for(var i = 0; i<100; i++){

//console.log(i);
    drawPattern(x,y);
//increment our x
    x +=120;//same as x = x +=120
    //check if x is past the grid width
    if(x > gridWidth){
    //set x back to the beginning
        x=40;
        //move y down
        y+=300;
    }//end for loop

}//end for set up

}

function drawing(startX, startY){

    triangle(0,30,40,0,40,30);



}
