console.log("Test");

function getRandomNumber(max){
    return (Math.floor(Math.random()*max));
}

//Function that tells computer to pick a random number
function computerPlay(){
    //Generate a random number
    const rand_num = getRandomNumber(3);
    if (rand_num === 0){
        var move = "Rock"
        //console.log(move);
        return move;
    }
    else if (rand_num === 1){
        var move = "Paper"
        //console.log(move);
        return move;
    }
    else {
        var move = "Scissors"
        //console.log(move);
        return move;
    }
}

//Function that plays the game
function playRound(playerSelection, computerSelection) {
    let playerMove = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerMove!=="Rock"&&playerMove!=="Paper"&&playerMove!=="Scissors") {
        return "Not a valid move!"
    }
    else if (playerMove===computerSelection){
        return "Draw"
    }
    else if ( (playerMove === "Rock" && computerSelection === "Scissors")||
    (playerMove === "Paper" && computerSelection === "Rock")||
    (playerMove === "Scissors" && computerSelection === "Paper") ) {
        return `You Win! ${playerMove} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerMove}`;
    }
    //console.log(playerMove);
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));