'use strict';
//selecting elements
const player1 = document.querySelector('#name1');
const player2 = document.querySelector('#name2');
let score1 = document.querySelector('#score1');
let score2 = document.querySelector('#score2');
let currentScore1 = document.querySelector('.current-score1');
let currentScore2 = document.querySelector('.current-score2');
const newGame = document.querySelector('.new-game');
const rollDice = document.querySelector('.dice-roll');
const hold = document.querySelector('.hold');
const diceEl = document.querySelector('.dice');
const playerSection1 = document.getElementById('player1');
const playerSection2 = document.getElementById('player2');
let currentScore, activePlayer, scores, playing;
// Implementing initial conditions function
const init = function() {
    currentScore = 0;
    activePlayer = 1;
    scores = [
        0,
        0,
        0
    ];
    playing = true;
    score1.textContent = 0;
    score2.textContent = 0;
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
    diceEl.classList.add('hidden');
    playerSection1.classList.remove('winner');
    playerSection2.classList.remove('winner');
    playerSection1.classList.add('active-player');
    playerSection2.classList.remove('active-player');
    document.querySelector(`#name1`).textContent = 'PLAYER 1';
    document.querySelector(`#name2`).textContent = 'PLAYER 2';
};
//Calling initalisation function
init();
//implementing switch function functionality
const switchPlayer = function() {
    document.querySelector(`.current-score${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 1 ? 2 : 1;
    playerSection1.classList.toggle('active-player');
    playerSection2.classList.toggle('active-player');
};
//implementing dice roll functionality
rollDice.addEventListener('click', function() {
    if (playing) {
        diceEl.classList.remove('hidden');
        let dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.src = `./dice/dice-${dice}.png`;
        if (dice !== 1) {
            currentScore = currentScore + dice;
            document.querySelector(`.current-score${activePlayer}`).textContent = currentScore;
        } else //switch to player2
        switchPlayer();
        console.log(dice);
    }
});
//holding score
hold.addEventListener('click', function() {
    if (playing) {
        scores[activePlayer] = scores[activePlayer] + currentScore;
        document.querySelector(`#score${activePlayer}`).textContent = scores[activePlayer];
        //checking  if score is equal or greater than 100
        if (scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.section${activePlayer}`).classList.add('winner');
            //rollDice.classList.remove('dice-roll');
            diceEl.classList.add('hidden');
            document.querySelector(`#name${activePlayer}`).textContent = 'WINNER 😄';
        } else //switching player
        switchPlayer();
    }
});
//ccalling initial conditions function in newgame button
newGame.addEventListener('click', init); //END OF CODE

//# sourceMappingURL=index.7c0ccee6.js.map
