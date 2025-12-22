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
import Header from '../../components/Header';
import NewRequestCard from '../../components/NewRequestCard';
// create a separate style file

// Dummy client data
const clients = [
  { id: 1, name: 'Emily Chen', sessionTime: '11:00 AM' },
  { id: 2, name: 'John Doe', sessionTime: '2:00 PM' },
  { id: 3, name: 'Sophia Lee', sessionTime: '4:30 PM' },
  { id: 4, name: 'Michael Brown', sessionTime: '6:00 PM' },
];

const NewRequestSupportScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const handleProfilePress = (name: string) => {
    navigation.navigate('ProfileScreen', { clientName: name });
  };

  const handleReschedulePress = (name: string) => {
    console.log(`${name} reschedule pressed`);
    navigation.navigate('RescheduleScreen', { clientName: name }); // navigate to RescheduleScreen
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')} // ✅ use your background image
      style={styles.bg}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>your Clients</Text>
        </View>

        {/* Loop through client list */}
        {clients.map(client => (
          <NewRequestCard
            key={client.id}
            wp={wp}
            hp={hp}
            name={client.name}
            text={client.sessionTime}
            mode={client.id % 2 === 0 ? 'Video call' : 'Audio call'}
            image={require('../../../assets/Image/maskuser.png')}
            onAccept={() => console.log(`${client.name} accepted`)}
            onDecline={reason =>
              console.log(`${client.name} declined. Reason:`, reason)
            }
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default NewRequestSupportScreen;
