// Constants
const startButton = document.getElementById('start');
const questionsContainer = document.getElementById('questions');
const endScreen = document.getElementById('end-screen');
const timerDisplay = document.getElementById('time');
const initialsInput = document.getElementById('initials');
const submitButton = document.getElementById('submit');
const feedback = document.getElementById('feedback');
const soundCorrect = new Audio('./assets/sounds/correct.mp3');
const soundIncorrect = new Audio('./assets/sounds/incorrect.mp3');

// Other necessary variables
let currentQuestionIndex = 0;
let timer;
let timeLeft = 60; // Set the initial time limit

// Function to start the quiz
function startQuiz() {
  // Initialize necessary variables
  currentQuestionIndex = 0;
  timeLeft = 60;
  timerDisplay.textContent = timeLeft;

  // Show the questions container, hide other screens
  questionsContainer.classList.remove('hide');
  endScreen.classList.add('hide');

  // Start the timer
  startTimer();

  // Display the first question
  displayQuestion();
}

// Function to display a question
function displayQuestion() {
  const questionObj = getQuestion(currentQuestionIndex);
  const questionTitle = document.getElementById('question-title');
  const choicesContainer = document.getElementById('choices');

  // Update the question title
  questionTitle.textContent = questionObj.question;

  // Clear previous choices
  choicesContainer.innerHTML = '';

  // Loop through choices and create buttons
  for (let i = 0; i < questionObj.choices.length; i++) {
    const choiceButton = document.createElement('button');
    choiceButton.textContent = questionObj.choices[i];
    
    // Attach an event listener to the button to handle the answer
    choiceButton.addEventListener('click', function() {
      // Check if the selected choice is the correct answer
      const isCorrect = (i === questionObj.correctAnswer);
      handleAnswer(isCorrect);
    });

    // Append the button to the choices container
    choicesContainer.appendChild(choiceButton);
  }
}
function handleAnswer(isCorrect) {
  if (isCorrect) {
    // Play correct sound
    soundCorrect.play();
    // Update feedback for correct answer
    feedback.textContent = "Correct!";
  } else {
    // Play incorrect sound
    soundIncorrect.play();
    // Subtract time for incorrect answer
    timeLeft -= 10;
    // Update feedback for incorrect answer
    feedback.textContent = "Wrong! -10 seconds";
  }

  // Move to the next question or end the game if all questions are answered
  currentQuestionIndex++;
  if (currentQuestionIndex < getTotalQuestions()) {
    displayQuestion();
  } else {
    endGame();
  }
}

// Function to end the game
function endGame() {
  // Stop the timer
  clearInterval(timer);

  // Display the end screen
  endScreen.classList.remove('hide');

  // Display the final score
  document.getElementById('final-score').textContent = calculateScore();

  // Other end-game logic, such as displaying the initials input
  submitButton.addEventListener('click', function() { saveScore(); });
}

// Function to start the timer
function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    // Check if time has run out
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

// Function to calculate the score
function calculateScore() {
  // Implement logic to calculate the score based on time left or other criteria
}

// Function to save the score
function saveScore() {
  const initials = initialsInput.value.trim();
  if (initials !== "") {
    const score = calculateScore(); // Modify this based on your scoring logic
    saveScore(initials, score);
  }
}

// Event listener for the start button
startButton.addEventListener('click', startQuiz);
