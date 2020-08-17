//box geht 22mal in eine länge(550/25)
const canv=document.getElementById("canvas");
const ctx=canv.getContext("2d");
let imgName= new Image();
let snake= [];
canv.style.border="2px solid black";
let x=275;
let y=275;
let box;
ctx.rect(x,y,25,25);
ctx.stroke();
ctx.clearRect(x,y,25,25);

let direct;
document.addEventListener("keydown",move);


function move(event) {
if (event.keyCode===38) {
    direct="UP";
    ctx.clearRect(x,y,25,25);
    y+=25;
}
 else if (event.keyCode===40) {
    direct="DOWN";
    y-=25;
 }
 else if (event.keyCode===37) {
    direct="LEFT";
    x-=25;
}
 else if (event.keyCode===39) {
    direct="RIGHT";
    x+=25;
    
    
 }
}
function drawIt() {


}