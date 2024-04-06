const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result');
let score = 0;

const questions = [
    {
        question: "What does consent mean?",
        answers: ["A. Agreeing to do something", "B. Saying 'yes' when you mean it", "C. Giving permission"],
        correctAnswer: "C"
    },
    {
        question: "What is the age of consent in most places?",
        answers: ["A. 16", "B. 18", "C. 21"],
        correctAnswer: "A"
    },
    {
        question: "What should you do if someone says 'no'?",
        answers: ["A. Ignore them", "B. Respect their decision", "C. Convince them to change their mind"],
        correctAnswer: "B"
    },
    {
        question: "What is one way to ask for consent?",
        answers: ["A. Keep asking until they say yes", "B. Assume they're okay with it", "C. Ask clearly and listen for their answer"],
        correctAnswer: "C"
    },
    {
        question: "What is the definition of enthusiastic consent?",
        answers: ["A. When someone agrees reluctantly", "B. When someone agrees excitedly and willingly", "C. When someone agrees but doesn't really want to"],
        correctAnswer: "B"
    }
];

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
        
        const answersElement = document.createElement('div');
        answersElement.classList.add('answers');
        
        question.answers.forEach(answer => {
            const answerElement = document.createElement('div');
            answerElement.classList.add('answer');
            answerElement.innerHTML = `<input type="radio" name="question${index}" value="${answer.charAt(0)}">${answer}<br>`;
            answersElement.appendChild(answerElement);
        });
        
        questionElement.appendChild(answersElement);
        quizContainer.appendChild(questionElement);
    });
}

function showResult() {
    let message = '';
    let smiley = '';
    let icon = '';
    if (score === 5) {
        message = 'Congratulations! You scored 5 out of 5.';
        smiley = '😊';
        icon = 'icon-success';
    } else if (score >= 3) {
        message = 'Great job! You scored ' + score + ' out of 5.';
        smiley = '👍';
        icon = 'icon-success';
    } else {
        message = 'Oops! You scored ' + score + ' out of 5. Remember, there\'s always room for improvement.';
        smiley = '😕';
        icon = 'icon-failure';
    }
    resultContainer.innerHTML = `
        <div class="result-popup ${icon}">
            <div class="score">${message}</div>
            <div class="improvement">There's always room for improvement ${smiley}</div>
        </div>
    `;
}

function checkAnswers() {
    score = 0;
    questions.forEach((question, index) => {
        const userAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (userAnswer && userAnswer.value === question.correctAnswer) {
            score++;
        }
    });
    showResult();
}

buildQuiz();

const submitButton = document.createElement('button');
submitButton.textContent = 'Submit Answers';
submitButton.addEventListener('click', checkAnswers);
quizContainer.appendChild(submitButton);
