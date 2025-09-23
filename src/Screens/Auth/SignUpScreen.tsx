import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import CheckBox from '@react-native-community/checkbox';
import styles from '../../../style/signupstyles';
import { signupSchema } from '../../validation/signupSchema';
import { apiPost } from '../../utils/api/common';
import { API_REGISTER } from '../../utils/api/APIConstant';
import ShowToast from '../../utils/ShowToast';

import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useResponsive } from 'react-native-responsive-hook';
import { CountryPicker } from 'react-native-country-codes-picker';
import { useRoute, RouteProp } from '@react-navigation/native';

type SignUpRouteParams = {
  role: string;
};
const SignUpScreen = () => {
  const route =
    useRoute<RouteProp<Record<string, SignUpRouteParams>, string>>();
  const { role } = route.params || { role: '' };
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [loading, setLoading] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      nickName: '',
      email: '',
      gender: '',
      password: '',
      phoneNo: '',
      countryCode: '+254',
      countryIso2: 'KE',
      month: '',
      day: '',
      year: '',
      role: role || '',
      agree: false,
    },
    validationSchema: signupSchema,
    onSubmit: async values => {
      try {
        const dob = `${values.year}-${values.month}-${values.day}`;
        const res = await apiPost({
          url: API_REGISTER,
          values: { ...values, dob },
        });

        if (res?.success) {
          ShowToast(res?.message, 'success');
          (navigation as any).navigate('VerificationCode', {
            email: values.email,
            phoneNo: values.phoneNo,
          });
        } else {
          ShowToast(res?.error || 'Register Failed', 'error');
        }
      } catch (error: any) {
        console.log('Register error:', error);
        ShowToast(error?.error || 'Something went wrong', 'error');
      } finally {
        setLoading(false);
      }
    },
  });

  const months = Array.from({ length: 12 }, (_, i) => ({
    label: `${i + 1}`,
    value: `${i + 1}`,
  }));
  const days = Array.from({ length: 31 }, (_, i) => ({
    label: `${i + 1}`,
    value: `${i + 1}`,
  }));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => ({
    label: `${currentYear - i}`,
    value: `${currentYear - i}`,
  }));

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
          placeholder="Enter your Fullname"
          placeholderTextColor="#999"
          onChangeText={formik.handleChange('fullName')}
          onBlur={formik.handleBlur('fullName')}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <Text style={styles.errorText}>{formik.errors.fullName}</Text>
        )}
        <Text style={styles.label}>Nick Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Nickname"
          placeholderTextColor="#999"
          onChangeText={formik.handleChange('nickName')}
          onBlur={formik.handleBlur('nickName')}
          value={formik.values.nickName}
        />
        {formik.touched.nickName && formik.errors.nickName && (
          <Text style={styles.errorText}>{formik.errors.nickName}</Text>
        )}

        {/* Email */}
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <Text style={styles.errorText}>{formik.errors.email}</Text>
        )}

        {/* Date of Birth */}
        <Text style={styles.label}>Date of Birth</Text>
        <View style={styles.dateRow}>
          {/* Month */}
          <Dropdown
            style={styles.dropdown}
            data={months}
            labelField="label"
            valueField="value"
            placeholder="MM"
            value={formik.values.month}
            onChange={item => formik.setFieldValue('month', item.value)}
          />

          {/* Day */}
          <Dropdown
            style={styles.dropdown}
            data={days}
            labelField="label"
            valueField="value"
            placeholder="DD"
            value={formik.values.day}
            onChange={item => formik.setFieldValue('day', item.value)}
          />

          <Dropdown
            style={styles.dropdown}
            data={years}
            labelField="label"
            valueField="value"
            placeholder="YYYY"
            value={formik.values.year}
            onChange={item => formik.setFieldValue('year', item.value)}
          />
        </View>

        {(formik.errors.day || formik.errors.month || formik.errors.year) && (
          <Text style={styles.errorText}>
            {formik.errors.day || formik.errors.month || formik.errors.year}
          </Text>
        )}
        {/* Gender */}
        <Text style={styles.label}>Select your gender</Text>
        <View style={styles.genderPicker}>
          <Dropdown
            style={styles.genderdrop}
            data={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Other', value: 'other' },
            ]}
            labelField="label"
            valueField="value"
            placeholder="Select"
            value={formik.values.gender}
            onChange={item => formik.setFieldValue('gender', item.value)}
          />
        </View>
        {formik.touched.gender && formik.errors.gender && (
          <Text style={styles.errorText}>{formik.errors.gender}</Text>
        )}

        {/* Phone Number */}
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneRow}>
          <TouchableOpacity
            style={styles.codeBox}
            onPress={() => setShowPicker(true)}
          >
            <Text>{formik.values.countryCode}</Text>
            <Ionicons
              name="chevron-down"
              size={16}
              color="#555"
              style={{ marginLeft: 12 }}
            />
          </TouchableOpacity>

          <TextInput
            style={styles.phoneInput}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            placeholderTextColor="#999"
            onChangeText={formik.handleChange('phoneNo')}
            onBlur={formik.handleBlur('phoneNo')}
            value={formik.values.phoneNo}
          />
        </View>
        {formik.touched.phoneNo && formik.errors.phoneNo && (
          <Text style={styles.errorText}>{formik.errors.phoneNo}</Text>
        )}

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          placeholderTextColor="#999"
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        )}

        {/* Terms */}
        <View style={styles.termsRow}>
          <CheckBox
            value={formik.values.agree}
            onValueChange={value => formik.setFieldValue('agree', value)}
            tintColors={{ true: '#264734', false: '#000' }}
          />
          <Text style={styles.termsText}>
            {'  '}By signing up, you agree to our{' '}
            <Text style={styles.linkText}>Terms & Conditions</Text> and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>.
          </Text>
        </View>
        {formik.touched.agree && formik.errors.agree && (
          <Text style={styles.errorText}>{formik.errors.agree}</Text>
        )}

        {/* Submit */}
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => {
            formik.handleSubmit();
          }}
          // onPress={() => handleSubmit()}
          disabled={loading}
        >
          <Text style={styles.signUpText}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Text>
        </TouchableOpacity>
        <Text
          style={[styles.signupPrompt, { fontSize: wp(3.5), marginTop: hp(2) }]}
        >
          Don’t have an account?{' '}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            Login
          </Text>
        </Text>

        <CountryPicker
          show={showPicker}
          lang="en" // ✅ Required prop
          pickerButtonOnPress={(item: { dial_code: any; code: any }) => {
            formik.setFieldValue('countryCode', item.dial_code);
            formik.setFieldValue('countryIso2', item.code);
            setShowPicker(false);
          }}
          style={{
            modal: {
              height: 400,
            },
            countryButtonStyles: {
              paddingVertical: 12,
            },
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default SignUpScreen;
