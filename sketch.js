const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground,player,comp;

const SCALE=20;



function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  
  ground =new Ground();
  player = new Player(15, 15, 0, -1);
  comp=new Computer();
  
  rectMode(CENTER);
}

function draw() 
{
  background("pink");
  scale(SCALE);
  frameRate(4);

  player.update();
player.draw();
comp.update();
comp.draw();
comp.move();

checkCollisions();
  
  Engine.update(engine);
}

function checkCollisions() {
	if (player.hasCollided(comp)) {
  	comp.score++;
    reset();
  } else if (comp.hasCollided(player)) {
  	player.score++;
    reset();
  }

  
}

function reset(){
  comp.reset();
  player.reset();
}

function keyPressed() {
  if (keyCode === UP_ARROW ) {
    if (player.ySpeed != 1) {
    	player.setSpeed(0, -1);
    }
  } else if (keyCode === LEFT_ARROW ) {  
    if (player.xSpeed != 1) {
    	player.setSpeed(-1, 0);
    }
  } else if (keyCode === RIGHT_ARROW ) {
    if (player.xSpeed != -1) {
    	player.setSpeed(1, 0);
    }
  } else if (keyCode === DOWN_ARROW ) {
    if (player.ySpeed != -1) {
    	player.setSpeed(0, 1);
    }
  }  
}