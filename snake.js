//box geht 22mal in eine länge(550/25) 
// Fix movement+ adding to snake not working properly
const canv=document.getElementById("canvas");
const ctx=canv.getContext("2d");
let imgName= new Image();
let box=25;
let food={x:Math.floor(Math.random()*22)*box, 
y:Math.floor(Math.random()*20)*box};
let snake= [{x:11*box, y:11*box}];
let snakeHead=snake[0];
let points;
let direct;
canv.style.border="2px solid black";


document.addEventListener("keydown",move);
setInterval(drawIt,60);

 function move(event) {
 if (event.keyCode===38 && direct!=="DOWN") { 
     direct="UP";
     drawIt();
 }
  else if (event.keyCode===40 && direct!=="UP") {
     direct="DOWN";
     drawIt();
  }
  else if (event.keyCode===37 && direct!=="RIGHT") {
     direct="LEFT";
     drawIt();
 }
  else if (event.keyCode===39 && direct!=="LEFT") {
     direct="RIGHT";
     drawIt();
  }
 }
function clear (c) {
   c.clearRect(0,0,600,600);
}
function drawIt() {
   for (let i=1;i<snake.length;i++) {
      if (snake[i].x===snake[0].x && snake[i].y===snake[0].y) {
         return;
      }
   }
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
   drawFood();
   for (let i=0;i<snake.length;i++) {
   ctx.fillStyle = (i===0) ? "green":"black";
   ctx.fillRect(snake[i]["x"], snake[i]["y"], '25', '25');
   
}
  let snakeX=snake[0].x;
  let snakeY=snake[0].y;
  snake.pop();
   if (direct === "DOWN") snakeY += box;
   if (direct === "UP")   snakeY -= box;
   if (direct === "LEFT") snakeX -= box;
   if (direct === "RIGHT")  snakeX += box;

   
let newHead= { x: snakeX, y: snakeY};
   
   snake.unshift(newHead);
   
}
function drawFood() {
   ctx.beginPath();
   ctx.arc(food["x"], food['y'],12.5,0,Math.PI * 3);
   ctx.stroke();
}

 function addSnake() { 

 if ( direct==="DOWN") {
       snake.push({x:snake[snake.length-1]["x"],y:snake[snake.length-1]["y"]-25});
       food={x:Math.floor(Math.random()*22)*25, y:Math.floor(Math.random()*22)*25};
 }
  else if (direct==="UP") {
     snake.push({x:snake[snake.length-1]["x"],y:snake[snake.length-1]["y"]+25});
     food={x:Math.floor(Math.random()*22)*25, y:Math.floor(Math.random()*22)*25};
  }
  else if (direct==="RIGHT") {
  snake.push({x:snake[snake.length-1]["x"]-25,y:snake[snake.length-1]["y"]});
  food={x:Math.floor(Math.random()*22)*25, y:Math.floor(Math.random()*22)*25};
 
 }
 else if (direct==="LEFT") {
  snake.push({x:snake[snake.length-1]["x"]+25,y:snake[snake.length-1]["y"]}); 
  food={x:Math.floor(Math.random()*22)*25, y:Math.floor(Math.random()*22)*25};
 }
 }
