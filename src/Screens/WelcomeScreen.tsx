import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from '../../style/WelcomeScreenstyles';

// Define roles with numeric constants
const ROLES = {
  USER: 1,
  THERAPIST: 2,
  MENTOR: 3,
  PEER: 4,
  COACH: 5,
};

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const welcomeSlides = [
    {
      key: 'welcome1',
      titleLine1: 'Welcome To',
      titleLine2: 'Tuliar',
      image: require('../../assets/Image/doctor.png'),
      options: [
        {
          key: 2,
          label: 'Therapist',
          icon: require('../../assets/icon/therapist.png'),
          role: ROLES.THERAPIST,
        },
        {
          key: 5,
          label: 'Coach',
          icon: require('../../assets/icon/coach.png'),
          role: ROLES.COACH,
        },
        {
          key: 3,
          label: 'Mentor',
          icon: require('../../assets/icon/coach.png'),
          role: ROLES.MENTOR,
        },
        {
          key: 4,
          label: 'Peer',
          icon: require('../../assets/icon/peer.png'),
          role: ROLES.PEER,
        },
      ],
    },
  ];

  const slide = welcomeSlides[0];

  const handlePress = (role: number) => {
    navigation.navigate('SignUpScreen', { role });
  };

  return (
    <ImageBackground
      source={require('../../assets/Image/background.png')}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Main Image */}
      <Image source={slide.image} style={styles.image} resizeMode="contain" />

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{slide.titleLine1}</Text>
        {slide.titleLine2 ? (
          <Text style={[styles.title, styles.title2]}>{slide.titleLine2}</Text>
        ) : null}
      </View>

      {/* Role Options */}
      <View style={styles.buttonContainer}>
        {slide.options.map(option => (
          <TouchableOpacity
            key={option.key}
            style={styles.button}
            onPress={() => handlePress(option.role)}
          >
            <Image source={option.icon} style={styles.icon} />
            <Text style={styles.buttonText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
