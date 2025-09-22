import React, { ReactNode, useEffect, useState } from 'react';
import { AppState } from 'react-native';
import {
  QueryClient,
  QueryCache,
  focusManager,
  onlineManager,
} from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import NetInfo from '@react-native-community/netinfo';
import { mmkvPersister } from '../storage/mmkvPersister';

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (err, q) => {
            // console.log("[RQ] error", q.queryKey, err);
          },
        }),
        defaultOptions: {
          queries: {
            retry: 2,
            staleTime: 30_000,
            gcTime: 5 * 60 * 1000,
            refetchOnMount: 'always',
            refetchOnReconnect: true,
            refetchOnWindowFocus: true, // focus is emulated below
          },
          mutations: { retry: 1 },
        },
      }),
  );

  // Foreground = focused for refetch behavior
  useEffect(() => {
    const sub = AppState.addEventListener('change', state => {
      focusManager.setFocused(state === 'active');
    });
    return () => sub.remove();
  }, []);

  // Keep RQ aware of connectivity
  useEffect(() => {
    return NetInfo.addEventListener(state => {
      onlineManager.setOnline(Boolean(state.isConnected));
    });
  }, []);

  return (
    <PersistQueryClientProvider
      client={client}
      persistOptions={{
        persister: mmkvPersister,
        maxAge: 24 * 60 * 60 * 1000, // 24h
      }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
