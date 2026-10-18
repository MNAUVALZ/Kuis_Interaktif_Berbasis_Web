import React from 'react';
import { useTimer } from '../../hooks/useTimer';

export default function Timer({ duration, onTimeUp }) {
  const { timeLeft, formatted } = useTimer(duration, onTimeUp);

  return (
    <div className={`text-2xl font-mono font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-gray-800'}`}>
      ⏱ {formatted}
    </div>
  );
}
