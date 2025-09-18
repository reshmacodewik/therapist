import { StyleSheet } from 'react-native';

const createStyles = (wp: (p: number) => number, hp: (p: number) => number) =>
  StyleSheet.create({
    bgimg: { flex: 1, resizeMode: 'cover' },
    container: { flex: 1, padding:16 },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    title: { fontSize: wp(5), fontWeight: '600', marginLeft: wp(2), color: '#000' },
    label: { fontSize: wp(4), fontWeight: '600', marginTop: hp(0.5), marginBottom: hp(1), color: '#000' },
    subLabel: { fontSize: wp(3.5), marginBottom: hp(1), color: '#000',fontWeight:'700' },
    inputBox: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: wp(2),
      padding: wp(3),
      marginBottom: hp(2),
      backgroundColor: '#fff',
    },
    inputBoxSmall: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: wp(2),
      padding: wp(3),
      backgroundColor: '#fff',
      marginRight: wp(2),
    },
    inputText: { fontSize: wp(4), color: '#000' },
    timeRow: { flexDirection: 'row', marginBottom: hp(2) },
    radioRow: { flexDirection: 'row', alignItems: 'center', marginBottom: hp(1.5) },
    radioCircle: {
      width: wp(5),
      height: wp(5),
      borderRadius: wp(2.5),
      borderWidth: 1.5,
      borderColor: '#ECA14C',
      marginRight: wp(2),
    },
    radioSelected: { backgroundColor: '#0A5735',padding:5 },
    radioLabel: { fontSize: wp(4), color: '#000' },
    inputNumber: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: wp(8),
      padding: wp(0.2),
      width: wp(30),
      textAlign: 'center',
      fontSize: wp(4),
      backgroundColor: '#fff',
    },
    buttonRow: {
      flexDirection: 'row',
     gap:20,
      marginTop: hp(3),
      alignItems:'center',
      justifyContent:'center'
    },
    cancelButton: {
      borderWidth: 1,
      borderColor: '#0A5735',
      borderRadius: wp(9),
      paddingVertical: hp(1),
      paddingHorizontal: wp(10),
    },
    cancelText: { fontSize: wp(4), color: '#0A5735', fontWeight: '600' },
    saveButton: {
      backgroundColor: '#0A5735',
      borderRadius: wp(9),
      paddingVertical: hp(1),
      paddingHorizontal: wp(8),
    },
    saveText: { fontSize: wp(4), color: '#fff', fontWeight: '600' },
  });

export default createStyles;
