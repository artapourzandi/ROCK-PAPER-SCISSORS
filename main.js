// Create an array to randoly choose from

const arr = ["rock", "paper", "scissors"];

// creat a function randomly choose from 'Rock', 'Paper' or 'sciasors'.

function computerPlay() {

    let random_pick = Math.floor(Math.random() * arr.length);
    // console.log(arr[random_pick]);
    return arr[random_pick];
}

let pre_playerSelection = window.prompt("Play your move:");
let playerSelection = pre_playerSelection.toLowerCase();
let machine = computerPlay();
console.log(machine);

function playRound(playerSelection, computerSelection) {
    // const expr = '';
    switch (computerSelection) {
      case 'rock':
        // console.log('rock - rock! Equal');
        return "rock - rock! Equal";
        break;
      case 'paper':
        // console.log('You Lose! Paper beats Rock');
        return "You Lose! Paper beats Rock";
        break;
      case 'scissors':
        // console.log('I Lose! rock beats scissors');
        return "I Lose! rock beats scissors";
        break;  
    }
}

let one_round = playRound(playerSelection, machine);
console.log(one_round);

const game = () => {
  let player_score = 0; 
  let machine_score = 0;
  
  for (let i = 1; i < 6; i++) {
    let for_machine = computerPlay();
    let result = playRound(playerSelection, for_machine);
    // console.log(result);
      if (result === 'You Lose! Paper beats Rock') {
        player_score ++;
      } else if (result === 'I Lose! rock beats scissors') {
        machine_score ++;
      }
  }
  return machine_score;
};

let final_score = game();
console.log(final_score);