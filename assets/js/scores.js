// Function to get high scores from local storage
function getHighScores() {
    const storedScores = JSON.parse(localStorage.getItem("highScores")) || [];
    return storedScores;
  }
  
  // Function to save a new score
  function saveScore(initials, score) {
    const newScore = { initials, score };
    const highScores = getHighScores();
  
    // Add the new score to the array
    highScores.push(newScore);
  
    // Sort the scores in descending order
    highScores.sort((a, b) => b.score - a.score);
  
    // Store the updated scores in local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }
  
  // Function to clear high scores
  function clearHighScores() {
    localStorage.removeItem("highScores");
  }