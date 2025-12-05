// styles/reschedule.styles.ts
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PRIMARY = '#264734'; // deep green
const PRIMARY_LIGHT = '#DEDEDE'; // soft green bg
const TEXT = '#0B0B0B';
const SUB = '#6B7280';
const HINT = '#000000';
const CARD = '#FFFFFF';
const BORDER = '#E7EBE8';

export const rescheduleStyles = StyleSheet.create({
  bg: { flex: 1 },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingTop: hp(3),
    paddingBottom: hp(1.4),
  },
  backBtn: {
    width: wp(9),
    height: wp(9),
    borderRadius: wp(4.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp(-2),
  },
  backIcon: { fontSize: wp(6), color: '#0F172A' },
  headerTitle: {
    flex: 1,
   
    fontSize: wp(5),
    fontWeight: '700',
    color: '#111827',
  },

  sectionTitle: {
    fontSize: wp(4.1),
    fontWeight: '800',
    color: TEXT,
    marginTop: hp(1.8),
    paddingHorizontal: wp(4),
    marginBottom: hp(1.2),
  },

  // Cards
  cardWide: {
    marginTop: hp(1),
    marginHorizontal: wp(4),
    backgroundColor: CARD,
    borderRadius: wp(4),
    padding: wp(3.4),
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
  nameTxt: { fontSize: wp(4.2), color: TEXT, fontWeight: '700' },
  pill: {
    paddingHorizontal: wp(2.6),
    paddingVertical: hp(0.4),
    borderRadius: wp(4),
    backgroundColor: PRIMARY_LIGHT,
    color: HINT,
    marginLeft: wp(2),
    fontSize: wp(3.2),
    overflow: 'hidden',
  },

  metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: hp(0.6) },
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
  metaTxt: { color: HINT, fontSize: wp(3.5) },

  iconRow: { flexDirection: 'row', alignItems: 'center', marginLeft: wp(2) },
  circleIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGlyph: { width: wp(7), height: wp(7) },

  subHead: {
    color: PRIMARY,
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
    backgroundColor: TEXT,
    marginRight: wp(2),
  },
  bulletTxt: { color: TEXT, fontSize: wp(3.6) },

  // Calendar
  calendarCard: {
    marginTop: hp(1),
    marginHorizontal: wp(4),
    backgroundColor: CARD,
    borderRadius: wp(4),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: BORDER,
  },

  calTop: {
    backgroundColor: PRIMARY,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.6),
  },
  yearBadge: { color: '#D3E5DB', fontSize: wp(3.4) },
  selDayBadge: {
    color: '#FFFFFF',
    marginTop: hp(0.4),
    fontSize: wp(4),
    fontWeight: '700',
  },

  monthHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3.2),
    paddingVertical: hp(1.4),
  },
  chevBtn: {
    width: wp(9),
    height: wp(9),
    borderRadius: wp(4.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_LIGHT,
  },
  chevTxt: { fontSize: wp(6), color: PRIMARY },
  monthTitle: { fontSize: wp(4.2), color: TEXT, fontWeight: '700' },

  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    marginTop: hp(0.4),
    marginBottom: hp(0.8),
  },
  weekTxt: {
    width: wp(10),
    textAlign: 'center',
    color: SUB,
    fontSize: wp(3.2),
  },

  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    marginBottom: hp(1.2),
  },
  dayCell: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayActive: { backgroundColor: PRIMARY, borderWidth: 1, borderColor: PRIMARY },
  dayTxt: { color: TEXT, fontSize: wp(3.8) },
  dayTxtActive: { color: '#fff', fontWeight: '700' },

  // Slots
  slotCard: {
    marginHorizontal: wp(4),
    backgroundColor: CARD,
    borderRadius: wp(4),
    padding: wp(3),
    marginTop: hp(0.6),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  slotGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: wp(3),
    justifyContent: 'center',
  },
  slotPill: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(0.8),
    borderRadius: wp(7),
    borderWidth: 1.4,
  },
  slotPillIdle: { borderColor: PRIMARY, backgroundColor: '#fff' },
  slotPillActive: { backgroundColor: PRIMARY, borderColor: PRIMARY },
  slotTxt: { fontSize: wp(3.6), color: PRIMARY, fontWeight: '700' },
  slotTxtActive: { color: '#fff' },

  // CTA
  ctaWrap: { paddingHorizontal: wp(4), marginTop: hp(2.2) },
  cta: {
    width: '40%',
    height: hp(6.2),
    borderRadius: hp(2),
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  ctaText: { color: '#fff', fontWeight: '800', fontSize: wp(4.2) },
  calendarContainer: {
    borderRadius: wp(4),
    padding: wp(3.5),
    height: hp(52),
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
    fontSize: 15,
    color: '#264734',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(0),
    paddingVertical: hp(0),
    marginTop: hp(1.8),
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  calendarDay: {
    width: '13%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
    marginBottom: hp(2),
    marginTop: hp(-0.8),
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
});
