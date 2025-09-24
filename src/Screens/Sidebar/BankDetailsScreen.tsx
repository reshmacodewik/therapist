import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import changePasswordStyles from './Settings/changePasswordStyles';
import { useFormik } from 'formik';
import { useResponsive } from 'react-native-responsive-hook';

const BankDetailsScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const themedStyles = changePasswordStyles(wp, hp);

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  //   const formik = useFormik({
  //     initialValues: {
  //       currentPassword: '',
  //       newPassword: '',
  //       confirmPassword: '',
  //     },
  //     validationSchema: changepasswordSchema,
  //     onSubmit: async values => {
  //       try {
  //         const payload = {
  //           currentPassword: values.currentPassword,
  //           password: values.newPassword,
  //         };

  //         const res = await apiPost({ url: API_CHANGE_PASSWORD, values: payload });

  //         if (res?.success) {
  //           ShowToast(res?.message, 'success');
  //           navigation.navigate('LoginScreen' as never);
  //         } else {
  //           ShowToast(res?.message || 'Change Password Failed', 'error');
  //         }
  //       } catch (e: any) {
  //         ShowToast(e?.message || 'Something went wrong', 'error');
  //       }
  //     },
  //   });

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={themedStyles.bgimg}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={hp(2)}
      >
        <ScrollView
          contentContainerStyle={themedStyles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={themedStyles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={wp(8)}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={themedStyles.headerText}>Bank Details</Text>
          </View>

          {/* Illustration */}

          {/* Current Password */}
          <View style={themedStyles.formGroup}>
            <Text style={themedStyles.label}>Account Number</Text>
            <View style={themedStyles.inputRow}>
              <TextInput
                style={themedStyles.input}
                placeholder="Enter account number"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showOld}
                // value={formik.values.currentPassword}
                // onChangeText={formik.handleChange('currentPassword')}
                // onBlur={formik.handleBlur('currentPassword')}
              />
            </View>
            {/* {formik.touched.currentPassword && formik.errors.currentPassword && (
              <Text style={themedStyles.errorText}>{formik.errors.currentPassword}</Text>
            )} */}
          </View>

          {/* New Password */}
          <View style={themedStyles.formGroup}>
            <Text style={themedStyles.label}>Confirm Account Number</Text>
            <View style={themedStyles.inputRow}>
              <TextInput
                style={themedStyles.input}
                placeholder="Enter confirm account number"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showNew}
                // value={formik.values.newPassword}
                // onChangeText={formik.handleChange('newPassword')}
                // onBlur={formik.handleBlur('newPassword')}
              />
            </View>
            {/* {formik.touched.newPassword && formik.errors.newPassword && (
              <Text style={themedStyles.errorText}>{formik.errors.newPassword}</Text>
            )} */}
          </View>

          {/* Confirm Password */}
          <View style={themedStyles.formGroup}>
            <Text style={themedStyles.label}>Account Holder Name</Text>
            <View style={themedStyles.inputRow}>
              <TextInput
                style={themedStyles.input}
                placeholder=" Enter account holder name"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showConfirm}
                // value={formik.values.confirmPassword}
                // onChangeText={formik.handleChange('confirmPassword')}
                // onBlur={formik.handleBlur('confirmPassword')}
              />
            </View>
            {/* {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <Text style={themedStyles.errorText}>{formik.errors.confirmPassword}</Text>
            )} */}
          </View>
          <View style={themedStyles.formGroup}>
            <Text style={themedStyles.label}>IAFC Code</Text>
            <View style={themedStyles.inputRow}>
              <TextInput
                style={themedStyles.input}
                placeholder=" Enter IAFC Code"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showConfirm}
                // value={formik.values.confirmPassword}
                // onChangeText={formik.handleChange('confirmPassword')}
                // onBlur={formik.handleBlur('confirmPassword')}
              />
            </View>
            {/* {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <Text style={themedStyles.errorText}>{formik.errors.confirmPassword}</Text>
            )} */}
          </View>

           <View style={themedStyles.formGroup}>
            <Text style={themedStyles.label}>Bank Name</Text>
            <View style={themedStyles.inputRow}>
              <TextInput
                style={themedStyles.input}
                placeholder=" Enter bank name"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showConfirm}
                // value={formik.values.confirmPassword}
                // onChangeText={formik.handleChange('confirmPassword')}
                // onBlur={formik.handleBlur('confirmPassword')}
              />
            </View>
            {/* {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <Text style={themedStyles.errorText}>{formik.errors.confirmPassword}</Text>
            )} */}
          </View>
          {/* Submit Button */}
          <TouchableOpacity style={themedStyles.submitBtn}>
            <Text style={themedStyles.submitText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default BankDetailsScreen;
