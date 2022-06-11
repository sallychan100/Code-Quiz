var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
  
    // un-hide questions section
    questionsEl.removeAttribute("class");
  
    // start timer
    timerId = setInterval(clockTick, 1000);
  
    // show starting time
    timerEl.textContent = time;
}

  
    function getQuestion() {
        // get current question object from array
        var currentQuestion = questions[currentQuestionIndex];
      
        // update title with current question
        var titleEl = document.getElementById("question-title");
        titleEl.textContent = currentQuestion.title;
      
        // clear out any old question choices
        choicesEl.innerHTML = "";
    }
