import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import authService from '../services/authService';

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');

  const login = async (email, password) => {
    const data = await authService.login(email, password);
    context.login(data.user, data.token);
    return data;
  };

  const register = async (email, password) => {
    const data = await authService.register(email, password);
    context.login(data.user, data.token);
    return data;
  };

  return { ...context, login, register };
}
