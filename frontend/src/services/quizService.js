import api from './api';

const quizService = {
  getQuestions: async (quizId) => {
    const res = await api.get(`/api/quiz/${quizId}/questions`);
    return res.data;
  },
  submitAnswers: async (quizId, answers) => {
    const res = await api.post('/api/cbt/submit', { quizId, answers });
    return res.data;
  },
  createQuiz: async (quizData) => {
    const res = await api.post('/api/quiz', quizData);
    return res.data;
  },
};

export default quizService;
