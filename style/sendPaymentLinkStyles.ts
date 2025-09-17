import { StyleSheet } from 'react-native';

export const createSendPaymentStyles = (wp: any, hp: any) =>
  StyleSheet.create({
    background: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: wp(4),
      marginTop: hp(2),
    },
    container: {
      flex: 1,
      padding: 5,
      marginTop: hp(1),
    },
    backArrow: {
      fontSize: wp(5),
      fontWeight: '600',
      marginRight: wp(3),
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
      fontWeight: 'bold',
      color: '#000',
      lineHeight: hp(2.8),
      marginHorizontal: wp(0),
    },
    headerTitle: {
      fontSize: wp(5),
      fontWeight: '700',
    },
    eventCard: {
      backgroundColor: '#fff',
      margin: wp(4),
      padding: wp(4),
      borderRadius: wp(3),
     
    },
    eventTitle: {
      fontSize: wp(4.5),
      fontWeight: '700',
    },
    eventSubtitle: {
      fontSize: wp(3.5),
      color: '#666',
      marginVertical: hp(0.5),
    },
    eventFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(1),
    },
    eventDate: {
      fontSize: wp(3.5),
      fontWeight: '600',
    },
    eventPrice: {
      fontSize: wp(3.5),
      fontWeight: '700',
    },
    sectionTitle: {
      fontSize: wp(4),
      fontWeight: '700',
      marginHorizontal: wp(4),
      marginTop: hp(2),
    },
    participantRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: wp(4),
      marginTop: hp(1.5),
    },
    checkbox: {
      width: wp(5),
      height: wp(5),
      borderWidth: 1,
      borderColor: '#E59500',
      marginRight: wp(3),
      borderRadius: wp(1),
    },
    checkboxActive: {
      backgroundColor: '#E59500',
    },
    participantName: {
      flex: 1,
      fontSize: wp(3.8),
    },
    participantStatus: {
      fontSize: wp(3.5),
      fontWeight: '600',
      color: '#333',
    },
    messageBox: {
      borderWidth: 1,
      borderColor: '#264734',
      borderRadius: wp(5),
      marginHorizontal: wp(4),
      marginTop: hp(3),
      padding: wp(3),
      fontSize: wp(3.8),
    
    },
    copyLinkBtn: {
      alignItems: 'flex-end',
      marginHorizontal: wp(4),
      marginTop: hp(1),
    },
    copyLinkText: {
      fontSize: wp(3.8),
      fontWeight: '600',
      color: '#005f3f',
    },
    sendBtn: {
      backgroundColor: '#004d2d',
      marginHorizontal: wp(8),
      marginTop: hp(4),
      borderRadius: wp(8),
      paddingVertical: hp(1.8),
      alignItems: 'center',
    
      justifyContent:'center'
    },
    sendBtnText: {
      color: '#fff',
      fontSize: wp(4),
      fontWeight: '700',
    },
  });
