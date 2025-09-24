import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CardComponent from '../../components/CardComponent';
import { styles } from '../../../style/ClientStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useResponsive } from 'react-native-responsive-hook';
import { NavigationProp, useNavigation } from '@react-navigation/native';
// create a separate style file

// Dummy client data
const clients = [
  { id: 1, name: 'Emily Chen', sessionTime: '11:00 AM' },
  { id: 2, name: 'John Doe', sessionTime: '2:00 PM' },
  { id: 3, name: 'Sophia Lee', sessionTime: '4:30 PM' },
  { id: 4, name: 'Michael Brown', sessionTime: '6:00 PM' },
];

const ClientScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const handleProfilePress = (name: string) => {
    console.log(`${name} profile pressed`);
  };

  const handleReschedulePress = (name: string) => {
    console.log(`${name} reschedule pressed`);
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')} // ✅ use your background image
      style={styles.bg}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View>
            <Image
              source={require('../../../assets/Image/logo1.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/icon/bell.png')}
                style={styles.bellIcon}
              />
            </TouchableOpacity>
            <Image
              source={require('../../../assets/Image/homeuser.png')}
              style={styles.userIcon}
            />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Today Sessions</Text>
        </View>

        {/* Loop through client list */}
        {clients.map(client => (
          <CardComponent
            key={client.id}
            name={client.name}
            sessionTime={client.sessionTime}
            onProfilePress={() => handleProfilePress(client.name)}
            onReschedulePress={() => handleReschedulePress(client.name)}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default ClientScreen;
