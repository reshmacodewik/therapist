import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    paddingTop: hp(5),
    paddingBottom: hp(5),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),

  },

  title: {
    fontSize: wp(5),
    fontWeight: '700',
    marginLeft: wp(2),
    color: '#111827',
  },

  label: {
    fontSize: wp(4),
    fontWeight: '500',
    marginBottom: hp(1),
    marginTop: hp(2),
    color: '#111827',
  },

  input: {
    height: hp(6),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: wp(2),
    paddingHorizontal: wp(4),
    fontSize: wp(4),
    
  },

  dropdown: {
    height: hp(6),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: wp(2),
    paddingHorizontal: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  
  },

  dropdownText: {
    fontSize: wp(4),
    color: '#111827',
  },

  textArea: {
    height: hp(16),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: wp(2),
    padding: wp(4),
    fontSize: wp(4),
  
  },

  uploadBox: {
    height: hp(14),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: hp(1),
  },

  uploadText: {
    marginTop: hp(1),
    fontSize: wp(3.5),
    color: '#111827',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(4),
  },

  cancelBtn: {
    width: '45%',
    height: hp(5),
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: '#1F3D2B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelText: {
    color: '#1F3D2B',
    fontSize: wp(4),
    fontWeight: '600',
  },

  submitBtn: {
    width: '45%',
    height: hp(5),
    borderRadius: wp(10),
    backgroundColor: '#1F3D2B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: wp(4),
    fontWeight: '600',
  },
});
