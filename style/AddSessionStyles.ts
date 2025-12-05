import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
    paddingBottom: hp(5),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
    marginLeft: wp(-2.5),
    marginTop: hp(2),
  },
  backButton: {
    width: wp(10),
    height: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: wp(5),
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  inputContainer: {
    marginBottom: hp(2),
  },
  label: {
    fontSize: wp(3.5),
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginBottom: hp(0.8),
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    fontSize: wp(3.8),
    color: '#264734',
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
  },
  dropdownText: {
    fontSize: wp(3.8),
    color: '#406A52',
  },
  textArea: {
    backgroundColor: '#fff',
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    height: hp(15),
    textAlignVertical: 'top',
    fontSize: wp(3.8),
    color: '#264734',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(3),
  },
  cancelButton: {
    width: wp(35),
    paddingVertical: hp(1.5),
    backgroundColor: '#E9ECE8',
    borderRadius: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: wp(3.8),
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  submitButton: {
    width: wp(35),
    paddingVertical: hp(1.5),
    backgroundColor: '#14532d',
    borderRadius: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontSize: wp(3.8),
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
});
