let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg= document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
// Function to generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];  // ✅ scissors should be in quotes
    const randIdx = Math.floor(Math.random() * 3);  // 0, 1, or 2
    return options[randIdx];
};

const drawGame = () => {
   // console.log("game was draw");
    msg.innerText="Game was Draw. play again";
    msg.style.backgroundColor="#081b31";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
       // console.log("You win!");
        msg.innerText=` 🎉 you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
      //  console.log("You lose!");
        msg.innerText=` 😢 you lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


// Function to play the game
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    
    const compChoice = genCompChoice();  // Get computer's choice
    console.log("Computer choice =", compChoice);
    
    // Game logic can be added here
    if(userChoice===compChoice){
        //draw game
        drawGame();   //function calling
    } else{
        let userWin=true;
        if(userChoice==="rock"){
           //scissors,paper 
          userWin= compChoice==="paper" ? false : true;
        } else if(userChoice==="paper") {
         //rock,scissors  
         compChoice==="scissors" ?false : true;
        } else{
            //user choice scissors
          //rock,paper  
          userWin=compChoice==="rock"? false:true;

        }
        showWinner(userWin, userChoice, compChoice);
    }

};

// Add event listeners to all choice elements
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
