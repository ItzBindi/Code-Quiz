var startbtn = document.getElementById("start");
var timer = document.getElementById("timer");
var count = 10;
var h2El = document.getElementById("word");
var questionsList = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        correctAnswer: "c"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correctAnswer: "d"
    }
]

startbtn.addEventListener("click", function(e){

    randomquestion();

    var gameTimer = setInterval(function(){
        count--;
        timer.textContent = count;
        if (count < 1){
            clearInterval(gameTimer)
            h2El.textContent = "Game Over"
            

        }
    }, 1000)
})


    function randomquestion() {
    var randques = questionsList[Math.floor(Math.random() * questionsList.length)];
    console.log(randques);
    var randquesdisplay = randques.question+ "<br><br>";
  
    var answers = randques.answers;
    for (var prop in answers) {
      randquesdisplay += prop + ") " + answers[prop] + "<br>";
    }
  
    h2El.innerHTML = randquesdisplay;


  }
  
  h2El.addEventListener("click", function() {
    var correct = questionsList.correctAnswer
    if(correct === true)
    console.log(correct);

  })