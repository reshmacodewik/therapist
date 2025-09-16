import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

function wp(percentage: number): number {
  return (width * percentage) / 100;
}

function hp(percentage: number): number {
  return (width * percentage) / 100;
}

export default StyleSheet.create({
  bgimg: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    alignItems: 'center',
    padding: wp(5),
    paddingTop: hp(10),
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: wp(6),
    fontWeight: '600',
    color: '#003300',
    marginBottom: hp(8),
  },
  label: {
    color: '#000',
    alignSelf: 'flex-start',
    marginLeft: wp(8),
    marginVertical: wp(2),
    fontWeight: '500',
  },
  input: {
    width: wp(80),
    height :hp(13.5),
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: wp(10),
    paddingHorizontal: wp(4),
    backgroundColor: '#fff',
    
  },
  dateRow: {
    flexDirection: 'row',
    height: hp(13.5),
    justifyContent: 'space-between',
    width: wp(80),
    marginBottom: hp(2),
  },
  datePicker: {
    flex: 1,
    borderRadius: wp(4),
    marginHorizontal: wp(1),
    backgroundColor: '#fff',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    justifyContent: 'center',
  },
  genderPicker: {
    width: wp(80),
    height: hp(13.5),
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: wp(10),
    paddingHorizontal: wp(4),
    backgroundColor: '#fff',
  },
  phoneRow: {
    flexDirection: 'row',
    width: wp(80),
    alignItems: 'center',
    marginBottom: hp(2),
  },
  codeBox: {
    width: wp(18),
    height: hp(13.5),
    borderRadius: wp(3),
    borderColor: '#E2E8F0',
    borderWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: wp(2),
    marginRight: wp(2),
  },
  phoneInput: {
    flex: 1,
     height :hp(13.5),
    borderRadius: wp(3),
    borderColor: '#E2E8F0',
    borderWidth: 1,
    paddingHorizontal: wp(4),
    backgroundColor: '#fff',
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: hp(8),
    width: wp(80),
  },
  termsText: {
    flex: 1,
    fontSize: wp(4),
    color: '#333',
    marginLeft: wp(0),
    marginTop: wp(1)
   
  },
  linkText: {
    color: '#003300',
    fontWeight: '600',
  },
  signUpButton: {
    backgroundColor: '#264734',
    width: wp(80),
    height: wp(12),
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  signUpText: {
    color: '#fff',
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
  loginPrompt: {
    fontSize: wp(3.5),
    color: '#333',
  },
  loginLink: {
    color: '#003300',
    fontWeight: '600',
  },
});
