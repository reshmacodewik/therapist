import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import uploadStyles from '../../../style/uploadStyles';
import { useResponsive } from 'react-native-responsive-hook';
import Header from '../../components/Header';
import Ionicons from '@react-native-vector-icons/ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const UploadScreen = () => {
  const navigation = useNavigation();
  const styles = uploadStyles();
  const { wp, hp } = useResponsive();
  // Get responsive styles

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bgimg}
    >
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: hp(10) }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <Header showWelcomeText={true} />
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={wp(10)}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={styles.title}>Upload Resources</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.browseButton}>
              <Fontisto
                name="file-2"
                size={wp(5)}
                color="#000"
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Browse Files</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cameraButton}>
              <Ionicons
                name="camera-outline"
                size={wp(5)}
                color="#000"
                style={styles.icon}
              />
              <Text style={styles.buttonTextPhoto}>
                Take Photo or Record Video
              </Text>
            </TouchableOpacity>
          </View>

          {/* Info Text */}
          <Text style={styles.infoText}>
            Files will be saved to the session's resource folder for attendees
            to access.
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default UploadScreen;
