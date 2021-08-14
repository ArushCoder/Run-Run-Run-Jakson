var Runner, Runner_running, edges;
var pathImage 

function preload(){
 Runner_running = loadAnimation("Runner-1.png","Runner-2.png")  
 pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
 
   Runner = createSprite(50,160,20,50)
   Runner.loadAnimation("Runner_running")
  
  }

function draw() {
  background(0);

}
