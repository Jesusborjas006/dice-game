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

rollBtn1.addEventListener('click', getRandom1);
rollBtn2.addEventListener('click', getRandom2);

function getRandom1() {
  console.log(randomNumber1)
  img1.src = `./images/dice${randomNumber1}.png`
}

function getRandom2() {
  console.log(randomNumber2)
  img2.src = `./images/dice${randomNumber2}.png`
}






