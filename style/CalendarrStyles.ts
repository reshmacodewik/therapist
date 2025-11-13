import { StyleSheet } from 'react-native';
import { colors } from '../src/Theme/Const/color';
import { COLORS } from '../src/const/colors';

export default function createStyles(
  wp: (v: number) => number,
  hp: (v: number) => number,
) {
  return StyleSheet.create({
    bgimg: { flex: 1, width: '100%', height: '100%' },
    container: { flex: 1, paddingHorizontal: wp(5), paddingTop: hp(5) },

    // Header
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(2.5),
      marginBottom: hp(2),
    },
    headerTitle: { fontSize: wp(6), fontWeight: '700', color: '#000' },

    // Calendar card
    calendarCard: {
      backgroundColor: '#fff',
      borderRadius: wp(4),
      paddingBottom: hp(2),
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 10,
      elevation: 3,
      overflow: 'hidden',
      padding: wp(3),
    },
    calendarHero: {
      backgroundColor: '#1f4a35', // deep green
      paddingHorizontal: wp(4),
      paddingVertical: hp(2.2),
    },
    heroYear: {
      color: 'rgba(255,255,255,0.7)',
      fontWeight: '700',
      fontSize: wp(4),
      marginBottom: hp(0.6),
    },
    heroDate: {
      color: '#fff',
      fontWeight: '700',
      fontSize: wp(5),
      textTransform: 'capitalize',
    },

    monthHeader: {
      marginTop: hp(2),
      paddingHorizontal: wp(4),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    monthTitle: {
      fontSize: wp(5),
      fontWeight: '700',
      color: '#1f4a35',
    },

    weekRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: wp(6),
      marginTop: hp(1.8),
    },
    weekText: {
      width: `${100 / 7}%`,
      textAlign: 'center',
      fontWeight: '700',
      color: '#1f4a35',
      fontSize: wp(3.6),
    },

    daysGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      rowGap: hp(2.2),
      paddingHorizontal: wp(6),
      paddingVertical: hp(2),
    },
    dayCell: {
      width: `${100 / 7}%`,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dayText: {
      fontSize: wp(3.8),
      fontWeight: '600',
      color: '#1f4a35',
    },
    dayMuted: { color: 'rgba(31, 74, 53, 0.45)' },
    dayUnderline: {
      textDecorationLine: 'underline',
      textDecorationColor: '#1f4a35',
      textDecorationStyle: 'solid',
    },

    // Section heading
    sectionHeading: {
      fontSize: wp(5),
      fontWeight: '700',
      color: '#000',
      marginTop: hp(2.5),
      marginBottom: hp(1.2),
    },

    // Appointment Card
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderRadius: wp(4),
      paddingVertical: hp(1.6),
      paddingHorizontal: wp(4),
      marginBottom: hp(1.5),
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 2,
    },
    cardLeft: { flexDirection: 'row', alignItems: 'center', gap: wp(3) },

    cardTextWrap: { justifyContent: 'center' },
    cardName: { fontSize: wp(4.8), fontWeight: '700', color: '#000' },
    timeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: hp(0.4),
      gap: wp(1.5),
    },
 
    timeText: { fontSize: wp(4), color: 'rgba(0,0,0,0.5)', fontWeight: '600' },

    cardRight: { alignItems: 'flex-end' },
    statusPill: {
      borderRadius: wp(5),
      paddingVertical: hp(0.6),
      paddingHorizontal: wp(3),
      marginLeft:hp(1),
      marginBottom: hp(1),
      marginTop:hp(0)
    },
    statusConfirmed: { backgroundColor: '#0b0f1a' }, // dark navy/blackish
    statusPending: { backgroundColor: '#e6e6e6' },

    statusText: {
      color: '#fff',
      fontSize: wp(3.6),
      fontWeight: '600',
      textTransform: 'capitalize',
    },

    actionIcons: { flexDirection: 'row', alignItems: 'center', gap: wp(4) },
    actIcon: { color: '#1f4a35' },
    calendarContainer: {
      borderRadius: wp(4),
      padding: wp(1),
      height:hp(40)
    },
    customCalendarHeader: {
      backgroundColor: '#264734',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      paddingVertical: hp(0.5),
      paddingBottom: wp(1),
      paddingHorizontal: wp(2),
    },
    calendarHeaderYear: {
      color: '#BFC9C6',
      fontSize: 15,
      fontFamily: 'Montserrat-Medium',
    },
    calendarHeaderDate: {
      color: '#fff',
      fontSize: 16,
      fontFamily: 'Poppins-Bold',
      marginTop: hp(0.5),
    },
    calendarNav: {
      fontSize: 16,
      color: '#264734',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: wp(0),
      marginTop: hp(1),
      paddingVertical: hp(0),
    },
    calendarGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: hp(1),
 
    },
    calendarDay: {
      width: '13%',
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: wp(2),
      marginBottom: hp(1),
      marginTop: hp(-1),
      padding: hp(0.6),
    },
    calendarDaySelected: {
      borderRadius: wp(10),
    },
    calendarDayText: {
      fontSize: 16,
      color: '#222',
      fontFamily: 'Montserrat-Medium',
    },
    calendarDayTextSelected: {
      color: '#000',
      fontFamily: 'Montserrat-Bold',
    },
    cardWide: {
        marginTop: hp(1),
        marginHorizontal: wp(0),
        backgroundColor: COLORS.CARD,
        borderRadius: wp(4),
        padding: wp(3),
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
      },
    
      row: { flexDirection: 'row', alignItems: 'center' },
    
      avatar: {
        width: wp(12),
        height: wp(12),
        borderRadius: wp(2.6),
        marginRight: wp(3),
      },
    
      nameRow: { flexDirection: 'row', alignItems: 'center', gap: wp(2) },
      nameTxt: { fontSize: wp(4.2), color: COLORS.TEXT, fontWeight: '700' },
      pill: {
        paddingHorizontal: wp(2.6),
        paddingVertical: hp(0.4),
        borderRadius: wp(4),
        backgroundColor:COLORS. PRIMARY_LIGHT,
        color:COLORS.HINT,
        marginLeft: wp(2),
        fontSize: wp(3.2),
        overflow: 'hidden',
      },
    
      metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: hp(0.2) },
      clockIcon: {
        width: wp(5),
        height: wp(5),
        marginRight: wp(1),
      },
      dot: {
        width: wp(2),
        height: wp(2),
        borderRadius: wp(1),
        backgroundColor: '#87A99B',
        marginRight: wp(1.8),
      },
      metaTxt: { color: COLORS.HINT, fontSize: wp(3.5) },
    
      iconRow: { flexDirection: 'row', alignItems: 'center', marginLeft: wp(2) },
      circleIcon: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconGlyph: { width: wp(7), height: wp(7) },
    
      subHead: {
        color: COLORS.PRIMARY,
        fontWeight: '700',
        marginBottom: hp(0.6),
        fontSize: wp(3.8),
      },
      bulletRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(0.6),
        marginLeft: wp(2),
      },
      bulletRow1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(2),
        marginLeft: wp(2),
      },
      bulletDot: {
        width: wp(1),
        height: wp(1),
        borderRadius: wp(0.8),
        backgroundColor: COLORS.TEXT,
        marginRight: wp(2),
      },
      bulletTxt: { color: COLORS.TEXT, fontSize: wp(3.6) },
  });
}
