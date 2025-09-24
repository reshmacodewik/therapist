import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../../../style/settingsStyles';

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation();

  const [vacationMode, setVacationMode] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [newMessages, setNewMessages] = useState(false);
  const [appointmentReq, setAppointmentReq] = useState(false);
  const [twoFA, setTwoFA] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(false);
  const [showAvailability, setShowAvailability] = useState(false);
  const [blurPhoto, setBlurPhoto] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const handleNotificationSwitch = (value: boolean) => {
    setNotifications(value);
    if (value) {
      navigation.navigate('NotificationsScreen' as never);
    }
  };
  return (
    <ImageBackground
      source={require('../../../../assets/Image/background.png')}
      style={styles.bgimg}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: hp(1) }}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={wp('6%')} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Settings</Text>
          </View>

          {/* Availability */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Availability</Text>
            <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('SetRegularHoursScreen' as never)}>
              <Text style={styles.rowText}>Set Regular Hours</Text>
              <Ionicons name="chevron-forward" size={wp('5%')} color="#666" />
            </TouchableOpacity>

            <View style={styles.row}>
              <Text style={styles.rowText}>Vacation Mode</Text>
              <Switch value={vacationMode} onValueChange={setVacationMode} />
            </View>

            <View style={styles.rowNoBorder}>
              <Text style={styles.rowText}>Dark Mode</Text>
              <Switch value={darkMode} onValueChange={setDarkMode} />
            </View>
          </View>

          {/* Notifications */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notifications</Text>
            <View style={styles.row}>
              <Text style={styles.rowText}>New Messages</Text>
              <Switch
                value={notifications}
                onValueChange={handleNotificationSwitch}
                trackColor={{ false: '#ccc', true: '#264734' }}
                thumbColor={notifications ? '#fff' : '#fff'}
                
              />
            </View>
            <View style={styles.rowNoBorder}>
              <Text style={styles.rowText}>Appointment Requests</Text>
              <Switch
                value={appointmentReq}
                onValueChange={setAppointmentReq}
              />
            </View>
          </View>

          {/* Security */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Security</Text>
            <TouchableOpacity
              style={styles.row}
              onPress={() =>
                navigation.navigate('ChangePasswordScreen' as never)
              }
            >
              <Text style={styles.rowText}>Change Password</Text>
              <Ionicons name="chevron-forward" size={wp('5%')} color="#666" />
            </TouchableOpacity>
            <View style={styles.rowNoBorder}>
              <Text style={styles.rowText}>Two-Factor Authentication</Text>
              <Switch value={twoFA} onValueChange={setTwoFA} />
            </View>
          </View>

          {/* Support */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Support</Text>
            <View style={styles.row}>
              <Text style={styles.rowText}>Language</Text>
              <Text style={styles.rowSub}>English ▼</Text>
            </View>
            <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('HelpScreen' as never)}>
              <Text style={styles.rowText}>Contact Support</Text>
              <Ionicons name="chevron-forward" size={wp('5%')} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowNoBorder}>
              <Text style={styles.rowText}>Security & Privacy</Text>
              <Ionicons name="chevron-forward" size={wp('5%')} color="#666" />
            </TouchableOpacity>
          </View>

          {/* Data Visibility */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Data Visibility</Text>
            <View style={styles.rowNoBorder}>
              <Text style={styles.rowText}>
                Allow others to see my online status
              </Text>
              <Switch value={onlineStatus} onValueChange={setOnlineStatus} />
            </View>
            <View style={styles.rowNoBorder}>
              <Text style={styles.rowText}>
                Show availability to clients/peers
              </Text>
              <Switch
                value={showAvailability}
                onValueChange={setShowAvailability}
              />
            </View>
            <View style={styles.rowNoBorder}>
              <Text style={styles.rowText}>
                Blur profile photo in forums/groups
              </Text>
              <Switch value={blurPhoto} onValueChange={setBlurPhoto} />
            </View>
          </View>

          {/* Devices & Sessions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Devices & Sessions</Text>
            <View style={styles.row}>
              <Text style={styles.rowText}>
                iPhone 13, <Text style={styles.subText}>Nairobi, Kenya</Text>
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.logoutText}>Log out from all devices</Text>
            </TouchableOpacity>
          </View>

          {/* Data Usage */}
          <View style={styles.sectionLast}>
            <Text style={styles.sectionTitle}>Data Usage & Consent</Text>
            <TouchableOpacity style={styles.row}>
              <Text style={styles.rowText}>Consent preferences</Text>
              <Ionicons name="chevron-forward" size={wp('5%')} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
              <Text style={styles.rowText}>How your data is used</Text>
              <Ionicons name="chevron-forward" size={wp('5%')} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
              <Text style={styles.rowText}>Export my data</Text>
              <Ionicons name="chevron-forward" size={wp('5%')} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
              <Text style={styles.rowText}>Request data deletion</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default SettingsScreen;
