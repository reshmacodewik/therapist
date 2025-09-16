import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { createSessionStyles } from '../../../style/createSessionStyles';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useResponsive } from 'react-native-responsive-hook';
import { Dropdown } from "react-native-element-dropdown";
const sessionTypeOptions = [
  { label: "Online", value: "online" },
  { label: "Offline", value: "offline" },
  { label: "Hybrid", value: "hybrid" },
];
const CreateSessionScreen = () => {
  
  const { wp, hp } = useResponsive();
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
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={createSessionStyles.bgimg}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <ScrollView style={createSessionStyles.container}>
        <View style={createSessionStyles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={createSessionStyles.backButton}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8.5)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={createSessionStyles.headerTitle}>Create Steps</Text>
        </View>

        <Text style={createSessionStyles.sectionTitle}>Date & Time</Text>
        <TextInput
          style={createSessionStyles.inputContainer}
          placeholder="enter"
          placeholderTextColor="#7D7D7D"
          value={dateTime}
          onChangeText={setDateTime}
        />

        <Text style={createSessionStyles.sectionTitle}>Session Type</Text>
        <Dropdown
          style={createSessionStyles.dropdown}
          placeholderStyle={createSessionStyles.placeholderStyle}
          selectedTextStyle={createSessionStyles.selectedTextStyle}
          inputSearchStyle={createSessionStyles.inputSearchStyle}
          iconStyle={createSessionStyles.iconStyle}
          data={sessionTypeOptions}
          labelField="label"
          valueField="value"
          placeholder="Select"
          value={sessionType}
          onChange={item => {
            setSessionType(item.value);
          }}
        />

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
    </ImageBackground>
  );
};

export default CreateSessionScreen;
