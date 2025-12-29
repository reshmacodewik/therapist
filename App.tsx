import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import RootStack from './src/Navigation/MyStack';
import QueryProvider from './src/query/QueryProvider';
import { AuthProvider } from './src/Screens/Auth/AuthContext';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          translucent
          backgroundColor="transparent"
        />

        <QueryProvider>
          <AuthProvider>
            <NavigationContainer>
              <RootStack />
              <Toast />
            </NavigationContainer>
          </AuthProvider>
        </QueryProvider>

      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
