import { StyleSheet } from 'react-native';

const styles = (wp: (v: number) => number, hp: (v: number) => number) =>
  StyleSheet.create({
    newreqCard: {
      width: wp(100) - wp(5),
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(3),
      marginRight: wp(4),
      marginBottom: hp(2), // spacing between cards
    },

    clientTop: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(1),
      marginTop: hp(0.5),
    },

    clientImg: {
      width: wp(14),
      height: wp(14),
      borderRadius: wp(9),
      marginTop: hp(-1),
    },

    clientName: {
      fontSize: 14,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      marginLeft: wp(2),
    },

    clientText: {
      fontSize: 11,
      fontFamily: 'Poppins-Regular',
      color: '#264734',
      marginLeft: wp(1),
      marginTop: hp(0.3),
    },

    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(-0.2),
      marginBottom: hp(1),
      gap: wp(3),
    },

    clientBtn2: {
      backgroundColor: '#264734',
      width: wp(20.5),
      height: hp(2.8),
      borderRadius: wp(6),
      justifyContent: 'center',
      alignItems: 'center',
    },

    clientBtnText: {
      color: '#fff',
      fontSize: 9,
      fontFamily: 'Poppins-Medium',
    },

    clientBtnOutline2: {
      borderWidth: 1,
      borderColor: '#264734',
      width: wp(20.5),
      height: hp(2.8),
      borderRadius: wp(6),
      justifyContent: 'center',
      alignItems: 'center',
    },

    clientBtnOutlineText: {
      color: '#264734',
      fontSize: 8,
      fontFamily: 'Poppins-Medium',
    },
    clientModeText: {
      fontSize: 11,
      fontFamily: 'Poppins-Regular',
      color: '#264734',
      marginLeft: wp(1),
      marginTop: hp(-2),
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'center',
      alignItems: 'center',
    },

    modalBox: {
      width: '85%',
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: 16,
    },

    closeBtn: {
      alignSelf: 'flex-end',
    },

    modalTitle: {
      fontSize: 14,
      fontFamily: 'Poppins-Medium',
      marginBottom: 12,
      color: '#000',
    },

    modalInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      paddingHorizontal: 12,
      height: 40,
      marginBottom: 16,
    },

    sendBtn: {
      backgroundColor: '#264734',
      paddingVertical: 10,
      borderRadius: 20,
      alignItems: 'center',
    },

    sendBtnText: {
      color: '#fff',
      fontFamily: 'Poppins-Medium',
    },
  });

export default styles;
