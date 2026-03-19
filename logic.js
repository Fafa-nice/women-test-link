import { questions, types } from './data.js';

let currentQuestion = 0;
let scores = {
    nuan: 0,
    fenghuang: 0,
    baoma: 0,
    zha: 0,
    lao: 0,
    jiabao: 0
};

const els = {
    app: document.getElementById('app'),
    welcomeScreen: document.getElementById('welcome-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    resultScreen: document.getElementById('result-screen'),
    startBtn: document.getElementById('start-btn'),
    restartBtn: document.getElementById('restart-btn'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    progressText: document.getElementById('progress-text'),
    progressBar: document.getElementById('progress-bar'),
    resultEmoji: document.getElementById('result-emoji'),
    resultTitle: document.getElementById('result-title'),
    resultDesc: document.getElementById('result-desc')
};

function init() {
    lucide.createIcons();
    els.startBtn.addEventListener('click', startQuiz);
    els.restartBtn.addEventListener('click', resetQuiz);
}

function startQuiz() {
    els.welcomeScreen.classList.add('hidden');
    els.quizScreen.classList.remove('hidden');
    els.quizScreen.classList.add('flex');
    renderQuestion();
}

function renderQuestion() {
    els.optionsContainer.innerHTML = '';
    const q = questions[currentQuestion];
    

    els.progressText.innerText = `${currentQuestion + 1} / ${questions.length}`;
    els.progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    

    els.questionText.classList.remove('fade-in');
    void els.questionText.offsetWidth; // trigger reflow
    els.questionText.classList.add('fade-in');
    els.questionText.innerText = q.q;

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn fade-in';
        btn.style.animationDelay = `${index * 0.1}s`;
        btn.innerText = opt.text;
        btn.addEventListener('click', () => handleSelect(opt.type));
        els.optionsContainer.appendChild(btn);
    });
}

function handleSelect(type) {
    scores[type]++;
    

    Array.from(els.optionsContainer.children).forEach(btn => btn.style.pointerEvents = 'none');

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            renderQuestion();
        } else {
            showResult();
        }
    }, 300);
}

function showResult() {
    els.quizScreen.classList.add('hidden');
    els.quizScreen.classList.remove('flex');
    els.resultScreen.classList.remove('hidden');
    els.resultScreen.classList.add('flex');

    let maxType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const result = types[maxType];

    els.resultEmoji.innerText = result.emoji;
    els.resultTitle.innerText = result.name;
    els.resultDesc.innerText = result.desc;
}

function resetQuiz() {
    currentQuestion = 0;
    for (let key in scores) scores[key] = 0;
    
    els.resultScreen.classList.add('hidden');
    els.resultScreen.classList.remove('flex');
    els.welcomeScreen.classList.remove('hidden');
}

init();
