var rollBtn1 = document.querySelector('.btn-1')
var rollBtn2 = document.querySelector('.btn-2')
var score1 = document.querySelector('.score-1')
var score2 = document.querySelector('.score-2')
var playAgainBtn = document.querySelector('.play-again-btn')
var resetBtn = document.querySelector('.reset-btn')
var heading = document.querySelector('.main-heading')
var img1 = document.querySelector('.img-1')
var img2 = document.querySelector('.img-2')

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var btn1Clicked = false;
var btn2Clicked = false;
var player1Win = 0;
var player2Win = 0;

rollBtn1.addEventListener('click', getRandom1);
rollBtn2.addEventListener('click', getRandom2);
playAgainBtn.addEventListener('click', playAgain);
resetBtn.addEventListener('click', resetGame);

function getRandom1() {
  img1.src = `./images/dice${randomNumber1}.png`
  btn1Clicked = true
  rollBtn1.style.visibility = 'hidden'
  declareWinner()
}

function getRandom2() {
  img2.src = `./images/dice${randomNumber2}.png`
  btn2Clicked = true
  rollBtn2.style.visibility = 'hidden'
  declareWinner()
}

function declareWinner() {
  if(!btn1Clicked && !btn2Clicked) {
  } else if(btn1Clicked && btn2Clicked){
    displayWinner() 
  }
}

function displayWinner() {
  if(randomNumber1 > randomNumber2) {
    heading.innerHTML = 'Player 1 Wins!'
    player1Win++
    score1.innerHTML = `${player1Win} Win/s`
    console.log('Player 1 Wins!')
  } else if(randomNumber2 > randomNumber1) {
    heading.innerHTML = 'Player 2 Wins!'
    player2Win++
    score2.innerHTML = `${player2Win} Win/s`
    console.log('Player 2 Wins!')
  } else {
    heading.innerHTML = `It's a draw!`
    console.log(`It's a draw!`)
  }
} 

function playAgain() {
  if(btn1Clicked && btn2Clicked) {
    btn1Clicked = false;
    btn2Clicked = false;
    rollBtn1.style.visibility = 'visible'
    rollBtn2.style.visibility = 'visible'
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
  } else {
    alert("Both player's must roll to play again")
  }
}

function resetGame() {
  player1Win = 0;
  player2Win = 0;
  score1.innerHTML = `${player1Win} Win/s`;
  score2.innerHTML = `${player1Win} Win/s`;
  btn1Clicked = false;
  btn2Clicked = false;
  rollBtn1.style.visibility = 'visible';
  rollBtn2.style.visibility = 'visible';
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  randomNumber2 = Math.floor(Math.random() * 6) + 1;
  heading.innerHTML = 'Both Roll Dice!';
  img1.src = `./images/dice1.png`;
  img2.src = `./images/dice1.png`;
}










