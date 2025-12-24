import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../Screens/SplashScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import LoginScreen from '../Screens/Auth/LoginScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen';
import VerificationCode from '../Screens/Auth/VerificationCode';
import SuccessScreen from '../Screens/Auth/SuccessScreen';
import VerifyCredentials from '../Screens/Auth/VerifyCredentials';
import WelcomeScreen from '../Screens/WelcomeScreen';
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
import { RootStackParamList } from './types';
import AppointmentDetails from '../Screens/Sidebar/AppointmentDetails';
import VerifyCredentialsPeer from '../Screens/Peer/VerifyCredentialsPeer';
import PeerDrawerNavigator from './Drawer/PeerDrawerNavigator';
import RequestApprovalScreen from '../Screens/Peer/RequestApprovalScreen';
import CreatePeerGroupScreen from '../Screens/Peer/CreatePeerGroupScreen';
import CredentialsSuccess from '../Screens/Auth/CredentialsSuccess';
import ProgressScreen from '../Screens/Sidebar/ProgressScreen';
import ProfileScreen from '../Screens/Sidebar/ProfileScreen';
import SecurityPrivacyScreen from '../Screens/Sessions/SecurityPrivacyScreen';
import RescheduleScreen from '../Screens/Sidebar/RescheduleScreen';
import RequestApproveScreen from '../Screens/Home/RequestApproveScreen';
import AddGoalScreen from '../Screens/Sidebar/AddGoalScreen';
import MyAppointmentCalendar from '../Screens/Sidebar/Settings/MyAppointmentCalendar';
import MyAppointment from '../Screens/Sidebar/MyAppointment';
import AddSessionScreen from '../Screens/Sidebar/AddSessionScreen';
import CreateSessionHomeScreen from '../Screens/Sessions/CreateSessionHomeScreen';
import NewRequestSupportScreen from '../Screens/Home/NewRequestSupportScreen';
import CreateEventScreen from '../Screens/Sessions/CreateEventScreen';
import MyEventScreen from '../Screens/Event/MyEventScreen';
import SupportTicket from '../SupportTicket/Support_Ticket';
import NewTicket from '../SupportTicket/NewTicket';
import TicketSuccess from '../SupportTicket/TicketSuccess';
import TicketChat from '../SupportTicket/TicketChat';

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
      <Stack.Screen name="CredentialsSuccess" component={CredentialsSuccess} />
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
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <Stack.Screen name="HelpScreen" component={HelpScreen} />
      <Stack.Screen
        name="SetRegularHoursScreen"
        component={SetRegularHoursScreen}
      />
      <Stack.Screen name="SessionshomeScreen" component={SessionshomeScreen} />
      <Stack.Screen name="ClientScreen" component={ClientScreen} />
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />

      <Stack.Screen
        name="VerifyCredentialsPeer"
        component={VerifyCredentialsPeer}
      />
      <Stack.Screen name="HomeScreenPeer" component={PeerDrawerNavigator} />
      <Stack.Screen
        name="RequestApprovalScreen"
        component={RequestApprovalScreen}
      />
      <Stack.Screen
        name="CreatePeerGroupScreen"
        component={CreatePeerGroupScreen}
      />
      <Stack.Screen name="ProgressScreen" component={ProgressScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="SecurityPrivacyScreen"
        component={SecurityPrivacyScreen}
      />
      <Stack.Screen name="RescheduleScreen" component={RescheduleScreen} />
      <Stack.Screen
        name="RequestApproveScreen"
        component={RequestApproveScreen}
      />
      <Stack.Screen name="AddGoalScreen" component={AddGoalScreen} />
      <Stack.Screen
        name="MyAppointmentCalendar"
        component={MyAppointmentCalendar}
      />
      <Stack.Screen name="MyAppointment" component={MyAppointment} />
      <Stack.Screen name="AddSessionScreen" component={AddSessionScreen} />
      <Stack.Screen
        name="CreateSessionHomeScreen"
        component={CreateSessionHomeScreen}
      />
      <Stack.Screen
        name="NewRequestSupportScreen"
        component={NewRequestSupportScreen}
      />
      <Stack.Screen name="CreateEventScreen" component={CreateEventScreen} />
      <Stack.Screen name="MyEventScreen" component={MyEventScreen} />
      <Stack.Screen name="NewTicket" component={NewTicket} />
      <Stack.Screen name="TicketSuccess" component={TicketSuccess} />
      <Stack.Screen name="TicketChat" component={TicketChat} />
    </Stack.Navigator>
  );
};

export default RootStack;
