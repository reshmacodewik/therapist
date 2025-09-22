
import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

function wp(percentage: number): number {
  return (width * percentage) / 100;
}

function hp(percentage: number): number {
  return (width * percentage) / 100;
}


const styles = StyleSheet.create({
  bgimg:{
    flex: 1, 
    resizeMode: 'cover' 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  logo: {
    width: wp(60),
    height: hp(8),
    marginBottom:wp(5)
  },
  tagline: {
    color: '#000',
    textAlign: 'center',
   
  },
  label: {
    color: '#000',
    alignSelf: 'flex-start',
    marginLeft: wp(10),
    marginBottom: wp(2),
    fontWeight: '500',
 
  },
  input: {
    width: wp(80),
    height: hp(13.5),
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: wp(10),
    paddingHorizontal: wp(4),
    backgroundColor: '#fff',
  
  },
  passwordContainer: {
    width: wp(80),
    height: hp(13.5),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: wp(10),
    paddingHorizontal: wp(4),
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  passwordInput: {
    flex: 1,
  },
  forgot: {
    color: '#000',
    fontWeight: '500',
    textDecorationLine: 'underline',
    marginRight: wp(10),
  },
  loginButton: {
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
  loginText: {
    color: '#fff',
    fontWeight: '600',
  },
  signupPrompt: {
    color: '#000',
  },
  signupLink: {
    color: '#0C7C59',
    fontWeight: '600',
  },
    errorText: {
    color: 'red',
    fontSize: 12,
    paddingHorizontal: wp(8),
    marginTop: wp(2),
    marginLeft: wp(5),
    alignSelf: 'flex-start',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: wp(5),
  },
  socialIcon: {
    backgroundColor: '#fff',
    borderRadius: wp(3),
    padding: wp(3),
    elevation: 2,
  },
  socialImage: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
});

export default styles;
