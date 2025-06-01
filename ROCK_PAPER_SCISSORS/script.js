let userScore = 0;
let compScore = 0;
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const showWinner = (userWin) => {
    if(userWin){
        userScore++; 
        msg.innerText = "you win"
        uScore.innerText = userScore;
        msg.style.backgroundColor = "green";

    }else {
        compScore++;
        msg.innerText = "you lose!";
        cScore.innerText = compScore;
        msg.style.backgroundColor = "red";

    }
};
const drawGame = () => {
    msg.innerText = "game was draw";
    msg.style.backgroundColor = "#081b31";

}

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const playGame = (userChoice) => {
    const comChoice = genComputerChoice();
    console.log("comp choice :",comChoice);

    if(userChoice === comChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin =  comChoice === 'paper' ? false:true;
        }
        else if(userChoice === "paper"){
            userWin =  comChoice === 'scissors' ? false : true;
        }
        else{
            userWin =  comChoice === 'rock' ? false : true;
        }
        showWinner(userWin);
    }
    
    
}
// console.log(choices);
choices.forEach((choice) => {
    choice.addEventListener('click',() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});