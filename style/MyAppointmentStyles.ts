import { StyleSheet } from 'react-native';

// factory: call with (wp, hp) to get the style object
export default function createStyles(
  wp: (v: number) => number,
  hp: (v: number) => number,
) {
  return StyleSheet.create({
    bgimg: { flex: 1, width: '100%', height: '100%' },
    container: { flex: 1, paddingHorizontal: wp(4), paddingTop: hp(4) },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: hp(2),
      marginLeft: wp(-2),
    },

    headerText: { fontSize: wp(5), fontWeight: 'bold', color: '#000' },

    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: hp(2),
    },
    tabButton: {
      paddingVertical: hp(1),
      paddingHorizontal: wp(5),
      borderRadius: wp(5),
      backgroundColor: '#e5e5e5',
      marginHorizontal: wp(2),
    },
    activeTab: { backgroundColor: '#14532d' },
    tabText: { fontSize: wp(3.5), fontWeight: '600', color: '#333' },
    activeTabText: { color: '#fff' },

    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(3),
      marginBottom: hp(1.5),
    },
    backButton: {
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(5),
    },
    headerTitleContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between', // ensures + icon moves to right
    },

    headerTitle: {
      fontSize: wp(5),
      fontFamily: 'Poppins-Bold',
      color: '#222',
    },

    Addbtn: {
      width: wp(8),
      height: wp(8),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(5),
      backgroundColor: '#14532d',
      left: wp(8),
    },

    AddIcon: {
      width: wp(4),
      height: wp(4),
    },
    avatar: {
      width: wp(12),
      height: wp(12),
      borderRadius: wp(6),
      marginRight: wp(3),
    },
    textContainer: { flex: 1 },
    sessionTitle: {
      fontSize: wp(4),
      fontWeight: 'bold',
      color: '#000',
      marginBottom: hp(0.5),
    },
    sessionDate: { fontSize: wp(3.5), color: '#666' },
  });
}
