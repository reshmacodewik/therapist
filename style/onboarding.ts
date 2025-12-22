import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

function wp(percentage: number): number {
  return (width * percentage) / 100;
}
function hp(percentage: number): number {
  return (height * percentage) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipButton: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderRadius: wp(5),
    paddingHorizontal: wp(5), 
    paddingVertical: hp(0), 
    borderColor: '#E2E8F0',
  },

  skipText: {
    color: '#000',
    fontSize: wp(4),
    fontWeight: '400',
  },
  image: {
    width: wp(100),
    height: hp(45),
    resizeMode: 'contain',
    marginTop: hp(5),
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: hp(6),
  },
  dot: {
    width: wp(3.5),
    height: wp(1),
    borderRadius: wp(1.25),
    backgroundColor: '#C4C4C4',
    marginHorizontal: wp(1),
  },
  activeDot: {
    width: wp(10.5),
    height: wp(1.0),
    borderRadius: wp(1.25),
    backgroundColor: '#275258',
    marginHorizontal: wp(1),
  },
  title: {
    fontSize: wp(8.5),
    color: '#000',
    marginTop: hp(1),
    textAlign:'center',
    fontFamily:"Urbanist-SemiBold"
  },
  desc: {
    textAlign: 'center',
    color: '#6E6E6E',
    fontSize: wp(3.5),
    marginTop: hp(1),
    width: wp(80),
    lineHeight:24,
    fontFamily:"Montserrat-Light"
   
  },
  button: {
    backgroundColor: '#264734',
    borderRadius: wp(12),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(60),
    height: hp(6),
    marginTop: hp(1.5),
  },
  buttonText: {
    color: '#FFF',
    fontSize: wp(4),
    fontWeight: '600',
  },
  bottomRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: hp(2),
},
  bottomText: {
    color: '#000',
    fontSize: wp(3.5),
   
    fontFamily:"Poppins-Light"
  },
  signUpText: {
    color: '#275258',
    fontFamily:"Poppins-Medium"
  },
});

export default styles;
