"use strict";
const duck = document.getElementById("duck");
const scoreNumber = document.getElementById("scoreNumber");
const timer = document.getElementById("timer");
const duckDelayTime = 1500;
const duckDelayTimeInterval = duckDelayTime / 150;
let score = 0;

(function () {
    duck.onmouseover = () => {
        increaseScore();
        displaceDuck();
        startTimer();
    };

})();

function increaseScore() {
    scoreNumber.textContent = String(++score);
}

function displaceDuck() {
    duck.style.left = Math.max(Math.random() * (window.innerWidth - duck.offsetWidth - 20), 0) + "px";
    duck.style.top = Math.random() * (window.innerHeight - duck.offsetHeight) + "px";
}

function startTimer() {
    duck.hidden = true;
    timer.hidden = false;
    let timeLeft = duckDelayTime;
    const timeCounter = setInterval(() => {
        timeLeft -= duckDelayTimeInterval;
        timer.textContent = ((timeLeft / 1000).toFixed(2)) + "s"
    }, duckDelayTimeInterval);
    setTimeout(() => {
        clearInterval(timeCounter);
        duck.hidden = false;
        timer.hidden = true;
    }, duckDelayTime);
}