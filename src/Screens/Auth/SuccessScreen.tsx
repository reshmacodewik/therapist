import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../../../style/otpstyles';

const SuccessScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { role } = route.params || {};

  const handleNext = () => {
    // ✅ Navigate based on role
    switch (role?.toLowerCase()) {
      case 'therapist':
        navigation.navigate('VerifyCredentials' as never);
        break;
      case 'coach':
        navigation.navigate('VerifyCredentials' as never);
        break;
      case 'mentor':
        navigation.navigate('VerifyCredentials' as never);
        break;
      case 'peer':
        navigation.navigate('VerifyCredentialsPeer' as never);
        break;
      default:
        navigation.navigate('VerifyCredentials' as never); // fallback
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bg}
    >
      <View style={styles.otpcontainer}>
        <Image
          source={require('../../../assets/Image/check.png')}
          style={styles.successIcon}
        />
        <Text style={styles.title}>Success!</Text>
        <Text style={styles.message}>
          Congratulations! You have been successfully authenticated
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Let’s verify your documents</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SuccessScreen;
