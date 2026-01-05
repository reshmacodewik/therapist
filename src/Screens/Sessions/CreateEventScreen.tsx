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
import { useNavigation } from '@react-navigation/native';
import styles from '../../../style/createEventStyles';
import { apiPost, apiPostWithMultiForm } from '../../utils/api/common';
import { API_CREATE_EVENT } from '../../utils/api/APIConstant';
import ShowToast from '../../utils/ShowToast';
import { launchImageLibrary } from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
const CreateEventScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [includedItems, setIncludedItems] = useState<string[]>([]);
  const [terms, setTerms] = useState('');
  const [price, setPrice] = useState('');
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([
    { question: '', answer: '' },
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const [image, setImage] = useState<any>(null);

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
      },
      response => {
        if (response.didCancel) return;
        if (response.errorCode) return;

        const asset = response.assets?.[0];
        if (asset) {
          setImage({
            uri: asset.uri,
            fileName: asset.fileName ?? `profile-${Date.now()}.jpg`,
            type: asset.type || 'image/jpeg',
          });
        }
      },
    );
  };
  const handleFreeToggle = () => {
    setIsFree(prev => {
      const next = !prev;

      if (next) {
        setPrice('');
      }

      return next;
    });
  };

  const onDateChange = (_: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (!selectedDate) return;
    const yyyy = selectedDate.getFullYear();
    const mm = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const dd = String(selectedDate.getDate()).padStart(2, '0');

    setDate(`${yyyy}-${mm}-${dd}`);
  };

  const onTimeChange = (_: any, selectedTime?: Date) => {
    setShowTimePicker(false);
    if (!selectedTime) return;
    const h = selectedTime.getHours().toString().padStart(2, '0');
    const m = selectedTime.getMinutes().toString().padStart(2, '0');
    setTime(`${h}:${m}`); // HH:mm
  };

  const updateFaq = (
    index: number,
    key: 'question' | 'answer',
    value: string,
  ) => {
    setFaqs(prev =>
      prev.map((f, i) => (i === index ? { ...f, [key]: value } : f)),
    );
  };

  const addFaq = () => setFaqs(prev => [...prev, { question: '', answer: '' }]);

 const handlecreateEvent = async () => {
    try {
      if (!name.trim()) return ShowToast('Event name is required', 'error');
      if (!date || !time) return ShowToast('Please select date and time', 'error');
      if (!isFree && !price) return ShowToast('Please enter price', 'error');

      setIsLoading(true);

      const formData = new FormData();
      formData.append('name', name.trim());
      formData.append('date', date);
      formData.append('time', time);
      formData.append('description', description || '');
      formData.append('terms', terms || '');
      formData.append('is_free', String(isFree));
      formData.append('price', isFree ? '0' : String(price));

      // ✅ Append includedItems properly as array
      includedItems.forEach(item => formData.append('includedItems[]', item));

      // ✅ Append FAQs properly
      faqs
        .filter(f => f.question.trim() || f.answer.trim())
        .forEach(f => {
          formData.append('faqs[][question]', f.question);
          formData.append('faqs[][answer]', f.answer);
        });

      // File
      if (image?.uri) {
        formData.append('file', {
          uri: image.uri,
          name: image.fileName ?? `event-${Date.now()}.jpg`,
          type: image.type ?? 'image/jpeg',
        } as any);
      }

      const res = await apiPostWithMultiForm({
        url: API_CREATE_EVENT,
        values: formData,
      });

      if (res?.success) {
        ShowToast(res?.message || 'Event created successfully', 'success');
        navigation.goBack();
      } else {
        console.log(res?.message || 'Error creating event', 'error');
        ShowToast(res?.message || 'Error creating event', 'error');
      }
    } catch (err) {
      ShowToast('Something went wrong', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={s.bg}
    >
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

        {/* Event Name */}
        <Text style={s.label}>Name of the Event</Text>
        <TextInput
          placeholder="Enter event name"
          style={s.input}
          value={name}
          onChangeText={setName}
        />

        {/* Date & Time */}
        <View style={s.row}>
          <View style={s.half}>
            <Text style={s.label}>Date</Text>
            <TouchableOpacity
              style={s.iconInput}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={date ? s.valueText : s.placeholder}>
                {date || 'Select Date'}
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
              <Text style={time ? s.valueText : s.placeholder}>
                {time || 'Select Time'}
              </Text>
              <MaterialIcons name="access-time" size={wp(5)} />
            </TouchableOpacity>
          </View>
        </View>

        {/* About Event */}
        <Text style={s.label}>About Event</Text>
        <TextInput
          placeholder="Enter event description"
          multiline
          style={s.textArea}
          value={description}
          onChangeText={setDescription}
        />

        {/* Host Speaker */}
        <Text style={s.label}>Host Speaker</Text>
        <View style={s.speakerBox}>
          <Image
            source={require('../../../assets/Image/maskuser.png')}
            style={s.speakerImg}
          />
          <Text style={s.speakerName}>Stacy</Text>
        </View>

        {/* Included */}
        <Text style={s.label}>What will be Included ?</Text>
        <TextInput
          value={includedItems.join(', ')} // display array as comma string
          onChangeText={text =>
            setIncludedItems(
              text
                .split(',')
                .map(i => i.trim())
                .filter(i => i),
            )
          }
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
        {faqs.map((item, i) => (
          <View key={i} style={s.faqBox}>
            <TextInput
              placeholder="Question"
              style={s.faqInput}
              value={item.question}
              onChangeText={t => updateFaq(i, 'question', t)}
            />
            <View style={s.divider} />
            <TextInput
              placeholder="Answer"
              style={s.faqInput}
              value={item.answer}
              onChangeText={t => updateFaq(i, 'answer', t)}
            />
          </View>
        ))}

        <TouchableOpacity style={s.addMore} onPress={addFaq}>
          <Ionicons name="add-circle" size={wp(5)} />
          <Text style={s.addMoreText}>Add More</Text>
        </TouchableOpacity>

        {/* Terms */}
        <Text style={s.label}>
          Please Specify if any terms & Condition apply to this event ?
        </Text>
        <TextInput
          placeholder="Enter terms & conditions"
          multiline
          style={s.textArea}
          value={terms}
          onChangeText={setTerms}
        />

        {/* Price */}
        <Text style={s.label}>Price</Text>
        <TextInput
          placeholder="Enter price"
          editable={!isFree}
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
          style={[s.input, isFree && s.disabled]}
        />

        {/* Free */}
        <TouchableOpacity
          style={s.checkboxRow}
          onPress={handleFreeToggle}
          activeOpacity={0.7}
        >
          <View style={[s.checkbox, isFree && s.checkboxChecked]}>
            {isFree && <Icon name="checkmark" size={16} color="#fff" />}
          </View>

          <Text style={s.checkboxText}>This is a free session</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={s.labelnote}>
          Please note: you have to wait for the admin to grant you permission to
          host the event
        </Text>
        <View style={s.footer}>
          <TouchableOpacity style={s.cancelBtn}>
            <Text style={s.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={s.createBtn} onPress={handlecreateEvent}>
            <Text style={s.createText}>
              {isLoading ? 'Creating...' : 'Create Event'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onDateChange}
        />
      )}

      {showTimePicker && (
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

export default CreateEventScreen;
