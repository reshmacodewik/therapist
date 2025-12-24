import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  useNavigation,
  useRoute,
  NavigationProp,
} from '@react-navigation/native';
import styles from '../../style/otpstyles';





type RootStackParamList = {
  SuccessScreen: { role: number };
  VerifyCredentials: undefined;
  MentorSetup: undefined;
  PeerSetup: undefined;
  CoachSetup: undefined;
  Home: undefined;
  VerifyCredentialsPeer: undefined;
};

const TicketSuccess = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<any>();
  const { role } = route.params || {};

  return (
    <ImageBackground
      source={require('../../assets/Image/background.png')}
      style={styles.bg}
    >
      <View style={styles.otpcontainer}>
        <Image
          source={require('../../assets/Image/check.png')}
          style={styles.successIcon}
        />
        <Text style={styles.title}>Success!</Text>
        <Text style={styles.message}>
          Ticket created successfully. Our team will get back to you soon.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default TicketSuccess;
