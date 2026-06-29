// Store the correct answers in one easy-to-read object.
const correctAnswers = {
  q1: "Red",
  q2: "On the outside",
  q3: "Summer",
  q4: "Green leaves",
  q5: "Strawberry shortcake"
};

// These labels are used when showing the correct answers after submission.
const questionLabels = {
  q1: "Question 1",
  q2: "Question 2",
  q3: "Question 3",
  q4: "Question 4",
  q5: "Question 5"
};

const quizForm = document.getElementById("quiz-form");
const results = document.getElementById("results");
const tryAgainButton = document.getElementById("try-again-button");

quizForm.addEventListener("submit", function (event) {
  // Stop the form from refreshing the page.
  event.preventDefault();

  let score = 0;
  let answerList = "";

  // Check each question against the correct answer.
  for (const questionName in correctAnswers) {
    const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
    const correctAnswer = correctAnswers[questionName];

    if (selectedAnswer && selectedAnswer.value === correctAnswer) {
      score++;
    }

    answerList += `<li>${questionLabels[questionName]}: <span class="correct-answer">${correctAnswer}</span></li>`;
  }

  results.innerHTML = `
    <h2>You scored ${score} out of 5.</h2>
    <p>Correct answers:</p>
    <ul>${answerList}</ul>
  `;
});

tryAgainButton.addEventListener("click", function () {
  // Clear selected answers and remove the results message.
  quizForm.reset();
  results.innerHTML = "";
});
