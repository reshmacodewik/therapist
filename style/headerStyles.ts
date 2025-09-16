import { StyleSheet } from 'react-native';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const headerStyles = (wp: any, hp: any) => StyleSheet.create({
 
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
 
  screenTitle: {
    fontSize: wp(5),
    fontFamily: 'Urbanist-Bold',
    color: '#264734',
  },
   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    logo: {
      width: wp(40),
      height: hp(6),
      resizeMode: 'contain',
    },
    headerText: {
      fontSize: 19,
      marginTop: hp(0),
      color: '#10342C',
      marginLeft: hp(1),
      fontFamily: 'Poppins-Bold',
    },
    headerIcons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    bellIcon: {
      width: wp(6),
      height: wp(6),
      marginRight: wp(3),
    },
    userIcon: {
      width: wp(8),
      height: wp(8),
      borderRadius: wp(4),
    },
});