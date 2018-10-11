
function setup() {
    createCanvas(windowWidth, windowHeight);
    smooth();
    background(0);
    division=PI/30;
    
 }
function draw() {

    Anglesec=sec*division;
    Anglemin=min*division;
    Anglehour=hour*division;
    
    noStroke();
    fill(255,0,0);
    ellipse(width/2,height/2,width*0.5,width*0.5);
    
    fill(200,0,0);
    ellipse(width/2,height/2,width*0.3,width*0.3);
    
    fill(100,0,0);
    ellipse(width/2,height/2,width*0.2,width*0.2);
   
  push();
  translate(width/2,height/2);
  fill(200,0,0);
  Anglesec = second() * division;
  rotate(Anglesec);
  rect(4, height*0.1,-4, height*0.1)
  pop();
    
  push();
  translate(width/2,height/2);
  fill(200,0,0);
  Anglemin = minute() * division;
  rotate(Anglemin + (Anglesec / 60));
  rect(4, height*0.2,-4, height*0.2)
  pop();
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}
