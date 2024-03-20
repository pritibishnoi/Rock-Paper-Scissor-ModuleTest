const rulesBtn = document.getElementById("rules-btn");

const closeButton = document.getElementById("cross-circl");
const gameRules = document.getElementById("rulesBox");

const nextBtn = document.getElementById("next-btn");

const circlesOpt = document.querySelectorAll(".options");
const gameScreen = document.querySelector(".game-triangle");

// let userScore = document.getElementById("userScore");
// let compScore = document.getElementById("compScore");

const gameResult = document.querySelector(".gameResult");
const playAgain = document.querySelector(".play-again");

rulesBtn.addEventListener("click", () => {
  console.log("clicked...");
  gameRules.style.display = "block";
});

closeButton.addEventListener("click", () => {
  gameRules.style.display = "none";
});

const options = Array.from(circlesOpt);
// console.log(options);

let userClick;
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    // console.log(e.target.id);
    userClick = e.target.id;
    // console.log(userClick)
    displayResult();
    playGame(userClick);
  });
});

function displayResult() {
  gameScreen.style.display = "none";
  gameResult.style.display = "flex";

  let userPicked = document.getElementById("userPicked");

  let addUserElm = `
    <div class="circles round1" >
        <img src="../images/${userClick}.png" alt="">
    </div>
    
   `;
   
  userPicked.innerHTML += addUserElm;

  if (
    computerClick == "rock" ||
    computerClick == "paper" ||
    computerClick == "scissor"
  ) {
    let pcPicked = document.getElementById("pcPicked");
    pcPicked.innerHTML += `<div class="circles round2" >
        <img src="../images/${computerClick}.png" alt="">
    </div>`;
  }
}

const computerChoise = ["rock", "scissor", "paper"];
const randomCompId = Math.floor(Math.random() * computerChoise.length);
let computerClick = computerChoise[randomCompId];

userScore = 0;
compScore = 0;
const playGame = (userClick) => {
  console.log("user choice is " + userClick);
  console.log("comp. choice is " + computerClick);
  if (
    (userClick === "rock" && computerClick === "scissor") ||
    (userClick === "scissor" && computerClick === "paper") ||
    (userClick === "paper" && computerClick === "rock")
  ) {
    console.log("You win");
    nextBtn.style.display = "flex";
    document.getElementById("win").innerText = "YOU WIN";
    userScore ++;
  } else if (userClick === computerClick) {
    console.log("Tie up");
    document.getElementById("win").innerText = "Tie UP";
    document.getElementById("AGAINST-PC").style.display = "none";
    playAgain.style.display = "none";
    document.getElementById("replay").style.display = "flex";
  } else {
    console.log("You lose");
    document.getElementById("win").innerText = "YOU LOST";
    compScore ++;
  }
  document.getElementById("userScore").innerText = userScore;
  document.getElementById("compScore").innerText = compScore;
  saveScore();  
};
playAgain.addEventListener("click", () => {
  location.reload();
  // saveScore();
  // showScore();
});

function saveScore() {
  localStorage.setItem("userScore", userScore); 
  localStorage.setItem("compScore", compScore); 
}

function showScore() {
  userScore = parseInt(localStorage.getItem("userScore")) || 0;
  compScore = parseInt(localStorage.getItem("compScore")) || 0;
  document.getElementById("compScore").innerText = compScore;
  document.getElementById("userScore").innerText = userScore;
}

window.onload = function () {
  showScore();
};

