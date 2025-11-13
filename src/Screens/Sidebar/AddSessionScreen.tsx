import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from '../../../style/AddSessionStyles';

const AddSessionScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [sessionType, setSessionType] = useState('');

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.background}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <MaterialIcons name="keyboard-arrow-left" size={wp(8)} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Session</Text>
        </View>

        {/* Date & Time */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date & Time</Text>
          <TextInput
            placeholder="enter"
            placeholderTextColor="#406A52"
            style={styles.input}
          />
        </View>

        {/* Session Type */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Session Type</Text>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>
              {sessionType ? sessionType : 'Select'}
            </Text>
            <MaterialIcons name="arrow-drop-down" size={wp(6)} color="#000" />
          </View>
        </View>

        {/* Focus Areas */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Focus Areas</Text>
          <TextInput
            placeholder="enter"
            placeholderTextColor="#406A52"
            style={styles.input}
          />
        </View>

        {/* Session Notes */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Session Notes</Text>
          <TextInput
            placeholder="enter"
            placeholderTextColor="#406A52"
            multiline
            style={styles.textArea}
          />
        </View>

        {/* Price */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            placeholder="enter"
            placeholderTextColor="#406A52"
            style={styles.input}
            keyboardType="numeric"
          />
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AddSessionScreen;
