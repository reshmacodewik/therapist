import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useResponsive } from 'react-native-responsive-hook';
import { createEditSessionStyles } from '../../../style/editSessionStyles';
import Header from '../../components/Header';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/types';
import { useQuery } from '@tanstack/react-query';
import { getApiWithOutQuery } from '../../utils/api/common';
import { API_GET_SESSION_BY_ID } from '../../utils/api/APIConstant';

type RouteProps = RouteProp<RootStackParamList, 'EditSession'>;

const EditSession = () => {
  const { wp, hp } = useResponsive();
  const styles = createEditSessionStyles(wp, hp);
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProps>();
  const { sessionId } = route.params;
  const [format, setFormat] = useState('Chat');

  const [sessionTitle, setSessionTitle] = useState('');
  const [sessionDesc, setSessionDesc] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState<string[]>([]);
  const [paid, setPaid] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showFocusDropdown, setShowFocusDropdown] = useState(false);
  const mapSessionTypeToFormat = (type?: string) => {
    switch (type) {
      case 'Video Call':
        return 'Video';
      case 'Audio Call':
        return 'Audio';
      case 'Chat':
        return 'Chat';
      default:
        return 'Chat';
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ['session-by-id', sessionId],
    enabled: true,

    queryFn: () =>
      getApiWithOutQuery({
        url: `${API_GET_SESSION_BY_ID}/${sessionId}`,
      }),
  });
  useEffect(() => {
    if (!data?.data) return;

    const s = data.data;
    console.log('SESSION API DATA 👉', s);

    setSessionTitle(s.sessionName ?? '');
    setSessionDesc(s.notes ?? '');
    setCategory(s.focusAreas ?? []);
    setPaid(!s.isFree);
    setPrice(s.price ? String(s.price) : '');

    if (s.sessionType) {
      setFormat(mapSessionTypeToFormat(s.sessionType));
    }
    if (s.date) {
      setDate(new Date(s.date));
    }

    if (s.date && s.time) {
      setTime(new Date(`${s.date}T${s.time}`));
    }
  }, [data]);

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
          <Header showWelcomeText />

          {/* Header */}
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={wp(8)}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={styles.title}>Edit Session</Text>
          </View>

          <View style={{ marginHorizontal: wp(2) }}>
            {/* Session Title */}
            <Text style={styles.label}>Session Title</Text>
            <TextInput
              style={styles.input}
              value={sessionTitle}
              onChangeText={setSessionTitle}
            />

            {/* Description */}
            <Text style={styles.label}>Session Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={sessionDesc}
              onChangeText={setSessionDesc}
              multiline
            />

            {/* Focus Areas */}
            <Text style={styles.label}>Focus Areas</Text>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setShowFocusDropdown(!showFocusDropdown)}
            >
              <Text style={styles.dropdownText}>
                {category.length ? category.join(', ') : 'Select Focus Areas'}
              </Text>
              <Ionicons name="chevron-down" size={wp(4.5)} />
            </TouchableOpacity>

            {showFocusDropdown && (
              <View style={styles.dropdownList}>
                {category.map((item, index) => (
                  <View key={index} style={styles.dropdownItem}>
                    <Text>{item}</Text>
                  </View>
                ))}
              </View>
            )}

            {/* Date */}
            <Text style={styles.label}>Date & Time</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.datePicker}
                onPress={() => setShowDatePicker(true)}
              >
                <Ionicons name="calendar-outline" size={wp(4.5)} />
                <Text style={styles.dateText}>
                  {date ? date.toDateString() : 'Select Date'}
                </Text>
              </TouchableOpacity>

              {/* Time */}
              <TouchableOpacity
                style={styles.timePicker}
                onPress={() => setShowTimePicker(true)}
              >
                <Ionicons name="time-outline" size={wp(4.5)} />
                <Text style={styles.dateText}>
                  {time
                    ? time.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : 'Select Time'}
                </Text>
              </TouchableOpacity>
            </View>

            {showDatePicker && (
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                onChange={(_, selected) => {
                  setShowDatePicker(false);
                  if (selected) setDate(selected);
                }}
              />
            )}

            {showTimePicker && (
              <DateTimePicker
                value={time || new Date()}
                mode="time"
                onChange={(_, selected) => {
                  setShowTimePicker(false);
                  if (selected) setTime(selected);
                }}
              />
            )}
            <Text style={styles.label}>Format</Text>
            <View style={styles.row}>
              {['Chat', 'Audio', 'Video'].map(item => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.formatButton,
                    format === item && styles.formatButtonActive,
                  ]}
                  onPress={() => setFormat(item)}
                >
                  <Text
                    style={[
                      styles.formatText,
                      format === item && styles.formatTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* Pricing */}
            <View style={styles.rowBetween}>
              <Text style={styles.label}>Pricing</Text>
              <Switch
                value={paid}
                onValueChange={setPaid}
                trackColor={{ true: '#0A5735', false: '#ccc' }}
                thumbColor="#fff"
              />
            </View>

            {paid && (
              <View style={styles.row}>
                <Text style={styles.label}>Paid Session</Text>

                <TextInput
                  style={styles.priceInput}
                  value={price}
                  onChangeText={setPrice}
                  placeholder="Enter Price"
                  keyboardType="numeric"
                />
              </View>
            )}

            {/* Save */}
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default EditSession;
