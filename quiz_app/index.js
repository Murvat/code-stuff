async function fetchquizData() {
    const response = await fetch('frontEnd.json');
    const data = await response.json();
    return data;
}

let currentQuestion = 0;
let score = 0;
let quizData;
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;
    optionsContainer.innerHTML = '';

    currentQuizData.answers.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.answer;
        button.classList.add('option');
        button.addEventListener('click', checkAnswer);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(e) {
    const selectedOption = e.target.innerText;
    const currentQuizData = quizData[currentQuestion];

    const selectedAnswer = currentQuizData.answers.find(answer => answer.answer === selectedOption);

    if (selectedAnswer && selectedAnswer.value === true) {
        score++;
        console.log(score)
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionContainer.innerText = `You have completed the quiz! Your score is ${score}/${quizData.length}.`;
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
}

nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
});

window.addEventListener('load', async () => {
    quizData = await fetchquizData();
    loadQuestion();
});
