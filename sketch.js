var bg, sleep, brush, gym, bath, move, eat;

var iss,astronaut,edgy;
function preload(){
  bg = loadImage("images/iss.png");

  sleep = loadImage("images/sleep.png");
  brush = loadImage("images/brush.png");

  gym = loadAnimation("images/gym1.png","images/gym2.png");

  bath = loadAnimation("images/bath1.png","images/bath2.png");
 
  eat = loadAnimation("images/eat1.png","images/eat2.png");

}

function setup() {
  
  createCanvas(600, 600);
  edgy = createEdgeSprites();
  iss = createSprite(200,200);
  iss.addImage("ISS",bg);
  iss.scale = (0.1);

  astronaut = createSprite(200,200);
  astronaut.addImage("sleepy",sleep);
  astronaut.scale = (0.05);
}

function draw() {
  background(250);
  drawSprites()
  text("Arrow keys to do stuff",0,12);
  if(keyDown("up")){
    astronaut.addAnimation("bwush",brush);
    astronaut.changeAnimation("bwush");
    astronaut.y = 350;
    astronaut.setVelocity(0,0);
  }
  if(keyDown("down")){
    astronaut.addAnimation("gym",gym);
    astronaut.changeAnimation("gym");
    astronaut.y = 350;
    astronaut.setVelocity(0,0);
  }
  if(keyDown("left")){
    astronaut.addAnimation("bath",bath);
    astronaut.changeAnimation("bath");
    astronaut.y = 350;
    astronaut.setVelocity(0,0);
  }
  if(keyDown("right")){
    astronaut.addAnimation("et",eat);
    astronaut.changeAnimation("et");
    astronaut.y = 350;
    astronaut.setVelocity(2,-2);
  }
   
  astronaut.bounceOff(edgy)
}