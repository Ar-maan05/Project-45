const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, canon, canonBall, tower, boat;
var backGroundImg;
var angle;
var ship, shipImg; 
var shipGroup;
var tower, towerImg;
var gameOverImg, dangerImg;
var cannon_base, canonImg, cannon_baseImg;

function preload(){
  backGroundImg = loadImage("background.gif");
  shipImg = loadImage("pirate-ship.png");
  towerImg = loadImage("tower.jpg");
  gameOverImg = loadImage("game-over.png");
  dangerImg = loadImage("danger.png");
  canonImg = loadImage("CANON.png");
  cannon_baseImg = loadImage("cannon_base.png");
}
function setup(){
  var canvas = createCanvas(displayWidth, displayHeight - 120);
  engine = Engine.create();
  world = engine.world;
  angle = -PI/4;
  ground = new Ground(displayWidth/2, height, displayWidth, 20);
  //tower = new Tower(180, 400, 230, 450);
  tower = createSprite(180, 400, 230, 450);
  tower.addImage(towerImg);
  tower.scale = 0.7;
  canon = createSprite(160, 100, 120, 120);
  canon.addImage(canonImg);
  canon.scale = 0.07;
  cannon_base = createSprite(180, 110, 120, 120);
  cannon_base.addImage(cannon_baseImg);
  cannon_base.scale = 0.07;
  shipGroup = createGroup();
}
function draw(){
  background(255);
  text(mouseX + "," + mouseY, mouseX, mouseY);
  image(backGroundImg, 0, 0, displayWidth, displayHeight - 120);
  ground.display();
  //tower.display();
  //canon.display();
  spawnShips();
  if(shipGroup.isTouching(tower)){
    //text("Game Lost!", 350, 600);
    console.log("game lost");
    image(gameOverImg, 700, 300, 250, 200);
    image(dangerImg, 750, 200, 150, 150);
    shipGroup.velocityXEach(0);
    //Matter.Body.setPosition(canon.body, {x:150, y:600});
  }
  drawSprites();
}
function spawnShips(){
  if(frameCount%10 === 0){
    ship = createSprite(1500, random(520, 600), 20, 20);
    ship.addImage(shipImg);
    ship.scale = 0.4;
    ship.velocityX = -100;
    shipGroup.add(ship);
  }
}