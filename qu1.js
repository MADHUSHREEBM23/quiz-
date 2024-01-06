let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');

function startQuiz() {
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const currentQuestion = questions[index];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('btn');
        button.onclick = () => checkAnswer(option, currentQuestion.correctAnswer);
        optionsContainer.appendChild(button);
    });

    nextButton.disabled = true;
}

function checkAnswer(userAnswer, correctAnswer) {
    nextButton.disabled = false;

    if (userAnswer === correctAnswer) {
        score++;
    }
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    alert(`Quiz completed!\nYour score: ${score}/${questions.length}`);
    // You can add more actions or reset the quiz here
}

// Start the quiz
startQuiz();
