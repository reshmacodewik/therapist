import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const sessionsStyles = (wp: any, hp: any) =>
  StyleSheet.create({
    container: {
      flex: 1,

      padding: 16,
      marginTop: hp(1),
    },

    bgimg: {
      flex: 1,
      resizeMode: 'cover',
    },
    mainContainer: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderRadius: wp(3),
      padding: wp(2),
      marginBottom: hp(2),
      marginTop: hp(2),
    },
    headerText: {
      fontSize: 18,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      marginTop: hp(0),
      marginBottom: hp(1),
      fontWeight: '600',
    },
    innercontainer: {
      flexDirection: 'column',
    },
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: hp(0.5),
      gap: 10,
      marginRight: hp(2),
    },
    tabButton: {
      flex: 1,
      paddingVertical: hp(1.1),
      borderRadius: wp(8),
      alignItems: 'center',
      justifyContent: 'center',
    },
    activeTabButton: {
      backgroundColor: '#264734',
    },
    inactiveTabButton: {
      backgroundColor: 'transparent',
      borderRadius: wp(8),
      borderWidth: 1,
      borderColor: '#264734',
    },
    tabText: {
      fontSize: wp(4),
      fontFamily: 'Urbanist-SemiBold',
    },
    activeTabText: {
      color: '#FFFFFF',
    },
    inactiveTabText: {
      color: '#264734',
    },
    sessionCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: wp(4),
      marginBottom: hp(2),
      flexDirection: 'row',
      padding: wp(3),
      alignItems: 'center',
    },
    sessionImageContainer: {
      width: wp(30),
      height: wp(40),
      borderRadius: wp(5),
      overflow: 'hidden',
      marginRight: wp(3),
    },
    sessionImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    sessionContent: {
      flex: 1,
    },
    sessionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
    freeicon: {
      width: wp(4),
      height: wp(4),
      marginRight: wp(1),
    },
    sessionTitle: {
      fontSize: wp(4),
      fontFamily: 'Poppins-Bold',
      fontWeight: '700',
      color: '#0000',
      marginBottom: hp(0.3),
    },
    sessionDescription: {
      fontSize: wp(3.5),
      fontFamily: 'Poppins-Medium',
      color: '#0000',
      marginBottom: hp(1.5),
    },
    sessionInfo: {
      fontSize: wp(3.5),
      fontFamily: 'Poppins-Bold',
      fontWeight: '700',
      color: '#000',
      marginBottom: hp(0.3),
    },
    sessionAttendees: {
      fontSize: wp(3.5),
      fontFamily: 'Poppins-Medium',
      color: '#000',
      marginBottom: hp(1),
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: hp(0.5),
    },
    manageButton: {
      height: hp(3),
      width: wp(25),
      borderRadius: wp(5),
      borderWidth: 1,
      borderColor: '#264734',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: wp(2),
    },
    conductButton: {
      height: hp(3),
      width: wp(25),
      borderRadius: wp(5),
      backgroundColor: '#264734',
      alignItems: 'center',
      justifyContent: 'center',
    },
    manageButtonText: {
      fontSize: wp(3.2),
      fontFamily: 'Urbanist-SemiBold',
      color: '#264734',
    },
    conductButtonText: {
      fontSize: wp(3.2),
      fontFamily: 'Urbanist-SemiBold',
      color: '#FFFFFF',
    },
    singleButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: hp(0.5),
    },
  });
