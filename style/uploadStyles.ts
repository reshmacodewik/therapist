import { StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';

const uploadStyles = () => {
  const { width, height } = useWindowDimensions();

  // Helper functions to calculate percentages of screen size
  const wp = (percentage: number) => (width * percentage) / 100;
  const hp = (percentage: number) => (height * percentage) / 100;

  return StyleSheet.create({
    // Background Image Style
    bgimg: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    container: {
      flex: 1,
      padding: 16,
      marginTop: hp(1),
    },

    titleContainer: {
      marginBottom: hp(2),
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      marginLeft: wp(-2),
    },
    title: {
      fontSize: wp(5),
      fontWeight: 'bold',
      color: '#000',
      lineHeight: hp(2.8),
      marginHorizontal: wp(2),
      marginLeft: wp(-1),
    },

    buttonText: {
      color: '#fff',
      fontSize: wp(4.5), // Adjusting font size based on screen width
      fontWeight: '500',
    },
    buttonTextphoto: {
      color: '#264734',
      fontSize: wp(4.5), // Adjusting font size based on screen width
      fontWeight: '500',
    },
    buttonContainer: {
      marginTop: hp(2),
      gap: hp(1.5), // spacing between buttons
    },

    browseButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: hp(1.8),
      borderRadius: wp(8),
      backgroundColor: '#264734',
      marginBottom: hp(2), // Dynamic margin bottom
    },
    cameraButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      paddingVertical: hp(1.8),
      borderRadius: wp(8),
      borderWidth: 1,
      borderColor: '264734',
      marginBottom: hp(3),
    },

    icon: {
      marginRight: wp(2),
      color:'#fff'
    },

    buttonTextPhoto: {
      fontSize: wp(4),
      fontWeight: '600',
      color: '#000',
    },

    // Info Text Style
    infoText: {
      textAlign: 'center',
      color: '#000000',
      marginHorizontal: wp(8),
      fontSize: 13, // Adjusting font size based on screen width
    },
  });
};

export default uploadStyles;
