import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeTokens = async (access: string, refresh: string) => {
  await AsyncStorage.multiSet([
    ['accessToken', access],
    ['refreshToken', refresh],
  ]);
};

export const getTokens = async () => {
  const [[, access], [, refresh]] = await AsyncStorage.multiGet([
    'accessToken',
    'refreshToken',
  ]);
  return { access, refresh };
};

export const clearTokens = async () => {
  await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);
};
