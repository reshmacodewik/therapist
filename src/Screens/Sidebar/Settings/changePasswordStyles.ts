import { StyleSheet } from 'react-native';

export default (wp: (v: number) => number, hp: (v: number) => number) =>
  StyleSheet.create({
    bgimg: {
      flex: 1,
      paddingTop: hp(4),
      paddingHorizontal: wp(5),
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      paddingBottom: hp(4),
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
      marginLeft: wp(-2),
    },
    headerText: {
      fontSize: wp(5),
      fontWeight: '700',
      marginLeft: wp(2),
    },
    illustration: {
      width: wp(100),
      height: hp(30),
      alignSelf: 'center',
      marginBottom: hp(3),
      resizeMode: 'cover',
    },
    formGroup: {
      marginBottom: hp(2),
    },
    label: {
      fontSize: wp(3.8),
      fontWeight: '500',
      marginBottom: hp(1),
      color: '#222',
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      paddingHorizontal: wp(8),
      marginBottom: wp(2),
      alignSelf: 'flex-start',
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F7F8FA',
      borderRadius: wp(8),
      paddingHorizontal: wp(4),
      paddingVertical: hp(1.8),
      borderWidth: 1,
      borderColor: '#E5E7EB',
    },
    input: {
      flex: 1,
      fontSize: wp(3.8),
      color: '#222',
      paddingVertical: 0,
    },
    submitBtn: {
      backgroundColor: '#274B3F',
      borderRadius: wp(8),
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: hp(1.8),
      marginTop: hp(2),
    },
    submitText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: wp(4),
    },
  });
