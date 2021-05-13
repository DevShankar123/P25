
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperobject;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperobject=new Paper(233,600,68)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
 

  groundObject.display();
  paperobject.display();
  dustbinObj.display();
  

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperobject.body ,paperobject.body.position, {x:1000,y:-1000});
	}
}

