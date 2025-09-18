import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from 'react-native';
type WP = (n: number) => number;
type HP = (n: number) => number;

export default function createStyles(wp: WP, hp: HP) {
  const styles = StyleSheet.create({
    bgimg: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      padding: 16,
      marginTop: hp(1),
    },

    scrollContainer: {
      paddingHorizontal: wp(5),
      paddingTop: hp(2),
      paddingBottom: hp(12), // leave space for bottom nav
    } as ViewStyle,
    titleContainer: {
      marginTop: hp(-1.5),
      marginBottom: hp(2),
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      marginLeft:wp(-2)
    },
    title: {
      fontSize: wp(5),
      fontWeight: 'bold',
      color: '#000',
      lineHeight: hp(2.8),
      marginHorizontal: wp(0),
       marginLeft:wp(-2)
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(1.5),
    } as ViewStyle,

    logo: {
      width: wp(30),
      height: hp(6),
    } as ImageStyle,

    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(3),
    } as ViewStyle,

    profile: {
      width: wp(10),
      height: wp(10),
      borderRadius: wp(5),
      marginLeft: wp(3),
    } as ImageStyle,

    welcome: {
      fontSize: wp(4.2),
      fontWeight: '600',
      color: '#0A3D2E',
      marginTop: hp(1),
    } as TextStyle,

    username: {
      fontSize: wp(5.2),
      fontWeight: '800',
      color: '#0A3D2E',
      marginBottom: hp(1.2),
    } as TextStyle,

    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: hp(1),
      marginBottom: hp(1.5),
    } as ViewStyle,

    screenTitle: {
      fontSize: wp(6),
      fontWeight: '800',
      marginLeft: wp(1.2),
      color: '#000',
    } as TextStyle,

    filterLabel: {
      fontSize: wp(4),
      fontWeight: '600',
      marginTop: hp(0),
      marginBottom: hp(1),
      color: '#000',
    } as TextStyle,

    filterRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(3),
      marginBottom: hp(2),
    } as ViewStyle,
  
    filterBtn: {
      backgroundColor: '#DCDCDC',
      paddingHorizontal: wp(4),
      paddingVertical: hp(1.2),
      borderRadius: wp(6),
      minWidth: wp(18),
      alignItems: 'center',
    } as ViewStyle,

    filterBtnActive: {
      backgroundColor: '#0A3D2E',
    } as ViewStyle,

    filterBtnText: {
      fontSize: wp(3.2),
      color: '#333',
      fontWeight: '600',
    } as TextStyle,

    filterBtnTextActive: {
      color: '#fff',
    } as TextStyle,

    listContent: {
      paddingBottom: hp(1),
    } as ViewStyle,

    attendeeRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: hp(1),
    } as ViewStyle,

    avatarAndInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    } as ViewStyle,

    avatar: {
      width: wp(12),
      height: wp(12),
      borderRadius: wp(6),
      marginRight: wp(3),
    } as ImageStyle,

    nameBlock: {
      justifyContent: 'center',
    } as ViewStyle,

    attendeeName: {
      fontSize: wp(3.6),
      fontWeight: '700',
      color: '#000',
    } as TextStyle,

    attendeeStatus: {
      fontSize: wp(3.2),
      color: '#000',
      marginTop: hp(0.2),
      fontWeight: '500',
    } as TextStyle,

    rowSeparator: {
      height: hp(0.6),
    } as ViewStyle,

    toggleContainer: {
      width: wp(12),
      height: hp(3.5),
      borderRadius: hp(3.5) / 2,
      padding: 2,
    },
    toggleCircle: {
      width: hp(2.8),
      height: hp(2.8),
      borderRadius: hp(2.8) / 2,
    },

    toggleContainerActive: {
      backgroundColor: '#D7EDE2',
      alignItems: 'flex-end',
    } as ViewStyle,

    toggleDot: {
      width: wp(3.6),
      height: wp(3.6),
      borderRadius: wp(1.8),
      backgroundColor: '#FFF',
      alignSelf: 'flex-start',
      marginLeft: wp(0.4),
    } as ViewStyle,

    toggleDotActive: {
      backgroundColor: '#0A3D2E',
      marginRight: wp(0.4),
    } as ViewStyle,

    actionsRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp(2),
      marginBottom: hp(3),
      gap:15
    } as ViewStyle,

    selectAllBtn: {
      backgroundColor: '#D6D6D6',
      paddingVertical: hp(1),
      paddingHorizontal: wp(6),
      borderRadius: wp(8),
      minWidth: wp(40),
      alignItems: 'center',
    } as ViewStyle,

    selectAllText: {
      fontSize: wp(3.6),
      color: '#fff',
      fontWeight: '700',
    } as TextStyle,

    confirmBtn: {
      backgroundColor: '#0A3D2E',
      paddingVertical: hp(1),
      paddingHorizontal: wp(6),
      borderRadius: wp(8),
      minWidth: wp(40),
      alignItems: 'center',
    } as ViewStyle,

    confirmBtnText: {
      fontSize: wp(3.6),
      color: '#fff',
      fontWeight: '700',
    } as TextStyle,

    bottomNavWrapper: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'transparent',
    } as ViewStyle,

    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopWidth: 1,
      borderColor: '#eee',
      paddingVertical: hp(1.2),
      backgroundColor: '#fff',
    } as ViewStyle,

    navItem: {
      alignItems: 'center',
      justifyContent: 'center',
    } as ViewStyle,

    navText: {
      fontSize: wp(3),
      color: '#999',
      marginTop: hp(0.2),
    } as TextStyle,

    navActive: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: wp(3),
      borderRadius: wp(10),
      backgroundColor: '#0A3D2E',
    } as ViewStyle,

    navActiveText: {
      fontSize: wp(3),
      color: '#fff',
      marginTop: hp(0.2),
    } as TextStyle,
  });

  // export small helper (so TS doesn't complain where numeric icon size is needed)
  // Not part of stylesheet but helpful where needed
  return styles;
}
