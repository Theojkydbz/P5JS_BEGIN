var sound1, sound2, sound3, sound4, sound5, sound6, sound7;
var angle;

function preload() {
    sound1 = loadSound("assets/SOUND1.wav");
    sound2 = loadSound("assets/SOUND2.wav");
    sound3 = loadSound("assets/SOUND3.wav");
    sound4 = loadSound("assets/SOUND4.wav");
    sound5 = loadSound("assets/SOUND5.wav");
    sound6 = loadSound("assets/SOUND6.wav");
    sound7 = loadSound("assets/SOUND7.wav");
}




function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

}



function draw() {
    background(0);
    fill(255, 255, 0);
    noStroke();
    angle = angle + 10;

    PlaySound(sound1, 65);
    PlaySound(sound2, 90);
    PlaySound(sound3, 69);
    PlaySound(sound4, 82);
    PlaySound(sound5, 84);
    PlaySound(sound6, 89);
    PlaySound(sound7, 85);

    if (sound1.isPlaying() == true) {
        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 0, 300);
        var color = map(sound1.currentTime(), 0, sound1.duration(), 0, 255);
        fill(255,0,0,70);
        rect(0,0, width, height);
        fill(color, color, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
    }
    if (sound2.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        var angle = map(sound2.currentTime(), 0, sound4.duration(), 1, PI);
        var color = map(sound2.currentTime(), 0, sound4.duration(), 100, 255);
        rotate(angle);
        
        rectMode(CENTER);
        fill(0, 255, 0,70);
        rect(-width,-height, width, height);
        fill(0, color, 0);
        rect(0, 0, width*0.4, 25);
        pop()
    }
    if (sound4.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        var angle = map(sound4.currentTime(), 0, sound4.duration(), 1, PI);
        var color = map(sound4.currentTime(), 0, sound4.duration(), 0, 255);
        rotate(angle);
        fill(color, 0, 0);
        rect(-50, -50, 100, 100);
        pop()
    }
    if (sound3.isPlaying() == true) {
        background(0, 0, 255);
    }
    if (sound5.isPlaying() == true) {
        background(255, 0, 255);
    }
    if (sound6.isPlaying() == true) {
        background(0, 255, 255);
    }
    if (sound7.isPlaying() == true) {
        background(255, 255, 0);
    }
    /*/if (keyIsDown(65) == true) {
        if (sound1.isPlaying() == false) {
            sound1.play();
            for (var i; i < 30; i++) {
                ellipse(width * 0.5, height * 0.5, i * 10, i * 10);
            }
        }
    }
    if (keyIsDown(90) == true) {
        if (sound2.isPlaying() == false) {
            sound2.play();
            for (var i; i < 30; i++) {
                ellipse(width * 0.5, height * 0.5, i * 10, i * 10);
            }
        }
    }
    if (keyIsDown(69) == true) {
        if (sound3.isPlaying() == false) {
            sound3.play();
            for (var i; i < 30; i++) {
                ellipse(width * 0.5, height * 0.5, i * 10, i * 10);
            }
        }
    }
    if (keyIsDown(82) == true) {
        if (sound4.isPlaying() == false) {
            sound4.play();
            for (var i; i < 30; i++) {
                push();
                translate(width * 0.5, height * 0.5)
                rotate(PI*i)
                line(-100, -20, 100, -20);
                pop();
            }
        }
    }

/*/

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
