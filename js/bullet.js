class Bullet {
  constructor(gameScreen, bulletLeft, bulletTop) {
    this.gameScreen = gameScreen;
    this.left = bulletLeft;
    this.top = bulletTop;
    this.width = 10;
    this.height = 5;
    this.speed = 3;
    this.element = document.createElement("div");

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.backgroundColor = "red";
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.left += this.speed;
    this.updatePosition();

    if (this.left > this.gameScreen.offsetWidth) {
      this.element.remove();
    }
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  destroy() {
    this.element.remove();
  }


  bulletCollide(obstacle) {
    const bulletRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      bulletRect.left < obstacleRect.right &&
      bulletRect.right > obstacleRect.left &&
      bulletRect.top < obstacleRect.bottom &&
      bulletRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
