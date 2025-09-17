import { StyleSheet } from 'react-native';

export const createTransactionHistoryStyles = (wp: any, hp: any) =>
  StyleSheet.create({
    background: {
      flex: 1,
    },
    
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: wp(4),
      paddingVertical: hp(2),
    },
      titleContainer: {
      marginTop: hp(-1.5),
      marginBottom: hp(2),
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    
    },
     container: {
      flex: 1,
      padding: 5,
      marginTop: hp(1),
    },
    title: {
      fontSize: wp(5),
      fontWeight: 'bold',
      color: '#000',
      lineHeight: hp(2.8),
      marginHorizontal: wp(0),
    },
    backArrow: {
      fontSize: wp(6),
      fontWeight: '600',
    },
    headerTitle: {
      fontSize: wp(5),
      fontWeight: '700',
    },
    filterIcon: {
      fontSize: wp(6),
    },
    monthRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: wp(4),
      marginTop: hp(2),
    },
    monthTitle: {
      fontSize: wp(4.5),
      fontWeight: '700',
    },
    monthTotal: {
      fontSize: wp(4.5),
      fontWeight: '700',
    },
    card: {
      backgroundColor: '#fff',
      marginHorizontal: wp(4),
      marginTop: hp(1.5),
      padding: wp(4),
      borderRadius: wp(3),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 5,
      elevation: 2,
    },
    cardTitle: {
      fontSize: wp(4),
      fontWeight: '700',
      marginBottom: hp(0.5),
    },
    cardDesc: {
      fontSize: wp(3.5),
      color: '#555',
    },
    cardAmount: {
      fontSize: wp(4),
      fontWeight: '700',
    },
  });
