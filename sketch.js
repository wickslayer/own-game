const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var BulletArray=[];
var bullets;
var targetG; 
var gameState="wait";

function preload(){
gunIMG = loadImage("images/M416.jpeg");
targetIMG = loadImage("images/target.png");
bulletIMG = loadImage("images/gun.png");
}

function setup() {
  createCanvas(800,400); 
  engine=Engine.create();
  world=engine.world; 
  gun= createSprite(160,320,20,20);
  gun.addImage(gunIMG);
  gun.scale=0.8
  gun.visible=false;
  targetG=new Group();
}


function draw() {
background("black");
if(gameState=== "wait"){
fill("WHITE") 
textSize(20)
text("WICK'S TRAINING",300,50);
text("RULES",150,150)
text("Press SPACE key to start the game")
 
}
else if(gameState==="play"){
  gun.visible=true;
  gun.y=mouseY;
  fill("white");
  text(mouseX+" , "+mouseY,200,30);
  spawnTarget();
  drawSprites();
  
}
if(keyDown("SPACE")){
gameState="play"
}
}
function spawnTarget(){
if(frameCount%150===0){
var target= createSprite(600,100,20,20);
target.velocityY=2
target.addImage(targetIMG);
target.lifetime=200;
target.scale=0.08
targetG.add(target); 
}
}

function summonBullet(){
  if(keyDown("SPACE")){
    var bullet= createSprites(160,320,20,20);
    bullet.velocityX=-2
    bullet.addImage(bulletIMG);
    bullet.lifetime=100;
  }
}
