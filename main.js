let gameState = 'start';
let right = false;
let left = false;
let down = false;
let isJumping = false;
let player;
let enemy;
let jumpSound;
let moveSound;

function preload() {
  playerImage = loadImage('playerImage.png');
  playerImageRight = loadImage('playerImageRight.png');
  playerImageLeft = loadImage('playerImageLeft.png');
  playerImageUp = loadImage('playerImageUp.png');
  playerImageDown = loadImage('playerImageDown.png');
  enemyImage = loadImage('enemyImage.png');
  
  jumpSound = loadSound('jump.mp3');
  // moveSound = loadSound('move.mp3');
}

function setup() {
  const cnv = createCanvas(windowWidth - 40, (windowHeight - 40) / 1.2);
  cnv.parent('poseContainer');
  player = new Player();
}

function draw() {
  if (gameState === 'start') {
    drawStartScreen();
  } else if (gameState === 'playing') {
    background(256);
    line(0, 0.8 * height, width, 0.8 * height);

    if (right) {
      player.moveRight();
    }
    if (left) {
      player.moveLeft();
    }
    if (down) {
      player.moveDown();
    }

    player.update();　
    
    fill(0);
    textSize(24);
    text(`Lives: ${player.lives}`, 10, 30);
  } else if (gameState === 'paused') {
    drawPauseScreen();
  } else if (gameState === 'end') {
    drawEndScreen();
  }
}

function drawStartScreen() {
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text('Press ENTER to Start', width / 2, height / 2);
}

function drawPauseScreen() {
  background(0, 0, 0, 150);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text('Paused', width / 2, height / 2 - 40);
  text('Press Escape to Resume', width / 2, height / 2);
}

function drawEndScreen() {
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text('Game Over', width / 2, height / 2 - 40);
  text('Press ENTER to Restart', width / 2, height / 2);
}

function keyPressed() {
  player.keyPressed();
}

function keyReleased() {
  player.keyReleased();
}
