import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styles } from '../../../style/myExpertiseStyles';

type Updater<T> = React.Dispatch<React.SetStateAction<T>>;

const makeAdder =
  <T,>(setter: Updater<T[]>, empty: T) =>
  () =>
    setter(prev => [...prev, empty]);

const makeRemover =
  <T,>(setter: Updater<T[]>) =>
  (idx: number) =>
    setter(prev => prev.filter((_, i) => i !== idx));

const makeChanger =
  <T,>(setter: Updater<T[]>) =>
  (idx: number, value: T) =>
    setter(prev => prev.map((v, i) => (i === idx ? value : v)));

const MyExpertiseScreen = ({ navigation }: any) => {
  // Dynamic lists per section
  const [profileTags, setProfileTags] = useState<string[]>(['']);
  const [specializations, setSpecializations] = useState<string[]>(['']);
  const [concerns, setConcerns] = useState<string[]>(['']);
  const [languages, setLanguages] = useState<string[]>(['']);       // picker rows
  const [years, setYears] = useState<string[]>(['']);               // numeric rows
  const [proficiency, setProficiency] = useState<string>('');       // single picker
  const [bio, setBio] = useState('');
const makeAdder = (setter: React.Dispatch<React.SetStateAction<string[]>>) =>
  () => setter(prev => [...prev, '']);   // always add empty string

const makeRemover = (setter: React.Dispatch<React.SetStateAction<string[]>>) =>
  (idx: number) => setter(prev => prev.filter((_, i) => i !== idx));

const makeChanger = (setter: React.Dispatch<React.SetStateAction<string[]>>) =>
  (idx: number, value: string) =>
    setter(prev => prev.map((v, i) => (i === idx ? value : v)));

  // helpers
  const addTag          = makeAdder(setProfileTags);
  const removeTag       = makeRemover(setProfileTags);
  const changeTag       = makeChanger(setProfileTags);

  const addSpec         = makeAdder(setSpecializations);
  const removeSpec      = makeRemover(setSpecializations);
  const changeSpec      = makeChanger(setSpecializations);

  const addConcern      = makeAdder(setConcerns);
  const removeConcern   = makeRemover(setConcerns);
  const changeConcern   = makeChanger(setConcerns);

  const addLanguage     = makeAdder(setLanguages);
  const removeLanguage  = makeRemover(setLanguages);
  const changeLanguage  = makeChanger(setLanguages);

  const addYear         = makeAdder(setYears);
  const removeYear      = makeRemover(setYears);
  const changeYear      = makeChanger(setYears);

  const handleBackPress = () => navigation.goBack();

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
              <MaterialIcons name="keyboard-arrow-left" size={wp(8.5)} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTitle} numberOfLines={1}>My Expertise</Text>
            <View style={{ width: wp(10) }} />
          </View>

          {/* Profile Tags (dynamic inputs) */}
          <Text style={styles.label}>Profile Tags</Text>
          {profileTags.map((val, i) => (
            <View key={`tag-${i}`} style={styles.inputWrap}>
              <TextInput
                placeholder="Enter"
                placeholderTextColor="#9CA3AF"
                value={val}
                onChangeText={(t) => changeTag(i, t)}
                style={styles.input}
              />
              {profileTags.length > 1 && (
                <Pressable style={styles.removeIcon} onPress={() => removeTag(i)}>
                  <Icon name="x" size={wp(4.5)} color="#9CA3AF" />
                </Pressable>
              )}
            </View>
          ))}
          <Pressable style={styles.addRow} onPress={addTag}>
            <Icon name="plus-circle" size={wp(4.8)} color="#111827" />
            <Text style={styles.addLabel}>Add More</Text>
          </Pressable>

          {/* Area of Specialization (dynamic inputs) */}
          <Text style={[styles.label, styles.mtBlock]}>Area of Specialization</Text>
          {specializations.map((val, i) => (
            <View key={`spec-${i}`} style={styles.inputWrap}>
              <TextInput
                placeholder="Enter"
                placeholderTextColor="#9CA3AF"
                value={val}
                onChangeText={(t) => changeSpec(i, t)}
                style={styles.input}
              />
              {specializations.length > 1 && (
                <Pressable style={styles.removeIcon} onPress={() => removeSpec(i)}>
                  <Icon name="x" size={wp(4.5)} color="#9CA3AF" />
                </Pressable>
              )}
            </View>
          ))}
          <Pressable style={styles.addRow} onPress={addSpec}>
            <Icon name="plus-circle" size={wp(4.8)} color="#111827" />
            <Text style={styles.addLabel}>Add More</Text>
          </Pressable>

          {/* Proficiency (single picker) */}
          <Text style={[styles.label, styles.mtBlock]}>Proficiency</Text>
          <View style={styles.pickerWrap}>
            <Picker
              selectedValue={proficiency}
              onValueChange={v => setProficiency(v)}
              dropdownIconColor="#6B7280"
            >
              <Picker.Item label="Select" value="" />
              <Picker.Item label="Beginner" value="beginner" />
              <Picker.Item label="Intermediate" value="intermediate" />
              <Picker.Item label="Advanced" value="advanced" />
              <Picker.Item label="Expert" value="expert" />
            </Picker>
          </View>

          {/* Common Concerns Addressed (dynamic inputs) */}
          <Text style={[styles.label, styles.mtBlock]}>Common Concerns Addressed</Text>
          {concerns.map((val, i) => (
            <View key={`concern-${i}`} style={styles.inputWrap}>
              <TextInput
                placeholder="Add"
                placeholderTextColor="#9CA3AF"
                value={val}
                onChangeText={(t) => changeConcern(i, t)}
                style={styles.input}
              />
              {concerns.length > 1 && (
                <Pressable style={styles.removeIcon} onPress={() => removeConcern(i)}>
                  <Icon name="x" size={wp(4.5)} color="#9CA3AF" />
                </Pressable>
              )}
            </View>
          ))}
          <Pressable style={styles.addRow} onPress={addConcern}>
            <Icon name="plus-circle" size={wp(4.8)} color="#111827" />
            <Text style={styles.addLabel}>Add More</Text>
          </Pressable>

          {/* Languages Spoken (dynamic pickers) */}
          <Text style={[styles.label, styles.mtBlock]}>Languages Spoken</Text>
          {languages.map((val, i) => (
            <View key={`lang-${i}`} style={styles.pickerWrap}>
              <Picker
                selectedValue={val}
                onValueChange={(v) => changeLanguage(i, String(v))}
                dropdownIconColor="#6B7280"
              >
                <Picker.Item label="Select" value="" />
                <Picker.Item label="English" value="English" />
                <Picker.Item label="Hindi" value="Hindi" />
                <Picker.Item label="Spanish" value="Spanish" />
                <Picker.Item label="French" value="French" />
              </Picker>
              {languages.length > 1 && (
                <Pressable style={styles.removePickerX} onPress={() => removeLanguage(i)}>
                  <Icon name="x" size={wp(4.5)} color="#9CA3AF" />
                </Pressable>
              )}
            </View>
          ))}
          <Pressable style={styles.addRow} onPress={addLanguage}>
            <Icon name="plus-circle" size={wp(4.8)} color="#111827" />
            <Text style={styles.addLabel}>Add More</Text>
          </Pressable>

          {/* Years of Experience (dynamic inputs) */}
          <Text style={[styles.label, styles.mtBlock]}>Years of Experience</Text>
          {years.map((val, i) => (
            <View key={`year-${i}`} style={styles.inputWrap}>
              <TextInput
                placeholder="Enter"
                placeholderTextColor="#9CA3AF"
                value={val}
                onChangeText={(t) => changeYear(i, t)}
                keyboardType="number-pad"
                style={styles.input}
              />
              {years.length > 1 && (
                <Pressable style={styles.removeIcon} onPress={() => removeYear(i)}>
                  <Icon name="x" size={wp(4.5)} color="#9CA3AF" />
                </Pressable>
              )}
            </View>
          ))}
          <Pressable style={styles.addRow} onPress={addYear}>
            <Icon name="plus-circle" size={wp(4.8)} color="#111827" />
            <Text style={styles.addLabel}>Add More</Text>
          </Pressable>

          {/* License Number (verified row) */}
          <Text style={[styles.label, styles.mtBlock]}>License Number</Text>
          <View style={styles.licenseRow}>
            <Text style={styles.licenseText}>3254 2356 4876</Text>
            <View style={styles.verifiedPill}>
              <Text style={styles.verifiedText}>Verified</Text>
            </View>
          </View>

          {/* Bio */}
          <Text style={[styles.label, styles.mtBlock]}>Bio</Text>
          <View style={styles.textAreaWrap}>
            <TextInput
              placeholder="Write here..."
              placeholderTextColor="#9CA3AF"
              value={bio}
              onChangeText={setBio}
              multiline
              style={styles.textArea}
            />
          </View>

          {/* Submit */}
          <Pressable style={styles.cta}>
            <Text style={styles.ctaText}>Submit</Text>
          </Pressable>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default MyExpertiseScreen;
