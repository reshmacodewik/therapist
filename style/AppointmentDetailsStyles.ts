import { StyleSheet } from 'react-native';

export default function createStyles(
  wp: (v: number) => number,
  hp: (v: number) => number,
) {
  return StyleSheet.create({
    bgimg: { flex: 1, width: '100%', height: '100%' },
    container: { flex: 1, padding: wp(2.5), paddingTop: hp(2.5) },

    header: { flexDirection: 'row', alignItems: 'center', marginLeft: hp(-2) },
    headerTitle: { fontSize: wp(5), fontWeight: 'bold', color: '#000' },

    sectionHeading: {
      fontSize: wp(4.5),
      fontWeight: '700',
      color: '#000',
      marginTop: hp(2),
      marginBottom: hp(2),
    },
    backButton: {
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(5),
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: hp(2),
    },
    infoBox: { flex: 1,borderTopWidth:1, borderTopColor:'#ddd', paddingTop:hp(1.5) },
    infoLabel: {
      fontSize: wp(3.5),
      color: '#14532d',
      fontWeight: '600',
      marginBottom: hp(0.5),
    },
    infoValue: { fontSize: wp(3.5), color: '#000' },

    divider: {
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      marginVertical: hp(1.5),
    },

    notesText: {
      fontSize: wp(3.5),
      color: '#333',
      lineHeight: hp(2.5),
      marginBottom: hp(2),
    },

    startButton: {
      backgroundColor: '#14532d',
      borderRadius: wp(6),
      paddingVertical: hp(1.5),
      alignItems: 'center',
      marginBottom: hp(3),
      alignSelf: 'center',
      width: wp(40),
    },
    startButtonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: wp(3.5),
    },

    userRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(1.5),
    },
    userAvatar: {
      width: wp(12),
      height: wp(12),
      borderRadius: wp(6),
      marginRight: wp(3),
    },
    userName: { fontSize: wp(4), color: '#000' },
  });
}
