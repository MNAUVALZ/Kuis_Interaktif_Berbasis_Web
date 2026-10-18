import { useState, useEffect, useRef, useCallback } from 'react';
import { formatTime } from '../utils/timeFormat';

export function useTimer(durationInSeconds, onTimeUp) {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);
  const intervalRef = useRef(null);
  const onTimeUpRef = useRef(onTimeUp);
  onTimeUpRef.current = onTimeUp;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          onTimeUpRef.current && onTimeUpRef.current();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [durationInSeconds]);

  return { timeLeft, formatted: formatTime(timeLeft) };
}
