import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styles } from '../../../style/profileEditStyles';
import Header from '../../components/Header';
import { Picker } from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useQuery } from '@tanstack/react-query';
import { apiPost, getApiWithOutQuery } from '../../utils/api/common';
import { API_PROFILE_LIST, API_UPDATE_PROFILE } from '../../utils/api/APIConstant';
import ShowToast from '../../utils/ShowToast';

const ProfileEditScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cc, setCc] = useState('+91');
  const [phone, setPhone] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const handleBackPress = () => {
    navigation.goBack();
  };
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ['profile-info'], // pass id as dependency
    queryFn: () => getApiWithOutQuery({ url: API_PROFILE_LIST }),
  });

  useEffect(() => {
    if (data?.data) {
      const profile = data.data;
      console.log(profile);
      setName(profile.fullName || '');
      setEmail(profile.email || '');
      setPhone(profile.phoneNo || '');
      setCc(profile.countryCode || '+91');
    }
  }, [data]);
  const formatDob = () => {
  if (!year || !month || !day) return null;

  const mm = month.toString().padStart(2, '0');
  const dd = day.toString().padStart(2, '0');

  return `${year}-${mm}-${dd}`;
};

  const handleUpdateProfile = async () => {
    const dob = formatDob();

    const payload = {
      fullname: name,
      email: email,
      phoneNo: phone,
      dob: dob, 
    };

    const res = await apiPost({
      url: API_UPDATE_PROFILE,
      values: payload,
    });

    if (res?.success) {
      ShowToast('Profile updated successfully', res?.message || '');
      navigation.goBack();
    }
  };
  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bgimg}
    >
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }
        >
          <View style={styles.header}>
            <TouchableOpacity
              onPress={handleBackPress}
              style={styles.backButton}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={wp(8.5)}
                color="#000"
              />
            </TouchableOpacity>

            <Text style={styles.headerTitle} numberOfLines={1}>
              My Profile
            </Text>

            {/* right spacer for symmetry */}
            <View style={{ width: wp(10) }} />
          </View>

          <View style={styles.avatarWrap}>
            <Image
              source={require('../../../assets/Image/Mask_grp.png')}
              style={styles.avatar}
              resizeMode="cover"
            />
            <Pressable style={styles.camBtn}>
              <Icon name="camera" size={wp(5)} color="#0B2F23" />
            </Pressable>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputWrap}>
              <TextInput
                placeholder="Enter Name"
                placeholderTextColor="#9CA3AF"
                value={name}
                onChangeText={setName}
                style={styles.input}
              />
            </View>

            <Text style={[styles.label, { marginTop: 18 }]}>Email Address</Text>
            <View style={styles.inputWrap}>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.input}
              />
            </View>

            <Text style={styles.label}>Date of birth</Text>
            <View style={styles.dateRow}>
              <View style={styles.datePickerMonth}>
                <Picker
                  selectedValue={month}
                  onValueChange={value => setMonth(value)}
                >
                  <Picker.Item label="MM" value="" />
                  {[...Array(12)].map((_, i) => (
                    <Picker.Item
                      key={i}
                      label={`${i + 1}`}
                      value={`${i + 1}`}
                    />
                  ))}
                </Picker>
              </View>

              <View style={styles.datePickerDay}>
                <Picker
                  selectedValue={day}
                  onValueChange={value => setDay(value)}
                >
                  <Picker.Item label="DD" value="" />
                  {[...Array(31)].map((_, i) => (
                    <Picker.Item
                      key={i}
                      label={`${i + 1}`}
                      value={`${i + 1}`}
                    />
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
                    return (
                      <Picker.Item key={i} label={`${y}`} value={`${y}`} />
                    );
                  })}
                </Picker>
              </View>
            </View>
            <Text style={styles.labelph}>Phone Number</Text>
            <View style={styles.phoneRow}>
              <View style={styles.codeBox}>
                <Text>{cc}</Text>
              </View>
              <TextInput
                style={styles.phoneInput}
                placeholder="5265 3625 231"
                keyboardType="phone-pad"
                placeholderTextColor="#999"
                value={phone}
                onChangeText={setPhone}
              />
            </View>
          </View>

          <Pressable style={styles.cta} onPress={handleUpdateProfile}>
            <Text style={styles.ctaText}>Edit</Text>
          </Pressable>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default ProfileEditScreen;
