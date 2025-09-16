import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useResponsive } from '../../../components/Responsive/useResponsive';
import { styles } from '../../../style/VerifyCredentialstyles';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const VerifyCredentials = () => {
   const navigation = useNavigation();
  const { fontSize } = useResponsive();
  const [year, setYear] = useState('');
  const [Specialization, setSpecialization] = useState('');
  const [Language, setLanguage] = useState('');

  const specializations = [
    'Cardiology',
    'Dermatology',
    'Pediatrics',
    'Psychiatry',
    'Neurology',
    'Orthopedics',
    'Gynecology',
    'Oncology',
    'Radiology',
    'General Surgery',
  ];
  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Arabic',
    'Portuguese',
    'Hindi',
  ];
  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bg}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <Text style={styles.title}>Verify your Credentials</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.subtitle}>
            Fill the details below and upload your document
          </Text>

          {/* License Number */}
          <View>
            <Text style={styles.verifytext}>License Number</Text>
            <TextInput
              placeholder="3254 2356 4876"
              style={styles.input}
              placeholderTextColor="#A0A0A0"
            />
          </View>
          <View>
            <Text style={styles.verifytext}>Years of Experience</Text>
            <View style={styles.dateRow}>
              <View style={styles.datePicker}>
                <Picker
                  selectedValue={year}
                  onValueChange={value => setYear(value)}
                >
                  <Picker.Item label="Select" value="" />
                  {[...Array(12)].map((_, i) => (
                    <Picker.Item
                      key={i}
                      label={`${i + 1}`}
                      value={`${i + 1}`}
                    />
                  ))}
                </Picker>
              </View>
            </View>
          </View>

          {/* Area of Specialization */}
          <View style={styles.section}>
            <Text style={styles.verifytext}>Area of Specialization </Text>
            <View style={styles.dateRow}>
              <View style={styles.datePicker}>
                <Picker
                  selectedValue={Specialization}
                  onValueChange={value => setSpecialization(value)}
                >
                  <Picker.Item label="Select" value="" />
                  {specializations.map((item, index) => (
                    <Picker.Item key={index} label={item} value={item} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>
         <View style={styles.section}>
            <Text style={styles.verifytext}>Languages Spoken</Text>
            {/* Languages Spoken */}
            <View style={styles.dateRow}>
              <View style={styles.datePicker}>
                <Picker
                  selectedValue={Language}
                  onValueChange={value => setLanguage(value)}
                >
                  <Picker.Item label="Select" value="" />
                  {languages.map((item, index) => (
                    <Picker.Item key={index} label={item} value={item} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>

          {/* Bio */}
          <View style={styles.section}>
             <Text style={styles.verifytext}>Bio</Text>
            <TextInput
              placeholder="Briefly describe yourself"
              style={[styles.input, styles.bio]}
              placeholderTextColor="#A0A0A0"
              multiline
            />
          </View>
        </View>
        {/* Submit */}
        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('CredentailsSuccess' as never)}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default VerifyCredentials;
