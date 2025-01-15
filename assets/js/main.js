const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
      answer: "Cascading Style Sheets",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const scoreEl = document.getElementById("score");
  const nextBtn = document.getElementById("next-btn");

  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    answersEl.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("btn", "btn-outline-dark", "mb-2");
      button.addEventListener("click", () => handleAnswer(option));
      answersEl.appendChild(button);
    });
  }

  function handleAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;

    if (isCorrect) {
      score++;
      scoreEl.textContent = score;
    }

    Array.from(answersEl.children).forEach((btn) => {
      btn.disabled = true;
      btn.classList.add(btn.textContent === currentQuestion.answer ? "btn-success" : "btn-danger");
    });

    nextBtn.style.display = "block";
  }

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      nextBtn.style.display = "none";
    } else {
      questionEl.textContent = "Quiz Completed!";
      answersEl.innerHTML = "";
      nextBtn.style.display = "none";
    }
  });

  loadQuestion();