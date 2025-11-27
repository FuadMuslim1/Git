import { getWordsData } from './data.js';

// Asumsi format soal: { question: "...", options: ["A", "B", "C"], answer: "B" }
const quizData = [
    // Data Quiz Vowel (Anda tambahkan di sini)
    { question: "Which word has the /ɪ/ sound?", options: ["sheep", "ship", "shoe"], answer: "ship" }
];

let currentQuestionIndex = 0;
let score = 0;

/**
 * Initializes and displays the quiz.
 */
export function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

function displayQuestion() {
    const container = document.getElementById('quiz-container');
    const scoreDisplay = document.getElementById('quiz-score');

    if (currentQuestionIndex >= quizData.length) {
        container.innerHTML = `<h2>Quiz Selesai!</h2><p>Skor Akhir Anda: ${score} dari ${quizData.length}</p>`;
        scoreDisplay.textContent = `Skor: ${score}`;
        return;
    }

    const q = quizData[currentQuestionIndex];
    scoreDisplay.textContent = `Skor: ${score}`;

    let html = `<h3>Soal ${currentQuestionIndex + 1}: ${q.question}</h3>`;
    q.options.forEach(option => {
        html += `<button class="btn btn-primary" onclick="checkAnswer('${option}')">${option}</button><br><br>`;
    });

    container.innerHTML = html;
}

window.checkAnswer = function(selectedOption) {
    const q = quizData[currentQuestionIndex];

    if (selectedOption === q.answer) {
        score++;
        alert('Jawaban Benar!');
    } else {
        alert(`Jawaban Salah. Jawaban benar adalah: ${q.answer}`);
    }
    
    currentQuestionIndex++;
    displayQuestion();
}

// initQuiz() akan dipanggil di halaman exercise yang relevan.