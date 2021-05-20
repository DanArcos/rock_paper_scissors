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

//Link elements to their respective ids
const playButtons = document.querySelectorAll(".play_button");
const resetButton = document.querySelector('#btn_reset');

//Iterate through all buttons
playButtons.forEach((button) => {
    button.addEventListener("click", function(e){
        console.log(button.textContent);
        if(wins ===5 || losses===5){
            //Do nothing
        } else {
            update_all(button.textContent, computerPlay());
        }
        
    });
});

resetButton.addEventListener('click', resetGame);

function update_all(playerChoice, compChoice){
    game = playRound(playerChoice, compChoice)
    document.getElementById('player_choice').textContent = playerChoice;
    document.getElementById('comp_choice').textContent = compChoice;
    
    if (wins ===5 || losses===5){
        //Do Nothing
    }
    else {
        if (game===1) {
            //Increment win counter
            wins = wins +1
    
            //Update Result prompt
            document.getElementById('result_explanation').textContent = playerChoice.toString() + " beats " + compChoice.toString();
            //
    
            //Update Counter prompt
            document.getElementById('player_counter').textContent = wins.toString();

            if (wins===5){
                document.getElementById('result_text').textContent = "Game Over You Win!";
            }
        }
        else if (game===0){
            //Increment Loss Counter
            losses = losses +1
    
            //Update display prompt
            document.getElementById('result_explanation').textContent = compChoice.toString() + " beats " + playerChoice.toString();
            //
            document.getElementById('computer_counter').textContent = losses.toString();
            if (losses===5){
                document.getElementById('result_text').textContent = "Game Over. You Lose!";
            }
        }
        else {
            //Update display prompt
            document.getElementById('result_explanation').textContent = "Draw";
            //document.getElementById('result_text').textContent = "Draw!";
        }
        //console.log(game);
    }

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
    document.getElementById('result_explanation').textContent = "";
    document.getElementById('result_text').textContent = "";
    document.getElementById('computer_counter').textContent = losses.toString();
    document.getElementById('player_counter').textContent = wins.toString();
}


