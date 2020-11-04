var movableRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movableRect = createSprite(400, 300, 70, 50);
  movableRect.shapeColor = "green";
  movableRect.velocityX = 2;
  //movableRect.velocityY = -4;
  fixedRect = createSprite(600, 300, 50, 50);
  fixedRect.shapeColor = "green";
}

function draw() {
  background("black"); 
  
  //movableRect.y = mouseY;
  //movableRect.x = mouseX;

  if(movableRect.x-fixedRect.x < (movableRect.width+fixedRect.width)/2
    && fixedRect.x-movableRect.x < (movableRect.width+fixedRect.width)/2
    && movableRect.y-fixedRect.y < (movableRect.height+fixedRect.height)/2
    && fixedRect.y-movableRect.y < (movableRect.height+fixedRect.height)/2) {

  movableRect.velocityX = movableRect.velocityX*-1;
  //movableRect.velocityY = movableRect.velocityY*-1;
    movableRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movableRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }




  console.log(movableRect.x - fixedRect.x);
  drawSprites();
}