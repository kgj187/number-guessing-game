let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//write your code below
//the first function in this code generates the random number, non-decimal, that will be the random target the computer and human are trying to guess.
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
};
//the second function compares the guesses between the 3 subjects. the human guess(variable humanG) is set equal to the absolute value of the random number by the human subtracted by the random number of the target. same goes for the compute(computerG). the function returns the information if the human guess is less than or equal to the computer guess. because the human guess would be closer to the target. 
const compareGuesses = (human, computer, target) => {
  const humanG = getAbsoluteDistance(human, target);
  const computerG = getAbsoluteDistance(computer, target);
  alertMessage(human);
  return (humanG <= computerG)
};
//the third function updates the respective scores for the computer or human based on the outcome of the second function. if the winner is human the humanScore is increased by one, and the same goes for if the computer guess was correct or closer than the human.
const updateScore = winner => {
  if (winner === 'human') {
   humanScore = humanScore + 1;
  } else if (winner === 'computer') {
    computerScore = computerScore + 1;
  }
};
//the final function increases the round number by one for everytime the above functions are executed and adds to the previous total. 
const advanceRound = () => currentRoundNumber++ 

const getAbsoluteDistance = (x, y) => {
  return Math.abs(x, y)
};

const alertMessage = () => {
  if (humanG > 9 || humanG < 0)
  return 'Answer not in range!!';
};