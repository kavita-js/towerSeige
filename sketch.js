const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var a;
var circles=[];
var polygon, polygonImg;
var score = 0

function preload(){
  polygonImg = loadImage("polygon.png");

  getTime();
}

function setup() {
  createCanvas(800,800);
  stroke(255)
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(600, 500, 300, 20);

  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
  box5 = new Box(450, 235, 30, 40);

  box6 = new Box(360, 195, 30, 40);
  box7 = new Box(390, 195, 30, 40);
  box8 = new Box(420, 195, 30, 40);

  box9 = new Box(390, 155, 30, 40);

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();


  sling = new Rope(this.polygon, {x:100, y:200});

  polygon = Bodies.circle(10, 200, 20)
  imageMode(CENTER)
  image(polygonImg, polygon.position.x, polygon.position.y, 40,40)

  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  textSize(30)
  fill("white")
  text("score " + score, 750, 40)
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

  sling.display();

  polygon.display();
  
  a=a-1;
  
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }
} 



function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(polygon.body, {x:200 , y:50});
      rope.attach(polygon.body)
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