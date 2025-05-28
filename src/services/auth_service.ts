import { User } from '@/src/types/user';
import api from '../api/axios';

type LoginResponse = {
  access: string;
  refresh: string;
};

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await api.post('/token/', { email, password });
  return response.data;
};

export const getUserProfile = async (): Promise<User> => {
  const response = await api.get('/users/me/');
  return response.data.data; // ou `.data` selon ton backend
};

export const refreshToken = async (refreshToken: string): Promise<{ access: string }> => {
  const response = await api.post('/token/refresh/', { refresh: refreshToken });
  return response.data;
};
