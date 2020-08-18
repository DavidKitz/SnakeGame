//box geht 22mal in eine länge(550/25)
const canv=document.getElementById("canvas");
const ctx=canv.getContext("2d");
let imgName= new Image();
let snake= [];
canv.style.border="2px solid black";

let box={x:275, y:275}

let direct;
document.addEventListener("keydown",move);
setInterval(drawIt,30);

function move(event) {
if (event.keyCode===40) {
   
    direct="UP";
    box["y"]+=25;
    drawIt();

}
 else if (event.keyCode===38) {
   
    direct="DOWN";
    box["y"]-=25;
    drawIt();
    
 }
 else if (event.keyCode===37) {
   
    direct="LEFT";
    box["x"]-=25;
    drawIt();
    
}
 else if (event.keyCode===39) {
   
    direct="RIGHT";
    box["x"]+=25;
    drawIt();
    
 }
}
function clear (c) {
   c.clearRect(0,0,600,600);
}
function drawIt() {
   if (box["x"]>=600) {

      return;
   }
   if (box["y"]>=600) {
      return;
   }
   clear(ctx);
   ctx.fillRect(box["x"], box["y"], '25', '25');

}