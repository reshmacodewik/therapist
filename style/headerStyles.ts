import { StyleSheet } from 'react-native';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const headerStyles = (wp: any, hp: any) => StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    width: '100%',
  },
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
  logo: {
    width: wp(30),
    height: hp(4),
    resizeMode: 'contain',
    marginLeft:wp(-2)
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: wp(6),
    fontFamily: 'Urbanist-Bold',
    color: '#264734',
    marginHorizontal: wp(4),
    marginBottom: hp(2),
  },
  screenTitle: {
    fontSize: wp(5),
    fontFamily: 'Urbanist-Bold',
    color: '#264734',
  }
});