import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useResponsive } from 'react-native-responsive-hook';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { apiPost } from '../../utils/api/common';
import { API_LOGIN } from '../../utils/api/APIConstant';
import { useFormik } from 'formik';
import { loginSchema } from '../../validation/signupSchema';
import { useAuth } from './AuthContext';
import styles from '../../../style/loginstyles';
import ShowToast from '../../utils/ShowToast';

const LoginScreen: React.FC = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [secure, setSecure] = useState(true);
  const { signIn } = useAuth();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: async values => {
      try {
        const res = await apiPost({ url: API_LOGIN, values });
        if (res?.success && res?.data?.token) {
          const session = {
            accessToken: res.data.token,
            refreshToken: res.data?.refreshToken,
            user: res.data?.user,
          };

          signIn(session);
          console.log('Saved session:', session);
          ShowToast(res?.message, 'success');
          navigation.navigate('HomeScreen' as never);
        } else {
          ShowToast(res?.message || 'Login Failed', 'error');
        }
      } catch (e: any) {
        ShowToast(e?.message || 'Something went wrong', 'error');
      }
    },
  });

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bgimg}
    >
      <View style={styles.container}>
        <Image
          source={require('../../../assets/Image/logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />

        <Text
          style={[
            styles.tagline,
            { fontSize: wp(3.7), marginTop: hp(2), marginBottom: hp(4) },
          ]}
        >
          Real Connection. Real Support. Real Growth.
        </Text>

        <Text style={styles.label}>E-mail </Text>
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

        <Text style={[styles.label, { marginTop: hp(2.5) }]}>Password</Text>
        <View style={[styles.passwordContainer, { height: hp(6) }]}>
          <TextInput
            placeholder="Enter your password"
            style={[styles.passwordInput, { fontSize: wp(4) }]}
            secureTextEntry={secure}
            placeholderTextColor="#999"
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
          />

          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Ionicons
              name={secure ? 'eye-off-outline' : 'eye-outline'}
              size={wp(5)}
              color="#999"
            />
          </TouchableOpacity>
        </View>
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        )}
        <TouchableOpacity
          style={{ alignSelf: 'flex-end', marginTop: hp(1) }}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text
            style={[styles.forgot, { fontSize: wp(3.5) }]}
            onPress={() => navigation.navigate('VerificationCode')}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.loginButton,
            { height: hp(6), borderRadius: wp(10), marginTop: hp(4) },
          ]}
          onPress={() => {
            formik.handleSubmit();
          }}
        >
          <Text style={[styles.loginText, { fontSize: wp(4.5) }]}>Login</Text>
        </TouchableOpacity>

        <Text
          style={[styles.signupPrompt, { fontSize: wp(3.5), marginTop: hp(2) }]}
        >
          Don’t have an account?{' '}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate('WelcomeScreen')}
          >
            Sign Up
          </Text>
        </Text>

        {/* Divider with OR */}
        <View
          style={[styles.dividerRow, { marginVertical: hp(3), width: wp(80) }]}
        >
          <View style={styles.divider} />
          <Text style={{ marginHorizontal: wp(2), color: '#999' }}>OR</Text>
          <View style={styles.divider} />
        </View>

        {/* Social Icons */}
        <View style={[styles.socialRow, { marginTop: hp(1) }]}>
          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={require('../../../assets/icon/google.png')}
              style={styles.socialImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={require('../../../assets/icon/facebook.png')}
              style={styles.socialImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={require('../../../assets/icon/apple.png')}
              style={styles.socialImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
