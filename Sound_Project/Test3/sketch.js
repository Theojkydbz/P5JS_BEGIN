var tape, tapegrave, tombegrave, Tricks, Sale, roule, releve, petitpavé, Pavé, grind, boucheegout;
var angle, analyzer, sound1AMP, sound2AMP, sound3AMP, sound4AMP, sound5AMP, sound6AMP, sound7AMP, sound8AMP, sound9AMP, sound10AMP;
var soundamb, sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10;
var MOUSEx, MOUSEy, lolheight;
var snowflakes = []
var snowflakes2 = []

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

    background(19, 50, 117, 15);
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

    push()
    translate(0, height * 0.5);
    fill(47, 49, 53);
    noStroke;
    rect(0, 0, width, height * 0.6);
    

    let t = frameCount / 60; // update time

    // create a random number of snowflakes each frame
    if (frameCount % 70 == 0) {
        for (var i = 0; i < 1; i++) {
            snowflakes.push(new snowflake(windowWidth, windowHeight)); // append snowflake object
        }
    }
    // loop through snowflakes with a for..of loop
    for (var i = 0; i < snowflakes.length; i++) {
        snowflakes[i].update(t); // update snowflake position
        snowflakes[i].display(); // draw snowflake
    }
    
    if (frameCount % 80 == 0) {
        for (var i = 0; i < 1; i++) {
            snowflakes2.push(new snowflake2(windowWidth, windowHeight)); // append snowflake object
        }
    }

    // loop through snowflakes with a for..of loop
    for (var i = 0; i < snowflakes2.length; i++) {
        snowflakes2[i].update(t); // update snowflake position
        snowflakes2[i].display(); // draw snowflake
    }
    pop();

    push()
    fill(255, 255, 255)
    stroke(255, 255, 255)
    translate(windowWidth*0.5, windowHeight*0.5);
    stroke(255, 255, 255)
    beginShape();
    curveVertex(-92.31621, 16.630905);
    curveVertex(-92.22039, 17.109993);
    curveVertex(-92.116905, 20.174965);
    curveVertex(-92.49117, 22.889242);
    curveVertex(-93.539795, 25.798271);
    curveVertex(-95.5376, 28.547043);
    curveVertex(-98.75937, 30.78056);
    curveVertex(-103.47992, 32.143806);
    curveVertex(-106.56775, 32.329697);
    curveVertex(-108.1542, 32.332092);
    curveVertex(-110.97142, 32.039696);
    curveVertex(-114.50174, 31.057953);
    curveVertex(-117.920135, 28.87618);
    curveVertex(-120.1637, 26.10585);
    curveVertex(-121.47449, 23.12783);
    curveVertex(-122.09453, 20.323006);
    curveVertex(-122.26959, 17.13299);
    curveVertex(-122.21746, 16.630905);
    curveVertex(-122.26346, 16.22004);
    curveVertex(-122.100174, 12.511894);
    curveVertex(-120.926796, 8.785641);
    curveVertex(-119.38173, 6.4421787);
    curveVertex(-116.99127, 4.546713);
    curveVertex(-113.576614, 3.4048057);
    curveVertex(-111.37549, 3.2624207);
    curveVertex(-111.967255, 3.2746868);
    curveVertex(-115.61331, 1.4384372);
    curveVertex(-118.714355, -1.9385691);
    curveVertex(-120.30417, -4.7096252);
    curveVertex(-122.50644, -5.1726165);
    curveVertex(-142.54308, -9.866152);
    curveVertex(-162.95801, -15.481262);
    curveVertex(-176.02132, -19.731256);
    curveVertex(-184.36975, -23.06521);
    curveVertex(-188.96661, -25.302208);
    curveVertex(-192.5191, -27.52264);
    curveVertex(-194.82751, -29.699558);
    curveVertex(-195.38849, -30.75978);
    curveVertex(-195.72214, -31.764048);
    curveVertex(-195.47311, -33.311447);
    curveVertex(-194.25174, -34.356766);
    curveVertex(-192.19925, -34.957);
    curveVertex(-187.931, -35.18531);
    curveVertex(-180.53484, -34.39913);
    curveVertex(-168.2146, -31.956356);
    curveVertex(-155.51605, -28.592005);
    curveVertex(-154.08109, -28.159676);
    curveVertex(-153.29308, -27.82163);
    curveVertex(-144.62692, -24.936747);
    curveVertex(-133.20612, -22.327532);
    curveVertex(-123.85455, -20.918291);
    curveVertex(-113.225105, -20.10595);
    curveVertex(-101.515274, -20.183418);
    curveVertex(-95.28424, -20.702751);
    curveVertex(-88.09561, -21.27517);
    curveVertex(-66.33095, -21.91001);
    curveVertex(-23.389885, -22.018524);
    curveVertex(67.61206, -20.543312);
    curveVertex(86.085724, -20.040459);
    curveVertex(90.491806, -19.651054);
    curveVertex(114.98743, -18.985313);
    curveVertex(128.78778, -19.67707);
    curveVertex(137.39786, -20.752577);
    curveVertex(141.25223, -21.56128);
    curveVertex(157.89847, -25.519703);
    curveVertex(179.89438, -30.153448);
    curveVertex(187.21896, -31.304123);
    curveVertex(192.95538, -31.762901);
    curveVertex(195.82513, -31.505665);
    curveVertex(197.0155, -31.03665);
    curveVertex(197.3263, -30.686195);
    curveVertex(197.5164, -30.288216);
    curveVertex(197.3006, -29.277409);
    curveVertex(195.7579, -27.366257);
    curveVertex(191.25351, -24.17495);
    curveVertex(184.22543, -20.534784);
    curveVertex(174.82686, -16.710506);
    curveVertex(163.21103, -12.966858);
    curveVertex(149.53113, -9.5685835);
    curveVertex(133.94037, -6.7804327);
    curveVertex(125.40628, -5.739853);
    curveVertex(123.78121, -4.574709);
    curveVertex(118.71342, 0.57932824);
    curveVertex(117.28334, 2.871768);
    curveVertex(116.686584, 5.124252);
    curveVertex(117.296265, 7.1706314);
    curveVertex(118.24371, 8.045639);
    curveVertex(120.460556, 9.810986);
    curveVertex(123.50397, 13.096289);
    curveVertex(125.13713, 15.630188);
    curveVertex(126.25705, 18.467926);
    curveVertex(126.70131, 21.618126);
    curveVertex(126.30751, 25.089413);
    curveVertex(124.91322, 28.890408);
    curveVertex(123.73831, 30.931519);
    curveVertex(123.074005, 31.932816);
    curveVertex(121.51926, 33.587036);
    curveVertex(119.73625, 34.841194);
    curveVertex(117.772896, 35.715267);
    curveVertex(114.60203, 36.398685);
    curveVertex(110.16791, 36.10606);
    curveVertex(105.874504, 34.6527);
    curveVertex(102.104996, 32.198425);
    curveVertex(99.24253, 28.903057);
    curveVertex(97.970764, 25.958172);
    curveVertex(97.579056, 23.829508);
    curveVertex(97.56549, 22.714188);
    curveVertex(97.55592, 20.58435);
    curveVertex(97.02371, 17.408134);
    curveVertex(96.035446, 15.336746);
    curveVertex(94.76851, 14.15316);
    curveVertex(92.71292, 13.524504);
    curveVertex(90.635216, 13.8798);
    curveVertex(90.402954, 13.9817505);
    curveVertex(90.495705, 13.436739);
    curveVertex(90.5394, 9.96229);
    curveVertex(90.07545, 6.8966007);
    curveVertex(88.87965, 3.6265316);
    curveVertex(86.66338, 0.5608418);
    curveVertex(84.11023, -1.3296669);
    curveVertex(81.96619, -2.326016);
    curveVertex(79.40469, -3.0413437);
    curveVertex(76.38967, -3.4245548);
    curveVertex(74.67966, -3.4586182);
    curveVertex(69.95317, -3.4586182);
    curveVertex(54.211006, -3.4586182);
    curveVertex(20.084515, -3.4586182);
    curveVertex(-18.322298, -3.4586182);
    curveVertex(-41.67392, -3.4586182);
    curveVertex(-59.981606, -3.4586182);
    curveVertex(-70.46681, -3.4586182);
    curveVertex(-71.907715, -3.4586182);
    curveVertex(-72.47189, -3.5000114);
    curveVertex(-75.92334, -3.2392917);
    curveVertex(-78.835526, -2.527845);
    curveVertex(-81.75605, -1.0974779);
    curveVertex(-84.20371, 1.2926953);
    curveVertex(-85.39859, 3.9032733);
    curveVertex(-85.81665, 6.0440445);
    curveVertex(-85.845825, 8.5602665);
    curveVertex(-85.425964, 11.482048);
    curveVertex(-85.00638, 13.123215);
    curveVertex(-92.31621, 16.630905);
    curveVertex(-92.31621, 16.630905);
    endShape();
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
