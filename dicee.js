let dice1 = 'images/dice' + (Math.floor(Math.random()*6)+1) + '.png';
let dice2 = 'images/dice' + (Math.floor(Math.random()*6)+1) + '.png';

document.querySelector('.img1').setAttribute('src', dice1);
document.querySelector('.img2').setAttribute('src', dice2);

let result="";
if(dice1 > dice2)
  result="Player 1 Wins! 🚩";
else if(dice2 > dice1)
  result="Player 2 Wins! 🚩";
else if (dice1===dice2)
  result="Draw!";

document.querySelector('h1').innerHTML = result;
