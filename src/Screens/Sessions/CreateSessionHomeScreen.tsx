import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../style/createSessionAddStyles';
import UniversalDropdown from '../../components/AgeDropdown';
import { launchImageLibrary } from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateSessionScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation();
  const [sessionType, setSessionType] = useState('');
  const [client, setClient] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const sessionTypeData = [
    { label: 'Individual', value: 'individual' },
    { label: 'Group', value: 'group' },
  ];

  const clientData = [
    { label: 'Client A', value: '1' },
    { label: 'Client B', value: '2' },
  ];
  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, response => {
      if (response.assets && response.assets[0].uri) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={styles(wp, hp).container}
        contentContainerStyle={styles(wp, hp).content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles(wp, hp).header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={wp(7)} color="#000" />
          </TouchableOpacity>
          <Text style={styles(wp, hp).headerTitle}>Create Session</Text>
        </View>

        {/* Toggle Buttons */}
        <View style={styles(wp, hp).toggleRow}>
          <TouchableOpacity style={styles(wp, hp).activeToggle}>
            <Text style={styles(wp, hp).activeToggleText}>
              Client - Based Session
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles(wp, hp).inactiveToggle}>
            <Text style={styles(wp, hp).inactiveToggleText}>
              Feature Session
            </Text>
          </TouchableOpacity>
        </View>

        {/* Input Fields */}
        <Text style={styles(wp, hp).label}>Session Name</Text>
        <TextInput placeholder="enter" style={styles(wp, hp).input} />

        <View style={styles(wp, hp).row}>
          <View style={styles(wp, hp).halfInput}>
            <Text style={styles(wp, hp).label}>Date</Text>
            <TouchableOpacity
              style={styles(wp, hp).iconInput}
              onPress={() => setShowDate(true)}
            >
              <Text style={styles(wp, hp).placeholder}>
                {date ? date.toDateString() : 'Date'}
              </Text>
              <MaterialIcons
                name="calendar-today"
                size={wp(5)}
                color="#6A8F7A"
              />
            </TouchableOpacity>
          </View>

          <View style={styles(wp, hp).halfInput}>
            <Text style={styles(wp, hp).label}>Time</Text>
            <TouchableOpacity
              style={styles(wp, hp).iconInput}
              onPress={() => setShowTime(true)}
            >
              <Text style={styles(wp, hp).placeholder}>
                {time ? time.toLocaleTimeString() : 'Time'}
              </Text>
              <MaterialIcons name="access-time" size={wp(5)} color="#6A8F7A" />
            </TouchableOpacity>
          </View>
        </View>
        {showDate && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="default"
            onChange={(e, selectedDate) => {
              setShowDate(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}

        {showTime && (
          <DateTimePicker
            value={time || new Date()}
            mode="time"
            display="default"
            onChange={(e, selectedTime) => {
              setShowTime(false);
              if (selectedTime) setTime(selectedTime);
            }}
          />
        )}

        <Text style={styles(wp, hp).label}>Session Type</Text>
        <UniversalDropdown
          value={sessionType}
          setValue={setSessionType}
          data={sessionTypeData}
          variant="square"
          showBorder={false}
        />

        <Text style={styles(wp, hp).label}>Focus Areas</Text>
        <TextInput placeholder="enter" style={styles(wp, hp).input} />

        <Text style={styles(wp, hp).label}>Session Notes</Text>
        <TextInput multiline style={styles(wp, hp).notesInput} />

        <Text style={styles(wp, hp).label}>Add your Clients</Text>
        <UniversalDropdown
          value={client}
          setValue={setClient}
          data={clientData}
          variant="square"
          showBorder={false}
        />

        <Text style={styles(wp, hp).label}>Upload Picture</Text>
        <TouchableOpacity style={styles(wp, hp).uploadBox} onPress={pickImage}>
          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
              style={{ width: '100%', height: '100%', borderRadius: wp(3) }}
            />
          ) : (
            <Ionicons name="cloud-upload-outline" size={wp(8)} />
          )}
        </TouchableOpacity>

        <Text style={styles(wp, hp).label}>Price</Text>
        <TextInput placeholder="enter" style={styles(wp, hp).input} />

        <TouchableOpacity
          style={styles(wp, hp).checkboxRow}
          onPress={() => setIsFree(!isFree)}
        >
          <View
            style={[
              styles(wp, hp).checkbox,
              isFree && styles(wp, hp).checkboxChecked,
            ]}
          />
          <Text style={styles(wp, hp).checkboxText}>
            This is a free session
          </Text>
        </TouchableOpacity>

        {/* Footer Buttons */}
        <View style={styles(wp, hp).footer}>
          <TouchableOpacity style={styles(wp, hp).cancelBtn}>
            <Text style={styles(wp, hp).cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles(wp, hp).createBtn}>
            <Text style={styles(wp, hp).createText}>Create Session</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default CreateSessionScreen;
