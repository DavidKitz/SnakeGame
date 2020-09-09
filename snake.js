
const canv=document.getElementById("canvas");
const ctx=canv.getContext("2d");
const score=document.getElementById("score");
const highscore=document.getElementById("highscore");
const restart=document.getElementById("restart");
let box=25;
let food={x:Math.floor(Math.random()*22)*box, 
y:Math.floor(Math.random()*20)*box};
let snake= [{x:11*box, y:11*box}];
let snakeHead=snake[0];
let points=0;
let maxpoints=0;
let direct;
restart.addEventListener("click", function() {
   window.location.reload();
})
score.innerHTML= points;
highscore.innerHTML= "Highscore: "+maxpoints;
canv.style.border="2px solid black";
checkHighscore();


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
         checkHighscore();
         return;
      }
   }
   if (snake[0]["x"]>=600||snake[0]["x"]<=-25 ) {
      checkHighscore();
      return;
   }
   if (snake[0]["y"]>=600||snake[0]["y"]<=-25) {
      checkHighscore();
      return;
   }
   if (getDistance(snake[0].x,snake[0].y,food.x,food.y)<25) {
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
function getDistance(x1,y1,x2,y2) {
   let xDistance=x2-x1;
   let yDistance=y2-y1;

   return Math.sqrt(Math.pow(xDistance, 2)+ Math.pow(yDistance, 2));


}
function drawFood() {
   ctx.beginPath();
   ctx.rect(food["x"], food['y'],box,box);
   ctx.stroke();
}
function checkHighscore() {
   if (points>maxpoints) {
      maxpoints=points;
      highscore.innerHTML= "Highscore: "+maxpoints;
      localStorage.setItem("Score",maxpoints)
   }
   if (localStorage.getItem("Score")) {
      highscore.innerHTML= "Highscore: "+ localStorage.getItem("Score");
   }
}
 function addSnake() { 
   points++;
   score.innerHTML= points;
  
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
