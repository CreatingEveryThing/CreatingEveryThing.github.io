import { Player } from './player.js';

let gameState = 'start';
let right = false;
let left = false;
let down = false;
let isJumping = false;
let player;
let enemy;
let jumpSound;
let moveSound;
let playerImage, playerImageRight, playerImageLeft, playerImageUp, playerImageDown;

function preload() {
  playerImage = loadImage('./image/playerImage.png');
  playerImageRight = loadImage('./image/playerImageRight.png');
  playerImageLeft = loadImage('./image/playerImageLeft.png');
  playerImageUp = loadImage('./image/playerImageUp.png');
  playerImageDown = loadImage('./image/playerImageDown.png');
  // enemyImage = loadImage('./image/enemyImage.png');

  // jumpSound = loadSound('jump.mp3');
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
    background(255);
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
  if (key === 'Enter') {
    if (gameState === 'start' || gameState === 'end') {
      gameState = 'playing';
      this.reset();
    }
  }
  if (key === 'Escape') {
    if (gameState === 'playing') {
      gameState = 'paused';
    } else if (gameState === 'paused') {
      gameState = 'playing';
    }
 }
  player.keyPressed();
}

function keyReleased() {
  player.keyReleased();
}

window.preload = preload;
window.setup = setup;
window.draw = draw;
window.keyPressed = keyPressed;
window.keyReleased = keyReleased;
