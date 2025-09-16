import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from "../../style/WelcomeScreenstyles";

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

   const welcomeSlides = [
    {
      key: "welcome1",
      titleLine1: "Welcome To",
      titleLine2: "Tuliar",
      image: require("../../assets/Image/doctor.png"),
      options: [
        {
          key: "therapist",
          label: "Therapist",
          icon: require("../../assets/icon/therapist.png"),
        },
        {
          key: "coach",
          label: "Coach / Mentor",
          icon: require("../../assets/icon/coach.png"),
        },
        {
          key: "peer",
          label: "Peer",
          icon: require("../../assets/icon/peer.png"),
        },
      ],
    },
  ];

  const slide = welcomeSlides[0]; // ✅ pick the first slide

  return (
    <ImageBackground
      source={require("../../assets/Image/background.png")}
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

      {/* Options */}
      <View style={styles.buttonContainer}>
        {slide.options.map((option) => (
           <TouchableOpacity
            key={option.key}
            style={styles.button}
            onPress={() =>
              navigation.navigate("LoginScreen", { role: option.key })
            }
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
