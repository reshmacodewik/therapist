/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { useResponsive } from 'react-native-responsive-hook';
import HomeScreen from '../Screens/Home/HomeScreen';
import SessionsScreen from '../Screens/Sessions/SessionsScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const { wp, hp } = useResponsive();
  const [showTalkMoreModal, setShowTalkMoreModal] = useState(false);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          height: hp(10),
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={wp(6)} color={focused ? '#FFA726' : '#B0B0B0'} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, { color: focused ? '#FFA726' : '#B0B0B0' }]}>
              Home
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="MessagesScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
           <Image
              source={require('../../assets/Image/message-circle.png')}
              style={{ width: wp(7), height: hp(7), resizeMode: 'contain', tintColor: focused ? '#FFA726' : '#B0B0B0' }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, { color: focused ? '#FFA726' : '#B0B0B0' }]}>
              Message
            </Text>
          ),
        }}
      />
      
    

      <Tab.Screen
        name="Sessions"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View
              style={[
                styles.moodButton,
                { width: wp(15), height: wp(15), borderRadius: wp(7.5) },
              ]}
            >
              <Icon name="plus" size={wp(7)} color="#fff" />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, { color: focused ? '#FFA726' : '#B0B0B0' }]}>
              Sessions
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Tools"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/Image/tool.png')}
              style={{ width: wp(12), height: hp(12), resizeMode: 'contain', tintColor: focused ? '#FFA726' : '#B0B0B0' }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, { color: focused ? '#FFA726' : '#B0B0B0' }]}>
              Tools
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="wallet"
        component={() => null} // ok to return null
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/Image/home_bottom.png')}
              style={{ width: wp(8), height: wp(8), resizeMode: 'contain', tintColor: focused ? '#FFA726' : '#B0B0B0' }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, { color: focused ? '#FFA726' : '#B0B0B0' }]}>
              wallet
            </Text>
          ),
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            // toggle your modal here
            // setShowTalkMoreModal(prev => !prev);
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  label: { fontSize: 12, marginTop: 2 },
  moodButton: {
    backgroundColor: '#264C3F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'android' ? 30 : 40,
    elevation: 5,
  },
});
