let x;
let y;


function setup() {
  createCanvas(400, 400);
 x = random(400);
 x = int(x);
 y = random(400);
 y = int(y);
}
function draw() {
  background("yellow");
  x = x + random(-20,20)
  y = y + random(-20,20)
  if (x > 400) {
  x = 400;
  }
  let distancia;
  distancia = dist(mouseX,mouseY,x,y);
  circle(mouseX,mouseY,distancia);
  circle(x,y, 10);
  fill("blue")
  
if(distancia < 3) {
text("Encontrei!", 200, 200);
noLoop();
 }
}
