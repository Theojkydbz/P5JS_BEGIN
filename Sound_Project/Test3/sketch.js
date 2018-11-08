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

    background(0, 255, 255, 15);
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
        background(0, 0, Back3lvl, Back3lvl);
    }
    if (sound5.isPlaying() == true) {
        var rms5 = sound5AMP.getLevel();
        var Back5lvl = map(rms5, 0, 0.25, 0, 255);
        background(Back5lvl, 0, Back5lvl, Back5lvl);
    }
    if (sound6.isPlaying() == true) {
        var rms6 = sound6AMP.getLevel();
        var Back6lvl = map(rms6, 0, 0.25, 0, 255);
        background(0, Back6lvl, Back6lvl, Back6lvl);
    }
    if (sound7.isPlaying() == true) {
        var rms7 = sound7AMP.getLevel();
        var Back7lvl = map(rms7, 0, 0.25, 0, 255);
        background(Back7lvl, Back7lvl, 0, Back7lvl);
    }

    MOUSEx = windowWidth / 2;
    MOUSEy = windowHeight / 2;
    lolheight = lolheight + 0.01;

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
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rect(0, height * 0.5, width, height * 0.5);
    translate(windowWidth / 2, windowHeight / 2);
    stroke(255, 255, 255)
    beginShape();
    curveVertex(-199.99998, 13.104172);
    curveVertex(-52.1875, 13.104172);
    curveVertex(-52.63021, 12.8724);
    curveVertex(-54.524742, 10.950522);
    curveVertex(-55.345055, 8.847006);
    curveVertex(-55.3125, 7.5);
    curveVertex(-55.084633, 6.1783857);
    curveVertex(-54.147133, 4.303386);
    curveVertex(-52.52604, 2.838544);
    curveVertex(-52.1875, 2.7083359);
    curveVertex(-51.927086, 2.604169);
    curveVertex(-50.852867, 1.8424487);
    curveVertex(-50.442707, 1.0807292);
    curveVertex(-50.52083, 0.625);
    curveVertex(-50.70312, 0.677083);
    curveVertex(-51.953125, 0.677083);
    curveVertex(-52.39583, 0.20833588);
    curveVertex(-52.65625, -0.44270706);
    curveVertex(-53.125, -1.5364561);
    curveVertex(-53.64583, -1.6666641);
    curveVertex(-53.541664, -2.1875);
    curveVertex(-53.85417, -2.7083359);
    curveVertex(-58.64583, -2.7083359);
    curveVertex(-61.125, -3.1171856);
    curveVertex(-66.02344, -4.265623);
    curveVertex(-68.4375, -5.0);
    curveVertex(-77.5, -8.229164);
    curveVertex(-81.354164, -9.791664);
    curveVertex(-81.71875, -9.947914);
    curveVertex(-83.359375, -10.944008);
    curveVertex(-84.17969, -11.822914);
    curveVertex(-84.27083, -12.291664);
    curveVertex(-84.27083, -13.124997);
    curveVertex(-83.80208, -14.062497);
    curveVertex(-83.02083, -14.375);
    curveVertex(-82.3763, -14.479166);
    curveVertex(-79.368484, -14.137368);
    curveVertex(-71.3802, -12.36979);
    curveVertex(-63.22917, -10.0);
    curveVertex(-59.055992, -8.828126);
    curveVertex(-52.669273, -7.7441406);
    curveVertex(-47.00521, -7.734373);
    curveVertex(-46.35417, -7.916664);
    curveVertex(-46.25, -8.125);
    curveVertex(-33.64583, -8.333336);
    curveVertex(4.6875, -8.125);
    curveVertex(30.520828, -7.916664);
    curveVertex(32.55208, -7.734373);
    curveVertex(43.157547, -7.4023438);
    curveVertex(50.36458, -7.871093);
    curveVertex(53.02083, -8.541664);
    curveVertex(58.38541, -10.156249);
    curveVertex(67.53579, -12.197265);
    curveVertex(72.0768, -12.910154);
    curveVertex(73.22914, -12.916664);
    curveVertex(74.843735, -12.786459);
    curveVertex(76.416, -12.229819);
    curveVertex(76.93357, -11.341146);
    curveVertex(76.97914, -10.625);
    curveVertex(76.91404, -9.889322);
    curveVertex(76.20115, -8.776039);
    curveVertex(74.14061, -7.526039);
    curveVertex(72.187485, -6.666664);
    curveVertex(69.218735, -5.390623);
    curveVertex(61.220688, -2.7539072);
    curveVertex(55.761707, -1.5820336);
    curveVertex(53.437485, -1.4583359);
    curveVertex(50.416656, -1.6666679);
    curveVertex(46.562485, -2.0833359);
    curveVertex(46.354156, -1.0416641);
    curveVertex(45.52083, -1.0416641);
    curveVertex(45.468742, -0.7031231);
    curveVertex(44.89257, 0.7226559);
    curveVertex(44.16015, 1.308593);
    curveVertex(43.64583, 1.25);
    curveVertex(43.170563, 1.1523445);
    curveVertex(42.789703, 1.3867191);
    curveVertex(42.91666, 2.109373);
    curveVertex(43.02083, 2.2916641);
    curveVertex(43.64583, 3.5416641);
    curveVertex(44.140617, 3.749998);
    curveVertex(46.31835, 5.6640625);
    curveVertex(47.343742, 7.890626);
    curveVertex(47.39583, 9.375);
    curveVertex(47.194, 10.846354);
    curveVertex(45.865875, 12.955727);
    curveVertex(43.990875, 14.205727);
    curveVertex(42.194, 14.752602);
    curveVertex(41.562485, 14.791664);
    curveVertex(199.99998, 14.791664);
    curveVertex(199.99998, 14.791664);
    endShape();
    beginShape();
    curveVertex(-45.83333, 12.541672);
    curveVertex(-44.28841, 11.965501);
    curveVertex(-42.67611, 10.506516);
    curveVertex(-42.208336, 8.158857);
    curveVertex(-42.22917, 7.020836);
    curveVertex(-42.070312, 6.5859404);
    curveVertex(-41.197266, 6.011722);
    curveVertex(-39.57813, 5.625005);
    curveVertex(-39.22917, 5.6041718);
    curveVertex(-39.40365, 5.35938);
    curveVertex(-39.861656, 4.301761);
    curveVertex(-39.665367, 3.8300807);
    curveVertex(-39.22917, 3.8333359);
    curveVertex(-38.69922, 3.7363331);
    curveVertex(-37.659176, 2.3623114);
    curveVertex(-36.42968, -0.49999428);
    curveVertex(-36.229156, -1.1458282);
    curveVertex(29.375, -1.1458282);
    curveVertex(29.453125, -0.49999428);
    curveVertex(30.146484, 2.4062586);
    curveVertex(30.937496, 3.859385);
    curveVertex(31.458328, 4.0208435);
    curveVertex(31.940096, 4.0820417);
    curveVertex(32.379547, 4.6328235);
    curveVertex(32.36978, 5.7343874);
    curveVertex(32.291656, 5.9791794);
    curveVertex(32.187492, 6.0677223);
    curveVertex(32.42187, 6.6692896);
    curveVertex(33.75, 6.8750153);
    curveVertex(34.498695, 6.9616013);
    curveVertex(35.133453, 7.322927);
    curveVertex(35.104156, 8.346365);
    curveVertex(35.20833, 9.541679);
    curveVertex(35.598953, 10.872405);
    curveVertex(36.907543, 12.544278);
    curveVertex(38.27473, 13.280607);
    curveVertex(39.166656, 13.4583435);
    curveVertex(39.166656, 13.4583435);
    endShape();


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
