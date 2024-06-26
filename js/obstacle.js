class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = 950;
    this.top = Math.min(Math.random() * this.gameScreen.offsetHeight, 450);
    this.width = 130;
    this.height = 150;
    this.element = document.createElement("img");
    this.element.src = "./images/newEnemy.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.left -= 4;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
  }

  destroy() {
    this.element.remove();
  }
}

class fastObstacle extends Obstacle {
  constructor(gameScreen) {
    super(gameScreen);
    this.left = 950;
    this.top = Math.min(Math.random() * this.gameScreen.offsetHeight, 450);
    this.width = 120;
    this.height = 105;
    this.element = document.createElement("img");
    this.element.src = "./images/ufo.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.gameScreen.appendChild(this.element);
  }
  fastMove() {
    this.left -= 9;
    this.updatePosition();
  }
}
class thirdObstacle extends Obstacle {
  constructor(gameScreen) {
    super(gameScreen);
    this.left = 950;
    this.top = Math.min(Math.random() * this.gameScreen.offsetHeight, 450);
    this.width = 100;
    this.height = 150;
    this.element = document.createElement("img");
    this.element.src = "./images/wonderwoman.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.gameScreen.appendChild(this.element);
  }

  thirdObstacleMove() {
    this.left -= 13;
    this.updatePosition();
  }
}
