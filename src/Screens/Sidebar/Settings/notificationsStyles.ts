import { StyleSheet } from 'react-native';

export default (wp: (v: number) => number, hp: (v: number) => number) =>
  StyleSheet.create({
    bgimg: {
      flex: 1,
      paddingTop: hp(4),
      paddingHorizontal: wp(4),
    },
    scrollContent: {
      paddingBottom: hp(2),
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: wp(-2),
      marginBottom: hp(2),
    },
    headerText: {
      fontSize: wp(5),
      fontWeight: '700',
    },
    headerTitleContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    clearAll: {
      color: '#E53935',
      fontWeight: '700',
      fontSize: wp(3.8),
      textDecorationLine: 'underline',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: wp(4),
      marginBottom: hp(2),
      shadowColor: '#000',
      shadowOpacity: 0.04,
      shadowRadius: 4,
      elevation: 1,
    },
    cardIcon: {
      width: wp(10),
      height: wp(10),
      borderRadius: wp(5),
      backgroundColor: '#FFE7B9',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: wp(3),
      marginTop: wp(1),
    },
    cardContent: {
      flex: 1,
    },
    cardTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: hp(0.5),
    },
    cardTitle: {
      fontWeight: '700',
      fontSize: wp(4),
      color: '#222',
    },
    cardTime: {
      fontSize: wp(3.2),
      color: '#9CA3AF',
      fontWeight: '500',
    },
    cardMessage: {
      fontSize: wp(3.6),
      color: '#222',
      marginTop: hp(0.5),
    },
  });
