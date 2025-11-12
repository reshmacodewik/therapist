import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  Image,
  BackHandler,
} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useFormik } from 'formik';
import { apiPost } from '../../utils/api/common';
import { API_VERIFY_OTP, API_VERIFY_RESEND } from '../../utils/api/APIConstant';
import ShowToast from '../../utils/ShowToast';
import { otpSchema } from '../../validation/signupSchema';
import type { TextInput as RNTextInput } from 'react-native';
import styles from '../../../style/otpstyles';

const OTP_LENGTH = 4;
const RESEND_COOL_DOWN_SECONDS = 30;

const VerificationCode = () => {
  const navigation = useNavigation<any>();

  const inputs = useRef<Array<RNTextInput | null>>([]);
  const route = useRoute<any>();
  const { email, phoneNo, role } = route.params || {};
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [otpArray, setOtpArray] = useState(['', '', '', '']);
  const [resendCoolDown, setResendCoolDown] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setInputRef = useCallback((idx: number) => {
    return (el: RNTextInput | null): void => {
      inputs.current[idx] = el;
    };
  }, []);

  const formik = useFormik({
    initialValues: { otp: '' },
    validationSchema: otpSchema,
    onSubmit: async values => {
      try {
        Keyboard.dismiss();
        const payload = {
          email,
          phoneNo,
          otp: Number(values.otp),
        };
        console.log('payload=============', payload);
        const res = await apiPost({
          url: API_VERIFY_OTP,
          values: payload,
        });
        console.log('res=================dddd======', res);
        if (res?.success) {
          ShowToast(res?.message, 'success');
          if (res?.success) {
            ShowToast(res?.message, 'success');
            navigation.navigate('SuccessScreen', { role });
          }
        } else {
          ShowToast(res?.message || 'OTP verification failed', 'error');
        }
      } catch (error: any) {
        console.log('OTP Verify error:', error);
        ShowToast('Error', error?.message || 'Something went wrong');
      }
    },
  });

  const handleChange = (text: string, index: number) => {
    const digit = text.replace(/\D/g, '').slice(0, 1);
    const newOtp = [...otpArray];
    newOtp[index] = digit;
    setOtpArray(newOtp);
    formik.setFieldValue('otp', newOtp.join('').slice(0, 4));
    if (digit && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleResendOTP = async () => {
    try {
      console.log(email, 'email-----------', phoneNo);
      if (!email || !phoneNo) {
        ShowToast('Please provide email or phone to resend.');
        return;
      }

      Keyboard.dismiss();
      const payload = {
        email,
        phoneNo,
      };

      const res = await apiPost({
        url: API_VERIFY_RESEND,
        values: payload,
      });

      console.log(res, 'res-------dddsaaa---------------');

      if (res?.success) {
        ShowToast(res?.message, 'success');
        setResendCoolDown(RESEND_COOL_DOWN_SECONDS);
      } else {
        ShowToast(res?.message || 'OTP verification failed', 'error');
      }
    } catch (error: any) {
      console.log('OTP Verify error:', error);
      ShowToast('Error', error?.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    if (resendCoolDown <= 0) return;
    const id = setInterval(() => {
      setResendCoolDown(prev => {
        if (prev <= 1) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [resendCoolDown]);

  const confirmDisabled =
    isSubmitting ||
    (formik.values.otp?.replace(/\D/g, '').length ?? 0) !== OTP_LENGTH;

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bg}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../assets/icon/arrow.png')}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.heading}>Verification Code</Text>
        <Text style={styles.subtext}>
          We have sent the verification code to your phone number
        </Text>

        <View style={styles.otpRow}>
          {[0, 1, 2, 3].map((_, index) => (
            <TextInput
              key={index}
              ref={setInputRef(index)}
              value={otpArray[index] ? otpArray[index][0] : ''}
              onChangeText={text => handleChange(text, index)}
              style={[
                styles.otpBox,
                activeIndex === index && styles.activeOtpBox,
              ]}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
              maxLength={1}
              keyboardType="number-pad"
              autoFocus={index === 0}
            />
          ))}
        </View>
        {formik.errors.otp && (
          <Text style={styles.errorText}>{formik.errors.otp}</Text>
        )}

        <View style={styles.resendRow}>
          <Text style={styles.grayText}>Didn’t get code?</Text>
          <TouchableOpacity
            onPress={handleResendOTP}
            disabled={resendCoolDown > 0 || isSubmitting}
          >
            <Text style={styles.resendText}>
              {resendCoolDown > 0
                ? ` Resend in ${resendCoolDown}s`
                : ' Resend OTP'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            formik.handleSubmit();
          }}
          disabled={confirmDisabled}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default VerificationCode;
