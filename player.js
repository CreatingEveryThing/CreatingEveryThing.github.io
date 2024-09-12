class Player {
  constructor() {
    this.sizeX = 60;
    this.sizeY = 60;
    this.spotX = 0.2 * width;
    this.spotY = 0.8 * height - this.sizeY;
    this.speed = 10;
    this.jumping = 14;
    this.gravity = 1;
    this.downSpeed = 10;
    this.lives = 3;
    this.px = this.spotX;
    this.py = this.spotY;
    this.vx = 0;
    this.vy = 0;
    this.isGround = true;
    this.isHit = false;
    this.hitCooldown = 60;
    this.hitTimer = 0;
  }

  update() {
    this.vy += this.gravity;
    this.py += this.vy;

    if (this.py >= this.spotY) {
      this.isGround = true;
      this.py = this.spotY;
      isJumping = false;
    }
    
    if (!this.isGround && this.vy < 0) {
      image(playerImageUp, this.px, this.py, this.sizeX, this.sizeY);
    } else if (!this.isGround) {
      image(playerImageDown, this.px, this.py, this.sizeX, this.sizeY);
    } else if (right) {
      image(playerImageRight, this.px, this.py, this.sizeX, this.sizeY);
    } else if (left) {
      image(playerImageLeft, this.px, this.py, this.sizeX, this.sizeY);
    } else if (down) {
      image(playerImageDown, this.px, this.py, this.sizeX, this.sizeY);
    } else {
      image(playerImage, this.px, this.py, this.sizeX, this.sizeY);
    }

    if (this.isHit) {
      this.hitTimer++;
      if (this.hitTimer >= this.hitCooldown) {
        this.isHit = false;
        this.hitTimer = 0;
      }
    }
  }

  moveRight() {
    this.px += this.speed;
  }

  moveLeft() {
    this.px -= this.speed;
  }

  jump() {
    if (this.isGround) {
      this.isGround = false;
      this.vy = -this.jumping;
      isJumping = true;
//       jumpSound.play();
    }
  }
  
  moveDown() {
    this.py += this.downSpeed;
  }
  
  loseLife() {
    if (!this.isHit) {
      this.lives--;
      this.isHit = true;
      if (this.lives > 0) {
        this.reset();
      } else {
        gameState = 'end';
      }
    }
  }
  
  reset() {
    this.px = this.spotX;
    this.py = this.spotY;
    this.vx = 0;
    this.vy = 0;
    this.lives = 3;
    this.isGround = true;
    this.isHit = false;
    this.hitTimer = 0;
  }
}
