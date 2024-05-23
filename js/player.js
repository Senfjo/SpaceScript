class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.bullets = [];
    this.shootDelay = 900;
    this.canShoot = true;

    
    

    this.element.src = imgSrc;

    
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.left += this.directionX;
    this.top += this.directionY;
    if (this.top <= 10) {
      this.top = 10;
    } else if (this.top >= 500) {
      this.top = 500;
    }

    if (this.left <= 10) {
      this.left = 10;
    } else if (this.left >= 800) {
      this.left = 800;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }

  shoot() {
    if (this.canShoot) {
      const bulletLeft = this.left + this.width;
      const bulletTop = this.top + this.height / 2;

      this.bullets.push(new Bullet(this.gameScreen, bulletLeft, bulletTop));
      this.canShoot = false;
      setTimeout(()=>{
        this.canShoot = true;
      }, this.shootDelay)
    }
  }
}
