import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  bgimg: {
    flex: 1,
  },
  container: {
    paddingTop: hp(4),
    paddingHorizontal: wp(1.5),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('2.5%'),
    paddingVertical: hp('2%'),
  },
  headerTitle: {
    fontSize: wp('5%'),
    fontWeight: '600',
    marginLeft: wp('3%'),
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: wp('3%'),
    marginHorizontal: wp('4%'),
    marginTop: hp('2%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
  },
  sectionLast: {
    backgroundColor: '#fff',
    borderRadius: wp('3%'),
    marginHorizontal: wp('4%'),
    marginTop: hp('2%'),
    marginBottom: hp('3%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
  },
  sectionTitle: {
    fontSize: wp('4%'),
    fontWeight: '600',
    marginVertical: hp('1%'),
    color: '#111',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(0.8),
    borderBottomWidth: 0.6,
    borderColor: '#e0e0e0',
  },
  rowNoBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(0.8),
  },
  rowText: {
    fontSize: wp('4%'),
    color: '#111',
  },
  rowSub: {
    fontSize: wp('4%'),
    color: '#666',
  },
  subText: {
    color: '#999',
    fontSize: wp('3.5%'),
  },
  logoutText: {
    color: '#0a7d44',
    fontSize: wp('4%'),
    fontWeight: '600',
    paddingVertical: hp('1.5%'),
  },
});

export default styles;
