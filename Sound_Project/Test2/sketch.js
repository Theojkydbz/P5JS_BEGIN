var tape, tapegrave, tombegrave, Tricks, Sale, roule, releve, petitpavé, Pavé, grind, boucheegout;
var angle, analyzer, sound1AMP, sound2AMP, sound3AMP, sound4AMP, sound5AMP, sound6AMP, sound7AMP, sound8AMP, sound9AMP, sound10AMP;
var soundamb, sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10;
var MOUSEx, MOUSEy, lolheight;

function preload() {
    soundamb = loadSound("assets/COUCOU.wav")
    sound1 = loadSound("assets/tape.wav");
    sound2 = loadSound("assets/tapegrave.wav");
    sound3 = loadSound("assets/tombegrave.wav");
    sound4 = loadSound("assets/Tricks.wav");
    sound5 = loadSound("assets/Sale.wav");
    sound6 = loadSound("assets/roule.wav");
    sound7 = loadSound("assets/releve.wav");
    sound8 = loadSound("assets/petitpavé.wav");
    sound9 = loadSound("assets/Pavé.wav");
    sound9 = loadSound("assets/grind.wav");
    sound10 = loadSound("assets/boucheegout.wav");
    svg = loadImage('assets/test2.svg');
}




function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    lolheight = 0;

    sound1AMP = new p5.Amplitude();
    sound1AMP.setInput(sound1);
    sound2AMP = new p5.Amplitude();
    sound2AMP.setInput(sound2);
    sound3AMP = new p5.Amplitude();
    sound3AMP.setInput(sound3);
    sound4AMP = new p5.Amplitude();
    sound4AMP.setInput(sound4);
    sound5AMP = new p5.Amplitude();
    sound5AMP.setInput(sound5);
    sound6AMP = new p5.Amplitude();
    sound6AMP.setInput(sound6);
    sound7AMP = new p5.Amplitude();
    sound7AMP.setInput(sound7);
    sound8AMP = new p5.Amplitude();
    sound8AMP.setInput(sound8);
    sound9AMP = new p5.Amplitude();
    sound9AMP.setInput(sound9);
    sound10AMP = new p5.Amplitude();
    sound10AMP.setInput(sound10);



    analyzer = new p5.Amplitude();
    analyzer.setInput(soundamb);

}



function draw() {
    
    var rms = analyzer.getLevel();
    if (soundamb.isPlaying() == false) {
        soundamb.play();
    }
    
    background(0,15);
    fill(255, 255, 0);
    noStroke();
    angle = angle + 10;
    image(svg,width*0.35,height*0.45);
    PlaySound(sound1, 65);
    PlaySound(sound2, 90);
    PlaySound(sound3, 69);
    PlaySound(sound4, 82);
    PlaySound(sound5, 84);
    PlaySound(sound6, 89);
    PlaySound(sound7, 85);
    PlaySound(sound8, 73);
    PlaySound(sound9, 79);
    PlaySound(sound10, 80);

    if (sound1.isPlaying() == true) {
        push();
        var rms1 = sound1AMP.getLevel();
        var redlvl = map(rms1, 0, 0.25, 50, 100)
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 0, 300);
        var color = map(sound1.currentTime(), 0, sound1.duration(), 0, 255);
        fill(255, 0, 0, redlvl);
        rect(0, 0, width, height);
        fill(color, color, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
    }
    if (sound2.isPlaying() == true) {
        push();
        var rms2 = sound2AMP.getLevel();
        translate(width * 0.5, height * 0.5);
        var angle = map(sound2.currentTime(), 0, sound4.duration(), 1, PI);
        var color = map(sound2.currentTime(), 0, sound4.duration(), 100, 255);
        rotate(angle);

        rectMode(CENTER);
        fill(0, 255, 0, 70);
        rect(-width, -height, width, height);
        fill(0, color, 0);
        rect(0, 0, width * 0.4, 25);
        pop()
    }
    if (sound4.isPlaying() == true) {
        push();
        var rms4 = sound4AMP.getLevel();
        var whitelvl = map(rms4, 0, 0.25, 0, 255);
        translate(width * 0.5, height * 0.5);
        var angle = map(sound4.currentTime(), 0, sound4.duration(), 1, PI);
        var color = map(sound4.currentTime(), 0, sound4.duration(), 0, 255);
        fill(whitelvl, whitelvl, whitelvl, color);
        rect(-width / 2, -height / 2, width, height)
        rotate(rms4 * 5);
        fill(color, 0, 0);
        rect(-50, -50, 100, 100);
        pop()
    }
    if (sound3.isPlaying() == true) {
        var rms3 = sound3AMP.getLevel();
        var Back3lvl = map(rms3, 0, 0.25, 0, 255);
        background(0, 0, Back3lvl,Back3lvl);
    }
    if (sound5.isPlaying() == true) {
        var rms5 = sound5AMP.getLevel();
        var Back5lvl = map(rms5, 0, 0.25, 0, 255);
        background(Back5lvl, 0, Back5lvl,Back5lvl);
    }
    if (sound6.isPlaying() == true) {
        var rms6 = sound6AMP.getLevel();
        var Back6lvl = map(rms6, 0, 0.25, 0, 255);
        background(0, Back6lvl, Back6lvl,Back6lvl);
    }
    if (sound7.isPlaying() == true) {
        var rms7 = sound7AMP.getLevel();
        var Back7lvl = map(rms7, 0, 0.25, 0, 255);
        background(Back7lvl, Back7lvl, 0,Back7lvl);
    }

    MOUSEx = windowWidth / 2;
    MOUSEy = windowHeight / 2;
    lolheight = lolheight+0.01;

    push();

    translate(windowWidth / 2, windowHeight / 2)
    rotate(PI + lolheight);
    var opalvl = map(rms, 0, 0.25, 0, 255);
    stroke(opalvl, opalvl, opalvl);
    fill(0, 50, 255);

    line(MOUSEx, MOUSEy, 0, 0);
    line(MOUSEx, 0 - MOUSEy, 0, 0);
    line(0 - MOUSEx, MOUSEy, 0, 0);
    line(0 - MOUSEx, 0 - MOUSEy, 0, 0);

    pop();


}

function PlaySound(sound, keyID) {
    if (keyIsDown(keyID) == true) {
        if (sound.isPlaying() == false) {
            sound.play();
        }
    }
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}
