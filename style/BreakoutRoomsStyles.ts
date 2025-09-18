import { StyleSheet } from 'react-native';

const createStyles = (wp: (val: number) => number, hp: (val: number) => number) =>
  StyleSheet.create({
    bgimg: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      paddingHorizontal: wp(5),
      paddingTop: hp(2),
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    title: {
      fontSize: wp(5),
      fontWeight: '600',
      marginLeft: wp(2),
      color: '#000',
    },
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: hp(2),
    },
    tab: {
      paddingVertical: hp(1.2),
      paddingHorizontal: wp(6),
      borderRadius: wp(5),
      borderWidth: 1,
      borderColor: '#999',
      backgroundColor: '#fff',
    },
    tabText: {
      fontSize: wp(3.5),
      color: '#444',
      fontWeight: '500',
    },
    activeTab: {
      backgroundColor: '#184A2C',
      borderColor: '#184A2C',
    },
    activeTabText: {
      color: '#fff',
    },
    sectionTitle: {
      fontSize: wp(4.2),
      fontWeight: '700',
      color: '#000',
      marginBottom: hp(1),
    },
    label: {
      fontSize: wp(3.6),
      fontWeight: '500',
      marginTop: hp(2),
      marginBottom: hp(0.5),
      color: '#000',
    },
    pickerWrapper: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: wp(2),
      marginBottom: hp(2),
    },
    picker: {
      width: '100%',
      height: hp(5),
    },
    createButton: {
      backgroundColor: '#184A2C',
      paddingVertical: hp(1.5),
      borderRadius: wp(8),
      alignItems: 'center',
      marginTop: hp(3),
    },
    createButtonText: {
      color: '#fff',
      fontSize: wp(4),
      fontWeight: '600',
    },
    bottomButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(3),
    },
    secondaryButton: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#184A2C',
      borderRadius: wp(8),
      paddingVertical: hp(1.5),
      alignItems: 'center',
      marginHorizontal: wp(2),
      backgroundColor: '#fff',
    },
    secondaryButtonText: {
      fontSize: wp(3.8),
      fontWeight: '500',
      color: '#184A2C',
    },
  });

export default createStyles;
