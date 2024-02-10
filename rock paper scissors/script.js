const player = {
  currentChoice: null
}
const computer = {
  currentChoice: null
}

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const choices = ["Lapis", "Papyrus", "Scalpellus"];

//listening for button choice
button1.addEventListener('click', () => {
    player.currentChoice = choices[0];
    compareChoices();
});

button2.addEventListener('click', () => {
    player.currentChoice = choices[1];
    compareChoices();
});

button3.addEventListener('click', () => {
    player.currentChoice = choices[2];
    compareChoices();
});


// testing out the conditionals
function computerChooses(){
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
}

// function deciphering who wins
function compareChoices(){
  computerChooses();
  if(computer.currentChoice === player.currentChoice){
    displayResult("It's a tie! The computer and player both chose " + computer.currentChoice);
  }else if(computer.currentChoice === choices[0]){
    if(player.currentChoice === choices[1]){
      displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }else if(computer.currentChoice === choices[1]){
    if(player.currentChoice === choices[2]){
      displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }else if(computer.currentChoice === choices[2]){
    if(player.currentChoice === choices[0]){
      displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }
}

function displayResult(result){ 
  const resultText = document.createElement('p');
  resultText.innerText = result;
  document.body.appendChild(resultText);
}

compareChoices()
