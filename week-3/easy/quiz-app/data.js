//  use this quizData in your app.
 const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
// you can add more quiz here
]

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = quizData[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '.' + currentQuestion.question;
    for (let option of ['a','b','c','d']) {
        const button = document.createElement("button");
        button.innerHTML = currentQuestion[option]
        button.classList.add("btn")
        button.addEventListener('click',function(){
            selectAnswer(button,option)
        })
        answerButtons.appendChild(button);
    }
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(button,selectedOption){
    const currentQuestion = quizData[currentQuestionIndex]
    if(selectedOption === currentQuestion.correct){
        button.classList.add("correct")
        score++
    }else{
        button.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(btn=> btn.disabled = true)
    nextButton.style.display = "block";
}


    nextButton.addEventListener('click',function(){
        currentQuestionIndex++
        if(currentQuestionIndex < quizData.length){
        showQuestion()
        }else{

            showScore()
        }

    })

    

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${quizData.length}`
    answerButtons.innerHTML = ''
    nextButton.innerHTML = "Restart"
    nextButton.style.display = "block";
    nextButton.addEventListener('click', startQuiz);
}

startQuiz()