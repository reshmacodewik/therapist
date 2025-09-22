import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../Screens/Home/HomeScreen';
import BottomTabs from './MyTab';
import ProfileEditScreen from '../Screens/Sidebar/ProfileEditScreen';
import MyExpertiseScreen from '../Screens/Sidebar/MyExpertiseScreen';
import MessagesScreen from '../Screens/Sidebar/MessagesScreen';
import PaymentHistoryScreen from '../Screens/Sidebar/PaymentHistoryScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={BottomTabs} />
      <Drawer.Screen name="My Profile" component={ProfileEditScreen} />
      <Drawer.Screen name="My Expertise" component={MyExpertiseScreen} />
      <Drawer.Screen name="My Calendar" component={MyExpertiseScreen} />
      <Drawer.Screen name="My Sessions" component={MyExpertiseScreen} />
      <Drawer.Screen name="My Appointment" component={MyExpertiseScreen} />
      <Drawer.Screen name="My Wallet" component={MessagesScreen} />
      <Drawer.Screen name="Messages" component={MessagesScreen} />
      <Drawer.Screen name="Payment History" component={PaymentHistoryScreen} />
      <Drawer.Screen name="Settings" component={MyExpertiseScreen} />
    </Drawer.Navigator>
  );
}
