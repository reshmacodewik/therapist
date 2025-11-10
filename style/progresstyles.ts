// styles/progress.styles.ts
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const progressStyles = StyleSheet.create({
  bg: { flex: 1 },

  // header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingTop: hp(3),
    paddingBottom: hp(1.2),
  },
  backBtn: {
    width: wp(9),
    height: wp(9),
    borderRadius: wp(4.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.06)',
  },
  backIcon: { fontSize: wp(6), color: '#0F172A' },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: wp(5),
    fontWeight: '700',
    color: '#111827',
  },

  // card
  card: {
    marginHorizontal: wp(4),
    backgroundColor: '#FFFFFF',
    borderRadius: wp(5),
    padding: wp(4),
    marginTop: hp(1.6),
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: { fontWeight: '700', color: '#0B0B0B', fontSize: wp(4.2) },
  subLabel: { marginTop: hp(1.2), color: '#6B7280', fontSize: wp(3.6) },
  bigNumber: { marginTop: hp(0.6), fontSize: wp(9), fontWeight: '800', color: '#0B0B0B' },
  deltaText: { marginTop: hp(0.6), color: '#6B7280', fontSize: wp(3.5) },
  deltaUp: { color: '#16A34A', fontWeight: '700' },
  deltaDown: { color: '#DC2626', fontWeight: '700' },

  chartWrap: { marginTop: hp(1.6), alignItems: 'center' },
  axisRow: {
    marginTop: hp(0.8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
  },
  axisText: { color: '#9CA3AF', fontSize: wp(3.4) },
});
