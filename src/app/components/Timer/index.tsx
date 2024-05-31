"use client";
import React, { useEffect, useState } from "react";
import { Typography, TypographyProps } from "@mui/material";

interface ITimerProps {
    startTime: number; // passa come valore 0 per forzare il timeout
    handleTimeOut: () => void;
    minutes: number;
}

const Timer = ({
    startTime,
    handleTimeOut,
    minutes,
    ...props
}: ITimerProps & TypographyProps) => {
    const [timeLeft, setTimeLeft] = useState<number>(0);

    useEffect(() => {
        if (startTime === 0) {
            setTimeLeft(0);
            return;
        } else {
            const targetTime = startTime + minutes * 60 * 1000;
            const interval = setInterval(() => {
                const currentTime = Date.now();
                const remainingTime = Math.max(0, Math.floor((targetTime - currentTime) / 1000));
                setTimeLeft(remainingTime);

                if (remainingTime <= 0) {
                    clearInterval(interval);
                    handleTimeOut();
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [startTime, minutes, handleTimeOut]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <Typography variant="h6" mb={0} lineHeight={1.5} {...props}>
            {startTime === 0 ? "--:--" : formatTime(timeLeft)}
        </Typography>
    );
};

export default Timer;
