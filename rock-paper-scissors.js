var userName = 'Alex';
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
      } else {
        console.log('Rock, paper or scissors?');
      }
};


function getComputerChoice() {
  num = Math.random(Math.floor()*3);
  if (num === 0) {
    console.log(getUserChoice('rock'));
  } else {
    if (num ===1) {
      console.log(getUserChoice('paper'));
    } else {
      console.log(getUserChoice('scissors'));
    }
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return('The game is a tie!');
  } 
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return('Computer wins!');
    } else {
      return(`${userName} wins!`)
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return('Computer wins!');
    } else {
      return(`${userName} wins!`)
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return('Computer wins!');
    } else {
      return(`${userName} wins!`)
    }
  }
  
  if (userChoice === 'bomb') {
    return (`${userName} wins!`)
  }
}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice) 
  console.log('Computer threw: ' + computerChoice);
  return playGame(userChoice, computerChoice);
}

console.log(determineWinner('rock', 'paper'));
