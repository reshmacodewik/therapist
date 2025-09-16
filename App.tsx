import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/Navigation/MyStack';
 // <-- use RootStack, not MyStack

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
       <RootStack/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
