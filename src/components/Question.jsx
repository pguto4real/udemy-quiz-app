import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useCallback } from "react";
import { useState } from "react";
import QUESTION from "../question.js";
export const Question = ({ activeQuestionIndex, onSelectAnswer }) => {
  const [answer, setAnswer] = useState([
    { selectedAnswer: "", isCorrect: null },
  ]);

  function handleSelectAnswer(userAnswer) {
    setAnswer({
      selectedAnswer: userAnswer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: userAnswer,
        isCorrect: QUESTION[activeQuestionIndex].answers[0] === userAnswer,
      });

      setTimeout(() => {
        onSelectAnswer(userAnswer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  }

  return (
    <>
      <QuestionTimer
        timer={10000}
        onFinishCountdown={() => onSelectAnswer(null)}
      />
      <div id="question">
        <h2>
          ({activeQuestionIndex + 1}) {QUESTION[activeQuestionIndex].text}
        </h2>
        <Answers
          answers={QUESTION[activeQuestionIndex].answers}
          selectedAnswer={answer.selectedAnswer}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div>
    </>
  );
};
