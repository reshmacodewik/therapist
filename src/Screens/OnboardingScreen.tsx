/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from '../../style/onboarding';

const slides = [
  {
    key: 'slide1',
    titleLine1: 'Welcome, Healer',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: require('../../assets/Image/malenurse.png'),
  },
  {
    key: 'slide2',
    titleLine1: 'Let’s help Others',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: require('../../assets/Image/massage.png'),
  },
  {
    key: 'slide3',
    titleLine1: 'Professional',
    titleLine2: 'Therapy',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: require('../../assets/Image/therapy.png'),
  },
];

const OnboardingScreen: React.FC = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<AppIntroSlider>(null);

  const handleGetStarted = () => {
    if (activeIndex < slides.length - 1) {
      // Go to next slide
      sliderRef.current?.goToSlide(activeIndex + 1);
    } else {
      // Navigate to LoginScreen on last slide
      navigation.navigate('LoginScreen');
    }
  };

  const renderItem = ({ item }: { item: (typeof slides)[0] }) => (
    <ImageBackground
      source={require('../../assets/Image/background.png')}
      style={styles.container}
      resizeMode="cover"
    >
      

      <Image source={item.image} style={styles.image} />

      <View style={styles.dotContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={index === activeIndex ? styles.activeDot : styles.dot}
          />
        ))}
      </View>

      {/* Title */}
      <View style={{ alignItems: 'center', marginTop: hp(0) }}>
        <Text
          style={[
            styles.title,
            {
              fontSize: wp(10),
              fontFamily: 'Urbanist-SemiBold',
              color: '#000',
            },
          ]}
        >
          {item.titleLine1}
        </Text>

        {item.titleLine2 ? (
          <Text
            style={[
              styles.title,
              {
                fontSize: wp(10),
                fontFamily: 'Urbanist-SemiBold',
                color: '#0B0B0B',
                marginTop: hp(-1.2),
              },
            ]}
          >
            {item.titleLine2}
          </Text>
        ) : null}
      </View>

      <Text style={styles.desc}>{item.text}</Text>

      {/* Get Started button */}
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>
          {activeIndex === slides.length - 1 ? 'Get Started' : 'Get Started'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Returning user? <Text style={styles.signUpText}>Sign up</Text>
      </Text>
    </ImageBackground>
  );

  return (
    <AppIntroSlider
      ref={sliderRef}
      data={slides}
      renderItem={renderItem}
      showSkipButton={false}
      showNextButton={false}
      showDoneButton={false}
      dotStyle={{ display: 'none' }} // Hide default dots
      activeDotStyle={{ display: 'none' }} // Hide active dot
      onSlideChange={index => setActiveIndex(index)}
    />
  );
};

export default OnboardingScreen;
