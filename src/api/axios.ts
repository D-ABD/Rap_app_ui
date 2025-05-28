import axios from 'axios';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTokens, storeTokens, clearTokens } from '@/src/api/storage';

const API_URL = Constants.expoConfig?.extra?.API_URL;
console.log('✅ API_URL:', API_URL);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Fonction locale pour éviter le require cycle
const refreshAccessToken = async (refreshToken: string): Promise<{ access: string }> => {
  const response = await api.post('/token/refresh/', { refresh: refreshToken });
  return response.data;
};

// ✅ Intercepteur : ajoute le token dans chaque requête
api.interceptors.request.use(async (config) => {
  const accessToken = await AsyncStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// ✅ Intercepteur de réponse : gère le refresh automatique
api.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const { refresh } = await getTokens();
        if (!refresh) throw new Error('No refresh token found');

        const { access } = await refreshAccessToken(refresh);
        await storeTokens(access, refresh);

        api.defaults.headers.common.Authorization = `Bearer ${access}`;
        originalRequest.headers.Authorization = `Bearer ${access}`;

        return api(originalRequest); // retry
      } catch (err) {
        await clearTokens();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
