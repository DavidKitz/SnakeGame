//box geht 22mal in eine länge(550/25)
const canv=document.getElementById("canvas");
const ctx=canv.getContext("2d");
let imgName= new Image();
let food={x:Math.floor(Math.random()*22)*25, 
y:Math.floor(Math.random()*22)*25};
let snake= [{x:275, y:275}];
let snakeHead=snake[0];
let direct;
canv.style.border="2px solid black";


document.addEventListener("keydown",move);
setInterval(drawIt,30);

function move(event) {
if (event.keyCode===38 && direct!=="DOWN") {
   for (let i=0;i<snake.length;i++) {
    direct="UP";
    snake[i]["y"]-=25;
    drawIt();
}
}
 else if (event.keyCode===40 && direct!=="UP") {
   for (let i=0;i<snake.length;i++) {
    direct="DOWN")
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
   if (snake[0]["x"]>=600) {
      return;
   }
   if (snake[0]["y"]>=600) {
      return;
   }
   if (snake[0]["x"]===food["x"] && snake[0]["y"]===food["y"]){
      addSnake();
   }
   clear(ctx);
   for (let i=0;i<snake.length;i++) {
   ctx.fillRect(snake[i]["x"], snake[i]["y"], '25', '25');
}
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
 snake.push({x:snake[snake.length-1]["x"]+25,y:snake[snake.length-1]["y"]});
 food={x:Math.floor(Math.random()*22)*25, y:Math.floor(Math.random()*22)*25};

   
}
else if (direct==="LEFT") {
 snake.push({x:snake[snake.length-1]["x"]-25,y:snake[snake.length-1]["y"]}); 
 food={x:Math.floor(Math.random()*22)*25, y:Math.floor(Math.random()*22)*25};
}
}
