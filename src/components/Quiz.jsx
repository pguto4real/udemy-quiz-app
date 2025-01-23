import React from "react";
import { useState } from "react";

const Quiz = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  
  return <p>Currently Active Questions</p>;
};

export default Quiz;
