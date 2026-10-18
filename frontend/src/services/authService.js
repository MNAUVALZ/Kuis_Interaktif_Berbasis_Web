import api from './api';

const authService = {
  login: async (email, password) => {
    const res = await api.post('/api/auth/login', { email, password });
    return res.data;
  },
  register: async (email, password) => {
    const res = await api.post('/api/auth/register', { email, password });
    return res.data;
  },
};

export default authService;
