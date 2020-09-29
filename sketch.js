
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

rope=new Chain(bob1,bob2,{x:200,y:200})	

	bob1=new Bob(400,450,20)
    bob2=new Bob(360,450,20)
    bob3=new Bob(320,450,20)
	bob4=new Bob(440,450,20)
	bob5=new Bob(480,450,20)
	roof=new Roof(400,300,200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,0);
  
  

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  drawSprites();
 
}



