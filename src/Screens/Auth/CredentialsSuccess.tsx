import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../style/successtyles';
const CredentialsSuccess = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('LoginScreen' as never);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigation]);

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
          Tuliar shall get back to you after verifying their information.
        </Text>
        <Text style={styles.msg}>
          We have sent you email at you register email address
        </Text>


      </View>
    </ImageBackground>
  );
};

export default CredentialsSuccess;
