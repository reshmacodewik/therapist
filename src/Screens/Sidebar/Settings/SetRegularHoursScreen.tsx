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
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
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
const CALL_TYPES: { label: string; value: 'chat' | 'audio' | 'video' }[] = [
  { label: 'Chat', value: 'chat' },
  { label: 'Audio Call', value: 'audio' },
  { label: 'Video Call', value: 'video' },
];

  /* ---------------- DAY ENABLE ---------------- */
  const [expandedDay, setExpandedDay] = useState('Monday');
  const [dayEnabled, setDayEnabled] = useState<Record<string, boolean>>({
    Monday: true,
    Tuesday: true,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  const [schedule, setSchedule] = useState({
    startTime: '',
    endTime: '',
    breakStart: '',
    breakEnd: '',
    duration: '15 min',
    callType: 'chat' as 'chat' | 'audio' | 'video',
    price: '',
  });

  const [pickerField, setPickerField] = useState<null | keyof typeof schedule>(
    null,
  );
  const [showPicker, setShowPicker] = useState(false);

  const openPicker = (field: keyof typeof schedule) => {
    setPickerField(field);
    setShowPicker(true);
  };

  const onTimeChange = (_: any, date?: Date) => {
    setShowPicker(false);
    if (!date || !pickerField) return;

    const time = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    setSchedule(prev => ({ ...prev, [pickerField]: time }));
  };

  /* ---------------- SAVE ---------------- */
  const handleNext = async () => {
    try {
      const enabledDays = days.filter(d => dayEnabled[d]);

      for (const day of enabledDays) {
        const payload = {
          day,
          startTime: schedule.startTime,
          endTime: schedule.endTime,
          breakStart: schedule.breakStart,
          breakEnd: schedule.breakEnd,
          duration: Number(schedule.duration.replace(' min', '')),
          callType: schedule.callType,
          price: Number(schedule.price),
        };

        await apiPost({ url: CREATE_SLOT, values: payload });
      }

      ShowToast('Regular hours saved successfully', 'success');
      navigation.goBack();
    } catch (error: any) {
      ShowToast(
        error?.response?.data?.message || 'Something went wrong',
        'error',
      );
    }
  };

  return (
    <ImageBackground
      source={require('../../../../assets/Image/background.png')}
      style={styles.bgImage}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={wp('6%')} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Set Regular Hours</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {days.map(day => (
            <View key={day} style={styles.dayContainer}>
              <TouchableOpacity
                style={styles.dayHeader}
                onPress={() => setExpandedDay(day)}
              >
                <Text style={styles.dayTitle}>{day}</Text>
                <Switch
                  value={dayEnabled[day]}
                  onValueChange={val => {
                    setDayEnabled(prev => ({ ...prev, [day]: val }));
                    if (val) setExpandedDay(day); // 👈 IMPORTANT
                  }}
                />
              </TouchableOpacity>

              {expandedDay === day && dayEnabled[day] && (
                <View style={styles.dayContent}>
                  {/* Start & End */}
                  <View style={styles.row}>
                    <View style={styles.inputBox}>
                      <Text style={styles.label}>Start Time</Text>

                      <View style={{ position: 'relative' }}>
                        {/* Open picker */}
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => openPicker('startTime')}
                        >
                          <TextInput
                            style={styles.input}
                            editable={false}
                            pointerEvents="none"
                            value={schedule.startTime}
                            placeholder="Select Start Time"
                            placeholderTextColor="#999"
                          />
                        </TouchableOpacity>

                        {/* Clear icon */}
                        {schedule.startTime ? (
                          <TouchableOpacity
                            style={styles.clearIcon}
                            onPress={e => {
                              e.stopPropagation();
                              setSchedule(prev => ({ ...prev, startTime: '' }));
                            }}
                          >
                            <Ionicons
                              name="close-circle"
                              size={wp('5%')}
                              color="#999"
                            />
                          </TouchableOpacity>
                        ) : null}
                      </View>
                    </View>

                    <View style={styles.inputBox}>
                      <Text style={styles.label}>End Time</Text>

                      <View style={{ position: 'relative' }}>
                        {/* Open picker ONLY when pressing input */}
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => openPicker('endTime')}
                        >
                          <TextInput
                            style={styles.input}
                            editable={false}
                            pointerEvents="none"
                            value={schedule.endTime}
                            placeholder="Select End Time"
                            placeholderTextColor="#999"
                          />
                        </TouchableOpacity>

                        {/* Clear button (does NOT open picker) */}
                        {schedule.endTime ? (
                          <TouchableOpacity
                            style={styles.clearIcon}
                            onPress={e => {
                              e.stopPropagation(); // 🔥 KEY LINE
                              setSchedule(prev => ({ ...prev, endTime: '' }));
                            }}
                          >
                            <Ionicons
                              name="close-circle"
                              size={wp('5%')}
                              color="#999"
                            />
                          </TouchableOpacity>
                        ) : null}
                      </View>
                    </View>
                  </View>

                  {/* Break */}
                  <Text style={styles.mainlabel}>Break Time</Text>
                  <View style={styles.row}>
                    <View style={styles.inputBox}>
                      <Text style={styles.label}>Start</Text>

                      <View style={{ position: 'relative' }}>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => openPicker('breakStart')}
                        >
                          <TextInput
                            style={styles.input}
                            editable={false}
                            pointerEvents="none"
                            value={schedule.breakStart}
                            placeholder="Select Break Start"
                            placeholderTextColor="#999"
                          />
                        </TouchableOpacity>

                        {schedule.breakStart ? (
                          <TouchableOpacity
                            style={styles.clearIcon}
                            onPress={e => {
                              e.stopPropagation();
                              setSchedule(prev => ({
                                ...prev,
                                breakStart: '',
                              }));
                            }}
                          >
                            <Ionicons
                              name="close-circle"
                              size={wp('5%')}
                              color="#999"
                            />
                          </TouchableOpacity>
                        ) : null}
                      </View>
                    </View>

                    <View style={styles.inputBox}>
                      <Text style={styles.label}>End</Text>

                      <View style={{ position: 'relative' }}>
                        {/* Open picker */}
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => openPicker('breakEnd')}
                        >
                          <TextInput
                            style={styles.input}
                            editable={false}
                            pointerEvents="none"
                            value={schedule.breakEnd}
                            placeholder="Select Break End"
                            placeholderTextColor="#999"
                          />
                        </TouchableOpacity>

                        {/* Clear icon */}
                        {schedule.breakEnd ? (
                          <TouchableOpacity
                            style={styles.clearIcon}
                            onPress={e => {
                              e.stopPropagation();
                              setSchedule(prev => ({ ...prev, breakEnd: '' }));
                            }}
                          >
                            <Ionicons
                              name="close-circle"
                              size={wp('5%')}
                              color="#999"
                            />
                          </TouchableOpacity>
                        ) : null}
                      </View>
                    </View>
                  </View>

                  {/* Availability */}
                  <Text style={styles.label}>Availability</Text>
                  <ScrollView horizontal>
                    {['15 min', '20 min', '30 min', '40 min', '60 min'].map(
                      t => (
                        <TouchableOpacity
                          key={t}
                          style={[
                            styles.optionBtn,
                            schedule.duration === t && styles.optionBtnActive,
                          ]}
                          onPress={() =>
                            setSchedule(prev => ({
                              ...prev,
                              duration: t,
                            }))
                          }
                        >
                          <Text
                            style={
                              styles.optionText &&
                              schedule.duration === t &&
                              styles.optionTextActive
                            }
                          >
                            {t}
                          </Text>
                        </TouchableOpacity>
                      ),
                    )}
                  </ScrollView>

                  {/* Call Type */}
                  <Text style={styles.label}>Call Types</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {CALL_TYPES.map(item => (
                      <TouchableOpacity
                        key={item.value}
                        style={[
                          styles.callTypeBtn,
                          schedule.callType === item.value &&
                            styles.callTypeBtnActive,
                        ]}
                        onPress={() =>
                          setSchedule(prev => ({
                            ...prev,
                            callType: item.value,
                          }))
                        }
                      >
                        <Text
                          style={[
                            styles.callTypeText,
                            schedule.callType === item.value &&
                              styles.callTypeTextActive,
                          ]}
                        >
                          {item.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>

                  {/* Price */}
                  <Text style={styles.label}>Price</Text>
                  <TextInput
                    style={styles.priceInput}
                    keyboardType="numeric"
                    value={schedule.price}
                    onChangeText={text =>
                      setSchedule(prev => ({ ...prev, price: text }))
                    }
                    placeholder="Enter Amount"
                  />
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
          <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>
      </View>

      {showPicker && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onTimeChange}
        />
      )}
    </ImageBackground>
  );
};

export default SetRegularHoursScreen;
