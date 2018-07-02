var startButton = document.querySelector("#startButton");
var clickButton = document.querySelector("#clickButton");
var playAgainButton = document.querySelector("#playAgainButton");
var startGameSection = document.querySelector(".startGame");
var playGameSection = document.querySelector(".playGame");
var countResult = document.querySelector("#countResult");
var timeResult = document.querySelector("#time");
var count = 0;
var time = 10;
var c;

startButton.addEventListener("click", function () {
    startGameSection.style.display = "none";
    playGameSection.style.display = "block";
    c = setInterval(countDown, 1000);
});
clickButton.addEventListener("click", function () {
    count++;
    countResult.innerHTML = count;
});
playAgainButton.addEventListener("click", function () {
    c = setInterval(countDown, 1000);
    time = 10;
    count = 0;
    timeResult.innerHTML = "Time : 10";
    countResult.style.fontSize = "10em";
    countResult.innerHTML = '0';
    timeResult.style.color = "#FFFFFF";
    clickButton.style.display = "block";
    playAgainButton.style.display = "none";
});

function countDown () {
    time--;
    timeResult.innerHTML = `Time : ${time}`;
    if (time < 5) {
        timeResult.style.color = "#e74c3c";
    }
    if (time === 0) {
        countResult.style.fontSize = "3em";
        countResult.innerHTML = `Your Score : ${count}`;
        clickButton.style.display = "none";
        playAgainButton.style.display = "block";
        clearInterval(c);
    }
}