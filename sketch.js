
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render; 

var engine , world ;
var ground1;
var dustImg,dustSprite;
var box1,box2,box3;
var ball;


function preload(){
	dustImg=loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(1200, 400);
	
	dustSprite=createSprite(1000,250,10,10);
	dustSprite.addImage(dustImg);
	dustSprite.scale=0.5;

	engine = Engine.create();
	world = engine.world;

    

	//Create the Bodies Here.
	ground1=new Ground(600,350,1200,20);

	box1=new Box(1000,330,150,20);
	box2=new Box(930,290,20,100);
	box3=new Box(1070,290,20,100);
	ball=new Ball(200,250,50);
	var render = Render.create({ element: document.body, engine: engine, options: {width: 1600, height: 700, wireframes: false } }
	 );
	
  


	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground1.display();
  dustSprite.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  
  keyDown();
  drawSprites();
 
}
function keyDown(){
	if(keyCode === UP_ARROW){

	
	Matter.Body.applyForce(ball.body, ball.body.position, {x:200,y:-150});


	

	}


}



