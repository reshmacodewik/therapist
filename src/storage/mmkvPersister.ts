// authStorage.ts
import { setItem, getItem, removeItem } from './mmkv';

const AUTH_KEY = 'auth-session';

export type AuthSession = {
  accessToken: string;
  refreshToken?: string;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
};

export const saveSession = (session: AuthSession) => {
  setItem(AUTH_KEY, session);
};

export const getSession = (): AuthSession | null => {
  return getItem<AuthSession>(AUTH_KEY);
};

export const clearSession = () => {
  removeItem(AUTH_KEY);
};
