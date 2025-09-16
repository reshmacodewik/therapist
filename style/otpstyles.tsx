import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const wp = (percent: number) => (width * percent) / 100;

export default StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    flex: 0,
    alignItems: 'center',
    paddingTop: wp(15),
    paddingHorizontal: wp(6),
  },
 arrowIcon: {
    marginHorizontal:wp(4),
    width:wp(5),
    height: wp(5),
    marginTop: wp(10),
  },
 
   otpcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"center",
    marginHorizontal: wp(6),
  },
  heading: {
    fontSize: wp(6),
    fontWeight: '600',
    color: '#003300',
    marginBottom: wp(4),
  },
  subtext: {
    fontSize: wp(4.5),
    textAlign: 'center',
    color: '#B6B6B6',
    marginBottom: wp(6),
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(70),
    marginBottom: wp(7),
  },
  otpBox: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(3),
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: wp(6),
    borderColor: '#ccc',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
   activeOtpBox: {
    borderColor: '#000', // Black border when focused
  },
  resendRow: {
    flexDirection: 'row',
    marginBottom: wp(10),
  },
  grayText: {
    color: '#777',
    fontSize: wp(3.5),
  },
  resendText: {
    color: '#000',
    fontWeight: '600',
    textDecorationLine: 'underline',
    fontSize: wp(3.5),
  },
  button: {
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
  buttonText: {
    color: '#fff',
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
  successIcon: {
    width: wp(25),
    height: wp(25),
    marginBottom: wp(5),
  },
  title: {
    fontSize: wp(6),
    fontWeight: '600',
    color: '#003300',
    marginBottom: wp(2),
  },
  message: {
    fontSize: wp(3.8),
    color: '#B6B6B6',
    textAlign: 'center',
    marginBottom: wp(8),
    paddingHorizontal: wp(10),
  },
});


