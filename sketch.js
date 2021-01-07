
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

	//Create the Bodies Here.
stoneObj=new stone(235,420,30)
detectCollision(stoneObj,mango1);
detectCollision(stoneObj,mango2);
detectCollision(stoneObj,mango3);
detectCollision(stoneObj,mango4);
detectCollision(stoneObj,mango5);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

mouseDragged();
mouseReleased();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body ,{x: 235, y :420})
		launcherObj.attach(stoneObj.body)
	}
}


