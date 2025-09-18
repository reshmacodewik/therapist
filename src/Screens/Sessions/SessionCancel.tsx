// components/SessionCancel/SessionCancel.tsx
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useResponsive } from '../../../components/Responsive/useResponsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const SessionCancel = () => {
  const [reason, setReason] = useState('Personal Scheduling Conflict');
  const { wp, hp } = useResponsive();
  const navigation = useNavigation();

  const styles = createStyles(wp, hp);

  const handleCancel = () => {
    console.log('Session canceled');
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: hp(10) }}
          showsVerticalScrollIndicator={false}
        >
          {/* Common Header */}
          <Header showWelcomeText={true} />

         

          {/* Cancel Content */}
          <View style={styles.cancelContent}>
            <Text style={styles.cancelIcon}>❌</Text>
            <Text style={styles.cancelTitle}>Cancel Session</Text>
            <Text style={styles.subTitle}>
              Are you sure you want to cancel the session?
            </Text>

            {/* Dropdown */}
            <View style={styles.dropdownContainer}>
              <Text style={styles.label}>Reason for cancellation</Text>
              <View style={styles.dropdownWrapper}>
                <Picker
                  selectedValue={reason}
                  onValueChange={itemValue => setReason(itemValue)}
                  style={styles.dropdown}
                >
                  <Picker.Item
                    label="Personal Scheduling Conflict"
                    value="Personal Scheduling Conflict"
                  />
                  <Picker.Item label="Health Issues" value="Health Issues" />
                  <Picker.Item
                    label="Family Emergency"
                    value="Family Emergency"
                  />
                </Picker>
              </View>
            </View>

            {/* Buttons */}
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleCancel}
              >
                <Text style={styles.confirmText}>Cancel Session</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const createStyles = (wp: any, hp: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: wp(4),
      marginTop: hp(1),
    
    },
    
    pageTitle: {
      fontSize: wp(5),
      fontWeight: 'bold',
      color: '#000',
      marginLeft: wp(1),
    },
    cancelContent: {
      alignItems: 'center',
      marginTop: hp(15),
      justifyContent:'center'
    },
    cancelIcon: {
      fontSize: wp(15),
      marginBottom: hp(1.5),
    },
    cancelTitle: {
      fontSize: wp(6),
      fontWeight: 'bold',
      marginBottom: hp(1),
      color: '#000',
    },
    subTitle: {
      fontSize: wp(4),
      color: '#666',
      textAlign: 'center',
      marginBottom: hp(3),
      paddingHorizontal: wp(5),
    },
    dropdownContainer: {
      width: '100%',
      marginBottom: hp(2.5),
    },
    label: {
      fontSize: wp(3.5),
      marginBottom: hp(0.8),
      color: '#333',
    },
    dropdownWrapper: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: wp(2),
      overflow: 'hidden',
    },
    dropdown: {
      height: hp(5.5),
      width: '100%',
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: hp(2),
    },
    cancelButton: {
     flex: 1,
      marginRight: wp(2),
        paddingVertical: hp(1.8),
      borderRadius: wp(10),
      borderWidth: 1,
      borderColor: '#264734',
      alignItems: 'center',
    },
    cancelText: {
      color: '#333',
      fontSize: wp(4),
    },
    confirmButton: {
      flex: 1,
      marginLeft: wp(2),
      paddingVertical: hp(1.8),
      borderRadius: wp(10),
      backgroundColor: '#264734',
      alignItems: 'center',
    },
    confirmText: {
      color: '#fff',
      fontSize: wp(4),
      fontWeight: '600',
    },
  });

export default SessionCancel;
