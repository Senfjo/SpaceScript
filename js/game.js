class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.musicButton = document.getElementById("music-button")
    this.liveScore = document.querySelector(".game-container")

    this.player = new Player(
      this.gameScreen,
      20,
      250,
      100,
      150,
      "./images/rocket1.png"
    );
    this.height = 600;
    this.width = 900;
    this.bullet = [];
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.fastObstacle = [new fastObstacle(this.gameScreen)];
    this.thirdObstacle = [new thirdObstacle(this.gameScreen)];
    this.score = 0;
    this.lives = 1;
    this.isGameOver = false;
    this.id = 0;
    this.gameLoopFrequency = Math.round(1000 / 60); // 60fps
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.liveScore.style.display = "flex"
    this.gameScreen.style.display = "block";
    

    this.id = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    this.update();

    if (this.isGameOver) {
      clearInterval(this.id);
      this.gameOver();
    }
  }

  update() {
    this.player.move();

    if (this.score < 5) {
      this.obstacles.forEach((oneObstacle, oneObstacleIndex) => {
        oneObstacle.move();
        this.player.bullets.forEach((oneBullet) => {
          oneBullet.move();
          if (oneBullet.bulletCollide(oneObstacle)) {
            oneBullet.destroy();
            oneObstacle.destroy();
            this.obstacles.splice(oneObstacle);
            this.obstacles.push(new Obstacle(this.gameScreen));
            this.score += 1;

            const scoreElement = document.getElementById("score");
            scoreElement.innerText = this.score;
          }
        });
        const thereWasACollision = this.player.didCollide(oneObstacle);
        if (thereWasACollision) {
          this.obstacles.splice(oneObstacleIndex, 1);
          oneObstacle.element.remove();
          this.obstacles.push(new Obstacle(this.gameScreen));
          this.lives -= 1;

          if (this.lives === 0) {
            this.isGameOver = true;
          }

          const livesElement = document.getElementById("lives");
          livesElement.innerText = this.lives;
        }

        if (oneObstacle.left <= -120) {
          this.obstacles.splice(oneObstacleIndex, 1);
          oneObstacle.element.remove();
          this.score += 1;

          const scoreElement = document.getElementById("score");
          scoreElement.innerText = this.score;
          this.obstacles.push(new Obstacle(this.gameScreen));
        }
      });
    } else if (this.score >= 5 && this.score < 10) {
      this.fastObstacle.forEach((oneObstacle, oneObstacleIndex) => {
        oneObstacle.fastMove();

        this.player.bullets.forEach((oneBullet) => {
          oneBullet.move();
          if (oneBullet.bulletCollide(oneObstacle)) {
            oneBullet.destroy();
            oneObstacle.destroy();
            this.fastObstacle.splice(oneObstacle);
            this.fastObstacle.push(new fastObstacle(this.gameScreen));
            this.score += 1;

            const scoreElement = document.getElementById("score");
            scoreElement.innerText = this.score;
          }
        });

        const thereWasACollision = this.player.didCollide(oneObstacle);
        if (thereWasACollision) {
          this.fastObstacle.splice(oneObstacleIndex, 1);
          oneObstacle.element.remove();
          this.fastObstacle.push(new fastObstacle(this.gameScreen));
          this.lives -= 1;

          if (this.lives === 0) {
            this.isGameOver = true;
          }

          const livesElement = document.getElementById("lives");
          livesElement.innerText = this.lives;
        }

        if (oneObstacle.left <= -120) {
          this.fastObstacle.splice(oneObstacleIndex, 1);
          oneObstacle.element.remove();
          this.score += 1;

          const scoreElement = document.getElementById("score");
          scoreElement.innerText = this.score;
          this.fastObstacle.push(new fastObstacle(this.gameScreen));
        }
      });
    } else if (this.score >= 10) {
      this.thirdObstacle.forEach((oneObstacle, oneObstacleIndex) => {
        oneObstacle.thirdObstacleMove();

        this.player.bullets.forEach((oneBullet) => {
          oneBullet.move();
          if (oneBullet.bulletCollide(oneObstacle)) {
            oneBullet.destroy();
            oneObstacle.destroy();
            this.thirdObstacle.splice(oneObstacle);
            this.thirdObstacle.push(new thirdObstacle(this.gameScreen));
            this.score += 1;

            const scoreElement = document.getElementById("score");
            scoreElement.innerText = this.score;
          }
        });

        const thereWasACollision = this.player.didCollide(oneObstacle);
        if (thereWasACollision) {
          this.thirdObstacle.splice(oneObstacleIndex, 1);
          oneObstacle.element.remove();
          this.thirdObstacle.push(new thirdObstacle(this.gameScreen));
          this.lives -= 1;

          if (this.lives === 0) {
            this.isGameOver = true;
          }

          const livesElement = document.getElementById("lives");
          livesElement.innerText = this.lives;
        }

        if (oneObstacle.left <= -120) {
          this.thirdObstacle.splice(oneObstacleIndex, 1);
          oneObstacle.element.remove();
          this.score += 1;

          const scoreElement = document.getElementById("score");
          scoreElement.innerText = this.score;
          this.thirdObstacle.push(new thirdObstacle(this.gameScreen));
        }
      });
    }
  }

  gameOver() {
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "flex";
    this.liveScore.style.display = "none"
    const finalScore = document.querySelector(".score");
    finalScore.innerText = this.score
  }
}
