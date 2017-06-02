let countdown;
const timerDisplay = document.querySelector('.display-time-left');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    clearInterval(countdown);

    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft <= 0) {
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
    timerDisplay.innerHTML = display;
    document.title = `29 - ${display} Countdown Timer `
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer))

document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const minutes = this.minutes.value;
    timer(minutes * 60);
    this.reset();
})