var startbtn = document.getElementById("start");
var quesDiv = document.getElementById("ques");
var count = 10;
var timer = document.getElementById("timer");
var h2El = document.getElementById("word");
var wins = 0;
var losses = 0;
var winEl = document.getElementById("wins");
var lossesEl = document.getElementById("losses");

var questionsList = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    }
]

startbtn.addEventListener("click", function (e) {
    var gameTimer = setInterval(function () {
        count--;
        timer.textContent = count;
        display();
        if (count < 1) {
            clearInterval(gameTimer)
            h2El.textContent = "Game Over"
            quesDiv.textContent = ""


        }
    }, 1000)
});

var quesIndex = 0;
function display() {
    quesDiv.textContent = questionsList[quesIndex].question;
    for (let i = 0; i < questionsList[quesIndex].answers.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = questionsList[quesIndex].answers[i];
        quesDiv.appendChild(btn);
    }

}

quesDiv.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        var userAnswer = event.target.textContent;
        if (userAnswer === questionsList[quesIndex].correctAnswer) {
            wins++;
            winEl.textContent = wins;
        }
        else {
            losses++;
            lossesEl.textContent = losses;
        }
        if (quesIndex < questionsList.length - 1) {
            quesIndex++;
            display();
        } else {
            h2El.textContent = "Game Over"
        }
    }
})


