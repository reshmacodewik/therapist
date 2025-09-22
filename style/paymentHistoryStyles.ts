import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  bg: { flex: 1 },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingTop: hp(3),
    paddingBottom: hp(1.2),
  },
  backBtn: {
    width: wp(9),
    height: wp(9),
    borderRadius: wp(4.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
   
    fontSize: wp(5),
    fontWeight: '700',
    color: '#111827',
  },
  filterBtn: {
    width: wp(9),
    height: wp(9),
    alignItems: 'center',
    justifyContent: 'center',
  },

  listPad: {
    paddingHorizontal: wp(4),
    paddingBottom: hp(4),
  },

  // Month header row
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(1.6),
    marginBottom: hp(1),
    paddingHorizontal: wp(1),
  },
  sectionTitle: {
    fontSize: wp(4.4),
    fontWeight: '700',
    color: '#0F172A',
  },
  sectionTotal: {
    fontSize: wp(4.4),
    fontWeight: '700',
    color: '#0F172A',
  },

  // Card
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(3.2),
    backgroundColor: '#FFFFFF',
    borderRadius: wp(4),
    marginBottom: hp(1.2),
   
  },
  badge: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(3.5),
  },
  badgeTxt: {
    fontSize: wp(3.4),
    color: '#6B7280',
    fontWeight: '700',
  },
  cardMid: { flex: 1 },
  cardTitle: {
    fontSize: wp(4),
    color: '#111827',
    fontWeight: '600',
    marginBottom: hp(0.2),
  },
  cardSub: {
    fontSize: wp(3.2),
    color: '#9CA3AF',
  },
  amount: {
    fontSize: wp(3.8),
    fontWeight: '700',
  },
  amountPos: { color: '#16A34A' },
  amountNeg: { color: '#EF4444' },
});
