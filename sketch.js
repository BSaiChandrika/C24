
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,box1,box2,box3; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    var ground_options ={
        isStatic: true
	}

	ground = Bodies.rectangle(400,190,800,20,ground_options);
	World.add(world,ground);
	
	var paper_options ={
        isStatic: true
    }

	paper = Bodies.circle(80,160,20,paper_options);
	  World.add(world,paper);
	  
	  box1=new Dustbin(600,170,150,20);
	  box2=new Dustbin(525,130,20,70);
	  box3=new Dustbin(675,130,20,70);

   	Engine.run(engine);

	console.log(ground);
  
}


function draw() {
  background(0);
	rectMode(CENTER);
	fill("yellow");
    rect(ground.position.x,ground.position.y,800,20);
	ellipseMode(RADIUS);
	fill("violet");
	ellipse(paper.position.x,paper.position.y,20,20);
	
	box1.display();
  	box2.display();
	box3.display();
	  
	text (mouseX+","+mouseY,mouseX,mouseY);

  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}
}



