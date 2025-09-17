import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../Screens/SplashScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import LoginScreen from '../Screens/Auth/LoginScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen';
import VerificationCode from '../Screens/Auth/VerificationCode';
import SuccessScreen from '../Screens/Auth/SuccessScreen';
import VerifyCredentials from '../Screens/Auth/VerifyCredentials';
import CredentailsSuccess from '../Screens/Auth/CredentailsSuccess';
import WelcomeScreen from '../Screens/WelcomeScreen';
import BottomTabs from './MyTab';
import CreateSessionScreen from '../Screens/Home/CreateSessionScreen';
import SessionsScreen from '../Screens/Sessions/SessionsScreen';
import SessionPaymentScreen from '../Screens/Sessions/SessionPaymentScreen';
import SendPaymentLink from '../Screens/Payment/SendPaymentLink';
import TransactionHistory from '../Screens/Payment/TransactionHistory';
import RefundPaymentScreen from '../Screens/Payment/RefundPaymentScreen';

export type RootStackParamList = {
  splashScreen: undefined;
  OnboardingScreen: undefined;
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  VerificationCode: undefined;
  SuccessScreen: undefined;
  VerifyCredentials: undefined;
  CredentailsSuccess: undefined;
  HomeScreen: undefined; // hosts BottomTabs
  CreateSessionScreen: undefined;
  SessionsScreen: undefined;
  SessionPaymentScreen: undefined;
  SendPaymentLink: undefined;
  TransactionHistory: undefined;
  RefundPaymentScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="splashScreen" component={SplashScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen name="VerifyCredentials" component={VerifyCredentials} />
      <Stack.Screen name="CredentailsSuccess" component={CredentailsSuccess} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="HomeScreen" component={BottomTabs} />
      <Stack.Screen
        name="CreateSessionScreen"
        component={CreateSessionScreen}
      />
      <Stack.Screen name="SessionsScreen" component={SessionsScreen} />
      <Stack.Screen
        name="SessionPaymentScreen"
        component={SessionPaymentScreen}
      />
      <Stack.Screen name="SendPaymentLink" component={SendPaymentLink}/>
      <Stack.Screen name="TransactionHistory" component={TransactionHistory}/>
      <Stack.Screen name="RefundPaymentScreen"component={RefundPaymentScreen}/>
    </Stack.Navigator>
  );
};

export default RootStack;
