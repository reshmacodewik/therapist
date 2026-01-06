import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useResponsive } from 'react-native-responsive-hook';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../components/Header';
import createStyles from '../../../style/RescheduleSessionStyle';
import { RootStackParamList } from '../../Navigation/types';
import { apiPost } from '../../utils/api/common';
import { API_SESSION_RESECHUDLE } from '../../utils/api/APIConstant';
import ShowToast from '../../utils/ShowToast';
import DateTimePicker from '@react-native-community/datetimepicker';
type RouteProps = RouteProp<RootStackParamList, 'RescheduleSession'>;
const RescheduleSession = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation();
  const styles = createStyles(wp, hp);
  const route = useRoute<RouteProps>();
  const { sessionId } = route.params;
  const [date, setDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [untilDate, setUntilDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [showUntilDatePicker, setShowUntilDatePicker] = useState(false);
  const [occurrences, setOccurrences] = useState('0');
  const [selectedRepeat, setSelectedRepeat] = useState<string | null>(null);
  const formatDisplayDate = (date?: Date | null) =>
    date
      ? date.toLocaleDateString('en-US', {
          month: 'long',
          day: '2-digit',
          year: 'numeric',
        })
      : '';

  const formatDisplayTime = (date?: Date | null) =>
    date
      ? date
          .toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          })
          .toUpperCase()
      : '';

  const repeatOptions = [
    { label: 'Daily', value: 'Daily' },
    { label: 'Weekly', value: 'Weekly' },
    { label: 'Biweekly', value: 'Biweekly' },
    { label: 'Monthly', value: 'Monthly' },
  ];

  const handleReschedule = async () => {
    try {
      const payload = {
        sessionId: sessionId,
        data: {
          date: formatDisplayDate(date),
          time: formatDisplayTime(startTime),
          repeat: selectedRepeat,
          endAfterOccurrences: Number(occurrences),
          untilDate: formatDisplayDate(untilDate),
        },
      };
      console.log(payload);
      const res = await apiPost({
        url: API_SESSION_RESECHUDLE,
        values: payload,
      });
      console.log(res);
      if (res?.success) {
        ShowToast(
          res?.message || 'Session rescheduled successfully',
          'success',
        );
        navigation.goBack();
      }
    } catch (error: any) {
      ShowToast(
        error?.response?.data?.message || 'Something went wrong',
        'error',
      );
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bgimg}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: hp(10) }}
        showsVerticalScrollIndicator={false}
      >
        <Header showWelcomeText={true} />

        {/* Title Row */}
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(10)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={styles.title}>Reschedule Sessions</Text>
        </View>

        {/* Date */}
        <Text style={styles.label}>Date</Text>
        <TouchableOpacity
          style={styles.inputBoxdate}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.inputText}>
            {date ? formatDisplayDate(date) : 'Select date'}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="default"
            onChange={(_, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}

        <Text style={styles.label}>Time</Text>
        <View style={styles.timeRow}>
          <TouchableOpacity
            style={styles.inputBoxSmall}
            onPress={() => setShowStartTimePicker(true)}
          >
            <Text style={styles.inputText}>
              {startTime ? formatDisplayTime(startTime) : 'Start'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.inputBoxSmall}
            onPress={() => setShowEndTimePicker(true)}
          >
            <Text style={styles.inputText}>
              {endTime ? formatDisplayTime(endTime) : 'End'}
            </Text>
          </TouchableOpacity>
        </View>

        {showStartTimePicker && (
          <DateTimePicker
            value={startTime || new Date()}
            mode="time"
            onChange={(_, t) => {
              setShowStartTimePicker(false);
              if (t) setStartTime(t);
            }}
          />
        )}

        {showEndTimePicker && (
          <DateTimePicker
            value={endTime || new Date()}
            mode="time"
            onChange={(_, t) => {
              setShowEndTimePicker(false);
              if (t) setEndTime(t);
            }}
          />
        )}
        <Text style={styles.label}>Repeat?</Text>

        {repeatOptions.map(option => {
          const isSelected = selectedRepeat === option.value;

          return (
            <TouchableOpacity
              key={option.value}
              style={styles.radioRow}
              onPress={() => setSelectedRepeat(option.value)}
              activeOpacity={0.7}
            >
              <View
                style={[styles.radioCircle, isSelected && styles.radioSelected]}
              />

              <Text
                style={[
                  styles.radioLabel,
                  isSelected && styles.radioLabelSelected,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}

        <Text style={styles.label}>End After</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.subLabel}>Number of Occurrences</Text>
          <TextInput
            style={styles.inputNumber}
            value={occurrences}
            onChangeText={setOccurrences}
            keyboardType="number-pad"
          />
        </View>
        <Text style={styles.label}>Until Date</Text>
        <TouchableOpacity
          style={styles.inputBox}
          onPress={() => setShowUntilDatePicker(true)}
        >
          <Text style={styles.inputText}>
            {untilDate ? formatDisplayDate(untilDate) : 'Select until date'}
          </Text>
        </TouchableOpacity>

        {showUntilDatePicker && (
          <DateTimePicker
            value={untilDate || new Date()}
            mode="date"
            onChange={(_, d) => {
              setShowUntilDatePicker(false);
              if (d) setUntilDate(d);
            }}
          />
        )}

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleReschedule}
          >
            <Text style={styles.saveText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RescheduleSession;
