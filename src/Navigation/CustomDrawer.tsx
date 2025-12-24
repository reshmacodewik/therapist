import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props;

  const isActive = (routeName: string) => {
    const focusedRoute = state.routeNames[state.index];
    return focusedRoute === routeName;
  };

  const renderDrawerItem = (label: string, route: string, iconSource: any) => (
    <DrawerItem
      style={[
        styles.item,
        isActive(route) && styles.activeItem, // bg green if active
      ]}
      label={label}
      labelStyle={[
        styles.label,
        isActive(route) && styles.activeLabel, // text white if active
      ]}
      icon={() => (
        <Image
          source={iconSource}
          style={[
            styles.icon,
            isActive(route) && styles.activeIcon, // icon white if active
          ]}
        />
      )}
      onPress={() => navigation.navigate(route)}
    />
  );

  return (
    <DrawerContentScrollView {...props}>
      {/* User Info */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/Image/Mask_grp.png')}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Dr.Oakley</Text>
          <Text style={styles.email}>oakley@gmail.com</Text>
        </View>
      </View>
      <View style={styles.divider} />

      {/* Menu Items */}
      {renderDrawerItem(
        'My Profile',
        'My Profile',
        require('../../assets/Image/home.png'),
      )}
      <View style={styles.divider} />
      {renderDrawerItem(
        'My Expertise',
        'My Expertise',
        require('../../assets/Image/Vector2.png'),
      )}
      <View style={styles.divider} />
      {renderDrawerItem(
        'My Calendar',
        'My Calendar',
        require('../../assets/Image/Vector2.png'),
      )}
      <View style={styles.divider} />
      {renderDrawerItem(
        'My Sessions',
        'My Sessions', // change route if different
        require('../../assets/Image/align.png'),
      )}
      <View style={styles.divider} />
      {renderDrawerItem(
        'My Appointment',
        'My Appointment',
        require('../../assets/Image/align.png'),
      )}
      <View style={styles.divider} />
      {renderDrawerItem(
        'My Wallet',
        'My Wallet',
        require('../../assets/Image/align.png'),
      )}
      <View style={styles.divider} />
      {renderDrawerItem(
        'Messages',
        'Messages',
        require('../../assets/Image/Vector3.png'),
      )}
      <View style={styles.divider} />
      {renderDrawerItem(
        'Payment History',
        'Payment History',
        require('../../assets/Image/Vector4.png'),
      )}

      <View style={styles.divider} />
      {renderDrawerItem(
        'Settings',
        'Settings',
        require('../../assets/Image/Vector4.png'),
      )}
      <View style={styles.divider} />
      {renderDrawerItem(
        'Support_Ticket',
        'Support_Ticket',
        require('../../assets/Image/Vector4.png'),
      )}
      <View style={styles.divider} />

      {/* Logout */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => console.log('Logout Pressed')}>
          <View style={styles.logoutRow}>
            <AntDesign name="logout" size={22} color="red" />
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingBottom: 15,
  },
  divider: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginHorizontal: 5,
    marginBottom: 10,
  },
  avatar: { width: 55, height: 55, borderRadius: 10, marginRight: 10 },
  name: { fontSize: 16, fontWeight: 'bold' },
  email: { fontSize: 14, color: 'green' },

  // Drawer items
  item: {
    borderRadius: 8,
    marginLeft: -8,
    marginBottom: -8,
  },
  activeItem: {
    backgroundColor: '#264C3F', // green bg
  },
  label: {
    color: '#000',
  },
  activeLabel: {
    color: '#fff', // white text
  },
  icon: {
    width: 27,
    height: 24,
    tintColor: '#000',
  },
  activeIcon: {
    tintColor: '#fff', // white icon
  },

  footer: { marginTop: 20, paddingHorizontal: 20 },
  logoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -8,
    marginLeft: -8,
  },
  logoutText: { marginLeft: 10, color: 'red', fontWeight: 'bold' },
});

export default CustomDrawer;
