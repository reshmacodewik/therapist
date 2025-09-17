import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { createSessionStyles } from '../../../style/createSessionStyles';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

const CreateSessionScreen = () => {
  const navigation = useNavigation();
  const [dateTime, setDateTime] = useState('');
  const [sessionType, setSessionType] = useState('');
  const [focusAreas, setFocusAreas] = useState('');
  const [sessionNotes, setSessionNotes] = useState('');
  const [price, setPrice] = useState('');

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      dateTime,
      sessionType,
      focusAreas,
      sessionNotes,
      price,
    });
    navigation.goBack();
  };

  return (
    <ScrollView style={createSessionStyles.container}>
      <Header showBackButton={true} screenTitle="Create Session" />

      <Text style={createSessionStyles.sectionTitle}>Date & Time</Text>
      <TextInput
        style={createSessionStyles.inputContainer}
        placeholder="enter"
        placeholderTextColor="#7D7D7D"
        value={dateTime}
        onChangeText={setDateTime}
      />

      <Text style={createSessionStyles.sectionTitle}>Session Type</Text>
      <TouchableOpacity style={createSessionStyles.dropdownContainer}>
        <View style={createSessionStyles.dropdown}>
          <Text style={createSessionStyles.dropdownText}>
            {sessionType || 'Select'}
          </Text>
          <Image
            source={require('../../../assets/icon/arrow.png')}
            style={[
              createSessionStyles.dropdownIcon,
              { transform: [{ rotate: '90deg' }] },
            ]}
          />
        </View>
      </TouchableOpacity>

      <Text style={createSessionStyles.sectionTitle}>Focus Areas</Text>
      <TextInput
        style={createSessionStyles.inputContainer}
        placeholder="enter"
        placeholderTextColor="#7D7D7D"
        value={focusAreas}
        onChangeText={setFocusAreas}
      />

      <Text style={createSessionStyles.sectionTitle}>Session Notes</Text>
      <TextInput
        style={createSessionStyles.notesInput}
        placeholder="enter"
        placeholderTextColor="#7D7D7D"
        multiline
        value={sessionNotes}
        onChangeText={setSessionNotes}
      />

      <Text style={createSessionStyles.sectionTitle}>Price</Text>
      <TextInput
        style={createSessionStyles.inputContainer}
        placeholder="enter"
        placeholderTextColor="#7D7D7D"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <View style={createSessionStyles.buttonContainer}>
        <TouchableOpacity
          style={createSessionStyles.cancelButton}
          onPress={handleCancel}
        >
          <Text style={createSessionStyles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={createSessionStyles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={createSessionStyles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateSessionScreen;