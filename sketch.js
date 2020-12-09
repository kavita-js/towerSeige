const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygon, polygonImg;
var score = 0

function preload(){
  polygonImg = loadImage("polygon.png");

  getTime();
}

function setup() {
  createCanvas(1000,800);
  stroke(255)
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(600, 500, 300, 20);

  box1 = new Box(500, 300, 30, 40);
   box2 = new Box(530, 300, 30, 40);
  box3 = new Box(560, 300, 30, 40);
  box4 = new Box(590, 300, 30, 40);
  box5 = new Box(620, 300, 30, 40);

  box6 = new Box(520, 250, 30, 40);
  box7 = new Box(550, 250, 30, 40);
  box8 = new Box(580, 250, 30, 40);

  box9 = new Box(560, 200, 30, 40);

   polygon = Bodies.circle(250, 300, 20)
World.add(world,polygon);

  sling = new Rope(this.polygon, {x:250, y:300});

 
  
  
}

function draw() {
  
  Engine.update(engine);
  background(0);  
  textSize(30)
  fill("white")
  text("score " + score, 750, 40)

  text(mouseX + "," + mouseY, 200,50)
  ground.display();

  box1.display();
   box2.display();
  box3.display();
  box4.display();
  box5.display();
 box6.display();
  box7.display();
  box8.display();
  box9.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();

  sling.display();

  imageMode(CENTER)
  image(polygonImg, polygon.position.x, polygon.position.y, 40,40)

 
 
}





function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
     Matter.Body.setPosition(this.polygon, {x: 250 , y: 300});
     sling.attach(this.polygon)
  }
}

async function getTime(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");

  var responsejson = await response.json();
  console.log(responsejson);

  var dt = responsejson.datetime
  console.log(dt);

  var hour = dt.slice(11,13)
  console.log(hour)

  if(hour >= 06 && hour <= 17){
      background(255)
  }
  else{
    background(0)
  }
  

}