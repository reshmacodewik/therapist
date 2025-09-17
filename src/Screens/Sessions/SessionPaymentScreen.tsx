import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { mdiAccount } from '@mdi/js';


import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import s from './sessionPaymentStyles';
import { useResponsive } from 'react-native-responsive-hook';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Feather';

const SessionPaymentScreen = () => {
  const { wp, hp } = useResponsive();
  const styles = s(wp, hp);
  const navigation = useNavigation();

  const handleConfirm = () => {
    // Handle confirmation logic
    console.log('Confirm payment');
  };

  const handleMenuSelect = (value: any) => {
    // Handle menu selection
    console.log('Selected menu item:', value);
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bgimg}
    >
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header showWelcomeText={false} />
          {/* Title */}
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={wp(10)}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={styles.title}>Manage Sessions</Text>
          </View>
          <View style={styles.tagcardContainer}>
            <View style={styles.tagContainer}>
              <Image source={require('../../../assets/icon/badge.png')} />
            </View>
            <Image
              source={require('../../../assets/Image/yoga.png')}
              style={styles.sessionImage}
            />

            {/* Session Info */}
            <View style={styles.sessionInfoContainer}>
              <Text style={styles.sessionTitle}>Mindfulness Practices</Text>
              <Text style={styles.sessionDescription}>
                Share and learn mindfulness techniques
              </Text>

              {/* Date and Time */}
              <View style={styles.dateTimeContainer}>
                <Ionicons
                  name="calendar-outline"
                  size={wp(5)}
                  color="#000"
                  style={styles.dateTimeIcon}
                />
                <Text style={styles.dateTimeText}>April 25, 5:00pm</Text>
              </View>
            </View>
            {/* Format and Registered Count */}
            <View style={styles.formatContainer}>
              <Text style={styles.formatLabel}>Format: Chat sessions</Text>
              <Text style={styles.registeredCount}>
                5 Attending (3 paid client )
              </Text>
            </View>
          </View>

          {/* Access Payment */}
          <View style={styles.accessPaymentContainer}>
            <Text style={styles.sectionTitle}>Access Payment</Text>
            <Text style={styles.paymentLabel}>
              Auto grant access after payment
            </Text>

            {/* Payment Summary */}
            <Text style={styles.sectionTitle}>Payout Summary</Text>
            <View style={styles.paymentInfoContainer}>
              <View style={styles.paymentRow}>
                <Text style={styles.paymentLabel}>Collected:</Text>
                <Text style={styles.paymentValue}>KES 2,500</Text>
              </View>
              <View style={styles.paymentRow}>
                <Text style={styles.paymentLabel}>Platform Fee:</Text>
                <Text style={styles.paymentValue}>KES 2,500</Text>
              </View>
              <View style={styles.paymentRow}>
                <Text style={styles.paymentLabel}>Net Payout:</Text>
                <Text style={styles.paymentValue}>KES 2,500</Text>
              </View>
            </View>

            {/* Action Buttons Section */}
            <View style={styles.actionButtonsContainer}>
              {/* Send Payment Link */}
              <View style={styles.actionButtonsinnerContainer}>
                <TouchableOpacity style={styles.primaryButton} onPress={()=>navigation.navigate('SendPaymentLink' as never)}>
                  <Text style={styles.primaryButtonText}>
                    Send Payment Link
                  </Text>
                  <Feather
                    name="link-2"
                    size={wp(4.5)}
                    color="#fff"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>

                {/* Refund Participant */}
                <TouchableOpacity style={styles.outlineButton}>
                  <Text style={styles.outlineButtonText}>
                    Refund Participant
                  </Text>
                  <Icon
                    name="arrow-u-right-top"
                    size={wp(4.5)}
                    color="#14532d"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>
              </View>
              {/* Grant Access */}
              <View style={styles.actionButtonsinnerContainer}>
                <TouchableOpacity style={styles.outlineButton}>
                  <Text style={styles.outlineButtonText}>Grant Access</Text>
                  <Feather
                    name="check"
                    size={wp(4.5)}
                    color="#14532d"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>

                {/* View All Transactions */}
                <TouchableOpacity style={styles.outlineButton}>
                  <Text style={styles.outlineButtonText}>
                    View All Transactions
                  </Text>
                  <Ionicons
                    name="eye"
                    size={wp(4.5)}
                    color="#14532d"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.accessPaymentContainer}>
            <Text style={styles.sectionTitle}>Attendees & Resources</Text>
            <Text style={styles.paymentLabel}>
              Effectively Mark the attendance and resoures
            </Text>
            {/* Action Buttons Section */}
            <View style={styles.actionButtonsContainer}>
              {/* Send Payment Link */}
              <View style={styles.actionButtonsinnerContainer}>
                <TouchableOpacity style={styles.primaryButton}>
                  <Text style={styles.primaryButtonText}>Mark Attendance</Text>
                  <Ionicons
                    name="checkbox-outline"
                    size={wp(4.5)}
                    color="#fff"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>

                {/* Refund Participant */}
                <TouchableOpacity style={styles.outlineButton}>
                  <Text style={styles.outlineButtonText}>Add Notes</Text>
                  <Ionicons
                    name="bookmark-outline"
                    size={wp(4.5)}
                    color="#14532d"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>
              </View>
              {/* Grant Access */}
              <View style={styles.actionButtonsinnerContainer}>
                <TouchableOpacity style={styles.outlineButton}>
                  <Text style={styles.outlineButtonText}>Upload Resources</Text>
                  <Feather
                    name="upload"
                    size={wp(4.5)}
                    color="#14532d"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>

                {/* View All Transactions */}
                <TouchableOpacity style={styles.outlineButton}>
                  <Text style={styles.outlineButtonText}>Start Sessions</Text>
                  <MaterialIcons
                    name="arrow-right"
                    size={wp(6)}
                    color="#14532d"
                    style={{ marginLeft: wp(0) }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.accessPaymentContainer}>
            <Text style={styles.sectionTitle}>Engagement Tools</Text>
            <Text style={styles.paymentLabel}>
              Effectively Mark the attendance and resoures
            </Text>
            {/* Action Buttons Section */}
            <View style={styles.actionButtonsContainer}>
              {/* Send Payment Link */}
              <View style={styles.actionButtonsinnerContainer}>
                <TouchableOpacity style={styles.primaryButton}>
                  <Text style={styles.primaryButtonText}>Send Reminder</Text>
                  <Fontisto
                    name="bell"
                    size={wp(4.5)}
                    color="#fff"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>

                {/* Refund Participant */}
                <TouchableOpacity style={styles.outlineButton}>
                  <Text style={styles.outlineButtonText}>
                    Group chat/ Bulletin
                  </Text>
                  <MaterialIcons
                    name="groups"
                    size={wp(4.5)}
                    color="#14532d"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>
              </View>
              {/* Grant Access */}
              <View style={styles.actionButtonsinnerContainer}>
                <TouchableOpacity style={styles.outlineButton}>
                  <Text style={styles.outlineButtonText}>
                    Post session update/ Summary
                  </Text>
                  <MaterialIcons
                    name="arrow-u-left-top"
                    size={wp(4.5)}
                    color="#14532d"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.accessPaymentContainer}>
            <Text style={styles.sectionTitle}>Session Settings</Text>
            <Text style={styles.paymentLabel}>
              Manage your sessions at one place 
            </Text>
            {/* Action Buttons Section */}
            <View style={styles.actionButtonsContainer}>
              {/* Send Payment Link */}
              <View style={styles.actionButtonsinnerContainer}>
                <TouchableOpacity style={styles.primaryButton}>
                  <Text style={styles.primaryButtonText}>Edit Sessions</Text>
                  <Feather
                    name="edit-2"
                    size={wp(4.5)}
                    color="#fff"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>

                {/* Refund Participant */}
                <TouchableOpacity style={styles.outlineButton}>
                  <Text style={styles.outlineButtonText}>
                   Reschedule
                  </Text>
                  <MaterialIcons
                    name="groups"
                    size={wp(4.5)}
                    color="#14532d"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>
              </View>
              {/* Grant Access */}
              <View style={styles.actionButtonsinnerContainer}>
                <TouchableOpacity style={styles.outlineButton}>
                  <Text style={styles.outlineButtonText}>
                  Cancel Session
                  </Text>
                  <Fontisto
                    name="arrow-return-left"
                    size={wp(4.5)}
                    color="#14532d"
                    style={{ marginLeft: wp(2) }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default SessionPaymentScreen;
