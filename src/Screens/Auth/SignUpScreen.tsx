import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import styles from '../../../style/signupstyles';
import CheckBox from '@react-native-community/checkbox';
const SignUpScreen = () => {
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(false);
  const [gender, setGender] = useState('');
  const [agree, setAgree] = useState(false);
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bgimg}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Sign up</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Date of birth</Text>
        <View style={styles.dateRow}>
          <View style={styles.datePicker}>
            <Picker
              selectedValue={month}
              onValueChange={value => setMonth(value)}
            >
              <Picker.Item label="MM" value="" />
              {[...Array(12)].map((_, i) => (
                <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
              ))}
            </Picker>
          </View>

          <View style={styles.datePicker}>
            <Picker selectedValue={day} onValueChange={value => setDay(value)}>
              <Picker.Item label="DD" value="" />
              {[...Array(31)].map((_, i) => (
                <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
              ))}
            </Picker>
          </View>

          <View style={styles.datePicker}>
            <Picker
              selectedValue={year}
              onValueChange={value => setYear(value)}
            >
              <Picker.Item label="YYYY" value="" />
              {[...Array(50)].map((_, i) => {
                const y = 2025 - i;
                return <Picker.Item key={i} label={`${y}`} value={`${y}`} />;
              })}
            </Picker>
          </View>
        </View>

        <Text style={styles.label}>Select your gender</Text>
        <View style={styles.genderPicker}>
          <Picker
            selectedValue={gender}
            onValueChange={value => setGender(value)}
          >
            <Picker.Item label="Select" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneRow}>
          <View style={styles.codeBox}>
            <Text>+91</Text>
          </View>
          <TextInput
            style={styles.phoneInput}
            placeholder="5265 3625 231"
            keyboardType="phone-pad"
            placeholderTextColor="#999"
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          placeholderTextColor="#999"
        />

        <View style={styles.termsRow}>
          <TouchableOpacity onPress={() => setAgree(!agree)}>
            <CheckBox
              value={rememberMe}
              onValueChange={setRememberMe}
              tintColors={{ true: '#5DFFCD', false: '#000' }}
            />
          </TouchableOpacity>
          <Text style={styles.termsText}>
            {'  '}By signing up, you agree to our{' '}
            <Text style={styles.linkText}>Terms & Conditions</Text> and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>.
          </Text>
        </View>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>

        {/* <Text style={styles.loginPrompt}>
          Already have an account?{' '}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            Log In
          </Text>
        </Text> */}
      </ScrollView>
    </ImageBackground>
  );
};

export default SignUpScreen;
