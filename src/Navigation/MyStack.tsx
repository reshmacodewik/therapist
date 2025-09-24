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
import GrantAccess from '../Screens/Payment/GrantAccess';
import NoteScreen from '../Screens/Sessions/NoteScreen';
import UploadScreen from '../Screens/Sessions/UploadScreen';
import ShareProgress from '../Screens/Sessions/ShareProgress';
import PastSessionScreen from '../Screens/Sessions/PastSessionScreen';
import SessionDetails from '../Screens/Sessions/SessionDetails';
import BreakoutRooms from '../Screens/Sessions/Breakout';
import Breakout from '../Screens/Sessions/Breakout';
import RescheduleSession from '../Screens/Sessions/RescheduleSession';
import EditSession from '../Screens/Sessions/EditSession';
import SessionCancel from '../Screens/Sessions/SessionCancel';
import DrawerNavigator from './DrawerNavigator';
import PaymentDetailsScreen from '../Screens/Sidebar/PaymentDetailsScreen';
import WithdrawalScreen from '../Screens/Sidebar/WithdrawalScreen';
import BankDetailsScreen from '../Screens/Sidebar/BankDetailsScreen';
import ChangePasswordScreen from '../Screens/Sidebar/Settings/ChangePasswordScreen';
import NotificationsScreen from '../Screens/Sidebar/Settings/NotificationsScreen';
import HelpScreen from '../Screens/Sidebar/Settings/HelpScreen';
import SetRegularHoursScreen from '../Screens/Sidebar/Settings/SetRegularHoursScreen';
import SessionshomeScreen from '../Screens/Home/SessionshomeScreen';
import ClientScreen from '../Screens/Home/ClientScreen';

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
  GrantAccess: undefined;
  NoteScreen: undefined;
  UploadScreen: undefined;
  ShareProgress: undefined;
  PastSessionScreen: undefined;
  SessionDetails: undefined;
  Breakout: undefined;
  BreakoutRooms: undefined;
  RescheduleSession: undefined;
  EditSession: undefined;
  SessionCancel: undefined;
  PaymentDetailsScreen: undefined;
  WithdrawalScreen: undefined;
  BankDetailsScreen : undefined;
  ChangePasswordScreen:undefined;
  NotificationsScreen: undefined;
  HelpScreen: undefined;
  SetRegularHoursScreen: undefined;
  SessionshomeScreen: undefined;
  ClientScreen: undefined;
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
      <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
      <Stack.Screen
        name="CreateSessionScreen"
        component={CreateSessionScreen}
      />
      <Stack.Screen name="SessionsScreen" component={SessionsScreen} />
      <Stack.Screen
        name="SessionPaymentScreen"
        component={SessionPaymentScreen}
      />
      <Stack.Screen name="SendPaymentLink" component={SendPaymentLink} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
      <Stack.Screen
        name="RefundPaymentScreen"
        component={RefundPaymentScreen}
      />
      <Stack.Screen name="GrantAccess" component={GrantAccess} />
      <Stack.Screen name="NoteScreen" component={NoteScreen} />
      <Stack.Screen name="UploadScreen" component={UploadScreen} />
      <Stack.Screen name="ShareProgress" component={ShareProgress} />
      <Stack.Screen name="PastSessionScreen" component={PastSessionScreen} />
      <Stack.Screen name="SessionDetails" component={SessionDetails} />
      <Stack.Screen name="Breakout" component={Breakout} />
      <Stack.Screen name="BreakoutRooms" component={BreakoutRooms} />
      <Stack.Screen name="RescheduleSession" component={RescheduleSession} />
      <Stack.Screen name="EditSession" component={EditSession} />
      <Stack.Screen name="SessionCancel" component={SessionCancel} />
      <Stack.Screen
        name="PaymentDetailsScreen"
        component={PaymentDetailsScreen}
      />
      <Stack.Screen name="WithdrawalScreen" component={WithdrawalScreen} />
      <Stack.Screen name="BankDetailsScreen" component={BankDetailsScreen} />
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
      <Stack.Screen name="HelpScreen" component={HelpScreen} />
      <Stack.Screen name="SetRegularHoursScreen" component={SetRegularHoursScreen} />
      <Stack.Screen name="SessionshomeScreen" component={SessionshomeScreen} />
      <Stack.Screen name="ClientScreen" component={ClientScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
