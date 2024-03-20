const openRules = document.querySelector(".rulesBtn");         //for rules
const closeButton = document.querySelector(".closeBtn");       //to close rules
const rulesBox = document.querySelector(".rulesPart");         //to show rules
const options = document.querySelectorAll(".choose-opt");      //for (rock,paper,scissor) 
const resultScr = document.querySelector(".finalResult");      // result page 
const gameElements = document.querySelector(".game-section")   // triAngle part 
const rulesBtn = document.querySelector(".rulesBtn");          // Rules Button
const playAgainBtn = document.querySelector(".play-again") ;   // Play-Again Button
const nextBtn = document.querySelector(".nextBtn");            // Next Button
const userAnimation = document.querySelector("#userWinIndicator");   
const aiAnimation = document.querySelector ("#aiWinIndicator");
const userScore = document.querySelector("#userScore");
const computerScore = document.querySelector("#computerScore");
var score = 0;     // for User Score
var score1 = 0;    // for Computer Score


openRules.addEventListener("click",()=>{       // Rules enable Button
    console.log("button was clicked");
    rulesBox.style.display = "block"         
})

closeButton.addEventListener("click",()=>{     // Rules close Button
    console.log("Button was clicked");
    rulesBox.style.display = "none";
})

playAgainBtn.addEventListener("click",()=>{    // Play-Again Button
    gameElements.style.display = "flex";
    resultScr.style.display ="none";
    console.log("The Play-Again button was clicked");
    window.location.reload();
});




genCompChoice = ()=>{
    let choiceFrom = [rock , paper , scissor];
    let choiceBet = Math.floor(Math.random() * 3 );     // To generate Comp. Choice
    return choiceFrom[choiceBet].id;
   // toBlock()
}   
var compChoice = genCompChoice() ;

const chooseOptionDiv = 
document.querySelector(".choose-opt").classList.add(compChoice.toString());
document.querySelector("#aiResult").src = `./images/${compChoice}.png.png`      // To add image according to computer choice


let userChoice;

options.forEach((option)=>{
    option.addEventListener("click",()=>{     // To get ID name by clicking....
        console.log("You choose : " + option.id);
     userChoice = option.getAttribute("id");    //by using userChoice only without var/con etc it converted to global variable 
     console.log(userChoice);

           printUserChoiceGlobally();
           output();
           playGame(userChoice);
        });      
    })
    function printUserChoiceGlobally() {
        console.log("User choice globally: " + userChoice);    //Just to print userChoice in console screen
    }

    function output() {
        gameElements.style.display = "none";                 
        resultScr.style.display ="flex";                      // To enable the Result Screen 
        const chooseOptDiv = document.querySelector('.chooses-opt');     // To add class Name for add background of img
        chooseOptDiv.classList.add(`${userChoice}`);
        

        document.querySelector("#myResult").src = `./images/${userChoice}.png.png`  // To add image in the winner screen

    }

    const playGame = (userChoice) =>{
        console.log("user choice is " + userChoice)                           // Logic part of the game
        console.log("comp. choice is "+ compChoice)

        if ((userChoice === "rock"    && compChoice === "scissor") || 
             (userChoice === "scissor" && compChoice ==="paper")    || 
             (userChoice === "paper"   && compChoice === "rock"))  {
                
                youWin();

             }
    else if(userChoice === compChoice) {
            
            tieUp();

        }
        else {

            youLose();
        
        }
    };


    const youWin = () => {
          console.log("You win")
          const myDiv = document.getElementById("resultSpan");    //to print in the output PC screen (if)
          const mydiv = document.getElementById("resultSpan1");   // same as above but it is for Mobile view
          myDiv.innerHTML = ("YOU WIN");
          mydiv.innerHTML = ("YOU WIN");
            nextBtn.style.display ="flex";
            userAnimation.style.display = "flex";
            aiAnimation.style.display = "none";
            keepScore(1);
    }

    const youLose = () => {
        console.log("You lose")
        const myDiv = document.getElementById("resultSpan");     //to print in the output PC screen 
        const mydiv = document.getElementById("resultSpan1");    // same as above but it is for Mobile view
            myDiv.innerHTML = ("YOU LOSE");
            mydiv.innerHTML = ("YOU LOSE");
            console.log(resultSpan);
            nextBtn.style.display ="none";
            userAnimation.style.display = "none";
            aiAnimation.style.display = "flex";
            keepScore1(1);
    }

    const tieUp = () => {
        console.log("Tie up")
        const myDiv = document.getElementById("resultSpan");    //to print in the output PC screen 
        const mydiv = document.getElementById("resultSpan1");   // same as above but it is for Mobile view
            myDiv.innerHTML = ("TIE UP");
            mydiv.innerHTML = ("TIE UP");
            userAnimation.style.display = "none";
            aiAnimation.style.display = "none";
            nextBtn.style.display ="none";
            playAgainBtn.innerHTML = ("REPLAY");
        }
    
    
   if(localStorage.getItem("score"))
   {
    score = parseInt(localStorage.getItem("score"));
   }
   userScore.innerHTML = score;
    function keepScore(point){
        score += point;
        localStorage.setItem("score",score);
        userScore.innerHTML = score;
    }

    if(localStorage.getItem("score1"))
    {
     score1 = parseInt(localStorage.getItem("score1"));
    }
    computerScore.innerHTML = score1;
     function keepScore1(point){
         score1 += point;
         localStorage.setItem("score1",score1);
         computerScore.innerHTML = score1;
     }
