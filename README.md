# Quizzical

A trivia game. Answer the questions and submit your answers.<br />

The game is made using React. Features include:

* **Start Quiz:** This button allows users to populate your questions and load the quiz.

* **Answers:** These buttons allow the user to select the answer to the multiple choice question.

* **Submit Quiz:** This button allows the user to submit their chosen answers and compare to the answer key.

* **Results:** The App will display answers that were incorrect in red and the correct answer in green.

* **Restart Quiz:** This button allows the user to restart the quiz and populate new questions.

***Landing.jsx*** is a component that contains the code to display the home page. <br />
***Question.jsx*** is a component that populates our answers, and displays them with the question. <br />
***Answer.jsx*** is a component that allows buttons to be selected and their css altered based on results. <br />
***Fix.jsx*** is a component that creates an array of objects using data from our API call. <br />
***App.js*** is responsible for initializing the questions and answers, listening for game completion, and restarting the game.

The game can be found at: https://quizzicaljm.netlify.app/

Author: Joshua Medina
