import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation, useRoute, NavigationProp } from "@react-navigation/native";
import styles from '../../../style/otpstyles';



// Numeric role constants
const ROLES = {
  USER: 1,
  THERAPIST: 2,
  MENTOR: 3,
  PEER: 4,
  COACH: 5,
};

type RootStackParamList = {
  SuccessScreen: { role: number };
  VerifyCredentials: undefined;
  MentorSetup: undefined;
  PeerSetup: undefined;
  CoachSetup: undefined;
  Home: undefined;
  VerifyCredentialsPeer: undefined;
};

const SuccessScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<any>();
  const { role } = route.params || {};

  const handleNext = () => {
    console.log("Role received in SuccessScreen:", role);

    switch (role) {
      case ROLES.THERAPIST:
        navigation.navigate("VerifyCredentials");
        break;

      case ROLES.MENTOR:
        navigation.navigate("VerifyCredentials");
        break;

      case ROLES.PEER:
        navigation.navigate("VerifyCredentialsPeer" );
        break;

      case ROLES.COACH:
        navigation.navigate("VerifyCredentials");
        break;

      default:
     
        break;
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
  )
};

export default SuccessScreen;
