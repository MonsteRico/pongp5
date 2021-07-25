class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velX = 0;
        this.velY = 0;
    }

    draw() {
        circle(this.x, this.y, 25)
    }

    moveX() {
        this.x += this.velX;
    }

    moveY() {
        this.y += this.velY;
    }

    hitPaddle(paddle) {
        if (this.x > paddle.x &&
            this.x < paddle.x + 25 &&
            this.y > paddle.y &&
            this.y < paddle.y + 150) {
            this.velX *= -1;
            this.velY *= -1;

        }
    }
}