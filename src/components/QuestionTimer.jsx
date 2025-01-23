import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const QuestionTimer = ({ timer,onFinishCountdown }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

   useEffect(() => {
      console.log("Timer Set");
  
      const timerSet = setTimeout(() => {
        onFinishCountdown();
      }, timer);
  
      return () => {
        console.log("Cleaning up");
        clearTimeout(timerSet);
      };
    }, [onFinishCountdown]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Timer Set");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("Cleaning up interval");
      clearInterval(interval);
    };
  }, []);
  return <progress id="question-time" value={remainingTime} max={timer} />;
};

export default QuestionTimer;
