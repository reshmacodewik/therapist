import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../style/otpstyles';

const VerificationCode = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']); // Example 4-digit OTP
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const inputs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bg}
    >
        <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require('../../../assets/icon/arrow.png')} // replace with your green checkmark
        style={styles.arrowIcon}
      />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.heading}>Verification Code</Text>
        <Text style={styles.subtext}>
          We have sent the verification code to your phone number
        </Text>

        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputs.current[index] = ref!)}
              value={digit}
              onChangeText={text => handleChange(text, index)}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
              style={[
                styles.otpBox,
                activeIndex === index && styles.activeOtpBox,
              ]}
              maxLength={1}
              keyboardType="number-pad"
              autoFocus={index === 0}
            />
          ))}
        </View>

        <View style={styles.resendRow}>
          <Text style={styles.grayText}>Don’t get code?</Text>
          <TouchableOpacity>
            <Text style={styles.resendText}> Resend OTP</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Keyboard.dismiss();
            navigation.navigate('SuccessScreen');
          }}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default VerificationCode;
