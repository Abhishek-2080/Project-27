
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Ground(600,200,400,30);
	bob0 = new Bob(450,500);
	bob1 = new Bob(500,500);
	bob2 = new Bob(550,500);
	bob3 = new Bob(600,500);
	bob4 = new Bob(650,500);
	bob5 = new Bob(700,500);
	bob6 = new Bob(750,500);

	rope0 = new Rope(bob0.body,roof.body,bob0.Diameter*2,100);
	
	//rope1 = new Rope(bob1.body,roof.body,0,0);
	//rope2 = new Rope(bob2.body,roof.body);
	//rope3 = new Rope(bob3.body,roof.body);
	//rope4 = new Rope(bob4.body,roof.body);
	//rope5 = new Rope(bob5.body,roof.body);
	//rope6 = new Rope(bob6.body,roof.body);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  bob0.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  rope0.display();
  //rope1.display();
 // rope2.display();
 // rope3.display();
 // rope4.display();
  //rope5.display();
 // rope6.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyDown === UP_ARROW){
		Matter.Body.applyForce(bob0.body,bob0.body.position,{x:200,y:200});
	}
}

