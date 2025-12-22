import { StyleSheet } from 'react-native';
import { useResponsive } from '../components/Responsive/useResponsive';

const { wp, hp, fontSize, spacing, borderRadius, shadow } = useResponsive();

export const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: hp(6),
  },
  image: {
    width: wp(100),
    height: hp(45),
    resizeMode: 'contain',
    marginTop: hp(2.5),
  },
  titleWrapper: {
    marginTop: hp(3),
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#000',
    marginTop: hp(1),
    textAlign: 'center',
    fontFamily: 'Urbanist-SemiBold',

  },
  buttonWrapper: {
    marginTop: hp(2),
    width: wp(85),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(4),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    marginBottom: hp(1),
    width: '57%',
    alignSelf: 'center',
  },
  icon: {
    width: wp(7),
    height: wp(7),
    marginRight: wp(3),
    resizeMode: 'contain',
  },
  buttonText: {
    fontSize: wp(4.8),
    fontFamily: 'Urbanist-Medium', // update with your font
    color: '#0B0B0B',
  },
   titleContainer: {
    marginTop: hp(3),
    alignItems: "center",
  },

  title2: {
    marginTop: hp(-1),
    color: "#0B0B0B",
  },

  buttonContainer: {

    marginTop: hp(3),
    width: '84%',
    alignItems: "center",
 
  },


});
