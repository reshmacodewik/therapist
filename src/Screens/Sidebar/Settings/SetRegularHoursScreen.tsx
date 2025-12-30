import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  ImageBackground,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from '../../../../style/setRegularHoursStyles';
import { apiPost } from '../../../utils/api/common';
import { CREATE_SLOT } from '../../../utils/api/APIConstant';
import ShowToast from '../../../utils/ShowToast';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const SetRegularHoursScreen: React.FC = () => {
  const navigation = useNavigation();
  const [expandedDay, setExpandedDay] = useState('Monday');
  const [dayEnabled, setDayEnabled] = useState<{ [key: string]: boolean }>({
    Monday: true,
  });

  const [availability, setAvailability] = useState('15 min');
  const [callType, setCallType] = useState('Chat');
  const handleNext = async () => {
    try {
      const payload = {
        startTime: '10:00',
        endTime: '18:00',
        breakStart: '14:00',
        breakEnd: '15:00',
        duration: Number(availability.replace(' min', '')), // converts "30 min" → 30
        day: expandedDay,
        callType: callType.toLowerCase(), // chat | audio | video
        price: 300,
      };

      const res = await apiPost({ url: CREATE_SLOT, values: payload });

      ShowToast(res?.message || 'Regular hours saved successfully', 'success');
      console.log('Set regular hours response:', res);
      navigation.goBack();
    } catch (error: any) {
      console.log('Set regular hours error:', error);
      ShowToast(
        error?.response?.data?.message || 'Something went wrong',
        'error',
      );
    }
  };

  return (
    <ImageBackground
      source={require('../../../../assets/Image/background.png')} // gradient bg image
      style={styles.bgImage}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={wp('6%')} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Set Regular Hours</Text>
        </View>

        {/* Days list */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {days.map(day => (
            <View key={day} style={styles.dayContainer}>
              <TouchableOpacity
                style={styles.dayHeader}
                onPress={() => setExpandedDay(expandedDay === day ? '' : day)}
              >
                <Text style={styles.dayTitle}>{day}</Text>
                <Switch
                  value={dayEnabled[day] || false}
                  onValueChange={val =>
                    setDayEnabled({ ...dayEnabled, [day]: val })
                  }
                />
              </TouchableOpacity>

              {expandedDay === day && dayEnabled[day] && (
                <View style={styles.dayContent}>
                  {/* Start & End Time */}
                  <View style={styles.row}>
                    <View style={styles.inputBox}>
                      <Text style={styles.label}>Start Time</Text>
                      <TextInput style={styles.input} value="10:00 AM" />
                      <Ionicons
                        name="close-circle-outline"
                        size={wp('5%')}
                        style={styles.inputIcon}
                      />
                    </View>
                    <View style={styles.inputBox}>
                      <Text style={styles.label}>Start Time</Text>
                      <TextInput style={styles.input} value="06:00 PM" />
                      <Ionicons
                        name="close-circle-outline"
                        size={wp('5%')}
                        style={styles.inputIcon}
                      />
                    </View>
                  </View>

                  {/* Break Time */}
                  <Text style={[styles.mainlabel, { marginTop: hp('0%') }]}>
                    Break Time
                  </Text>
                  <View style={styles.row}>
                    <View style={styles.inputBox}>
                      <Text style={styles.label}>Start Time</Text>
                      <TextInput style={styles.input} value="02:00 PM" />
                      <Ionicons
                        name="close-circle-outline"
                        size={wp('5%')}
                        style={styles.inputIcon}
                      />
                    </View>
                    <View style={styles.inputBox}>
                      <Text style={styles.label}>Start Time</Text>
                      <TextInput style={styles.input} value="03:00 PM" />
                      <Ionicons
                        name="close-circle-outline"
                        size={wp('5%')}
                        style={styles.inputIcon}
                      />
                    </View>
                  </View>

                  {/* Availability */}
                  <Text style={[styles.label, { marginTop: hp('0%') }]}>
                    Availability
                  </Text>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.optionRow}
                  >
                    {['15 min', '20 min', '30 min', '40 min', '60 min'].map(
                      time => (
                        <TouchableOpacity
                          key={time}
                          style={[
                            styles.optionBtn,
                            availability === time && styles.optionBtnActive,
                          ]}
                          onPress={() => setAvailability(time)}
                        >
                          <Text
                            style={[
                              styles.optionText,
                              availability === time && styles.optionTextActive,
                            ]}
                          >
                            {time}
                          </Text>
                        </TouchableOpacity>
                      ),
                    )}
                  </ScrollView>

                  {/* Call Types */}
                  <Text style={[styles.label, { marginTop: hp('0%') }]}>
                    Call Types
                  </Text>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.optionRow}
                  >
                    {[
                      {
                        label: 'Chat',
                        image: require('../../../../assets/Image/chat_hour.png'),
                      },
                      {
                        label: 'Audio Call',
                        image: require('../../../../assets/Image/phone_hour.png'),
                      },
                      {
                        label: 'Video Call',
                        image: require('../../../../assets/Image/video_hour.png'),
                      },
                    ].map(item => (
                      <TouchableOpacity
                        key={item.label}
                        style={[
                          styles.callTypeBtn,
                          callType === item.label && styles.callTypeBtnActive,
                        ]}
                        onPress={() => setCallType(item.label)}
                      >
                        <Image
                          source={item.image}
                          style={[
                            styles.callTypeImg,
                            callType === item.label && styles.callTypeImgActive,
                          ]}
                          resizeMode="contain"
                        />
                        <Text
                          style={[
                            styles.callTypeText,
                            callType === item.label &&
                              styles.callTypeTextActive,
                          ]}
                        >
                          {item.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>

                  {/* Price */}
                  <Text style={[styles.label, { marginTop: hp('0%') }]}>
                    Price
                  </Text>
                  <TextInput
                    style={styles.priceInput}
                    placeholder="Enter Amount"
                    placeholderTextColor="#999"
                  />
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
          <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SetRegularHoursScreen;
