/*
  Rock paper scissors allows only 3 choices - rock, paper, scissors.
  Game result for a player is either tie, lose, or win.
*/
const choices = ['rock', 'paper', 'scissors'];
const result = ['tie!', 'you lose!', 'you win!']

/*
  The function getComputerChoice() randomly returns rock, paper, or scissors.
  @params - none.
  @return - computer's choice of rock, paper, or scissors.
*/
function getComputerChoice() {
  const MAX = 3;
  let index = Math.floor(Math.random() * MAX);
  return choices[index];
}

/*
  The function playRound() takes the player's and computer's choices and com
  -pares their choices to determine the round's result.
  @params - player's and computer's choice of rock, paper, or scissors.
  @return - the round's outcome.
*/
function playRound(playerSelection, computerSelection) {
  let roundResult;
  if (playerSelection == choices[0]) {
    if (computerSelection == choices[0]) {
      roundResult = result[0];
    }
    else if (computerSelection == choices[1]) {
      roundResult = result[1];
    }
    else {
      roundResult = result[2];
    }
  }
  if (playerSelection == choices[1]) {
    if (computerSelection == choices[0]) {
      roundResult = result[2];
    }
    else if (computerSelection == choices[1]) {
      roundResult = result[0];
    }
    else {
      roundResult = result[1];
    }
  }
  if (playerSelection == choices[2]) {
    if (computerSelection == choices[0]) {
      roundResult = result[1];
    }
    else if (computerSelection == choices[1]) {
      roundResult = result[2];
    }
    else {
      roundResult = result[0];
    }
  }
  console.log(roundResult);
  return roundResult;
}

/*
  The function game() allows the user play 5 rounds of rock, paper, scissors and
  determines the winner in a best of 5.
  @param - none.
  @return - the player's outcome of the best of 5.
*/
function game() {
  let winCount = 0;
  let loseCount = 0;

  let playerSelection = prompt("Rock, paper, or scissors?");
  let computerSelection = getComputerChoice();

  if (playRound(playerSelection, computerSelection) == result[0]) {
      winCount++;
  }

}

game();
