let player1 = prompt("ENTER A FIRST PLAYER NAME ('O') : ");
let player2 = prompt("ENTER A SECOUND PLAYER NAME ('X') : ");

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let turn0 = true;
let newGameBtn = document.getElementById("new-game");
let msgContainer = document.getElementById("msg");
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if (turn0) {
            box.innerText = 'O';
            turn0 = false;
        }
        else {
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;
        checkWineer();
        
    });
});
const checkWineer = () =>{
    for (const pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                for (let box of boxes) {
                    box.disabled = true;
                };
            };
        };
    };

};
const showWinner = (winnerName) => {
    if(winnerName === 'O'){
    msgContainer.innerText = "Congratulations, Winner Is : " + player1;
    }else{
        msgContainer.innerText = "Congratulations, Winner Is : " + player2;
    }
    newGameBtn.style.display = '';
};
const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = '';
    };
};
const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.innerText = '';
    newGameBtn.style.display = 'none';
};
newGameBtn.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);