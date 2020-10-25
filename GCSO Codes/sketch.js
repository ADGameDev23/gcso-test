var car,wall;
var speed ;
var weight;
var deformation;
var gameState = "testStart";
function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "purple";
  

  wall = createSprite(700,200,50,350);
  wall.shapeColor = "lightblue"; 
}

function draw() {
  background("orange");

  drawSprites();
   if(gameState === "testStart"){
    textSize(30);
  fill("blue"); 
    text("Press the 'S' key To Start The TEST.",200,200);
    car.shapeColor = "purple";
   }
 
  if (gameState === "testStart"&&keyDown("s")){
   gameState = "play";
   speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  deformation = (0.5 * speed * speed * weight/22500);
  }
 
  if (gameState === "play"){
  car.velocityX = speed;
  car.depth = 5;
  textSize(20);
  fill("blue");
  text("Speed Of Car : "+speed,50,20);
  text("Weight Of Car: "+ weight,600,20);
  
  if(car.x + car.width > wall.x&&
    wall.x + wall.width > car.x&&
    car.y + car.height > wall.y&&
    wall.y + wall.height > car.y){
      
      if (keyWentDown("r")){
        gameState = "testStart";
        car.x = 50;
        car.velocityX = speed;
        speed = Math.round(random(55,90));
       weight = Math.round(random(400,1500));
       deformation = (0.5 * speed * speed * weight/22500);
       
      }
      car.velocityX = 0;
      textSize(50);
      text ("Deformation  Rate is "+ Math.round(deformation),200,200);
      text("Press R to Restart.",175,300)
      if(deformation>180){
        car.shapeColor = "red";
        textSize(20);
        fill("blue");
        text("According to the deformation rate , this speed will give high-to-fatal injuries like death , coma,multiple fractures ,etc",50,250);
      }
      if(deformation<180 && deformation>80){
        car.shapeColor = "khaki";
        textSize(20);
        fill("blue");
        text("According to the deformation rate , this speed will give moderate-to-moderate~high injuries , like fractures muscle injury , etc",50,250);
      }
      if(deformation<80){
        car.shapeColor = "lightgreen";
        textSize(20);
        fill("blue");
        text("According to the deformation rate , this speed will give little-to-low~moderate injuries ,like minor ccuts , bruises etc.",50,250)
      }
    }
  } 
}