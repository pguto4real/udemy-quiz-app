import React from "react";
import { useState } from "react";

import QUESTIONS from "../question";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  return (
    <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {QUESTIONS[activeQuestionIndex].answers.map((answer, index) => (
          <li key={index} className="answer">
            <button>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
