import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useCallback } from "react";
import { useState } from "react";

export const Question = ({
    key,
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
}) => {
  const [answers, setAnswers] = useState([
    { selectedAnswer: "", isCorrect: null },
  ]);

  function handleSelectAnswer(answer) {
    setAnswers({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
        setAnswers({
            selectedAnswer: answer,
            isCorrect: null,
          });
    }, 1000);
  }

  return (
    <>
      <QuestionTimer
        timer={10000}
        onFinishCountdown={() => onSelectAnswer(null)}
      />
      <div id="question">
        <h2>{questionText}</h2>
        <Answers
          answers={answers}
          selectedAnswer={selectedAnswer}
          answerState={answerState}
          onSelect={onSelectAnswer}
        />
      </div>
    </>
  );
};
