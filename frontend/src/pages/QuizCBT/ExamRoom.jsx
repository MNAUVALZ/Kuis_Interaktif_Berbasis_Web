import React, { useState } from 'react';
import Timer from '../../components/cbt/Timer';
import QuestionNav from '../../components/cbt/QuestionNav';

export default function ExamRoom() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  // TODO: fetch questions from API / context
  const questions = [];

  const handleSelect = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    // TODO: send answers to API
    console.log('Submit answers:', answers);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        <Timer duration={3600} onTimeUp={handleSubmit} />
        <div className="mt-6">
          <p className="text-lg">Soal {currentIndex + 1}</p>
          {/* TODO: render question content */}
        </div>
      </div>
      <QuestionNav total={questions.length} current={currentIndex} answers={answers} onNavigate={setCurrentIndex} />
    </div>
  );
}
