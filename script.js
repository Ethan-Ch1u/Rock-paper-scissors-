let player;
let playerScore = 0;
let computer;
let computerScore = 0;

let choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    player = this.id;
    document.getElementById("player-choice").src = player + ".png";

    //comp go random choice
    computer = choices[Math.floor(Math.random() * 3)];
    document.getElementById("computer-choice").src = computer + ".png";

    //stuff to make winner
    if (player == computer) {
        playerScore += 0;
        computerScore += 0;
    }
    else {
        if (player == "rock") {
            if (computer == "scissors") {
                playerScore += 1;
            }
            else if (computer == "paper") {
                computerScore += 1;
            }
        }
        else if (player == "scissors") {
            if (computer == "paper") {
                playerScore += 1;
            }
            else if (computer == "rock") {
                computerScore += 1;
            }
        }
        else if (player == "paper") {
            if (computer == "rock") {
                playerScore += 1;
            }
            else if (computer == "scissors") {
                computerScore += 1;
            }
        }
    }

    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
}
