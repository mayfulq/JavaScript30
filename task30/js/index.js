 const holes = document.querySelectorAll('.hole');
 const scoreBoard = document.querySelector('.score');
 const btn = document.querySelector('.btn');
 const moles = document.querySelectorAll('.mole');
 const timerDisplay = document.querySelector('.timerDisplay');
 const timerh1 = document.querySelector('.timer');
 const audio = document.querySelector('.audio');
 let countdown;
 let lastHole;
 let timeUp = false;
 let score = 0;
 let seconds = 30;

  function timer(seconds) {
     const now = Date.now();
     const then = now + seconds * 1000;

     clearInterval(countdown);

     displayTimeLeft(seconds);

     countdown = setInterval(() => {
         const secondsLeft = Math.round((then - Date.now()) / 1000);
         if (secondsLeft < 0) {
             clearInterval(countdown);
             return;
         }
         displayTimeLeft(secondsLeft);
     }, 1000)
 }

 function displayTimeLeft(seconds) {
     const mins = Math.floor(seconds / 60);
     const remainderSeconds = seconds % 60;
     const display = `${mins}:${remainderSeconds <10 ? '0':'' }${remainderSeconds}`;
     timerDisplay.innerHTML = display + 's';
     if (display === '0:00') {
         timerh1.innerHTML = 'Game Over';
     }
 }

 function randTime(min, max) {
     return Math.round(Math.random() * (max - min) + min);
 }

 function randomHole(holes) {
     const idx = Math.floor(Math.random() * holes.length);
     const hole = holes[idx];
     if (hole === lastHole) {
         return randomHole(holes);
     }
     lastHole = hole;
     return hole;
 }

 function peep() {
     const time = randTime(200, 1000);
     const hole = randomHole(holes);
     hole.classList.add('up');

     setTimeout(function () {
         hole.classList.remove('up');
         if (!timeUp) peep();
     }, time);
 }

 function startGame() {
     scoreBoard.innerHTML = 0;
     timeUp = false;
     score = 0;
     peep();
     timer(seconds);
     setTimeout(function () {
         timeUp = true;
     }, seconds * 1000);
 }

 function bonk(e) {
     if (!e.isTrusted) return;
     score++;
     audio.play();
     this.classList.remove('up');
     scoreBoard.innerHTML = score;
 }



 moles.forEach(mole => mole.addEventListener('click', bonk));
 btn.addEventListener('click', startGame);