import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const sessionsStyles = (wp: any, hp: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: wp(4),
    },
    bgimg: {
      flex: 1,
      resizeMode: 'cover',
    },
    mainContainer: {
      flex: 1,
    },
    headerText: {
      fontSize: wp(6),
      fontFamily: 'Urbanist-Bold',
      color: '#264734',
      marginTop: hp(2),
      marginBottom: hp(1),
    },
    innercontainer:{
        flexDirection:'column'
    },
    tabsContainer: {
      backgroundColor: '#FFFFFF',
      borderRadius: wp(5),
      padding: wp(2),
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: hp(2),
    },
    tabButton: {
      flex: 1,
      paddingVertical: hp(1.5),
      borderRadius: wp(5),
      alignItems: 'center',
      justifyContent: 'center',
    },
    activeTabButton: {
      backgroundColor: '#264734',
    },
    inactiveTabButton: {
      backgroundColor: 'transparent',
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
      width: wp(20),
      height: wp(20),
      borderRadius: wp(4),
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
    sessionTitle: {
      fontSize: wp(4),
      fontFamily: 'Urbanist-Bold',
      color: '#264734',
      marginBottom: hp(0.3),
    },
    sessionDescription: {
      fontSize: wp(3.5),
      fontFamily: 'Urbanist-Regular',
      color: '#264734',
      marginBottom: hp(0.5),
    },
    sessionInfo: {
      fontSize: wp(3.5),
      fontFamily: 'Urbanist-SemiBold',
      color: '#264734',
      marginBottom: hp(0.3),
    },
    sessionAttendees: {
      fontSize: wp(3.5),
      fontFamily: 'Urbanist-Regular',
      color: '#264734',
      marginBottom: hp(1),
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: hp(0.5),
    },
    manageButton: {
      paddingVertical: hp(0.8),
      paddingHorizontal: wp(5),
      borderRadius: wp(5),
      borderWidth: 1,
      borderColor: '#264734',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: wp(2),
    },
    conductButton: {
      paddingVertical: hp(0.8),
      paddingHorizontal: wp(5),
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
