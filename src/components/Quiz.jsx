import React from "react";
import { useState } from "react";

import QUESTIONS from "../question";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import { useCallback } from "react";
import { useRef } from "react";
import Answers from "./Answers";
import { Question } from "./Question";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");

      console.log(userAnswers, "1");
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
      console.log(userAnswers, "2");
      setTimeout(() => {
        console.log(userAnswers, "3");
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          console.log(userAnswers, "4");
          setAnswerState("");
        }, 2000);
      }, 1000);
      console.log(userAnswers, "5");
      return;
    },
    [activeQuestionIndex]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        activeQuestionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
};

export default Quiz;
