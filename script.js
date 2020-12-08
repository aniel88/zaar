let diceButton = document.querySelector(".roll-dice");
let numberOn = document.getElementsByTagName("span");
let numberGenerator;
let info = document.querySelector(".info");
let player = 1;
let resetButton = document.querySelector(".reset-button");
let player1CurrentDice = document.querySelector(".player1-current-dice");
let player2CurrentDice = document.querySelector(".player2-current-dice");
let player1Score = document.querySelector(".player1-score");
let player2Score = document.querySelector(".player2-score");
let player1Increment = 0;
let player2Increment = 0;
let start = 0;
let isWinnerSet = 0;
diceButton.addEventListener("click", function () {
  startGame();
});

function drawDie(numberOf) {
  if (numberOf === 1) {
    numberOn[0].classList.add("hidden");
    numberOn[1].classList.add("hidden");
    numberOn[2].classList.add("hidden");
    numberOn[3].classList.add("hidden");
    numberOn[4].classList.remove("hidden");
    numberOn[5].classList.add("hidden");
    numberOn[6].classList.add("hidden");
    numberOn[7].classList.add("hidden");
    numberOn[8].classList.add("hidden");
  }
  if (numberOf === 2) {
    numberOn[0].classList.remove("hidden");
    numberOn[1].classList.add("hidden");
    numberOn[2].classList.add("hidden");
    numberOn[3].classList.add("hidden");
    numberOn[4].classList.add("hidden");
    numberOn[5].classList.add("hidden");
    numberOn[6].classList.add("hidden");
    numberOn[7].classList.add("hidden");
    numberOn[8].classList.remove("hidden");
  }
  if (numberOf === 3) {
    numberOn[0].classList.remove("hidden");
    numberOn[1].classList.add("hidden");
    numberOn[2].classList.add("hidden");
    numberOn[3].classList.add("hidden");
    numberOn[4].classList.remove("hidden");
    numberOn[5].classList.add("hidden");
    numberOn[6].classList.add("hidden");
    numberOn[7].classList.add("hidden");
    numberOn[8].classList.remove("hidden");
  }
  if (numberOf === 4) {
    numberOn[0].classList.remove("hidden");
    numberOn[1].classList.add("hidden");
    numberOn[2].classList.remove("hidden");
    numberOn[3].classList.add("hidden");
    numberOn[4].classList.add("hidden");
    numberOn[5].classList.add("hidden");
    numberOn[6].classList.remove("hidden");
    numberOn[7].classList.add("hidden");
    numberOn[8].classList.remove("hidden");
  }
  if (numberOf === 5) {
    numberOn[0].classList.remove("hidden");
    numberOn[1].classList.add("hidden");
    numberOn[2].classList.remove("hidden");
    numberOn[3].classList.add("hidden");
    numberOn[4].classList.remove("hidden");
    numberOn[5].classList.add("hidden");
    numberOn[6].classList.remove("hidden");
    numberOn[7].classList.add("hidden");
    numberOn[8].classList.remove("hidden");
  }
  if (numberOf === 6) {
    numberOn[0].classList.remove("hidden");
    numberOn[1].classList.add("hidden");
    numberOn[2].classList.remove("hidden");
    numberOn[3].classList.remove("hidden");
    numberOn[4].classList.add("hidden");
    numberOn[5].classList.remove("hidden");
    numberOn[6].classList.remove("hidden");
    numberOn[7].classList.add("hidden");
    numberOn[8].classList.remove("hidden");
  }
}

function startGame() {
  if (start === 0) {
    info.textContent = `Player ${player}, your turn!`;
    start = 1;
    player = 2;
  } else if (start === 1)
    if (player === 1) {
      if (isWinnerSet === 0) {
        info.textContent = `Player ${player}, your turn!`;
        numberGenerator = Math.floor(Math.random() * 6) + 1;
        player2CurrentDice.textContent = numberGenerator;
        drawDie(numberGenerator);
      } else {
        player1CurrentDice.textContent = 0;
        player2CurrentDice.textContent = 0;
        isWinnerSet = 0;
        info.textContent = `Player ${player}, your turn!`;
        player = 1;
      }
      if (isWinner(player1CurrentDice, player2CurrentDice)) {
        isWinnerSet = 1;
      }
      player = 2;
    } else if (player === 2) {
      if (isWinnerSet === 0) {
        info.textContent = `Player ${player}, your turn!`;
        numberGenerator = Math.floor(Math.random() * 6) + 1;
        player1CurrentDice.textContent = numberGenerator;
        drawDie(numberGenerator);
      } else {
        player1CurrentDice.textContent = 0;
        player2CurrentDice.textContent = 0;
        isWinnerSet = 0;
        info.textContent = `Player ${player}, your turn!`;
        player = 1;
      }
      if (isWinner(player1CurrentDice, player2CurrentDice)) {
        isWinnerSet = 1;
        player = 2;
      }
      player = 1;
    }
}
function isWinner(player1, player2) {
  if (Number(player1.textContent) > Number(player2.textContent))
    if (
      Number(player1.textContent) !== 0 &&
      Number(player2.textContent) !== 0
    ) {
      player1Increment++;
      info.textContent = `Player 1 wins!`;
      player1Score.textContent = Number(player1Increment);
      return true;
    }
  if (Number(player1.textContent) < Number(player2.textContent))
    if (
      Number(player1.textContent) !== 0 &&
      Number(player2.textContent) !== 0
    ) {
      player2Increment++;
      info.textContent = `Player 2 wins!`;
      player2Score.textContent = player2Increment;
      return true;
    }
  if (Number(player1.textContent) === Number(player2.textContent))
    if (
      Number(player1.textContent) !== 0 &&
      Number(player2.textContent) !== 0
    ) {
      info.textContent = `Tie!`;
      return true;
    }
}

resetButton.addEventListener("click", function () {
  player1Increment = 0;
  player2Increment = 0;
  player = 1;
  start = 0;
  info.textContent = "Press 'Roll dice' to start!";
  player2Score.textContent = 0;
  player1Score.textContent = 0;
  player1CurrentDice.textContent = 0;
  player2CurrentDice.textContent = 0;
  drawDie(6);
});

function resetIfSomeoneWin() {
  player1CurrentDice.textContent = 0;
  player2CurrentDice.textContent = 0;
  player2CurrentDice.textContent = 0;
  player1CurrentDice.textContent = 0;
}
