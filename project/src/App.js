import React, { useState } from "react";
import "./App.css"; //Imports App.css where this webpage is styled
//Stores all the questions and anaswers of the topic included in quiz
const quizData = {
  Python: [
    {
      question: "What is a correct file extension for Python files?",
      options: [".pt", ".pyt", ".py", ".pyth"],
      answer: 2,
    },
    {
      question: "Which keyword is used for function in Python?",
      options: ["function", "def", "fun", "define"],
      answer: 1,
    },
    {
      question: "Which collection is ordered, changeable and allows duplicate members?",
      options: ["Set", "Tuple", "Dictionary", "List"],
      answer: 3,
    },
    {
      question: "Which of the following is used to handle exceptions in Python?",
      options: ["try-except", "if-else", "switch-case", "for-while"],
      answer: 0,
    },
    {
      question: "What will type([]) return?",
      options: ["list", "dict", "set", "tuple"],
      answer: 0,
    },
  ],
   Java: [
    {
      question: "Which method is the entry point of a Java program?",
      options: ["main()", "start()", "init()", "run()"],
      answer: 0,
    },
    {
      question: "Which keyword is used to inherit a class in Java?",
      options: ["this", "extends", "super", "import"],
      answer: 1,
    },
    {
      question: "Which type of memory is managed by JVM?",
      options: ["Stack", "Heap", "Cache", "Register"],
      answer: 1,
    },
    {
      question: "Which access modifier makes variables accessible within the same package?",
      options: ["public", "protected", "private", "default"],
      answer: 3,
    },
    {
      question: "Which of the following is not a Java keyword?",
      options: ["static", "Boolean", "void", "new"],
      answer: 1,
    },
  ],
  DSA: [
    {
      question: "What data structure uses LIFO?",
      options: ["Queue", "Array", "Stack", "Linked List"],
      answer: 2,
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      answer: 1,
    },
    {
      question: "Which data structure uses FIFO?",
      options: ["Queue", "Stack", "Heap", "Tree"],
      answer: 0,
    },
    {
      question: "What is the best case complexity of linear search?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      answer: 2,
    },
    {
      question: "Which of these is a non-linear data structure?",
      options: ["Array", "Stack", "Graph", "Queue"],
      answer: 2,
    },
  ],
  C: [
    {
      question: "Which of the following is used for comments in C?",
      options: ["// comment", "# comment", "/* comment */", "-- comment"],
      answer: 2,
    },
    {
      question: "Which function is used to print in C?",
      options: ["cin", "printf", "print", "System.out.print"],
      answer: 1,
    },
    {
      question: "Which of the following is not a data type in C?",
      options: ["int", "float", "boolean", "char"],
      answer: 2,
    },
    {
      question: "Which header file is needed for input/output in C?",
      options: ["<iostream>", "<stdio.h>", "<conio.h>", "<stdlib.h>"],
      answer: 1,
    },
    {
      question: "What is the result of 10 % 3 in C?",
      options: ["3", "0", "1", "10"],
      answer: 2,
    },
  ],
  "C++": [
    {
      question: "Which of the following is used for input in C++?",
      options: ["cin", "scanf", "cout", "printf"],
      answer: 0,
    },
    {
      question: "Which concept allows the same function name with different arguments?",
      options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
      answer: 1,
    },
    {
      question: "Which operator is used to access members of a class using a pointer?",
      options: [".", "*", "->", "&"],
      answer: 2,
    },
    {
      question: "Which keyword is used to define a class in C++?",
      options: ["struct", "define", "class", "function"],
      answer: 2,
    },
    {
      question: "What is the extension of a C++ file?",
      options: [".cp", ".cpp", ".cc", ".c"],
      answer: 1,
    },
  ],
  JavaScript: [
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "int", "float", "String"],
      answer: 0,
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "#", "<!--", "%"],
      answer: 0,
    },
    {
      question: "Which of the following is not a JavaScript data type?",
      options: ["string", "number", "boolean", "character"],
      answer: 3,
    },
    {
      question: "What does typeof null return?",
      options: ["object", "null", "undefined", "boolean"],
      answer: 0,
    },
    {
      question: "Which method adds a new element at the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: 0,
    },
  ],
  "Operating System": [
    {
      question: "Which of the following is an example of an OS?",
      options: ["Windows", "Google Chrome", "MS Word", "Oracle"],
      answer: 0,
    },
    {
      question: "Which of these is not a type of operating system?",
      options: ["Batch", "Time-sharing", "Compiler-based", "Real-time"],
      answer: 2,
    },
    {
      question: "Which part of the OS handles memory?",
      options: ["Kernel", "Shell", "BIOS", "Cache"],
      answer: 0,
    },
    {
      question: "Which is the core of an operating system?",
      options: ["Shell", "Kernel", "Hardware", "BIOS"],
      answer: 1,
    },
    {
      question: "Which OS is open-source?",
      options: ["Windows", "MacOS", "Linux", "iOS"],
      answer: 2,
    },
  ],
  DBMS: [
    {
      question: "Which of the following is a DBMS?",
      options: ["Oracle", "Linux", "C++", "HTML"],
      answer: 0,
    },
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Question Language",
        "Sequential Query Language",
        "Structured Query Language",
        "Standard Query Logic",
      ],
      answer: 2,
    },
    {
      question: "Which command is used to retrieve data from a database?",
      options: ["GET", "SELECT", "RETRIEVE", "FETCH"],
      answer: 1,
    },
    {
      question: "Which normal form removes partial dependency?",
      options: ["1NF", "2NF", "3NF", "BCNF"],
      answer: 1,
    },
    {
      question: "Which of the following is a DDL command?",
      options: ["SELECT", "UPDATE", "DELETE", "CREATE"],
      answer: 3,
    },
  ],
};
//The main Componenet of the webpage starts here
function App() {
  const [currentPage, setCurrentPage] = useState("home"); //Sets currentpage that will be displayed on the screen
  const [selectedTopic, setSelectedTopic] = useState(null); //Sets userselected topic which is currently null
  const [index, setIndex] = useState(0); //it will set the index of the question
  const [startQuiz, setStartQuiz] = useState(false); //tracks wheather the quiz has been started or not
  const [showAnswers, setShowAnswers] = useState(false); //To showanswers at result page
  const [userAnswers, setUserAnswers] = useState({}); // Stores latest selected answers

  const questions = selectedTopic ? quizData[selectedTopic] : []; //quizdata will depend on the selected topic
  const completed = index >= questions.length; //Mark quiz completed after last question


  const handleAnswer = (i) => {
    setUserAnswers((prev) => ({ ...prev, [index]: i })); //this will store all the answers of respective previous questions
    setIndex(index + 1); // move to next question immediately
  };

  const resetQuiz = () => {   //whenever the quiz is reset or user lefts the page all will set to 0 agein
    setIndex(0);
    setStartQuiz(false);
    setSelectedTopic(null);
    setShowAnswers(false);
    setUserAnswers({});
  };

  const retrySameQuiz = () => {  //whenever the quiz is repeated again the result is generated newly
    setIndex(0);
    setStartQuiz(true);
    setShowAnswers(false);
    setUserAnswers({});
  };

  const goToNext = () => {   //Next button will go to next question onclick
    if (index < questions.length - 1) setIndex(index + 1);
  };

  const goToPrevious = () => {  //Previous button will go to previous question onclick
    if (index > 0) setIndex(index - 1);
  };

  // Calculate score only at result time
  const finalScore = questions.reduce((score, q, i) => {
    return userAnswers[i] === q.answer ? score + 1 : score; //All the useranswers are returned it it matches to the correct answer the score will be increased
  }, 0);

  return (
    <div className="app">              {/* NavBar */}
      <nav className="navbar">  
        <h1>🧑‍🎨 QuizMaster</h1>
        <div className="nav-links">
          <a href="#home" onClick={() => { setCurrentPage("home"); resetQuiz(); }}>Home</a>
          <a href="#topics" onClick={() => { setCurrentPage("topics"); resetQuiz(); }}>Categories</a>
          <a href="#about" onClick={() => { setCurrentPage("about"); resetQuiz(); }}>About</a>
          <a href="#contact" onClick={() => { setCurrentPage("contact"); resetQuiz(); }}>Contact</a>
        </div>
      </nav>
      {/* Hero section */}
      {currentPage === "home" && (
        <header className="hero">
          <h2>Welcome to <span className="highlight">QuizMaster</span></h2>
          <p>Sharpen your knowledge, test your skills, and grow smarter every day.</p>
          <button className="start-btn" onClick={() => setCurrentPage("topics")}>Explore Quizzes</button>
        </header>
      )}
      {/* Sets current page to category or topic */}

      {currentPage === "topics" && !selectedTopic && (
        <section className="categories">
          <h3>Select a Quiz Category</h3>
          <div className="blog-grid">
            {Object.keys(quizData).map((topic) => (
              <div className="blog-card" key={topic}>
                <span className="date-badge">QUIZ</span>
                <div className="blog-content">
                  <p className="author">Category | {topic}</p>
                  <h4 className="blog-title">{topic}</h4>
                  <p className="blog-description">
                       Test your knowledge in {topic}. Challenge yourself now!{" "}
                       {quizData[topic].description
                      ? quizData[topic].description
                    : `Explore the depths of ${topic} with a curated set of questions to boost your skills and confidence.`}
                  </p>
                  <button className="start-btn" onClick={() => setSelectedTopic(topic)}>
                    Start Quiz
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {/*About Section */}
      {currentPage === "about" && (
        <section className="about">
          <h2>About QuizMaster</h2>
          <p><strong>QuizMaster</strong> helps learners sharpen their skills...</p>
          <p>Includes Python, Java, OS, DBMS, etc. Perfect for students and interview prep.</p>
          <p>Created with 👨‍💻 by learners, for learners.</p>
        </section>
      )}
      {/*Form or Contact us */} 
      {currentPage === "contact" && (
        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions, feedback, or suggestions, feel free to reach out to us.</p>
        <form className="contact-form"   autoComplete="off" onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for contacting us!");
             e.target.reset();                                           
          }}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" autoComplete="off"  required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      )}
     {/*Instructions before quiz*/}
      {selectedTopic && !startQuiz && !completed && (
        <section className="instruction-box">
          <h2>{selectedTopic} Quiz Instructions</h2>
          <ul>
            <li>Each quiz contains 5 multiple choice questions.</li>
            <li>You can change your answer by clicking again.</li>
            <li>Only your last answer counts at the end.</li>
            <li>Test will be automatically submited on clicking last questions answer.</li>
          </ul>
          <h3>All the best!!</h3>
          <button className="start-btn" onClick={() => setStartQuiz(true)}>Start Now</button>
        </section>
      )}
      {/*Gets the options and question according to users answer it will handle the score*/}
      {selectedTopic && startQuiz && !completed && (
        <section className="quiz-box">
          <h2>Question {index + 1} of {questions.length}</h2>
          <p>{questions[index].question}</p>
          <div className="options">
            {questions[index].options.map((opt, i) => (     
              <div
                key={i}
                className={`option ${userAnswers[index] === i ? "selected" : ""}`}
                onClick={() => handleAnswer(i)}
              >
                {opt}
              </div>
            ))}
          </div>
          <div className="nav-buttons">
            <button onClick={goToPrevious} disabled={index === 0}>Previous</button>
            <button onClick={goToNext} disabled={index === questions.length - 1}>Next</button>
          </div>
        </section>
      )}
      {/*Result is displayed here*/}

      {selectedTopic && completed && (
        <section className="result-box">
          <h2>{selectedTopic} Quiz</h2>
          <p>You scored <strong>{finalScore}</strong> out of {questions.length}</p>
          <p>Percentage: {((finalScore / questions.length) * 100).toFixed(2)}%</p>

          <div className="result-buttons">
            <button onClick={retrySameQuiz}>Try Again</button>
            <button onClick={resetQuiz}>Try Another Quiz</button>
            <button onClick={() => setShowAnswers(!showAnswers)}>
              {showAnswers ? "Hide Answers" : "View Answers"}
            </button>
          </div>

          {showAnswers && (
            <div className="correct-answers">
              <h4>Correct Answers:</h4>
              <ul>
                {questions.map((q, idx) => (
                  <li key={idx}>
                    <strong>Q{idx + 1}:</strong> {q.question}<br />
                    <span style={{ color: "#ffff" }}>{q.options[q.answer]}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}
    {/*Footer Section */} 
      <footer className="footer">
        <p>&copy; 2025 QuizMaster | Designed for learners 👨‍💻</p>
      </footer>
    </div>
  );
}

export default App;
