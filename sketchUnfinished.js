var rightPaddle;
var ball;
var leftPaddleScore;
var rightPaddleScore;

function setup() {
    createCanvas(800, 600)
    rectMode(CENTER);
    leftPaddle = new Paddle("left", 300);
    rightPaddle = new Paddle("right", 300);
    ball = new Ball(400, 300);
    leftPaddleScore = new Text("0", 50, 50);
    rightPaddleScore = new Text("0", 750, 50);
    // This is basically Initialize When Scene Starts
}

function draw() {
    background(99);
    leftPaddle.draw();
    rightPaddle.draw();
    ball.draw();
    leftPaddleScore.draw();
    rightPaddleScore.draw();
    // This is basically Update Every Frame

    // isKeyPressed => if(isKeyPressed(LEFT_ARROW))

    if (Math.abs(round(rightPaddle.y - mouseY)) > 10) {
        // i wonder what this is for
    }



    ball.hitPaddle(leftPaddle);
    ball.hitPaddle(rightPaddle);
}