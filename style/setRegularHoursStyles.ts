import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    paddingTop: hp('5%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
    marginLeft: wp(-2),
  },
  headerTitle: {
    fontSize: wp('5%'),
    fontWeight: '600',
    marginLeft: wp('3%'),
  },
  dayContainer: {
    backgroundColor: '#fff',
    borderRadius: wp('3%'),
    marginBottom: hp('1.5%'),
    padding: wp('3.5%'),
    borderWidth: 1,
    borderColor: '#E8F0F2',
  },
  dayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dayTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    color: '#111',
  },
  dayContent: {
    marginTop: hp('2%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBox: {
    width: '48%',
    position: 'relative',
    marginBottom: hp('1.5%'),
  },
  label: {
    fontSize: wp('3.5%'),
    fontWeight: '400',
    marginBottom: hp('0.8%'),
    color: '#222',
  },
  mainlabel: {
    fontSize: wp('3.5%'),
    fontWeight: '600',
    marginBottom: hp('0.8%'),
    color: '#222',
  },
  input: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: wp('2%'),
    paddingVertical: hp('1.2%'),
    paddingHorizontal: wp('3%'),
    fontSize: wp('3.8%'),
    color: '#111',
    backgroundColor: '#fff',
  },
  clearIcon: {
  position: 'absolute',
  right: wp('3%'),
  top: '50%',
  transform: [{ translateY: -10 }],
  zIndex: 10,
},

  inputIcon: {
    position: 'absolute',
    right: wp('3%'),
    top: hp('4.3%'),
    color: '#888',
  },
  optionRow: {
    flexDirection: 'row',
    marginTop: hp('1%'),
  },
  optionBtn: {
    borderWidth: 1,
    borderColor: '#0a3d2f',
    borderRadius: wp('5%'),
    paddingVertical: hp('0.8%'),
    paddingHorizontal: wp('3.5%'),
    marginRight: wp('2%'),
    marginBottom: hp('1%'),
  },
  optionBtnActive: {
    backgroundColor: '#0a3d2f',
  },
  optionText: {
    fontSize: wp('3.5%'),
    color: '#0a3d2f',
  },
  optionTextActive: {
    color: '#fff',
  },

  callTypeImg: {
    width: wp('7%'),
    height: wp('7%'),
    marginRight: wp('2%'),
    tintColor: '#0a3d2f', // inactive
  },

  callTypeImgActive: {
    tintColor: '#fff',
  },

  callTypeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0a3d2f',
    borderRadius: wp('3%'),
    paddingVertical: hp('1.1%'),
    paddingHorizontal: wp('4.5%'),
    marginRight: wp('2%'),
    marginBottom: hp('1%'),
  },
  callTypeBtnActive: {
    backgroundColor: '#0a3d2f',
  
  },
  callTypeText: {
    marginLeft: wp('0%'),
    fontSize: wp('3.5%'),
    color: '#0a3d2f',
  },
  callTypeTextActive: {
    color: '#fff',
  },
  priceInput: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: wp('2%'),
    paddingVertical: hp('1.2%'),
    paddingHorizontal: wp('3%'),
    fontSize: wp('3.8%'),
    marginTop: hp('1%'),
    backgroundColor: '#FBFBFB',
    color: '#111',
  },
  nextBtn: {
    backgroundColor: '#0a3d2f',
    borderRadius: wp('10%'),
    alignItems: 'center',
    paddingVertical: hp('1.8%'),
    marginVertical: hp('2%'),
  },
  nextBtnText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: '600',
  },
});

export default styles;
