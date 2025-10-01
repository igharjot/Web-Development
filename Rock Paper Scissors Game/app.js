let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    const compChoice = genCompChoise();

    if (userChoice === compChoice) {
        msg.innerText = "Drawn !";
        msg.style.backgroundColor = "black";
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? true : false;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? true : false;
        }
        else {
            userWin = compChoice === "rock" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore; 
        msg.innerText = `You Lost ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Won ! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }
}

const genCompChoise = () => {
    const options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];

}
