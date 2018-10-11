var song, analyzer;

function preload() {
  song = loadSound('assets/01 Memories.mp3');
}




 function setup() {
  createCanvas(windowWidth, windowHeight);
     background(0);
     song.loop();
     
     // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

     // Patch the input to an volume analyzer
  analyzer.setInput(song);

lolwidth = 0;
lolheight = 0;
 }

 function draw() {
     // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
     stroke(0,0,0);
     fill(0,0,0,20);
     rect(0,0,width,height);
     
     //Couleur RGB Random
        R=random(0,255);
        G=random(0,255);
        B=random(0,255);

     
     stroke(R,0,B);
     fill(R,0,B);
     lolwidth = lolwidth+1;
     lolheight = lolheight+(0.01+rms*0.05);
       
     MOUSEx = windowWidth/2+rms*1700;
     MOUSEy = windowHeight/2+rms*1700;
     

push();
translate(windowWidth/2, windowHeight/2)
rotate(PI+lolheight);
     ellipse(0, 0, 10+rms*1700, 10+rms*1700);
     
    G=random(180,255);
    B=random(180,255);
stroke(0,G,B);
fill(0,G,B);

line(MOUSEx, MOUSEy, 0, 0 );    
line(MOUSEx, 0-MOUSEy, 0, 0);
line(0-MOUSEx, MOUSEy, 0, 0);
line(0-MOUSEx, 0-MOUSEy, 0, 0);
     
     
pop();
     fill(0,0,0);
     ellipse(width*0.5, height*0.5, width*0.03, width*0.03);
 }



function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}