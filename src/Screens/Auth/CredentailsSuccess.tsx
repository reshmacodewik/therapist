import React from 'react';
import {
  View,
  Text,

  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../style/successtyles';
const CredentailsSuccess = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bg}
    >
      <View style={styles.otpcontainer}>
        <Image
          source={require('../../../assets/Image/check.png')} // replace with your green checkmark
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

export default CredentailsSuccess;
