function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(0);  
  
} 

function draw() {  
  stroke(255,255,255)
  line(mouseX, mouseY, windowWidth/2, windowHeight/2 );
  line(mouseX, windowHeight-mouseY, windowWidth/2, windowHeight/2);
  line(windowWidth-mouseX, mouseY, windowWidth/2, windowHeight/2);
  line(windowWidth-mouseX, windowHeight-mouseY, windowWidth/2, windowHeight/2);
  
}

function windowResized(){
      resizeCanvas(windowWidth, windowHeight);
      background(0);
  }