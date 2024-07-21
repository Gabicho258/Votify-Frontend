import "./_CountdownTimer.scss";
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  meses: number;
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}
export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target.getTime() - now.getTime();

    let timeLeft: TimeLeft = {
      meses: 0,
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };

    if (difference > 0) {
      const years = target.getFullYear() - now.getFullYear();
      const months = target.getMonth() - now.getMonth() + years * 12;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24)) % 30;
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      timeLeft = {
        meses: months,
        dias: days,
        horas: hours,
        minutos: minutes,
        segundos: seconds,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!(timeLeft as any)[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {(timeLeft as any)[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="containerCountdownTimer">
      {timerComponents.length ? (
        <div>{timerComponents}</div>
      ) : (
        setTimeout(() => {
          window.location.href = "/hub";
        }, 500) // better 1000
      )}
    </div>
  );
};
