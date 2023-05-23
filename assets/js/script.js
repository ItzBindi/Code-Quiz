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
        correctAnswer: "alerts"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correctAnswer: "all of the above"
    }
]
// console.log(questionsList[1].answers.b);
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
var answerBox = document.getElementById("hello");

answerBox.addEventListener("click", function(event){
    
    if(event.target.matches("li")){
        if (event.target.textContent === questionsList[0].correctAnswer || event.target.textContent === questionsList[1].correctAnswer){
            console.log("correct");
        }else {
            console.log("incorrect");
        }
        if (correctAnswer === true){
            
        }


    }
})

    function randomquestion() {
    var randques = questionsList[Math.floor(Math.random() * questionsList.length)];
    console.log(randques);
    
    var randquesdisplay = randques.question+ "<br><br>";
        // console.log(randquesdisplay);
    var answers = randques.answers;
    //this loop iterates over an object where answersKey is the current key and answers is the object we are looping through
    for (var answersKey in answers) {
        var answerEl = document.createElement("li");
        answerEl.textContent = answers[answersKey];
        // console.log(answerEl);
        answerBox.append(answerEl);
        
    }
  
    h2El.innerHTML = randquesdisplay;
    

  }
  
  function questionClick(event) { 
    let text = event.target.value;
    // document.getElementById("demo").innerHTML = text;
    // console.log(text);
  }

  document.addEventListener("click", questionClick)

  