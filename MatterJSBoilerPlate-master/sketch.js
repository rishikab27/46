
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var piggy; 
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var emy1, emy2, emy3, fruity

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	piggy= new Pig(50,25,50,50);

	fruity= new Fruit(740,650,80,80);

	box1= new Box(50,50,600,10)
	box2= new Box(350,170,10,250)
	box3= new Box(400,200,10,310)
	box4= new Box(203,350,405,10)
	box5= new Box(200,300,315,10)
	box6= new Box(47,203,10,195)
	box7= new Box(5,200,10,310)
	box8=new Box(165,105,250,10)
	box9= new Box()
	box10=new Box()
3
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  piggy.display()
  fruity.display()

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  
  
 
}



