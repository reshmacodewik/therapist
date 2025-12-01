import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserData } from '../Interface/Interface';

export const StorageKeys = {
  AUTH_TOKEN: '@auth_token',
  USER_DATA: '@user_data',
} as const;

export const handleLogin = async ({ token, user }: any) => {
  try {
    await AsyncStorage.setItem(StorageKeys.AUTH_TOKEN, token);
    await AsyncStorage.setItem(StorageKeys.USER_DATA, JSON.stringify(user));
  } catch (e) {
    throw new Error('Login failed! Please check your credentials.');
  }
};

export const handleLogout = async () => {
  await AsyncStorage.removeItem(StorageKeys.AUTH_TOKEN);
  await AsyncStorage.removeItem(StorageKeys.USER_DATA);
  //   navigate('Registerphone');
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem(StorageKeys.AUTH_TOKEN);
  } catch (e) {
    throw new Error('Failed to fetch token from AsyncStorage');
  }
};

export const getCurrentUserInfo = async (): Promise<UserData | null> => {
  const userData = await AsyncStorage.getItem(StorageKeys.USER_DATA);
  return userData ? JSON.parse(userData) : null;
};
