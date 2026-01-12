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
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import { useQuery } from '@tanstack/react-query';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from '../../../style/createSessionAddStyles';
import UniversalDropdown from '../../components/AgeDropdown';
import {
  apiPostWithMultiForm,
  getApiWithOutQuery,
} from '../../utils/api/common';
import {
  API_CILENT_LIST,
  API_CREATE_SESSION,
} from '../../utils/api/APIConstant';
import ShowToast from '../../utils/ShowToast';
import MultiSelectDropdown from '../../../components/MultiSelectDropdown';

export enum SessionMode {
  CLIENT_BASED = 'CLIENT_BASED',
  FEATURED = 'FEATURED',
}

export enum SessionTypes {
  VoiceCall = 'Voice Call',
  VideoCall = 'Video Call',
  Chat = 'Chat',
}

type SessionFormValues = {
  sessionName: string;
  sessionMode: SessionMode;
  sessionType: string;
  date: Date | null;
  time: Date | null;
  focusAreas: string;
  notes: string;
  clients: string[];
  isFree: boolean;
  price: string;
};

const validationSchema = Yup.object().shape({
  sessionName: Yup.string().required('Session name is required'),
  date: Yup.date().required(),
  time: Yup.date().required(),
  price: Yup.string().when('isFree', {
    is: false,
    then: s => s.required('Price is required'),
  }),
});

const CreateSessionScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation();

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);

  const { data: clientRes } = useQuery({
    queryKey: ['clients-list'],
    queryFn: () =>
      getApiWithOutQuery({
        url: API_CILENT_LIST,
      }),
  });

  const clientItems =
    clientRes?.data?.map((item: any) => ({
      label: item.fullName,
      value: item._id,
    })) || [];

  const sessionTypeData = [
    { label: 'Voice Call', value: SessionTypes.VoiceCall },
    { label: 'Video Call', value: SessionTypes.VideoCall },
    { label: 'Chat', value: SessionTypes.Chat },
  ];

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, res => {
      if (res.assets?.[0]?.uri) setImageUri(res.assets[0].uri);
    });
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={{ flex: 1 }}
    >
      <Formik<SessionFormValues>
        initialValues={{
          sessionName: '',
          sessionMode: SessionMode.CLIENT_BASED,
          sessionType: '',
          date: null,
          time: null,
          focusAreas: '',
          notes: '',
          clients: [],
          isFree: false,
          price: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            setSubmitting(true);
            const formData = new FormData();
            formData.append('sessionName', values.sessionName);
            formData.append('sessionMode', values.sessionMode);
            formData.append('sessionType', values.sessionType);
            formData.append('date', values.date!.toISOString().split('T')[0]);
            const h = values.time!.getHours().toString().padStart(2, '0');
            const m = values.time!.getMinutes().toString().padStart(2, '0');
            formData.append('time', `${h}:${m}`);
            formData.append('notes', values.notes || '');
            formData.append('isFree', String(values.isFree));

            formData.append(
              'price',
              values.isFree ? '0' : String(values.price),
            );

            formData.append(
              'clients',
              JSON.stringify(
                values.sessionMode === SessionMode.CLIENT_BASED
                  ? values.clients
                  : [],
              ),
            );

            formData.append(
              'focusAreas',
              JSON.stringify(
                values.focusAreas
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

            if (res?.success) {
              ShowToast(res.message, 'success');
              navigation.goBack();
            } else {
              ShowToast(res?.error || 'Failed', 'error');
            }
          } catch {
            ShowToast('Something went wrong', 'error');
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <>
            <ScrollView
              style={s.container}
              contentContainerStyle={s.content}
              showsVerticalScrollIndicator={false}
            >
              {/* Header */}
              <View style={s.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" size={wp(7)} />
                </TouchableOpacity>
                <Text style={s.headerTitle}>Create Session</Text>
              </View>

              {/* Toggle */}
              <View style={s.toggleRow}>
                {[SessionMode.CLIENT_BASED, SessionMode.FEATURED].map(mode => (
                  <TouchableOpacity
                    key={mode}
                    style={
                      values.sessionMode === mode
                        ? s.activeToggle
                        : s.inactiveToggle
                    }
                    onPress={() => setFieldValue('sessionMode', mode)}
                  >
                    <Text
                      style={
                        values.sessionMode === mode
                          ? s.activeToggleText
                          : s.inactiveToggleText
                      }
                    >
                      {mode === SessionMode.CLIENT_BASED
                        ? 'Client - Based Session'
                        : 'Feature Session'}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={s.label}>Session Name</Text>
              <TextInput
                style={s.input}
                value={values.sessionName}
                onChangeText={handleChange('sessionName')}
              />

              {/* Date & Time */}
              <View style={s.row}>
                <View style={s.halfInput}>
                  <Text style={s.label}>Date</Text>
                  <TouchableOpacity
                    style={s.iconInput}
                    onPress={() => setShowDate(true)}
                  >
                    <Text style={s.placeholder}>
                      {values.date ? values.date.toDateString() : 'Date'}
                    </Text>
                    <MaterialIcons name="calendar-today" size={wp(5)} />
                  </TouchableOpacity>
                </View>

                <View style={s.halfInput}>
                  <Text style={s.label}>Time</Text>
                  <TouchableOpacity
                    style={s.iconInput}
                    onPress={() => setShowTime(true)}
                  >
                    <Text style={s.placeholder}>
                      {values.time ? values.time.toLocaleTimeString() : 'Time'}
                    </Text>
                    <MaterialIcons name="access-time" size={wp(5)} />
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={s.label}>Session Type</Text>
              <UniversalDropdown
                value={values.sessionType}
                setValue={v => setFieldValue('sessionType', v)}
                data={sessionTypeData}
                variant="square"
                showBorder={false}
              />

              <Text style={s.label}>Focus Areas</Text>
              <TextInput
                style={s.input}
                value={values.focusAreas}
                onChangeText={handleChange('focusAreas')}
              />

              <Text style={s.label}>Session Notes</Text>
              <TextInput
                multiline
                style={s.notesInput}
                value={values.notes}
                onChangeText={handleChange('notes')}
              />

              {values.sessionMode === SessionMode.CLIENT_BASED && (
                <>
                  <Text style={s.label}>Add your Clients</Text>
                  <MultiSelectDropdown
                    label=""
                    placeholder="Select clients"
                    items={clientItems}
                    value={values.clients}
                    onChange={val => setFieldValue('clients', val)}
                  />
                </>
              )}

              <Text style={s.label}>Upload Picture</Text>
              <TouchableOpacity style={s.uploadBox} onPress={pickImage}>
                {imageUri ? (
                  <Image
                    source={{ uri: imageUri }}
                    style={{ width: '100%', height: '100%' }}
                  />
                ) : (
                  <Ionicons name="cloud-upload-outline" size={wp(8)} />
                )}
              </TouchableOpacity>

              <Text style={s.label}>Price</Text>
              <TextInput
                style={s.input}
                editable={!values.isFree}
                keyboardType="numeric"
                value={values.price}
                onChangeText={handleChange('price')}
              />

              <TouchableOpacity
                style={s.checkboxRow}
                onPress={() => {
                  setFieldValue('isFree', !values.isFree);
                  if (!values.isFree) setFieldValue('price', '');
                }}
              >
                <View style={[s.checkbox, values.isFree && s.checkboxChecked]}>
                  {values.isFree && (
                    <Icon name="checkmark" size={16} color="#fff" />
                  )}
                </View>
                <Text style={s.checkboxText}>This is a free session</Text>
              </TouchableOpacity>

              <View style={s.footer}>
                <TouchableOpacity style={s.cancelBtn}>
                  <Text style={s.cancelText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={s.createBtn}
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                >
                  <Text style={s.createText}>
                    {isSubmitting ? 'Creating...' : 'Create Session'}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

            {showDate && (
              <DateTimePicker
                value={values.date || new Date()}
                mode="date"
                minimumDate={new Date()}
                onChange={(_, d) => {
                  setShowDate(false);
                  if (d) setFieldValue('date', d);
                }}
              />
            )}

            {showTime && (
              <DateTimePicker
                value={values.time || new Date()}
                mode="time"
                onChange={(_, t) => {
                  setShowTime(false);
                  if (t) setFieldValue('time', t);
                }}
              />
            )}
          </>
        )}
      </Formik>
    </ImageBackground>
  );
};

export default CreateSessionScreen;
