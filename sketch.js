var ground;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800, 790, 1600, 20);
	paper = new Paper(128, 400, 30);
	rectangle1 = new Dustbin(1200, 690, 20, 180);
	rectangle2 = new Dustbin(1495, 690, 20, 180);
	rectangle3 = new Dustbin(1348, 770, 315, 20);
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);

	ground.display();
	paper.display();
	rectangle1.display();
	rectangle2.display();
	rectangle3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:75, y:-38})
	}
}


