import React, { useEffect, useRef, useState } from "react";
import Main from "../components/Main";
import Soon from "../components/Soon";

const Root = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());

  const getYear = () => {
    if (date > 9 && month === 11) {
      return year + 1;
    }
    if (month === 12) {
      return year + 1;
    } else {
      return year;
    }
  };

  let interval = useRef();
  const startTimer = () => {
    const countDown = new Date(`November 09, ${getYear()} 00:00:00`);
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <Main
        day={timerDays}
        hour={timerHours}
        minute={timerMinutes}
        second={timerSeconds}
      />
    </>
  );
};

export default Root;
