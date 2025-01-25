import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useCallback } from "react";
import { useState } from "react";
import QUESTION from "../question.js";
export const Question = ({
  activeQuestionIndex,
  onSelectAnswer,
  onSkipAnswer,
}) => {
  const [answer, setAnswer] = useState([
    { selectedAnswer: "", isCorrect: null },
  ]);

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }
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
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <>
      <QuestionTimer
        timer={timer}
        onTimeout={onSkipAnswer}
        mode={answerState}
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
