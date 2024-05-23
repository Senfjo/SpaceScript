let playerImgSrc = "";
window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const musicButton = document.querySelector(".music-button");
  const musicButton2 = document.querySelector(".music-button2");
  const musicButton3 = document.querySelector(".music-button3");

  const introMusic = new Audio("./sounds/AvengersIntro.mp3");
  introMusic.volume = 0.1;
  let ourGame
  let isShooting = false;
  const buttonImage = document.getElementById("musicImage");
  const buttonImage2 = document.getElementById("musicImage2");
  const buttonImage3 = document.getElementById("musicImage3");


  const liElement = document.getElementById("player1")
  const li2Element = document.getElementById("player2")
  const li3Element = document.getElementById("player3")

  liElement.addEventListener("click", ()=>{
    playerImgSrc = "./images/Raumschiff.png"
    updatePreview(playerImgSrc);
    console.log(playerImgSrc)
  });

  li2Element.addEventListener("click", ()=>{
    playerImgSrc = "./images/Quinjet.png"
    updatePreview(playerImgSrc);
    console.log(playerImgSrc)
  });

  li3Element.addEventListener("click", ()=>{
    playerImgSrc = "./images/ironman.png"
    updatePreview(playerImgSrc);
    console.log(playerImgSrc)
  });




  startButton.addEventListener("click", ()=> {
    startGame();
  });

  restartButton.addEventListener("click", () => {
    window.location.reload();
  });


  musicButton.addEventListener("click", () => {
    if (introMusic.paused) {
      introMusic.play();
      buttonImage.src = "images/mute2.jpeg";
    } else {
      buttonImage.src = "images/loudspeaker.jpeg";
      introMusic.pause();
    }
  });

  musicButton2.addEventListener("click", () => {
    if (introMusic.paused) {
      introMusic.play();
      buttonImage2.src = "images/mute2.jpeg";
    } else {
      buttonImage2.src = "images/loudspeaker.jpeg";
      introMusic.pause();
    }
  });

  musicButton3.addEventListener("click", () => {
    if (introMusic.paused) {
      introMusic.play();
      buttonImage3.src = "images/mute2.jpeg";
    } else {
      buttonImage3.src = "images/loudspeaker.jpeg";
      introMusic.pause();
    }
  });

  document.addEventListener("keydown", (event) => {
    // console.log("a key was pressed", event);
    if (event.code === "ArrowRight") {
      //then we move our player to the right
      ourGame.player.directionX = 4;
    } else if (event.code === "ArrowLeft") {
      //then we move our player to the left
      ourGame.player.directionX = -4;
    } else if (event.code === "ArrowUp") {
      //then we move our player to the up
      ourGame.player.directionY = -4;
    } else if (event.code === "ArrowDown") {
      //then we move our player to the down
      ourGame.player.directionY = 4;
    } else if (event.code === "Space" && !isShooting) {
      startShooting();
    }
  });
  document.addEventListener("keyup", (event) => {
    ourGame.player.directionX = 0;
    ourGame.player.directionY = 0;
    if (event.code === "Space" && isShooting) {
      stopShooting();
    }
  });

  function startGame() {
    ourGame = new Game(playerImgSrc)
    ourGame.start();
  }

  function startShooting() {
    isShooting = true;
    shootingInterval = setInterval(() => {
      ourGame.player.shoot();
    }, 100);
  }

  function stopShooting() {
    isShooting = false;
    clearInterval(shootingInterval);
  }

};

function updatePreview(imageSrc) {
  document.getElementById('preview-img').src = imageSrc;
}
