var car, wall, line;
var speed, weight;
var deformation
var grade;

function setup() {
  createCanvas(1600,600);

  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));

  wall = createSprite(1500, 200, 60, 200);
  wall.shapeColor = "white";

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  line = createSprite(800, 400, 1600, 5);
  line.shapeColor = "white";

  deformation = 0.5 * weight * speed * speed / 22500
}

function draw() {
  background("black");

  if (wall.x - car.x <= car.width/2 + wall.width/2)
  {
    car.velocityX = 0;
    
    if (deformation <= 80){
      car.shapeColor = "green";
      grade = "good";
    }
    else if (deformation > 80 && deformation < 180){
      car.shapeColor = "yellow";
      grade = "average";
    }
    else if (deformation >= 180){
      car.shapeColor = "red";
      grade = "bad";
    }
  }

  drawSprites();

  fill("Red");
  textSize(20);
  text("Speed= "+ speed, 725, 450);
  text("Weight= "+ weight, 725, 480);
  text("Deformation= "+ deformation, 725, 510);
  text("Grade= "+ grade, 725, 540);
  fill("pink");
  textSize(30)
  text("Press F5 for a new car", 700, 75);
}