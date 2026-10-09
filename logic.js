const questions = [
    {
        question: "Which is the largest planet in our Solar System?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: "Jupiter"
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        options: ["Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi", "B. R. Ambedkar"],
        answer: "Mahatma Gandhi"
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Ganga River", "Yangtze River"],
        answer: "Nile River"
    },
    {
        question: "How many continents are there in the world?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Which is the national animal of India?",
        options: ["Lion", "Elephant", "Tiger", "Leopard"],
        answer: "Tiger"
    },
    {
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Isaac Newton"],
        answer: "Alexander Graham Bell"
    },
    {
        question: "Which is the smallest continent in the world?",
        options: ["Europe", "Antarctica", "Australia", "South America"],
        answer: "Australia"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Bangkok", "Tokyo"],
        answer: "Tokyo"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: "Carbon dioxide"
    },
    {
        question: "Who was the first President of India?",
        options: ["Dr. Rajendra Prasad", "Dr. A. P. J. Abdul Kalam", "S. Radhakrishnan", "Zakir Husain"],
        answer: "Dr. Rajendra Prasad"
    }
];


let startScreen = document.querySelector(".cont1")
let startBtn = document.querySelector("#first-btn");

let quizScreen = document.querySelector(".cont2")
let quesCounter = document.querySelector("#ques-counter")
let quesText = document.querySelector(".ques-text")
let optionsContainer = document.querySelector(".opt-cont")
let nextBtn = document.querySelector("#sec-btn")

let result = document.querySelector("#result")
let restartBtn = document.querySelector("#third-btn")

// initially
restartBtn.style.display = 'none';
quizScreen.style.display = 'none'
let score = 0;

let currQ = 0;
function loadQuestion() {
    optionsContainer.innerHTML = "";
    nextBtn.disabled = true;




    if (currQ < questions.length) {
        quesCounter.textContent = `${currQ + 1}/${questions.length}`;
    }

    quesText.textContent = questions[currQ].question



    let options = document.createElement("div")
    optionsContainer.appendChild(options)

    for (let option of questions[currQ].options) {


        let button = document.createElement("button");

        button.textContent = option;

        options.appendChild(button);

        button.addEventListener("click", () => {
            nextBtn.disabled = false;
            const correctAnswer = questions[currQ].answer;
            const buttons = optionsContainer.querySelectorAll("button");

            // Update score only if the selected answer is correct
            if (button.textContent === correctAnswer) {
                score++;
                result.textContent = `Result: ${score}`;
            }

            // Highlight answers and disable all buttons
            for (const optionButton of buttons) {
                if (optionButton.textContent === correctAnswer) {
                    optionButton.style.backgroundColor = "green";
                    optionButton.style.color = "#fff";
                } else if (optionButton === button) {
                    optionButton.style.backgroundColor = "red";
                    optionButton.style.color = "#fff";
                }

                optionButton.disabled = true;
            }
        });
    }
}


nextBtn.addEventListener("click", () => {
    currQ++;

    if (currQ < questions.length) {
        loadQuestion();
    } else {
        // Hide quizScreen
        // Display final score
        if (currQ === questions.length) {
            quizScreen.style.display = 'none';

            result.textContent = `Quiz completed! Your score is ${score}/${questions.length}`;
            restartBtn.style.display = 'block';

        }


    }
});

startBtn.addEventListener("click", () => {
    startBtn.style.display = 'none'
    quizScreen.style.display = 'block'
    loadQuestion();

})

restartBtn.addEventListener("click", () => {
    score = 0;
    currQ = 0;
    result.textContent = "";
    quizScreen.style.display = 'block'
    restartBtn.style.display = 'none'
    loadQuestion();
});

