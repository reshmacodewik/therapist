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
import { useQuery } from '@tanstack/react-query';
import {
  apiPost,
  apiPostWithMultiForm,
  getApiWithOutQuery,
} from '../../utils/api/common';
import {
  API_CILENT_LIST,
  API_CREATE_SESSION,
} from '../../utils/api/APIConstant';
import ShowToast from '../../utils/ShowToast';
import Icon from 'react-native-vector-icons/Ionicons';
export enum SessionMode {
  CLIENT_BASED = 'CLIENT_BASED',
  FEATURED = 'FEATURED',
}
export enum SessionTypes {
  VoiceCall = 'Voice Call',
  VideoCall = 'Video Call',
  Chat = 'Chat',
}

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
  const [sessionMode, setSessionMode] = useState<SessionMode>(
    SessionMode.CLIENT_BASED,
  );
  const [sessionName, setSessionName] = useState('');
  const [focusAreas, setFocusAreas] = useState('');
  const [notes, setNotes] = useState('');
  const [price, setPrice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleFreeToggle = () => {
    setIsFree(prev => {
      const next = !prev;

      if (next) {
        setPrice('');
      }

      return next;
    });
  };
  const {
    data: clientRes,
    isLoading: isClientLoading,
    refetch: refetchClients,
  } = useQuery({
    queryKey: ['clients-list'],
    queryFn: () =>
      getApiWithOutQuery({
        url: `${API_CILENT_LIST}`,
      }),
  });
  const sessionTypeData = [
    { label: 'Voice Call', value: SessionTypes.VoiceCall },
    { label: 'Video Call', value: SessionTypes.VideoCall },
    { label: 'Chat', value: SessionTypes.Chat },
  ];

  const formatTime = (date: Date) =>
    `${String(date.getHours()).padStart(2, '0')}:${String(
      date.getMinutes(),
    ).padStart(2, '0')}`;

  const handleCreateSession = async () => {
    try {
      if (!sessionName.trim())
        return ShowToast('Session name is required', 'error');

      if (!date || !time)
        return ShowToast('Please select date & time', 'error');

      if (sessionMode === SessionMode.CLIENT_BASED && !client)
        return ShowToast('Please select client', 'error');

      if (!isFree && !price) return ShowToast('Please enter price', 'error');

      setIsLoading(true);

      const formData = new FormData();

      formData.append('sessionName', sessionName.trim());
      formData.append('sessionMode', sessionMode);
      formData.append('sessionType', sessionType);

      formData.append('date', date.toISOString().split('T')[0]);

      const formattedTime = `${String(time.getHours()).padStart(2, '0')}:${String(
        time.getMinutes(),
      ).padStart(2, '0')}`;

      formData.append('time', formattedTime);

      formData.append('notes', notes || '');
      formData.append('isFree', String(isFree));
      formData.append('price', String(isFree ? 0 : Number(price)));
      formData.append(
        'clients',
        JSON.stringify(
          sessionMode === SessionMode.CLIENT_BASED ? [client] : [],
        ),
      );

      formData.append(
        'focusAreas',
        JSON.stringify(
          focusAreas
            .split(',')
            .map(i => i.trim())
            .filter(Boolean),
        ),
      );
      if (imageUri) {
        formData.append('file', {
          uri: imageUri,
          name: `session-${Date.now()}.jpg`,
          type: 'image/jpeg',
        } as any);
      }

      const res = await apiPostWithMultiForm({
        url: API_CREATE_SESSION,
        values: formData,
      });
      console.log('res---------------------------------', res);
      console.log('formData---------------------------------', formData);
      if (res?.success) {
        ShowToast(res.message || 'Session created successfully', 'success');
        navigation.goBack();
      } else {
        ShowToast(res?.message || 'Failed to create session', 'error');
      }
    } catch (err) {
      ShowToast('Something went wrong', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const clientData =
    clientRes?.data?.map((item: any) => ({
      label: item.fullName,
      value: item._id,
    })) || [];

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, response => {
      if (response.assets?.[0]?.uri) {
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

        {/* 🔹 TOGGLE BUTTONS */}
        <View style={styles(wp, hp).toggleRow}>
          <TouchableOpacity
            style={
              sessionMode === SessionMode.CLIENT_BASED
                ? styles(wp, hp).activeToggle
                : styles(wp, hp).inactiveToggle
            }
            onPress={() => setSessionMode(SessionMode.CLIENT_BASED)}
          >
            <Text
              style={
                sessionMode === SessionMode.CLIENT_BASED
                  ? styles(wp, hp).activeToggleText
                  : styles(wp, hp).inactiveToggleText
              }
            >
              Client - Based Session
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              sessionMode === SessionMode.FEATURED
                ? styles(wp, hp).activeToggle
                : styles(wp, hp).inactiveToggle
            }
            onPress={() => setSessionMode(SessionMode.FEATURED)}
          >
            <Text
              style={
                sessionMode === SessionMode.FEATURED
                  ? styles(wp, hp).activeToggleText
                  : styles(wp, hp).inactiveToggleText
              }
            >
              Feature Session
            </Text>
          </TouchableOpacity>
        </View>

        {/* Session Name */}
        <Text style={styles(wp, hp).label}>Session Name</Text>
        <TextInput
          placeholder="enter"
          style={styles(wp, hp).input}
          value={sessionName}
          onChangeText={setSessionName}
        />

        {/* Date & Time */}
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
            onChange={(_, d) => {
              setShowDate(false);
              if (d) setDate(d);
            }}
          />
        )}

        {showTime && (
          <DateTimePicker
            value={time || new Date()}
            mode="time"
            onChange={(_, t) => {
              setShowTime(false);
              if (t) setTime(t);
            }}
          />
        )}

        {/* Session Type */}
        <Text style={styles(wp, hp).label}>Session Type</Text>
        <UniversalDropdown
          value={sessionType}
          setValue={setSessionType}
          data={sessionTypeData}
          variant="square"
          showBorder={false}
        />

        <Text style={styles(wp, hp).label}>Focus Areas</Text>
        <TextInput
          placeholder="enter"
          style={styles(wp, hp).input}
          value={focusAreas}
          onChangeText={setFocusAreas}
        />

        <Text style={styles(wp, hp).label}>Session Notes</Text>
        <TextInput
          multiline
          style={styles(wp, hp).notesInput}
          value={notes}
          onChangeText={setNotes}
        />

        {sessionMode === SessionMode.CLIENT_BASED && (
          <>
            <Text style={styles(wp, hp).label}>Add your Clients</Text>
            <UniversalDropdown
              value={client}
              setValue={setClient}
              data={clientData}
              variant="square"
              showBorder={false}
            />
          </>
        )}

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
        <TextInput
          placeholder="enter"
          style={styles(wp, hp).input}
          value={price}
          onChangeText={setPrice}
          editable={!isFree}
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles(wp, hp).checkboxRow}
          onPress={handleFreeToggle}
          activeOpacity={0.7}
        >
          <View
            style={[
              styles(wp, hp).checkbox,
              isFree && styles(wp, hp).checkboxChecked,
            ]}
          >
            {isFree && <Icon name="checkmark" size={16} color="#fff" />}
          </View>

          <Text style={styles(wp, hp).checkboxText}>
            This is a free session
          </Text>
        </TouchableOpacity>
        <View style={styles(wp, hp).footer}>
          <TouchableOpacity style={styles(wp, hp).cancelBtn}>
            <Text style={styles(wp, hp).cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles(wp, hp).createBtn}
            onPress={handleCreateSession}
            disabled={isLoading}
          >
            <Text style={styles(wp, hp).createText}>
              {isLoading ? 'Creating...' : 'Create Session'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default CreateSessionScreen;
