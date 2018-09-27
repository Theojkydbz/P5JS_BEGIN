function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(0);  
  
} 

function draw() {  
   var size = (abs(pmouseX-mouseX) + abs(pmouseY - mouseY)) + 25
  stroke(0)
  fill(0,180)
  draw_lines(mouseX, mouseY, size , frameCount/50)

}

function windowResized(){
      resizeCanvas(windowWidth, windowHeight);
      background(0);
  }