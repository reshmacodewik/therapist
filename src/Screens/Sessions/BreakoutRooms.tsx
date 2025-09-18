import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Header from '../../components/Header';
import createStyles from '../../../style/BreakoutRoomsStyles';

const BreakoutRooms: React.FC = () => {
  const { wp, hp } = useResponsive();
  const styles = createStyles(wp, hp);
  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState<'setup' | 'manage' | 'settings'>('setup');
  const [rooms, setRooms] = useState('3');
  const [assignMethod, setAssignMethod] = useState('Auto');

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bgimg}
    >
      <View style={styles.container}>
        <Header showWelcomeText={true} />

        {/* Title */}
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(10)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={styles.title}>Breakout Rooms</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === 'setup' && styles.activeTab,
            ]}
            onPress={() => setSelectedTab('setup')}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === 'setup' && styles.activeTabText,
              ]}
            >
              Setup
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === 'manage' && styles.activeTab,
            ]}
            onPress={() => setSelectedTab('manage')}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === 'manage' && styles.activeTabText,
              ]}
            >
              Manage
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === 'settings' && styles.activeTab,
            ]}
            onPress={() => setSelectedTab('settings')}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === 'settings' && styles.activeTabText,
              ]}
            >
              Settings
            </Text>
          </TouchableOpacity>
        </View>

        {/* Room Setup Section */}
        <Text style={styles.sectionTitle}>Room Setup</Text>

        {/* Number of Rooms */}
        <Text style={styles.label}>Number of rooms</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={rooms}
            onValueChange={value => setRooms(value)}
            style={styles.picker}
            dropdownIconColor="#000"
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
          </Picker>
        </View>

        {/* Assign Method */}
        <Text style={styles.label}>Assign Method</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={assignMethod}
            onValueChange={value => setAssignMethod(value)}
            style={styles.picker}
            dropdownIconColor="#000"
          >
            <Picker.Item label="Auto" value="Auto" />
            <Picker.Item label="Manual" value="Manual" />
          </Picker>
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create Room</Text>
        </TouchableOpacity>

        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Open Rooms</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Close Rooms</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default BreakoutRooms;
