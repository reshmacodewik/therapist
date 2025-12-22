import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    
    },
    content: {
      padding: wp(5),
      paddingBottom: hp(10),
      marginTop: hp(5),
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(3),
      marginBottom: hp(3),
    },
    headerTitle: {
      fontSize: wp(5),
      fontWeight: '600',
    },

    toggleRow: {
      flexDirection: 'row',
      gap: wp(3),
      marginBottom: hp(3),
    },
    activeToggle: {
      flex: 1,
      backgroundColor: '#264734',
      paddingVertical: hp(1.5),
      borderRadius: wp(6),
      alignItems: 'center',
    },
    inactiveToggle: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#264734',
      paddingVertical: hp(1.5),
      borderRadius: wp(6),
      alignItems: 'center',
    },
    activeToggleText: {
      color: '#fff',
      fontSize: wp(3.5),
    },
    inactiveToggleText: {
      color: '#264734',
      fontSize: wp(3.5),
    },

    label: {
      fontSize: wp(3.6),
      marginBottom: hp(0.8),
      marginTop: hp(1.5),
    },
        dropdown: {
    flex: 1,
    margin: 5,
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 12,
    width:wp(20),
    color:'#000'
  },
    input: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      fontSize: wp(3.5),
    },
    row: {
      flexDirection: 'row',
      gap: wp(3),
    },
    halfInput: {
      flex: 1,
    },
    iconInput: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
    },
    dropdown: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
    },
    placeholder: {
      color: '#6A8F7A',
      fontSize: wp(3.5),
    },
    notesInput: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      height: hp(12),
      textAlignVertical: 'top',
    },
    uploadBox: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      height: hp(12),
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkboxRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(3),
      marginTop: hp(2),
    },
    checkbox: {
      width: wp(4),
      height: wp(4),
      borderWidth: 1,
      borderColor: '#264734',
      borderRadius: wp(1),
    },
    checkboxChecked: {
      backgroundColor: '#264734',
    },
    checkboxText: {
      fontSize: wp(3.5),
    },
    footer: {
      flexDirection: 'row',
      gap: wp(3),
      marginTop: hp(4),
    },
    cancelBtn: {
      flex: 1,
      backgroundColor: '#EAF1EC',
      paddingVertical: hp(1.6),
      borderRadius: wp(6),
      alignItems: 'center',
    },
    createBtn: {
      flex: 1,
      backgroundColor: '#264734',
      paddingVertical: hp(1.6),
      borderRadius: wp(6),
      alignItems: 'center',
    },
    cancelText: {
      color: '#264734',
      fontSize: wp(3.8),
    },
    createText: {
      color: '#fff',
      fontSize: wp(3.8),
    },
  });

export default styles;
