import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

 // Importing the styles from the separate file
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { useResponsive } from 'react-native-responsive-hook';
import { styles } from '../../../style/CreatepeergroupStyles';
import PeerHeader from '../../components/PeerHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CreatePeerGroupScreen = () => {
  const [groupName, setGroupName] = useState('');
  const [groupBio, setGroupBio] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [groupType, setGroupType] = useState('');
  const [groupIcon, setGroupIcon] = useState(null);
  const navigation = useNavigation();
  const [year, setYear] = useState('');
  const [Specialization, setSpecialization] = useState('');
  const [Language, setLanguage] = useState('');
  const [Age, setAge] = useState('');

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
  const age = [
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
  ];
//   const handleFileUpload = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.images],
//       });
//       setGroupIcon(res);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log('User canceled the picker');
//       } else {
//         console.log(err);
//       }
//     }
//   };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')} // Your background image here
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
         <PeerHeader
          onBellPress={() => console.log('Bell pressed')}
          // onProfilePress={() => console.log('Profile pressed')}
        />
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Requests & Approval</Text>
        </View>
        <View style={styles.innerContainer}>
          {/* License Number */}
          <View>
            <Text style={styles.verifytext}>Full Name</Text>
            <TextInput
              placeholder="abc"
              style={styles.input}
              placeholderTextColor="#A0A0A0"
            />
          </View>
          <View>
            <Text style={styles.verifytext}>Age</Text>
            <View style={styles.dateRow}>
              <View style={styles.datePicker}>
                <Picker
                  selectedValue={Age}
                  onValueChange={value => setAge(value)}
                >
                  <Picker.Item label="Select" value="" />
                  {age.map((item, index) => (
                    <Picker.Item key={index} label={item} value={item} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.verifytext}>
              Mental Health Issue You Have Faced{' '}
            </Text>
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
            <Text style={styles.verifytext}>
              How many years you have faced this problem?{' '}
            </Text>
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

          {/* Bio */}
          <View style={styles.section}>
            <Text style={styles.verifytext}>
              Explain your recovery and healing journey
            </Text>
            <TextInput
              placeholder="abcf"
              style={[styles.input, styles.bio]}
              placeholderTextColor="#A0A0A0"
              multiline
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.verifytext}>
              How many years you have worked as peer?
            </Text>
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

          <View style={styles.section}>
            <Text style={styles.verifytext}>Languages</Text>
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
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default CreatePeerGroupScreen;
