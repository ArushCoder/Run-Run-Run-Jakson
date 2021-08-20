var Runner, Runner_running, edges;
var pathImage 

function preload(){
 Runner_running = loadAnimation("Runner-1.png","Runner-2.png")  
 pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  path = createSprite (200,200)
  path.addImage (pathImage) 
  path.velocityY = 4 

   Runner = createSprite(195,360,20,50)
   Runner.addAnimation("Runner_running", Runner_running)
  Runner.scale = 0.06
  
  Leftedge = createSprite (0,0,100,800)
  Leftedge.visible = false
  Rightedge = createSprite (410,0,100,800)
  Rightedge.visible = false
}  
function draw() {
  background(0);
  if (path.y>400) {
  path.y = height/2    
  }
 Runner.x = mouseX
  drawSprites ()
}
