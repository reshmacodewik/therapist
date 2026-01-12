import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from '../../../style/createEventStyles';
import { apiPostWithMultiForm } from '../../utils/api/common';
import { API_CREATE_EVENT } from '../../utils/api/APIConstant';
import ShowToast from '../../utils/ShowToast';

type FAQ = { question: string; answer: string };

type FormValues = {
  name: string;
  date: string;
  time: string;
  description: string;
  includedItems: string[];
  terms: string;
  price: string;
  isFree: boolean;
  faqs: FAQ[];
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Event name is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  price: Yup.string().when('isFree', {
    is: false,
    then: s => s.required('Price is required'),
  }),
});

const CreateEventScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [image, setImage] = useState<any>(null);
  const [includedText, setIncludedText] = useState('');

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.8 }, response => {
      if (response.didCancel || response.errorCode) return;
      const asset = response.assets?.[0];
      if (!asset) return;

      setImage({
        uri: asset.uri,
        fileName: asset.fileName ?? `event-${Date.now()}.jpg`,
        type: asset.type ?? 'image/jpeg',
      });
    });
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={s.bg}
    >
      <Formik<FormValues>
        initialValues={{
          name: '',
          date: '',
          time: '',
          description: '',
          includedItems: [],
          terms: '',
          price: '',
          isFree: false,
          faqs: [{ question: '', answer: '' }],
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            setSubmitting(true);

            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('date', values.date);
            formData.append('time', values.time);
            formData.append('description', values.description || '');
            formData.append('termsAndConditions', values.terms || '');
            formData.append('is_free', String(values.isFree));
            formData.append('price', values.isFree ? '0' : values.price);

            values.includedItems.forEach(i =>
              formData.append('includedItems[]', i),
            );

            const cleanedFaqs = values.faqs.filter(
              f => f.question.trim() || f.answer.trim(),
            );

            formData.append('faqs', JSON.stringify(cleanedFaqs));

            if (image?.uri) {
              formData.append('file', {
                uri: image.uri,
                name: image.fileName,
                type: image.type,
              } as any);
            }

            const res = await apiPostWithMultiForm({
              url: API_CREATE_EVENT,
              values: formData,
            });

            if (res?.success) {
              ShowToast(res.message || 'Event created', 'success');
              navigation.goBack();
            } else {
              ShowToast(res?.message || 'Error creating event', 'error');
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
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <>
            <ScrollView
              contentContainerStyle={s.container}
              showsVerticalScrollIndicator={false}
            >
              {/* Header */}
              <View style={s.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" size={wp(7)} />
                </TouchableOpacity>
                <Text style={s.headerTitle}>Create Events</Text>
              </View>

              {/* Name */}
              <Text style={s.label}>Name of the Event</Text>
              <TextInput
                style={s.input}
                value={values.name}
                onChangeText={handleChange('name')}
              />

              {/* Date & Time */}
              <View style={s.row}>
                <View style={s.half}>
                  <Text style={s.label}>Date</Text>
                  <TouchableOpacity
                    style={s.iconInput}
                    onPress={() => setShowDatePicker(true)}
                  >
                    <Text style={values.date ? s.valueText : s.placeholder}>
                      {values.date || 'Select Date'}
                    </Text>
                    <MaterialIcons name="calendar-today" size={wp(5)} />
                  </TouchableOpacity>
                </View>

                <View style={s.half}>
                  <Text style={s.label}>Time</Text>
                  <TouchableOpacity
                    style={s.iconInput}
                    onPress={() => setShowTimePicker(true)}
                  >
                    <Text style={values.time ? s.valueText : s.placeholder}>
                      {values.time || 'Select Time'}
                    </Text>
                    <MaterialIcons name="access-time" size={wp(5)} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* About */}
              <Text style={s.label}>About Event</Text>
              <TextInput
                multiline
                style={s.textArea}
                value={values.description}
                onChangeText={handleChange('description')}
              />

              {/* Included */}
              <Text style={s.label}>What will be Included ?</Text>
              <TextInput
                style={s.textArea}
                multiline
                returnKeyType="default"
                textAlignVertical="top"
                placeholder="e.g. Certificate, Handouts, Recordings"
                value={includedText}
                onChangeText={text => {
                  setIncludedText(text);
                  const items = text
                    .split('\n')
                    .map(i => i.trim())
                    .filter(Boolean);

                  setFieldValue('includedItems', items);
                }}
              />

              {/* Upload */}
              <Text style={s.label}>Upload Picture</Text>
              <TouchableOpacity style={s.uploadBox} onPress={pickImage}>
                {image ? (
                  <Image source={{ uri: image.uri }} style={s.uploadedImage} />
                ) : (
                  <Ionicons name="cloud-upload-outline" size={wp(8)} />
                )}
              </TouchableOpacity>

              {/* FAQ */}
              <Text style={s.label}>Add FAQ</Text>
              {values.faqs.map((f, i) => (
                <View key={i} style={s.faqBox}>
                  <TextInput
                    placeholder="Question"
                    style={s.faqInput}
                    value={f.question}
                    onChangeText={t => setFieldValue(`faqs[${i}].question`, t)}
                  />
                  <View style={s.divider} />
                  <TextInput
                    placeholder="Answer"
                    style={s.faqInput}
                    value={f.answer}
                    onChangeText={t => setFieldValue(`faqs[${i}].answer`, t)}
                  />
                </View>
              ))}

              <TouchableOpacity
                style={s.addMore}
                onPress={() =>
                  setFieldValue('faqs', [
                    ...values.faqs,
                    { question: '', answer: '' },
                  ])
                }
              >
                <Ionicons name="add-circle" size={wp(5)} />
                <Text style={s.addMoreText}>Add More</Text>
              </TouchableOpacity>

              {/* Terms */}
              <Text style={s.label}>Terms & Conditions</Text>
              <TextInput
                multiline
                style={s.textArea}
                value={values.terms}
                onChangeText={handleChange('terms')}
              />

              {/* Price */}
              <Text style={s.label}>Price</Text>
              <TextInput
                editable={!values.isFree}
                keyboardType="numeric"
                style={[s.input, values.isFree && s.disabled]}
                value={values.price}
                onChangeText={handleChange('price')}
              />

              {/* Free */}
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

              {/* Footer */}
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
                    {isSubmitting ? 'Creating...' : 'Create Event'}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

            {/* Pickers */}
            {showDatePicker && (
              <DateTimePicker
                value={new Date()}
                mode="date"
                minimumDate={new Date()}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(_, d) => {
                  setShowDatePicker(false);
                  if (d) setFieldValue('date', d.toISOString().split('T')[0]);
                }}
              />
            )}

            {showTimePicker && (
              <DateTimePicker
                value={new Date()}
                mode="time"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(_, d) => {
                  setShowTimePicker(false);
                  if (d) {
                    const h = d.getHours().toString().padStart(2, '0');
                    const m = d.getMinutes().toString().padStart(2, '0');
                    setFieldValue('time', `${h}:${m}`);
                  }
                }}
              />
            )}
          </>
        )}
      </Formik>
    </ImageBackground>
  );
};

export default CreateEventScreen;
