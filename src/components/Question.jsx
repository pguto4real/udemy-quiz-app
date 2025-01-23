import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export const Question = ({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
}) => {
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
