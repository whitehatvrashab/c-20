var fixedRect,movingRect;
var c,d;
function setup() {
  createCanvas(1200,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

  c=createSprite(600,200,50,80);
  c.velocityX=2;
  d=createSprite(800,200,80,50);
  d.velocityX=-2;

}

function draw() {
  background(255,255,255);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2 && movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2 )
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";



}
if(c.x-d.x<d.width/2+c.width/2 && d.x-c.x<d.width/2+d.width/2){
  c.velocityX=c.velocityX*(-1);
  d.velocityX=d.velocityX*(-1)
}

if(c.y-d.y<d.height/2+c.height/2 && d.y-c.y<d.height/2+d.height/2){
  c.velocityY=c.velocityY*(-1);
  d.velocityY=d.velocityY*(-1)
}
  drawSprites();
}
