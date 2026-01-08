import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';

import { styles } from '../../../style/VerifyCredentialstyles';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/types';
import { Formik } from 'formik';
import { verifyCredentialsSchema } from '../../validation/signupSchema';
import { apiPost, apiPostWithMultiForm } from '../../utils/api/common';
import { API_VERIFY_DETAILS } from '../../utils/api/APIConstant';
import ShowToast from '../../utils/ShowToast';
import { getCurrentUserInfo } from '../../libs/auth';
import { launchImageLibrary } from 'react-native-image-picker';
import Ionicons from '@react-native-vector-icons/ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const VerifyCredentials = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'VerifyCredentials'>
    >();
  const [year, setYear] = useState('');
  const [Specialization, setSpecialization] = useState('');
  const [Language, setLanguage] = useState('');
  const [documents, setDocuments] = useState<any[]>([]);
  const pickDocument = () => {
    launchImageLibrary(
      {
        mediaType: 'mixed',
        selectionLimit: 1,
        includeBase64: false,
      },
      response => {
        if (response.didCancel || response.errorCode) return;

        const file = response.assets?.[0];
        if (!file) return;

        const fixedFile = {
          ...file,
          uri: file.uri?.startsWith('content://')
            ? file.uri.replace('content://', 'file://')
            : file.uri,
        };

        setDocuments(prev => [...prev, fixedFile]);
      },
    );
  }; // ✅ ONLY this brace

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
        <Formik
          initialValues={{
            licenseNumber: '',
            year: '',
            specialization: [] as string[],
            language: '',
            bio: '',
          }}
          validationSchema={verifyCredentialsSchema}
          onSubmit={async values => {
            const user = await getCurrentUserInfo();

            const formData = new FormData();

            // text fields
            formData.append('userId', user?._id);
            formData.append('licenseNumber', values.licenseNumber);
            formData.append('yearsOfExperience', values.year);
            formData.append('areaOfSpecialization', values.specialization);
            formData.append('bio', values.bio);

            // array field
            formData.append('languages[]', values.language);

            // files
            documents.forEach((doc, index) => {
              formData.append('files', {
                uri: doc.uri,
                name: doc.fileName || `document-${index}.jpg`,
                type: doc.type || 'application/octet-stream',
              } as any);
            });

            console.log('Submitting formData with files:', documents.length);

            const res = await apiPostWithMultiForm({
              url: API_VERIFY_DETAILS,
              values: formData,
            });

            if (res?.success) {
              ShowToast(
                res.message || 'Details submitted successfully',
                'success',
              );
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
              {/* INNER FORM FIELDS */}
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
                    onChangeText={handleChange('licenseNumber')}
                    onBlur={handleBlur('licenseNumber')}
                    value={values.licenseNumber}
                  />
                  {touched.licenseNumber && errors.licenseNumber && (
                    <Text style={styles.error}>{errors.licenseNumber}</Text>
                  )}
                </View>

                {/* Years of Experience */}
                <View>
                  <Text style={styles.verifytext}>Years of Experience</Text>
                  <View style={styles.dateRow}>
                    <View style={styles.datePicker}>
                      <Picker
                        selectedValue={values.year}
                        onValueChange={value => setFieldValue('year', value)}
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
                  {touched.year && errors.year && (
                    <Text style={styles.error}>{errors.year}</Text>
                  )}
                </View>

                {/* Specialization */}
                <View style={styles.section}>
                  <Text style={styles.verifytext}>Area of Specialization</Text>
                  <View style={styles.dateRow}>
                    <View style={styles.datePicker}>
                      <Picker
                        selectedValue={values.specialization}
                        onValueChange={value =>
                          setFieldValue('specialization', value)
                        }
                      >
                        <Picker.Item label="Select" value="" />
                        {specializations.map((item, index) => (
                          <Picker.Item key={index} label={item} value={item} />
                        ))}
                      </Picker>
                    </View>
                  </View>
                  {touched.specialization && errors.specialization && (
                    <Text style={styles.error}>{errors.specialization}</Text>
                  )}
                </View>

                {/* Languages */}
                <View style={styles.section}>
                  <Text style={styles.verifytext}>Languages Spoken</Text>
                  <View style={styles.dateRow}>
                    <View style={styles.datePicker}>
                      <Picker
                        selectedValue={values.language}
                        onValueChange={value =>
                          setFieldValue('language', value)
                        }
                      >
                        <Picker.Item label="Select" value="" />
                        {languages.map((item, index) => (
                          <Picker.Item key={index} label={item} value={item} />
                        ))}
                      </Picker>
                    </View>
                  </View>
                  {touched.language && errors.language && (
                    <Text style={styles.error}>{errors.language}</Text>
                  )}
                </View>

                {/* Bio */}
                <View style={styles.section}>
                  <Text style={styles.verifytext}>Bio</Text>
                  <TextInput
                    placeholder="Briefly describe yourself"
                    style={[styles.input, styles.bio]}
                    placeholderTextColor="#A0A0A0"
                    multiline
                    onChangeText={handleChange('bio')}
                    onBlur={handleBlur('bio')}
                    value={values.bio}
                  />
                  {touched.bio && errors.bio && (
                    <Text style={styles.error}>{errors.bio}</Text>
                  )}
                </View>
                <View style={styles.uploadSection}>
                  <Text style={styles.uploadTitle}>Upload your document</Text>

                  {/* Upload Box (always visible) */}
                  <TouchableOpacity
                    style={styles.uploadBox}
                    onPress={pickDocument}
                    activeOpacity={0.8}
                  >
                    <View style={styles.uploadInner}>
                      <MaterialIcons
                        name="upload-file"
                        size={24}
                        color="#1F3D2B"
                      />
                      <Text style={styles.uploadText}>
                        Upload your Document
                      </Text>
                    </View>
                  </TouchableOpacity>

                  {/* Uploaded Files List */}
                  {documents.map((doc, index) => {
                    const isImage = doc.type?.startsWith('image/');

                    return (
                      <View key={index} style={styles.uploadedContainer}>
                        {isImage ? (
                          <Image
                            source={{ uri: doc.uri }}
                            style={styles.previewImage}
                            resizeMode="cover"
                          />
                        ) : (
                          <MaterialIcons
                            name="picture-as-pdf"
                            size={28}
                            color="#FFFFFF"
                          />
                        )}

                        <Text style={styles.fileName} numberOfLines={1}>
                          {doc.fileName}
                        </Text>

                        <TouchableOpacity
                          onPress={() =>
                            setDocuments(prev =>
                              prev.filter((_, i) => i !== index),
                            )
                          }
                        >
                          <MaterialIcons
                            name="delete-outline"
                            size={22}
                            color="#FFFFFF"
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              </View>

              {/* SUBMIT BUTTON OUTSIDE INNER FORM VIEW */}
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>

        {/* Submit */}
      </ScrollView>
    </ImageBackground>
  );
};

export default VerifyCredentials;
