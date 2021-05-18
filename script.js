//console.log("Test");

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
        return 3;
    }
    else if (playerMove===computerSelection){
        console.log("Draw");
        return 7;
    }
    else if ( (playerMove === "Rock" && computerSelection === "Scissors")||
    (playerMove === "Paper" && computerSelection === "Rock")||
    (playerMove === "Scissors" && computerSelection === "Paper") ) {
        console.log(`You Win! ${playerMove} beats ${computerSelection}`);
        return 1;
    }
    else {
        console.log(`You Lose! ${computerSelection} beats ${playerMove}`);
        return 0;
    }
    //console.log(playerMove);
}

function game(num_rounds){
    let wins = 0;
    let losses = 0;
    let draws = 0;
    
    for (let i = 0; i < num_rounds; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        
        let round = playRound(playerChoice, computerPlay());
        if (round === 1){
            wins++;
        }
        else if (round === 0){
            losses++;
        }
        else if (round===7) {
            draws++;
        } else {
            console.log("Not a valid game.")
        }
    }

    if (wins > losses){
        console.log("Congrats! You've won the game!");
    }
    else if (losses > wins){
        console.log("You've lost the game!")
    }
    else {
        console.log("This Game is a draw!")
    }

    console.log("Total Wins:" + wins);
    console.log("Total Losses: " +losses);
    console.log("Total Draws: " + draws);
}

//Initialize values
let wins = 0;
let losses = 0;
let draws = 0;

//Step 1: load everything
console.log("Loaded")

//Step 2: on click play a round

//Event listener for Rock Button
window.onload = function(){
    document.getElementById('btn_rock').addEventListener("click", clickRock);
    document.getElementById('btn_paper').addEventListener("click", clickPaper);
    document.getElementById('btn_scissor').addEventListener("click", clickScissors);
    document.getElementById('btn_reset').addEventListener("click", resetGame);
}

function update_all(playerChoice, compChoice){
    game = playRound(playerChoice, compChoice)
    document.getElementById('player_choice').innerHTML = playerChoice;
    document.getElementById('comp_choice').innerHTML = compChoice;
    
    if (game===1){
        //Increment win counter
        wins = wins +1

        //Update Result prompt
        document.getElementById('result_explanation').innerHTML = playerChoice.toString() + " beats " + compChoice.toString();
        document.getElementById('result_text').innerHTML = "You Win!";

        //Update Counter prompt
        document.getElementById('player_counter').innerHTML = wins.toString();
    }
    else if (game===0){
        //Increment Loss Counter
        losses = losses +1

        //Update display prompt
        document.getElementById('result_explanation').innerHTML = compChoice.toString() + " beats " + playerChoice.toString();
        document.getElementById('result_text').innerHTML = "You Lose!";
        document.getElementById('computer_counter').innerHTML = losses.toString();
    }
    else {
        //Update display prompt
        document.getElementById('result_explanation').innerHTML = "No Dice";
        document.getElementById('result_text').innerHTML = "Draw!";
    }
    //console.log(game);
}

function clickRock(){
    update_all("Rock", computerPlay())
}

function clickPaper(){
    update_all("Paper", computerPlay())
}

function clickScissors(){
    update_all("Scissors", computerPlay())
}

//Update reset Game Logic
function resetGame() {
    wins = 0;
    losses = 0;
    document.getElementById('result_explanation').innerHTML = "";
    document.getElementById('result_text').innerHTML = "";
    document.getElementById('computer_counter').innerHTML = losses.toString();
    document.getElementById('player_counter').innerHTML = wins.toString();
}

//Step 4: Update Counters
