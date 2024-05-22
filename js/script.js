window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const homeButton = document.getElementById("home-button");
  const musicButton = document.querySelector(".music-button")
  const ourGame = new Game();
  let isShooting = false;


  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", () => {
    window.location.reload();
  });

  document.addEventListener("keydown", (event) => {
    console.log("a key was pressed", event);
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
    } else if (event.code === "Space" && !isShooting){
      startShooting();
    }

  
  });
  document.addEventListener("keyup", (event) => {
    ourGame.player.directionX = 0;
    ourGame.player.directionY = 0;
    if (event.code === "Space" && isShooting){
      stopShooting();
    }
  });

  function startGame() {
    ourGame.start();
  }

  function startShooting(){
    isShooting = true;
    shootingInterval = setInterval(()=>{
      ourGame.player.shoot();
    }, 100)
  }

  function stopShooting() {
    isShooting = false; 
    // Stop shooting by clearing the interval
    clearInterval(shootingInterval);
  }

  // homeButton.addEventListener("click", ()=>{
  //   ourGame.homeBtn()
  // })

};
