import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const QuestionTimer = ({ timer, onFinishCountdown,count }) => {
  const [remainingTime, setRemainingTime] = useState(timer);


  useEffect(() => {
    const timerSet = setTimeout(onFinishCountdown, timer);

    return () => {
      clearTimeout(timerSet);
    };
  }, [onFinishCountdown,timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timer} />;
};

export default QuestionTimer;
