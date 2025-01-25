import React from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../question";
const Summary = ({ userAnswers }) => {
  console.log(userAnswers);
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        
        <li>
          <h3>2</h3>
          <p className="question">question text</p>
          <p className="user-answer">user answers</p>
        </li>
      </ol>
    </div>
  );
};

export default Summary;
