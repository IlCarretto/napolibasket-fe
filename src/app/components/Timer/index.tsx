"use client";
import React, { useEffect, useState } from "react";
import { Typography, TypographyProps } from "@mui/material";

interface ITimerProps {
  startTime: string | number | null; // passa come valore null per forzare il timeout a 0
  onTimeOut?: () => void;
  minutes: number;
}

const Timer = ({
  startTime,
  onTimeOut,
  minutes,
  ...props
}: ITimerProps & TypographyProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (!startTime) {
      setTimeLeft(0);
      return;
    } else {
      const targetTime = Number(startTime) + minutes * 60 * 1000;
      const interval = setInterval(() => {
        const currentTime = Date.now();
        const remainingTime = Math.max(
          0,
          Math.floor((targetTime - currentTime) / 1000)
        );
        setTimeLeft(remainingTime);

        if (remainingTime <= 0) {
          clearInterval(interval);
          onTimeOut && onTimeOut();
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [startTime, minutes, onTimeOut]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <Typography variant="h6" mb={0} lineHeight={1.5} {...props}>
      {!startTime ? "--:--" : formatTime(timeLeft)}
    </Typography>
  );
};

export default Timer;
