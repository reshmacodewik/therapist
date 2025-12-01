import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getCurrentUserInfo, getToken, handleLogin, handleLogout } from '../../libs/auth';

type AuthContextType = {
  user: any | null;
  token: string | null;
  loading: boolean;
  signIn: (session: { accessToken: string; user: any }) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  loading: true,
  signIn: async () => { },
  signOut: async () => { },
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const boot = async () => {
      const storedToken = await getToken();
      const storedUser = await getCurrentUserInfo();

      if (storedToken && storedUser) {
        setUser(storedUser);
        setToken(storedToken);
      }
      setLoading(false);
    };

    boot();
  }, []);

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      signIn: async (session: { accessToken: string; user: any }) => {
        await handleLogin({ token: session.accessToken, user: session.user });
        setUser(session.user);
        setToken(session.accessToken);
      },
      signOut: async () => {
        await handleLogout();
        setUser(null);
        setToken(null);
      },
    }),
    [user, token, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
