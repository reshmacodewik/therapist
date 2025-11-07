import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: wp('100%'),
    height: hp('100%'),
  },
  scrollContent: {
    paddingHorizontal: wp('4%'),
    paddingBottom: hp('3%'),
    marginTop: hp('1.5%'),
  },
  title: {
    fontSize: wp('5%'),
    fontWeight: '700',
    color: '#000',
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
  },
  requestsList: {
    gap: hp('0.5%'),
    marginBottom: hp('5%'),
  },
  headerText: {
    fontSize: 22,
   
    color: '#000',
    marginLeft: hp(1),
    fontFamily: 'Poopins-Bold',
    fontWeight: '700',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1.5),
    marginLeft: hp(-1),
    marginTop: hp(2),
  },
});
