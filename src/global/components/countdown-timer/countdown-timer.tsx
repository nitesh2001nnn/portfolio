/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./countdown-timer.scss";

interface countdownTimer {
  initialTimer: String;
}

const Countdowntimer = ({ initialTimer }: countdownTimer) => {
  const [timeLeft, setTimeLeft] = useState<any>(initialTimer);

  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev: any) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (time: any) => {
    const minute = Math.floor(time / 60);
    const seconds = time % 60;
    console.log("minute,second", minute, seconds);
    return `${String(minute).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  return <div>{formatTime(timeLeft)}</div>;
};

export default Countdowntimer;
