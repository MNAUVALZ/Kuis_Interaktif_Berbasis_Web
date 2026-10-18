import React, { createContext, useState } from 'react';

export const ExamContext = createContext(null);

export function ExamProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const saveAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const resetExam = () => {
    setQuestions([]);
    setAnswers({});
    setCurrentIndex(0);
  };

  return (
    <ExamContext.Provider value={{ questions, setQuestions, answers, saveAnswer, currentIndex, setCurrentIndex, resetExam }}>
      {children}
    </ExamContext.Provider>
  );
}
