import React from 'react';
import ProgressBar from '../../components/gamification/ProgressBar';

export default function ResultScore() {
  // TODO: get result from API / context
  const score = 0;
  const totalQuestions = 0;
  const pointsEarned = 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-2">Hasil Ujian</h1>
        <p className="text-5xl font-bold text-blue-600 my-4">{score}/{totalQuestions}</p>
        <p className="text-gray-600 mb-4">+{pointsEarned} poin diperoleh</p>
        <ProgressBar percentage={0} />
      </div>
    </div>
  );
}
