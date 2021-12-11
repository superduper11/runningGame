var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var bombImg,bomb;
var explosionImg, explosion;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png");
  explosionImg = loadImage("explosion.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

//explosion
explosion = createSprite(180,340,30,30);
explosion.scale=0.3;
explosion.addAnimation("explosion",explosionImg)
explosion.visible=false;

//creating energy drink
bomb = createSprite(200,5,50,50);
bomb.scale=0.09;
bomb.addImage("powerup",bombImg);
bomb.velocityY=5;
bomb.velocityX=-3;

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;


}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  explosion.x = World.mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/200;
  }

  if(path.y > 400 ){
path.y = height/2;}

if(path.y > 400 )
{
  path.y = height/2;
}

if(boy.isTouching(bomb))
{
  boy.visible=false;
  explosion.visible=true;
}
createEdgeSprites
bomb.bounceOff(edges)
  drawSprites();
}
