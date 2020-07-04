var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	crumpledball=new Paper(100,100,30);
	ground = new Ground(600,height,1200,20);
	
	rect1= new Dustbin(455,640,20,100);
	rect2=new Dustbin(650,640,20,100);
	rect3=new Dustbin(545,685,200,20);

	


	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  crumpledball.display();
  ground.display();
  
  rect1.display();
  rect2.display();
  rect3.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {

	
			if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(crumpledball.body,crumpledball.body.position,{x:8.5,y:-8.5});
	   
	 }
   }
   
   


