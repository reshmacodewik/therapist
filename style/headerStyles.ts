import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const headerStyles = (wp: any, hp: any) =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: wp(1.2),
      paddingVertical: hp(1.5),
      width: '100%',
      
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: wp(-3),
      
    },
    backButton: {
      padding: wp(1),
      marginRight: wp(2),
    },
    backIcon: {
      width: wp(6),
      height: wp(6),
      resizeMode: 'contain',
    },
    logo: {
      width: wp(35),
      height: hp(4),
      resizeMode: 'contain',
    },
    headerIcons: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft:wp(3)
    },
    bellIcon: {
      width: wp(6),
      height: wp(6),
      marginRight: wp(3),
      resizeMode: 'contain',
    },
    userIcon: {
      width: wp(10),
      height: wp(10),
      borderRadius: wp(5),
      resizeMode: 'cover',
    },
    headerText: {
      fontSize: 19,
      fontWeight: '700',
      color: '#264734',
      marginHorizontal: wp(4),
      marginBottom: hp(2),
       marginLeft: wp(2.5),
    },
    screenTitle: {
      fontSize: wp(5),
      fontFamily: 'Urbanist-Bold',
      color: '#264734',
    },
  });
