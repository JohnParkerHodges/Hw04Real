const startButton = document.getElementById('startQuiz');
const greeting = document.getElementById('greeting');
const questionDiv = document.getElementById('question');
const timerDiv = document.getElementById('timer');
const scoreDiv = document.getElementById('score');
const finalScoreDiv = document.getElementById('finalScore');
const currentResultDiv = document.getElementById('currentResult');
const wholeGameDiv = document.getElementById('wholeGame');
const endResultsDiv = document.getElementById('endResults');
const intialsInput = document.getElementById('intialsInput');
const highScoreContentDiv = document.getElementById('highScoreContent');
const highScoreList = document.getElementById('highScoreList');
const choiceA = document.getElementById('choiceA');
const choiceB = document.getElementById('choiceB');
const choiceC = document.getElementById('choiceC');
const choiceD = document.getElementById('choiceD');

let currentQuestionNumber = 0;
let score = 0;
let timer = 100;
let timerInterval;

startButton.addEventListener('click', start);

function start() {
    startButton.classList.add('d-none');
    greeting.classList.add('d-none');
    wholeGameDiv.classList.remove('d-none');
    timerInterval = setInterval(() => {
        timerDiv.innerHTML = timer;
        timer--;
        timer <= 0 && endGame();
    }, 1000);
    renderQuestion();
}

function renderQuestion() {
    currentQuestionNumber > 9 && endGame();
    const currentQuestion = questions[currentQuestionNumber];
    questionDiv.innerHTML = currentQuestion.question;
    choiceA.innerHTML = currentQuestion.choiceA;
    choiceB.innerHTML = currentQuestion.choiceB;
    choiceC.innerHTML = currentQuestion.choiceC;
    choiceD.innerHTML = currentQuestion.choiceD;
}

function checkAnswer(choice) {
    choice === questions[currentQuestionNumber].correct ? correct() : incorrect();
    currentQuestionNumber++;
    renderQuestion();
}

function correct() {
    score++;
    scoreDiv.innerHTML = score;
    currentResultDiv.innerHTML = 'Correct!';
    setTimeout(() => {
        currentResultDiv.innerHTML = '';
    }, 2000);
}

function incorrect() {
    timer -= 3;
    timerDiv.innerHTML = timer;
    currentResultDiv.innerHTML = 'Incorrect!';
    setTimeout(() => {
        currentResultDiv.innerHTML = '';
    }, 2000);
}

function endGame() {
    clearInterval(timerInterval);
    wholeGameDiv.classList.add('d-none');
    finalScoreDiv.innerHTML = score;
    endResultsDiv.classList.remove('d-none');
}

function handleHighScoreSubmit(e) {
    e.preventDefault();
    localStorage.setItem(intialsInput.value, score);
    endResultsDiv.classList.add('d-none');
    highScoreContentDiv.classList.remove('d-none');
    for (let i = 0; i < localStorage.length; i++) {
        let li = document.createElement('li');
        let text = document.createTextNode(localStorage.key(i));
        li.appendChild(text);
        highScoreList.appendChild(li);
    }
}

let questions = [{
        question: 'Inside which HTML element do we put the JavaScript?',
        imgSrc: './assets/images/1_HP8l7LMMt7Sh5UoO1T-yLQ.png',
        choiceA: '&lt;script&gt;',
        choiceB: '&ltjavascript&gt',
        choiceC: '&ltjs&gt',
        choiceD: '&ltscripting&gt',
        correct: 'A',
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        imgSrc: './assets/images/1_HP8l7LMMt7Sh5UoO1T-yLQ.png',
        choiceA: 'if (i == 5)',
        choiceB: 'if i = 5 then',
        choiceC: 'if i = 5',
        choiceD: 'if i == 5 then',
        correct: 'A',
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        imgSrc: './assets/images/1_HP8l7LMMt7Sh5UoO1T-yLQ.png',
        choiceA: 'The &ltbody&gt section',
        choiceB: 'Both the &lthead&gt section and the &ltbody&gt section are correct  ',
        choiceC: 'The &lthead&gt section',
        choiceD: 'The &ltHeader&gt section',
        correct: 'B',
    },
    {
        question: 'The external JavaScript file must contain the &ltscript&gt tag.',
        imgSrc: './assets/images/1_HP8l7LMMt7Sh5UoO1T-yLQ.png',
        choiceA: 'False',
        choiceB: 'True',
        // TODO: add choices
        correct: 'A',
    },
    {
        question: 'How does a WHILE loop start?',
        imgSrc: './assets/images/1_HP8l7LMMt7Sh5UoO1T-yLQ.png',
        choiceA: 'while (i <= 10)',
        choiceB: 'while i = 1 to 10',
        choiceC: 'while (i <= 10; i++)',
        // TODO: add choices
        correct: 'A',
    },
    {
        question: 'How does a FOR loop start?',
        imgSrc: './assets/images/1_HP8l7LMMt7Sh5UoO1T-yLQ.png',
        choiceA: 'for (i = 0; i <= 5; i++)',
        choiceB: 'for i = 1 to 5',
        choiceC: 'for (i = 0; i <= 5)',
        choiceD: 'for (i <= 5; i++)',
        correct: 'A',
    },
    {
        question: 'How do you round the number 7.25, to the nearest integer?',
        imgSrc: './assets/images/1_HP8l7LMMt7Sh5UoO1T-yLQ.png',
        choiceA: 'Math.round(7.25)',
        choiceB: 'Math.rnd(7.25)',
        choiceC: 'rnd(7.25)',
        choiceD: 'round(7.25)',
        correct: 'A',
    },
    {
        question: 'How do you find the number with the highest value of x and y?',
        imgSrc: './assets/images/1_HP8l7LMMt7Sh5UoO1T-yLQ.png',
        choiceA: 'Math.max(x, y)',
        choiceB: 'ceil(x, y)',
        choiceC: 'Math.ceil(x, y)',
        choiceD: 'top(x, y)',
        correct: 'A',
    },
    {
        question: 'JavaScript is the same as Java.',
        imgSrc: './assets/images/1_HP8l7LMMt7Sh5UoO1T-yLQ.png',
        choiceA: 'False',
        choiceB: 'True',
        // TODO: add choices
        correct: 'A',
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        imgSrc: './assets/images/1_HP8l7LMMt7Sh5UoO1T-yLQ.png',
        choiceA: 'onclick  ',
        choiceB: 'onmouseclick',
        choiceC: 'onchange',
        choiceD: 'onmouseover',
        correct: 'A',
    },
];