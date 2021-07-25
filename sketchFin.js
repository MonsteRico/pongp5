var rightPaddle;
var ball;
var leftPaddleScore;
var rightPaddleScore;

function setup() {
  createCanvas(800, 600)
  leftPaddle = new Paddle("left", 300);
  rightPaddle = new Paddle("right", 300);
  ball = new Ball(400, 300);
  leftPaddleScore = new Text("0", 50, 50);
  rightPaddleScore = new Text("0", 750, 50);
  while (ball.velX == 0 || ball.velY == 0) {
    ball.velX = random(-5, 5);
    ball.velY = random(-5, 5);
  }
  // This is basically Initialize When Scene Starts
}

function draw() {
  background(99);
  leftPaddle.draw();
  rightPaddle.draw();
  ball.draw();
  leftPaddleScore.draw();
  rightPaddleScore.draw();
  ball.moveX()
  ball.moveY()
  // This is basically Update Every Frame

  if (keyIsDown(UP_ARROW)) {
    leftPaddle.moveY(-10)
  } else if (keyIsDown(DOWN_ARROW)) {
    leftPaddle.moveY(10)
  }

  if (Math.abs(round(rightPaddle.y - mouseY)) > 10) {
    if (mouseY < rightPaddle.y) {
      rightPaddle.moveY(-10);
    } else if (mouseY >= rightPaddle.y) {
      rightPaddle.moveY(10);
    }
  }

  if (leftPaddle.y < 0) {
    leftPaddle.y = 0;
  }
  if (leftPaddle.y + 150 > 600) {
    leftPaddle.y = 600 - 150;
  }
  if (rightPaddle.y < 0) {
    rightPaddle.y = 0;
  }
  if (rightPaddle.y + 150 > 600) {
    rightPaddle.y = 600 - 150;
  }

  if (ball.x - 25 < 0) {
    leftPaddle.score++;
    leftPaddleScore.text(leftPaddle.score)
    ball.x = 400;
    ball.y = 300;
    ball.velX = 0;
    while (ball.velX == 0 || ball.velY == 0) {
      ball.velX = random(-5, 5);
      ball.velY = random(-5, 5);
    }
  }
  if (ball.x + 25 > 800) {
    rightPaddle.score++;
    rightPaddleScore.text(rightPaddle.score)
    ball.x = 400;
    ball.y = 300;
    ball.velX = 0;
    while (ball.velX == 0 || ball.velY == 0) {
      ball.velX = random(-5, 5);
      ball.velY = random(-5, 5);
    }
  }
  if (ball.y - 25 < 0) {
    ball.velY *= -1;
  }
  if (ball.y + 25 > 600) {
    ball.velY *= -1;
  }

  ball.hitPaddle(leftPaddle);
  ball.hitPaddle(rightPaddle);
}