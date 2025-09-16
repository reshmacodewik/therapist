import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const createSessionStyles = StyleSheet.create({
  bgimg: {
    flex: 1,
    resizeMode: 'cover',
  },
    sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  
  placeholderStyle: {
    fontSize: 14,
    color: "#999",
  },
  selectedTextStyle: {
    fontSize: 14,
    color: "#000",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  container: {
    flex: 1,
    padding: wp(5),
  },
  header: {
       flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(2),
      paddingTop: hp(2),
      paddingBottom: hp(1),
      marginLeft:wp(-5)
      
    },
    backButton: {
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(5),
    },
    headerTitle: {
      fontSize:  wp(5) ,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      fontWeight: '700',
    },
    headerSpacer: {
      width: wp(10),
    },

  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.8),
    marginBottom: hp(3),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    fontFamily: 'Urbanist-Regular',
    fontSize: wp(4),
    color: '#5C8A78',
  },
  dropdownContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp(3),
    marginBottom: hp(3),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  dropdown: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.8),
    borderRadius: wp(3),
    backgroundColor:'#fff',
    marginBottom:wp(4),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    
  },
  dropdownText: {
    fontFamily: 'Urbanist-Regular',
    fontSize: wp(4),
    color: '#5C8A78',
  },
  dropdownIcon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
  },
  notesInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.8),
    marginBottom: hp(3),
    height: hp(15),
    textAlignVertical: 'top',
    fontFamily: 'Urbanist-Regular',
    fontSize: wp(4),
    color: '#5C8A78',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  cancelButton: {
    backgroundColor: '#EBF2ED',
    borderRadius: wp(10),
    paddingVertical: hp(1.8),
    paddingHorizontal: wp(6),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(30),
  },
  cancelButtonText: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: wp(4),
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#1E5631',
    borderRadius: wp(10),
    paddingVertical: hp(1.8),
    paddingHorizontal: wp(6),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(30),
  },
  submitButtonText: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: wp(4),
    color: '#FFFFFF',
  },
});
