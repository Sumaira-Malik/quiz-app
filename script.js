const quizData = [
    //q1
    {
      question: "1.Which of the following methods can be used to display data in some form using Javascript?",
      options: ["(a) document.write()", "(b) console.log()", "(c) window.alert()", "(d) all of above"],
      answer: "(d) all of above",
      explanation: "All of the above methods are used to display data in some form using Javascript."
    },
    //q2
    {
      question: "2.Which programming language is used to make websites interactive?",
      options: ["(a) HTML", "(b) CSS", "(c) JavaScript", "(d) Python"],
      answer: "(c) JavaScript",
      explanation: "JavaScript is used to make websites interactive by adding behavior to web pages. It allows for features like dynamic content, form validation, and user interaction."
    },
    //q3
    
    {
      question: "3.Which of the following methods is used to access HTML elements using Javascript?",
      options: ["(a) grtElementById()", "(b) getElementByClassName()", "(c) both A and B", "(d) None of above"],
      answer: "(c) both A and B",
      explanation: "Both the above methods are used to access HTML elements using Javascript."
    },
    //q4
    {
      question: "4.Upon encountering empty statements, what does the Javascript Interpreter do?",
      options: ["(a) Throws an error ", "(b) Ignores the statements", "(c) Gives a warning", "(d) None of the above"],
      answer: "(b) Ignores the statements",
      explanation: "In Javascript, the interpreter will ignore the empty statements whenever it encounters them.."
    },
    //q5
    {
      question: "5.When the switch statement matches the expression with the given labels, how is the comparison done?",
      options: ["(a) both the datatype and the result of the expression are compared.", "(b) only the datatype of the expression compared.", "(c) only the value of the expression is compared.", "(d) none of the above."],
      answer: "(a) both the datatype and the result of the expression are compared.",
      explanation: "Switch performs an ' ===' based comparison, i.e both the value of the expression and its datatype is compared."
    },
    //q6
    {
      question: "6.What keyword is used to check whether a given property is valid or not?",
      options: ["(a) in", "(b) is in", "(c) exists", "(d) lies"],
      answer: "(a) in",
      explanation: "External CSS can be included in an HTML document using the <link> tag with the 'href' attribute specifying the path to the CSS file."
    },
    //q7
    {
      question: "7.When an operator’s value is NULL, the typeof returned by the unary operator is:",
      options: ["(a) Boolean", "(b) Undefined", "(c) Object", "(d) Integer"],
      answer: "(c) Object",
      explanation: "Any NULL value of operator will always return typeof object."
    },
    //q8
    {
      question: "8.How to stop an interval timer in Javascript?",
      options: ["(a) clearInterval ", "(b) clearTimer", "(c) intervalOver", "(d) None of the above"],
      answer: "(a) clearInterval ",
      explanation: "clearInterval is used to stop an interval timer in JS."
      },
    //q9
    {
      question: "9.Which of the following are closures in Javascript?",
      options: ["(a) Variables", "(b) Functions", "(c) Objects", "(d) All of the above"],
      answer: "(d) All of the above",
      explanation: "Every time a function is created in JS, a closure is created. So, all closures are functions and functions have a scope chain that is associated with them."
    },
    //q10
    {
      question: "10.What keyword is used to declare an asynchronous function in Javascript?",
      options: ["(a) async", "(b) await", "(c) setTimeout", "(d) None of the above"],
      answer: "(a) async",
      explanation: "The async keyword is used to declare an asynchronous function in Javascript."
    },
   
  ];
  
  let currentQuestion = 0;
  let score = 0;
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const formElement = document.getElementById('quiz-form');
  const resultElement = document.getElementById('quiz-result'); // Added result element
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach(option => {
      const optionElement = document.createElement('li');
      const inputElement = document.createElement('input');
      inputElement.type = 'radio';
      inputElement.name = 'option';
      inputElement.value = option;
      inputElement.id = option;
      optionElement.appendChild(inputElement);
      optionElement.innerHTML += `<label for="${option}">${option}</label>`;
      optionsElement.appendChild(optionElement);
    });
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked').value;
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
      score++;
      alert('Correct!\n' + currentQuizData.explanation);
    } else {
      alert('Wrong! The correct answer is ' + currentQuizData.answer + '.\n' + currentQuizData.explanation);
    }
  }
  
  function nextQuestion() {
    if (document.querySelector('input[name="option"]:checked')) {
      checkAnswer();
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        displayResult(); 
      }
    } else {
      alert('Please select an option.');
    }
  }
  
  function displayResult() {
    const resultMessage = document.createElement('div');
    resultMessage.textContent = 'You have reached the end of the quiz. Your score is: ' + score + ' out of ' + quizData.length;
    resultMessage.classList.add('quiz-result'); 
    resultElement.appendChild(resultMessage); 
  }
    
  loadQuestion();
  