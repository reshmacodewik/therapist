import { StyleSheet } from 'react-native';

export default (wp: any, hp: any) =>
  StyleSheet.create({
    bg: { flex: 1 },
    container: { padding: wp(5), paddingBottom: hp(5) },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
      marginTop: hp(3),
      marginLeft: wp(-1),
    },
    headerTitle: {
      fontSize: wp(5),
      fontWeight: '600',
      marginLeft: wp(2),
    },

    label: {
      fontSize: wp(3.8),
      marginBottom: hp(0.6),
      color: '#000',
    },

    input: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      marginBottom: hp(2),
    },

    textArea: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      height: hp(14),
      marginBottom: hp(2),
      textAlignVertical: 'top',
    },

    row: { flexDirection: 'row', justifyContent: 'space-between' },
    half: { width: '48%' },

    iconInput: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: wp(4),
      borderRadius: wp(3),
      marginBottom: hp(2),
    },

    placeholder: { color: '#6A8F7A' },
    valueText: {
      color: '#111827', // dark text when value selected
      fontSize: 14,
    },

    speakerBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#EFEFEF',
      padding: wp(3),
      borderRadius: wp(3),
      marginBottom: hp(2),
    },

    speakerImg: {
      width: wp(10),
      height: wp(10),
      borderRadius: wp(5),
      marginRight: wp(3),
    },

    speakerName: { fontSize: wp(4), color: '#999' },

    uploadBox: {
      height: hp(18),
      borderRadius: wp(3),
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    uploadedImage: {
      width: '100%',
      height: '100%',
      borderRadius: 12,
    },

    faqBox: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(3),
      marginBottom: hp(2),
    },

    faqInput: { paddingVertical: hp(1.5) },
    divider: { height: 1, backgroundColor: '#E0E0E0' },

    addMore: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(1.5),

      justifyContent: 'flex-end',
    },
    addMoreBtn: {
      textAlign: 'center',
      justifyContent: 'flex-end',
    },
    addMoreText: { marginLeft: wp(2), color: '#000' },

    checkboxRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 2,
    },

    checkbox: {
      width: 22,
      height: 22,
      borderRadius: 6,
      backgroundColor: '#D9D9D9',
      alignItems: 'center',
      justifyContent: 'center',
    },

    checkboxChecked: {
      backgroundColor: '#264734',
    },

    checkboxText: {
      marginLeft: 12,
      fontSize: 14,
      color: '#333',
    },

    disabled: { backgroundColor: '#EAEAEA' },
    labelnote: {
      fontSize: wp(3),
      marginBottom: hp(0.6),
      color: '#979797',
      marginTop: hp(2),
    },

    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(1),
    },

    cancelBtn: {
      backgroundColor: '#E6EFEA',
      padding: wp(3),
      borderRadius: wp(6),
      width: '35%',
      height: hp(5),
      alignItems: 'center',
    },
    cancelText: { color: '#000' },

    createBtn: {
      backgroundColor: '#264734',
      padding: wp(3),
      borderRadius: wp(6),
      width: '35%',
      height: hp(5),
      alignItems: 'center',
    },
    createText: { color: '#fff' },
  });
