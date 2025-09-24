import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    padding: wp(4),
    paddingBottom: hp(2),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(0),
    },
    headerTitle: {
      fontSize: wp(5),
      fontFamily: 'Poppins-SemiBold',
      color: '#1B1D1C',
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
});
