export type RootStackParamList = {
  splashScreen: undefined;
  OnboardingScreen: undefined;
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  VerificationCode: {
    email?: string;
    phoneNo?: string;
    role?: string;
  };
  SuccessScreen: {
    role: number | string | undefined;
  };
  VerifyCredentials: undefined;
  CredentialsSuccess: undefined;
  HomeScreen: undefined;
  CreateSessionScreen: undefined;
  SessionsScreen: undefined;
  SessionPaymentScreen: {
    sessionId: string;
  };

  PastSessionScreen: {
    sessionId: string;
  };

  SendPaymentLink: undefined;
  TransactionHistory: undefined;
  RefundPaymentScreen: undefined;
  GrantAccess: undefined;
  NoteScreen: undefined;
  UploadScreen: undefined;
  ShareProgress: undefined;
  Breakout: undefined;
  BreakoutRooms: undefined;
  RescheduleSession: {
    sessionId: string;
  };

  EditSession: {
    sessionId: string;
  };
  SessionCancel: {
    sessionId: string;
  };
  PaymentDetailsScreen: undefined;
  WithdrawalScreen: undefined;
  BankDetailsScreen: undefined;
  ChangePasswordScreen: undefined;
  NotificationsScreen: undefined;
  HelpScreen: undefined;
  SetRegularHoursScreen: undefined;
  SessionshomeScreen: undefined;
  ClientScreen: undefined;
  MyAppointment: undefined;
  AppointmentDetails: undefined;
  VerifyCredentialsPeer: undefined;
  HomeScreenPeer: undefined;
  RequestApprovalScreen: undefined;
  CreatePeerGroupScreen: undefined;
  ProgressScreen: undefined;
  ProfileScreen: undefined;
  SecurityPrivacyScreen: undefined;
  RescheduleScreen: undefined;
  RequestApproveScreen: undefined;
  AddGoalScreen: undefined;
  MyAppointmentCalendar: undefined;
  AddSessionScreen: undefined;
  CreateSessionHomeScreen: undefined;
  NewRequestSupportScreen: undefined;
  CreateEventScreen: undefined;
  MyEventScreen: undefined;
  SupportTicket: undefined;
  NewTicket: undefined;
  TicketSuccess: undefined;
  TicketChat: undefined;
  SessionDetails: {
    sessionId: string;
  };
  EventDetailsScreen: {
    eventId: string;
  };
};
