//box geht 22mal in eine länge(550/25) 
// Fix movement+ adding to snake not working properly
const canv=document.getElementById("canvas");
const ctx=canv.getContext("2d");
let imgName= new Image();
let food={x:Math.floor(Math.random()*22)*25, 
y:Math.floor(Math.random()*20)*25};
let snake= [{x:275, y:275},{x:300,y:275}];
let snakeHead=snake[0];
let direct;
canv.style.border="2px solid black";


document.addEventListener("keydown",move);
setInterval(drawIt,30);

function move(event) {
if (event.keyCode===38 && direct!=="DOWN") {
   snakeHead["y"]-=25;
   for (let i=0;i<snake.length;i++) {
    direct="UP";
    snake.unshift
   
    drawIt();
}
}
 else if (event.keyCode===40 && direct!=="UP") {
   for (let i=0;i<snake.length;i++) {
    direct="DOWN";
    snake[i]["y"]+=25;
    drawIt();
 }
 }
 else if (event.keyCode===37 && direct!=="RIGHT") {
   for (let i=0;i<snake.length;i++) {
    direct="LEFT";
    snake[i]["x"]-=25;
    drawIt();
 }
}
 else if (event.keyCode===39 && direct!=="LEFT") {
   for (let i=0;i<snake.length;i++) {
    direct="RIGHT";
    snake[i]["x"]+=25;
    drawIt();
 }
 }
}
function clear (c) {
   c.clearRect(0,0,600,600);
}
function drawIt() {
   if (snake[0]["x"]>=600||snake[0]["x"]<=-25 ) {
      return;
   }
   if (snake[0]["y"]>=600||snake[0]["y"]<=-25) {
      return;
   }
   if (snake[0]["x"]===food["x"] && snake[0]["y"]===food["y"]){
      addSnake();
   }
   clear(ctx);
   ctx.beginPath();
   ctx.arc(food["x"], food['y'],12.5,0,Math.PI * 2);
   ctx.stroke();
   for (let i=0;i<snake.length;i++) {
   ctx.fillRect(snake[i]["x"], snake[i]["y"], '25', '25');
   ctx.fillStyle = (i===0) ? "green":"black";
}
   
}

function addSnake() { 
  
if ( direct==="DOWN") {
      snake.push({x:snake[snake.length-1]["x"],y:snake[snake.length-1]["y"]-50*snake.length});
      food={x:Math.floor(Math.random()*22)*25, y:Math.floor(Math.random()*22)*25};
}

 else if (direct==="UP") {
    snake.push({x:snake[snake.length-1]["x"],y:snake[snake.length-1]["y"]+25});
    food={x:Math.floor(Math.random()*22)*25, y:Math.floor(Math.random()*22)*25};
 }
 else if (direct==="RIGHT") {
 snake.push({x:snake[snake.length-1]["x"]+25,y:snake[snake.length-1]["y"]});
 food={x:Math.floor(Math.random()*22)*25, y:Math.floor(Math.random()*22)*25};

   
}
else if (direct==="LEFT") {
 snake.push({x:snake[snake.length-1]["x"]+25,y:snake[snake.length-1]["y"]}); 
 food={x:Math.floor(Math.random()*22)*25, y:Math.floor(Math.random()*22)*25};
}
}
