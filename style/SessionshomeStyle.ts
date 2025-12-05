import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Call in component: const styles = makeSessionStyles(wp, hp);
export const makeSessionStyles = (_wp = wp, _hp = hp) =>
  StyleSheet.create({
    // background wrapper (for ImageBackground)
    bg: {
      flex: 1,
      width: '100%',
      height: '100%',
    },

    // page padding
    container: {
      paddingHorizontal: _wp(4),
      paddingTop: _hp(3),
      paddingBottom: _hp(12),
      gap: _hp(1.5),
    },

    /* ======= Header ======= */
   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(0),
    },
    headerTitle: {
      fontSize: _wp(5),
      fontFamily: 'Poppins-SemiBold',
      color: '#1B1D1C',
    },
    logo: {
      width: wp(40),
      height: hp(6),
      resizeMode: 'contain',
    },
    headerText: {
      fontSize: 22,
      marginTop: hp(-0.5),
      color: '#000',
      marginLeft: hp(1),
      fontFamily: 'Poopins-Bold',
      fontWeight: '700',
    },
    headerIcons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    bellIcon: {
      width: wp(6),
      height: wp(6),
      marginRight: wp(3),
    },
    userIcon: {
      width: wp(8),
      height: wp(8),
      borderRadius: wp(4),
    },
    /* ======= Card ======= */
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: _wp(5.5), // ~22px @ 400w
      padding: _wp(4),
     
      gap: _hp(1.4),
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    /* head row: avatar + name + badge */
    profileRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: _wp(3),
    },
    avatar: {
      width: _wp(12.5),
      height: _wp(12.5),
      borderRadius: _wp(6.25),
    },
    name: {
      fontSize: _wp(4.2),
      color: '#111827',
      fontFamily: 'Poppins-Bold',
      marginBottom: _hp(0.3),
      fontWeight: '700',
    },
    schedule: {
      fontSize: _wp(3.4),
      color: '#000',
      fontFamily: 'Poppins-Medium',
    },

    typeBtn: {
      marginLeft: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: _wp(3.5),
      paddingVertical: _hp(0.8),
      borderRadius: _wp(5),
      gap: _wp(1.8),
    },
    typeBtnText: {
      color: '#FFFFFF',
      fontSize: _wp(3.2),
      fontFamily: 'Poppins-SemiBold',
    },

    /* middle two columns (stack on small) */
    infoRow: {
      flexDirection: 'row',
      gap: _wp(2.5),
    },
    infoBox: {
      flex: 1,
      backgroundColor: '#184D35',
      padding: _wp(3.5),
      borderRadius: _wp(5),
      gap: _hp(0.7),
    },
    infoText: {
      color: '#FFFFFF',
      fontSize: 11,
      fontFamily: 'Poppins-Bold',
      fontWeight:'700'
    },
    bold: {
      fontFamily: 'Poppins-Bold',
    },
    lineRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: _wp(2),
      marginTop: _hp(0),
      marginLeft:wp(0.5)
    },
    lineIcon: {
      marginTop: _hp(0.1),
    },
    lineText: {
      flex: 1,
      color: '#FFFFFF', // use "#264734" if on light box
      fontSize: 10,
      fontFamily: 'Poppins-Bold',
    },

    detailBox: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderRadius: _wp(5),
      borderWidth: 1,
      borderColor: '#264734',
      padding: _wp(3.5),
      gap: _hp(0.6),
    },
    detailTitle: {
      color: '#264734',
      fontSize: 12,
      fontFamily: 'Poppins-Bold',
      fontWeight: '700',
      marginBottom: _hp(0.4),
    },
    detailText: {
      color: '#2C2F2E',
      fontSize: 12,
      fontFamily: 'Poppins-Medium',
      marginBottom: _hp(1),
    },

    /* actions */
    actionRow: {
      flexDirection: 'row',
      alignItems: 'center',

      gap: _wp(2),
      flexWrap: 'wrap',
    },
    btnBase: {
      height: _hp(5.2),
      paddingHorizontal: _wp(4.5),
      borderRadius: _wp(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
    startBtn: {
      backgroundColor: '#183F2E',
      borderRadius: _wp(10),
      paddingVertical: _hp(0.6),
      paddingHorizontal: _wp(3.5),
    },
    startBtnText: {
      color: '#FFFFFF',
      fontSize: _wp(2.9),
      fontFamily: 'Poppins-SemiBold',
    },
    rescheduleBtn: {
      borderWidth: 1,
      borderColor: '#183F2E',
      backgroundColor: '#FFFFFF',
      borderRadius: _wp(10),
      paddingVertical: _hp(0.6),
      paddingHorizontal: _wp(3),
    },
    rescheduleText: {
      color: '#183F2E',
      fontSize: _wp(2.8),
      fontFamily: 'Poppins-SemiBold',
    },
    remindBtn: {
      backgroundColor: '#979797',
      borderRadius: _wp(10),
      paddingVertical: _hp(0.6),
      paddingHorizontal: _wp(3.5),
    },
    remindText: {
      color: '#fff',
      fontSize: _wp(2.8),
      fontFamily: 'Poppins-SemiBold',
    },

    /* bottom tab preview sizes (if you add it) */
    tabIcon: { width: _wp(6.5), height: _wp(6.5) },
  });
