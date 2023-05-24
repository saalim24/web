'use strict'

const currentscoreEl = document.querySelector(".currentscore");
const playeronescoreEl = document.querySelector("one");
const playertwoscoreEl = document.querySelector("two");
const rollbtnEl = document.getElementById('rolldice');
const newgamebtnEl = document.getElementById('newgame');
const holdbtnEl = document.getElementById('hold');

let currentscore = 0;
let activeplayer = 0;

const scores = [0, 0];


rollbtnEl.addEventListener('click', function () {
    let randomnum = Math.trunc(Math.random() * 6) + 1;
    if (randomnum !== 1) {
        currentscore += randomnum;
        document.getElementById(`${activeplayer}`).textContent = currentscore;
    }
    else {
        document.getElementById(`${activeplayer}`).textContent = 0;
        document.getElementById(`a${activeplayer}`).classList.toggle('activeplayer');
        document.getElementById(`a${activeplayer === 1 ? 0 : 1}`).classList.toggle('activeplayer');

        activeplayer = activeplayer === 0 ? 1 : 0;
        currentscore = 0;
    }
    document.getElementById('dice').classList.remove('hide');
    document.getElementById('dice').src = `/dice-${randomnum}.png`;
}
);

holdbtnEl.addEventListener('click', function () {
    scores[activeplayer] += Number(document.getElementById(`${activeplayer}`).textContent);
    document.getElementById(`t${activeplayer}`).textContent = scores[activeplayer];
    document.getElementById(`a${activeplayer}`).classList.toggle('activeplayer');
    document.getElementById(`a${activeplayer === 1 ? 0 : 1}`).classList.toggle('activeplayer');
    activeplayer = activeplayer === 0 ? 1 : 0;
    document.getElementById('dice').classList.add('hide');
    currentscore = 0;
}

);
newgamebtnEl.addEventListener('click', function () {
    scores[0] = 0;
    scores[1] = 0;
    document.getElementById('0').textContent = 0;
    document.getElementById('1').textContent = 0;
    document.getElementById('t0').textContent = 0;
    document.getElementById('t1').textContent = 0;
    activeplayer = 0;

});

