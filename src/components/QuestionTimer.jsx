import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const QuestionTimer = ({ timer, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timerSet = setTimeout(onTimeout, timer);

    return () => {
      clearTimeout(timerSet);
    };
  }, [onTimeout, timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timer}
      className={mode}
    />
  );
};

export default QuestionTimer;
