import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: '100%',
    marginLeft: wp(-2),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(0),
    marginTop: hp(-3),
  },
  logo: {
    width: wp(40),
    height: hp(6),
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 22,
    marginTop: hp(-0.5),
    color: '#000',
    marginLeft: hp(1),
    fontFamily: 'Poopins-Bold',
    fontWeight: '700',
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
  logoContainer: {
    flexDirection: 'row',

    justifyContent: 'flex-start',
  },

  rightSection: {
    position: 'absolute',
    right: wp(4),
    top: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: wp(3),
  },
  icon: {
    width: wp(6),
    height: wp(6),
  },
  profileWrapper: {
    borderRadius: wp(6),
    overflow: 'hidden',
  },
  profileImage: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(4),
  },
  welcomeText: {
    marginTop: hp(2),
    fontSize: wp(4.2),
    color: '#0D1B1E',
    fontWeight: '600',
  },
  username: {
    textTransform: 'capitalize',
    color: '#1A5D46',
  },
});
