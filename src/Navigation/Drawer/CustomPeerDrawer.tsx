import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PeerDrawerNavigator = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props;

  const isActive = (routeName: string) => {
    const focusedRoute = state.routeNames[state.index];
    return focusedRoute === routeName;
  };

  const renderDrawerItem = (label: string, route: string, icon: any) => (
    <DrawerItem
      style={[styles.item, isActive(route) && styles.activeItem]}
      label={label}
      labelStyle={[styles.label, isActive(route) && styles.activeLabel]}
      icon={() => (
        <Image
          source={icon}
          style={[styles.icon, isActive(route) && styles.activeIcon]}
        />
      )}
      onPress={() => navigation.navigate(route)}
    />
  );

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* User Info */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/Image/Mask_grp.png')}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Oakley</Text>
          <Text style={styles.email}>oakley@gmail.com</Text>
        </View>
      </View>
      <View style={styles.divider} />

      {/* Drawer Items */}
      {renderDrawerItem(
        'My Profile',
        'MyProfile',
        require('../../../assets/Image/home.png')
      )}
      <View style={styles.divider} />

      {renderDrawerItem(
        'My Calendar',
        'MyCalendar',
        require('../../../assets/Image/Vector2.png')
      )}
      <View style={styles.divider} />

      {renderDrawerItem(
        'My 1-1 Sessions',
        'MySessions',
        require('../../../assets/Image/align.png')
      )}
      <View style={styles.divider} />

      {renderDrawerItem(
        'My Wallet',
        'MyWallet',
        require('../../../assets/Image/align.png')
      )}
      <View style={styles.divider} />

      {renderDrawerItem(
        'Payment History',
        'PaymentHistory',
        require('../../../assets/Image/Vector4.png')
      )}
      <View style={styles.divider} />

      {renderDrawerItem(
        'Settings',
        'Settings',
        require('../../../assets/Image/Vector4.png')
      )}
      <View style={styles.divider} />

      {/* Logout */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => console.log('Logout Pressed')}>
          <View style={styles.logoutRow}>
            <AntDesign name="logout" size={hp(2.3)} color="red" />
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: wp(8),
    borderBottomRightRadius: wp(8),
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(0),
    paddingBottom: hp(1.5),
  },
  avatar: {
    width: wp(13),
    height: wp(13),
    borderRadius: wp(3),
    marginRight: wp(3),
  },
  name: {
    fontSize: wp(4.2),
    fontWeight: 'bold',
    color: '#000',
  },
  email: {
    fontSize: wp(3.2),
    color: '#6b6b6b',
  },
  divider: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
    marginHorizontal: wp(1),
    marginBottom: hp(1.2),
  },
  item: {
    borderRadius: wp(2),
    marginLeft: wp(-3),
    marginBottom: hp(-0.8),
  },
  label: {
    color: '#000',
    fontSize: wp(3.6),
    
  },
  activeItem: {
    backgroundColor: '#264C3F',
  },
  activeLabel: {
    color: '#fff',
  },
  icon: {
    width: wp(5.5),
    height: wp(5.5),
    tintColor: '#000',
    resizeMode: 'contain',
  },
  activeIcon: {
    tintColor: '#fff',
  },
  footer: {
    marginTop: hp(2),
    paddingHorizontal: wp(2),
  },
  logoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    marginLeft: wp(2),
    color: 'red',
    fontSize: wp(3.8),
    fontWeight: 'bold',
  },
});

export default PeerDrawerNavigator;
