// Array of question objects
const questions = [
    {
      question: "What does HTML stand for?",
      choices: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
      correctAnswer: 0,
    },
    {
      question: "What does CSS stand for?",
      choices: ["Counter Strike: Source", "Corrective Style Sheet", "Cascading Style Sheet"],
      correctAnswer: 2,
    },
    {
      question: "What is the purpose of the let keyword in JavaScript?",
      choices: ["Declare a constant variable"," Declare a block-scoped variable","Declare a global variable"],
      correctAnswer: 1,
    },
    {
      question: "What is a closure in JavaScript?",
      choices: ["A way to lock a variable's value", "A combination of a function and the lexical environment within which that function was declared", "A data structure for storing key-value pairs"],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of the JSON.stringify method in JavaScript?",
      choices: ["Convert a JSON string to a JavaScript object", "Parse a JSON string", " Convert a JavaScript object to a JSON string"],
      correctAnswer: 2,
    }
  ];
  
  // Function to get a specific question
  function getQuestion(index) {
    return questions[index];
  }
  
  // Function to get the total number of questions
  function getTotalQuestions() {
    return questions.length;
  }