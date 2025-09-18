import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import createStyles from '../../../style/RescheduleSessionStyle';

const RescheduleSession = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation();
  const styles = createStyles(wp, hp);

  const [selectedRepeat, setSelectedRepeat] = useState<string | null>(null);

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bgimg}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: hp(10) }}
        showsVerticalScrollIndicator={false}
      >
        <Header showWelcomeText={true} />

        {/* Title Row */}
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(10)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={styles.title}>Reschedule Sessions</Text>
        </View>

        {/* Date */}
        <Text style={styles.label}>Date</Text>
        <TouchableOpacity style={styles.inputBox}>
          <Text style={styles.inputText}>April 25, 2024</Text>
        </TouchableOpacity>

        {/* Time */}
        <Text style={styles.label}>Time</Text>
        <View style={styles.timeRow}>
          <TouchableOpacity style={styles.inputBoxSmall}>
            <Text style={styles.inputText}>5:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputBoxSmall}>
            <Text style={styles.inputText}>6:00 PM</Text>
          </TouchableOpacity>
        </View>

        {/* Repeat */}
        <Text style={styles.label}>Repeat?</Text>
        {['Daily', 'Weekly', 'Biweekly', 'Monthly'].map(item => (
          <TouchableOpacity
            key={item}
            style={styles.radioRow}
            onPress={() => setSelectedRepeat(item)}
          >
            <View
              style={[
                styles.radioCircle,
                selectedRepeat === item && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>{item}</Text>
          </TouchableOpacity>
        ))}

        {/* Number of Occurrences */}
        <Text style={styles.label}>End After</Text>
        <View style={{ flexDirection: 'row' ,justifyContent:'space-between' }}>
          <Text style={styles.subLabel}>Number of Occurrences</Text>
          <TextInput style={styles.inputNumber} value="3" />
        </View>

        {/* Until Date */}
        <Text style={styles.label}>Until Date</Text>
        <TouchableOpacity style={styles.inputBox}>
          <Text style={styles.inputText}>April 25, 2024</Text>
        </TouchableOpacity>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RescheduleSession;
