// snowflake class
function snowflake(w, h) {
    // initialize coordinates
    this.posX = w * 1;
    this.posY = h * 0.06;
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
        if (this.posX < -250) {
            let index = snowflakes.indexOf(this);
            snowflakes.splice(index, 1);
        }
    };

    this.display = function () {
        
        fill(255, 255, 255)
        rect(this.posX, this.posY, 180, 30);
    };
}
