// Creating the global variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

// Adding physics to the project
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

// Loading images to the package and helicopter
function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


// Calling the setup function
function setup() {
	// Creating a canvas
	createCanvas(800, 700);
	
	// Setting the rectangle creation mode to center
	rectMode(CENTER);

	// Creating a package sprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	// Creating a helicopter sprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	// Creating a ground sprite
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	// Creating an engine and adding world to it
	engine = Engine.create();
	world = engine.world;

	// Creating a package cirlce
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.55, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
  
}



// Main part of the function called
function draw() {

		  // Updating the engine
		  Engine.update(engine);
		  rectMode(CENTER);

		  // Colouring the background
		  background(0);

		  // Changing the x and the y position of the package sprite
		  packageSprite.x= packageBody.position.x 
		  packageSprite.y= packageBody.position.y 

		  // Moving the package
		  if(keyDown("DOWN_ARROW")) {
			Matter.Body.setStatic(packageBody,false);
		  }

		  // Drawing the sprites
		  drawSprites();
 
}
