import { StyleSheet } from 'react-native';

const eventCardStyles = (wp: any, hp: any) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: wp(4),
      padding: wp(3),
      marginBottom: hp(2),
    },

    image: {
      width: wp(32),
      height: wp(35),
      borderRadius: wp(3),
      marginTop: hp(1),
    },

    content: {
      flex: 1,
      marginLeft: wp(4),
    },

    title: {
      fontSize: wp(3.1),
      fontWeight: '700',
      color: '#000',
    },

    date: {
      fontSize: wp(3.5),
      color: '#14532d',
      marginVertical: hp(0.5),
    },

    attendees: {
      fontSize: wp(3.3),
      color: '#000',
      marginBottom: hp(0),
    },

    /* Approved */
    approvedBadge: {
      backgroundColor: '#22c55e',
      alignSelf: 'flex-start',
      width: wp(25),
      paddingVertical: hp(0.5),
      borderRadius: wp(6),
      marginBottom: hp(1),
    },
    approvedText: {
      color: '#fff',
      fontWeight: '600',
      textAlign: 'center',
    },

    /* Requested */
    requestedBadge: {
      backgroundColor: '#9ca3af',
      alignSelf: 'flex-start',
      paddingHorizontal: wp(4),
      paddingVertical: hp(0.5),
      borderRadius: wp(6),
      marginBottom: hp(1),
    },
    requestedText: {
      color: '#fff',
      fontWeight: '600',
    },

    /* Rejected */
    rejectedMsg: {
      color: '#dc2626',
      fontSize: wp(3.2),
      marginBottom: hp(0.8),
    },
    rejectedBadge: {
      backgroundColor: '#dc2626',
      alignSelf: 'flex-start',
      paddingHorizontal: wp(4),
      paddingVertical: hp(0.5),
      borderRadius: wp(6),
    },
    rejectedText: {
      color: '#fff',
      fontWeight: '600',
    },

    /* Buttons */
    buttonRow: {
      flexDirection: 'row',
      marginTop: hp(0),
    },

    manageBtn: {
      borderWidth: 1,
      borderColor: '#14532d',
      paddingVertical: hp(0.2),
      width: wp(23),
      height: hp(3),
      borderRadius: wp(6),
      marginRight: wp(3),
    },
    manageText: {
      color: '#14532d',
      fontWeight: '600',
      textAlign: 'center',
    },

    conductBtn: {
      backgroundColor: '#14532d',
      paddingVertical: hp(0.2),
      width: wp(23),
      height: hp(3),
      borderRadius: wp(6),
    },
    conductText: {
      color: '#fff',
      fontWeight: '600',
      textAlign: 'center',
    },
    

    disabledBtn: {
      backgroundColor: '#d1d5db',
      paddingVertical: hp(0.2),
      paddingHorizontal: wp(6),
      borderRadius: wp(6),
      marginRight: wp(3),
      width: wp(23),
      height: hp(3),
    },
    disabledText: {
      color: '#9ca3af',
      fontWeight: '600',
    },
  });

export default eventCardStyles;
