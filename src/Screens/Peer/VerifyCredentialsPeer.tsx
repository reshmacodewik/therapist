import React, { useEffect, useState } from 'react';
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
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/types';
import { Formik } from 'formik';
import { apiPost } from '../../utils/api/common';

import ShowToast from '../../utils/ShowToast';
import { getCurrentUserInfo } from '../../libs/auth';
import { peerVerifySchema } from '../../validation/signupSchema';
import { API_VERIFY_DETAILS_PEER } from '../../utils/api/APIConstant';
import { Dropdown } from 'react-native-element-dropdown';
import AgeDropdown from '../../components/AgeDropdown';
import UniversalDropdown from '../../components/AgeDropdown';

const VerifyInfoPeer = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUserInfo();
      if (user?.name) {
        setUserName(user.name);
      }
    };
    fetchUser();
  }, []);

  const ages = Array.from({ length: 50 }, (_, i) => `${i + 18}`);

  const mentalIssues = [
    'Depression',
    'Anxiety',
    'PTSD',
    'Bipolar Disorder',
    'OCD',
    'Addiction',
    'Eating Disorders',
  ];

  const years = Array.from({ length: 20 }, (_, i) => `${i + 1}`);

  const languages = ['English', 'Hindi', 'Spanish', 'French', 'German'];

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bg}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Verify Your Credentials</Text>
        <Text style={styles.subtitle}>Fill the details below</Text>

        <Formik
          initialValues={{
            fullName: userName,
            age: '',
            mentalHealthIssue: '',
            yearsFacedProblem: '',
            recoveryJourney: '',
            yearsWorkedAsPeer: '',
            language: '',
          }}
          validationSchema={peerVerifySchema}
          onSubmit={async values => {
            const user = await getCurrentUserInfo();

            const payload = {
              userId: user?._id,
              yearsFacedProblem: values.yearsFacedProblem,
              mentalHealthIssue: values.mentalHealthIssue,
              recoveryJourney: values.recoveryJourney,
              yearsWorkedAsPeer: values.yearsWorkedAsPeer,
              languages: [values.language],
              fullName: user?.name,
              age: values.age,
            };

            console.log('Final Peer Payload → ', payload);

            const res = await apiPost({
              url: API_VERIFY_DETAILS_PEER,
              values: payload,
            });

            if (res?.success) {
              ShowToast('Details submitted successfully', 'success');
              navigation.navigate('CredentialsSuccess');
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.innerContainer}>
                {/* License Number */}
                <View>
                  <Text style={styles.verifytext}>Full Name</Text>
                  <TextInput
                    placeholder="Full Name"
                    style={styles.input}
                    value={values.fullName}
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    placeholderTextColor="#A0A0A0"
                  />

                  {touched.fullName && errors.fullName && (
                    <Text style={styles.error}>{errors.fullName}</Text>
                  )}
                </View>
                <View>
                  <Text style={styles.verifytext}>Age</Text>
                  <UniversalDropdown
                    value={values.age}
                    setValue={val => setFieldValue('age', val)}
                    data={ages.map(a => ({ label: a, value: a }))}
                  />

                  {touched.age && errors.age && (
                    <Text style={styles.error}>{errors.age}</Text>
                  )}
                </View>
                <View>
                  <Text style={styles.verifytext}>
                    Mental Health Issue You Have Faced{' '}
                  </Text>
                  <UniversalDropdown
                    value={values.mentalHealthIssue}
                    setValue={val => setFieldValue('mentalHealthIssue', val)}
                    data={mentalIssues.map(i => ({ label: i, value: i }))}
                  />

                  {touched.mentalHealthIssue && errors.mentalHealthIssue && (
                    <Text style={styles.error}>{errors.mentalHealthIssue}</Text>
                  )}
                </View>

                {/* Area of Specialization */}
                <View style={styles.section}>
                  <Text style={styles.verifytext}>
                    How many years you have faced this problem?{' '}
                  </Text>
                  <UniversalDropdown
                    value={values.yearsFacedProblem}
                    setValue={val => setFieldValue('yearsFacedProblem', val)}
                    data={years.map(y => ({ label: y, value: y }))}
                  />

                  {touched.yearsFacedProblem && errors.yearsFacedProblem && (
                    <Text style={styles.error}>{errors.yearsFacedProblem}</Text>
                  )}
                </View>

                {/* Bio */}
                <View style={styles.section}>
                  <Text style={styles.verifytext}>
                    Explain your recovery and healing journey
                  </Text>
                  <TextInput
                    placeholder="Share your experience"
                    style={[styles.input, styles.bio]}
                    placeholderTextColor="#A0A0A0"
                    multiline
                    onChangeText={handleChange('recoveryJourney')}
                    onBlur={handleBlur('recoveryJourney')}
                    value={values.recoveryJourney}
                  />
                  {touched.recoveryJourney && errors.recoveryJourney && (
                    <Text style={styles.error}>{errors.recoveryJourney}</Text>
                  )}
                </View>

                <View style={styles.section}>
                  <Text style={styles.verifytext}>
                    How many years you have worked as peer?
                  </Text>
                  {/* Languages Spoken */}
                  <UniversalDropdown
                    value={values.yearsWorkedAsPeer}
                    setValue={val => setFieldValue('yearsWorkedAsPeer', val)}
                    data={years.map(y => ({ label: y, value: y }))}
                  />
                  {touched.yearsWorkedAsPeer && errors.yearsWorkedAsPeer && (
                    <Text style={styles.error}>{errors.yearsWorkedAsPeer}</Text>
                  )}
                </View>

                <View style={styles.section}>
                  <Text style={styles.verifytext}>Languages</Text>
                  {/* Languages Spoken */}
                  <UniversalDropdown
                    value={values.language}
                    setValue={val => setFieldValue('language', val)}
                    data={languages.map(l => ({ label: l, value: l }))}
                  />
                </View>
                {touched.language && errors.language && (
                  <Text style={styles.error}>{errors.language}</Text>
                )}
              </View>

              {/* Submit Button */}
              <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ScrollView>
    </ImageBackground>
  );
};

export default VerifyInfoPeer;
