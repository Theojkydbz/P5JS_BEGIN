// snowflake2 class
function snowflake2(w, h) {
    // initialize coordinates
    this.posX = w * 1;
    this.posY = h * 0.45;
    this.size = random(2, 5);

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(w / 2, 2)));

    this.update = function (time) {
        // x position follows a circle
        // let w = 0.6; // angular speed

        
        // different size snowflakes fall at slightly different y speeds
        this.posX -= 15;

        // delete snowflake if past end of screen
        if (this.posX < -1550) {
            let index = snowflakes2.indexOf(this);
            snowflakes2.splice(index, 1);
        }
    };

    this.display = function () {
        
        fill(255, 255, 255)
        rect(this.posX, this.posY, 1550, 50);
    };
}
