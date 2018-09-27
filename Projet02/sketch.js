var song, analyzer;

function preload() {
  song = loadSound('assets/Tyler, The Creator - 911 (Instrumental).mp3');
}




 function setup() {
  createCanvas(windowWidth, windowHeight);
     background(0);
     song.loop();
     
     // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

     // Patch the input to an volume analyzer
  analyzer.setInput(song);
} 



 function draw() {
     // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
     
     //Couleur RGB Random
        R=random(0,255);
        G=random(0,255);
        B=random(0,255);

     
     stroke(R,G,B);
     fill(R,G,B);
     
     MOUSEx = windowWidth/2+rms*1700;
     MOUSEy = windowHeight/2+rms*1700;
     
line(MOUSEx, MOUSEy, windowWidth/2, windowHeight/2 );
line(MOUSEx, windowHeight-MOUSEy, windowWidth/2, windowHeight/2);
line(windowWidth-MOUSEx, MOUSEy, windowWidth/2, windowHeight/2);
line(windowWidth-MOUSEx, windowHeight-MOUSEy, windowWidth/2, windowHeight/2);
     
     ellipse(width*0.5, height*0.5, 10+rms*1700, 10+rms*1700);
 }



function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}