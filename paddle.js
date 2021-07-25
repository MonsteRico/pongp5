class Paddle {
    constructor(side, y) {
        this.side = side;
        this.y = y;
        this.x = (this.side == "left" ? 50 : 750)
        this.score = 0;
    }

    draw() {
        rect(this.x, this.y, 25, 150)
    }

    moveY(speed) {
        this.y += speed;
    }
}