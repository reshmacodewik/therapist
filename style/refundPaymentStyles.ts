import { StyleSheet } from 'react-native';

export const RefundPaymentStyles = (wp: any, hp: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      marginTop: hp(1),
    },
    bgimg: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
   
    logo: {
      width: wp(28),
      height: hp(6),
    },
    rightHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(3),
    },
    profile: {
      width: wp(10),
      height: wp(10),
      borderRadius: wp(5),
      marginLeft: wp(3),
    },
    welcomeText: {
      fontSize: wp(4.5),
      fontWeight: '600',
      marginTop: hp(2),
      color: '#000',
    },
    username: {
      fontSize: wp(5),
      fontWeight: '700',
      marginBottom: hp(2),
      color: '#000',
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    titleContainer: {
      marginTop: hp(-1.5),
      marginBottom: hp(2),
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    title: {
      fontSize: wp(5),
      fontWeight: '700',
      marginLeft: wp(1),
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      marginBottom: hp(3),
    },
    cardTitle: {
      fontSize: wp(4.5),
      fontWeight: '700',
      color: '#000',
    },
    cardSubtitle: {
      fontSize: wp(3.5),
      color: '#444',
      marginVertical: hp(0.5),
    },
    sessionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: hp(1),
    },
    sessionText: {
      fontSize: wp(3.8),
      color: '#000',
    },
    sessionPaid: {
      fontSize: wp(3.8),
      fontWeight: '600',
      color: '#000',
    },
    sessionType: {
      fontSize: wp(3.8),
      fontWeight: '600',
      color: '#000',
    },
    label: {
      fontSize: wp(3.8),
      fontWeight: '600',
      marginTop: hp(2),
      color: '#000',
    },
    attendee: {
      fontSize: wp(4),
      marginBottom: hp(2),
      color: '#333',
    },
    input: {
      borderWidth: 1,
      borderColor: '#0A3D2E',
      borderRadius: wp(3),
      padding: wp(3),
      fontSize: wp(4),
      marginBottom: hp(3),
    },
    refundBtn: {
      backgroundColor: '#0A3D2E',
      borderRadius: wp(10),
      paddingVertical: hp(2),
      alignItems: 'center',
    },
    refundBtnText: {
      color: '#fff',
      fontSize: wp(4.5),
      fontWeight: '600',
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopWidth: 1,
      borderColor: '#eee',
      paddingVertical: hp(1),
      backgroundColor: '#fff',
    },
    navItem: {
      alignItems: 'center',
    },
    navText: {
      fontSize: wp(3),
      color: '#999',
      marginTop: hp(0.3),
    },
    activeNav: {
      backgroundColor: '#0A3D2E',
      padding: wp(3),
      borderRadius: wp(10),
      alignItems: 'center',
    },
    activeNavText: {
      fontSize: wp(3),
      color: '#fff',
      marginTop: hp(0.3),
    },
  });
