import React, { ReactNode, useEffect, useState } from 'react';
import { AppState } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { QueryClient, QueryCache, focusManager, onlineManager, QueryClientProvider } from '@tanstack/react-query';

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache(),
        defaultOptions: {
          queries: {
            retry: 2,
            staleTime: 30000,
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
          },
        },
      })
  );

  useEffect(() => {
    const sub = AppState.addEventListener("change", state => {
      focusManager.setFocused(state === "active");
    });
    return () => sub.remove();
  }, []);

  useEffect(() => {
    const unsub = NetInfo.addEventListener((state: any) => {
      onlineManager.setOnline(Boolean(state.isConnected));
    });
    return () => unsub();
  }, []);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
