import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: hp(1),
  },

  titleContainer: {
   
    marginBottom: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginLeft: wp(-2),
    
  },
  title: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#000',
    lineHeight: hp(2.8),
    marginHorizontal: wp(2),
    marginLeft: wp(-1),
  },
  textInput: {
    width: '100%',
    height: hp(20),
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: wp(4),
    marginBottom: hp(4),
    fontSize: wp(3.5),
    paddingLeft: wp(5),
    textAlignVertical: 'top',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    marginHorizontal: wp(10),
    paddingVertical: hp(1.5),
    backgroundColor: '#264734',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: hp(3),
  },
  saveButtonText: {
    color: '#fff',
    fontSize: wp(5),
  },
});
