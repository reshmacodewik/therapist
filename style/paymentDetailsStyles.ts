import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
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
  },
  headerTitle: {
    flex: 1,
    
    fontSize: wp(5),
    fontWeight: '700',
    color: '#111827',
  },

  scrollPad: {
    paddingHorizontal: wp(6),
    paddingBottom: hp(2),
  },

  // brand badge
  brandBadge: {
    alignSelf: 'center',
    width: wp(20),
    height: wp(20),
    borderRadius: wp(4),
    backgroundColor: '#FBE4CC',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1),
  },
  brandTxt: {
    fontSize: wp(6),
    color: '#1F2937',
    fontWeight: '700',
  },

  fromTxt: {
    marginTop: hp(1.2),
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 1.2,
    color: '#0B0B0B',
    fontWeight: '600',
    fontFamily: 'Quicksand-SemiBold',
  },
  amountBig: {
    marginTop: hp(2.2),
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#0B0B0B',
  },

  statusWrap: {
    marginTop: hp(1.8),
    alignItems: 'center',
  },
  checkCircle: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(7),
    borderWidth: 3,
    borderColor: '#16A34A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusTxt: {
    marginTop: hp(0.6),
    fontSize: wp(4.6),
    color: '#0B0B0B',
    fontWeight: '700',
  },

  divider: {
    height: 1,
    backgroundColor: '#D1D5DB',
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  timeTxt: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: wp(3.6),
    marginBottom: hp(1.4),
  },

  // step card (bank)
  stepCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: wp(4),
    padding: wp(4),
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    marginTop: hp(1),
  },
  stepCol: {
    alignItems: 'center',
    marginRight: wp(3),
  },
  stepBullet: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(4),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  stepNum: {
    fontSize: wp(4),
    color: '#6B7280',
    fontWeight: '700',
  },
  stepLine: {
    width: 2,
    height: hp(5),
    backgroundColor: '#16A34A',
    marginTop: hp(1),
    borderRadius: 1,
  },
  stepBody: { flex: 1 },
  bankTitle: {
    fontSize: wp(4.4),
    fontWeight: '700',
    color: '#111827',
  },
  bankSub: {
    fontSize: wp(3.8),
    color: '#9CA3AF',
    marginTop: hp(0.2),
  },
  bankState: {
    marginTop: hp(0.6),
    fontSize: wp(4),
    color: '#16A34A',
    fontWeight: '700',
  },

  // details card
  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp(4),
    padding: wp(4),
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    marginTop: hp(1.2),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(0.9),
  },
  k: {
    fontSize: wp(4),
    color: '#0F172A',
    fontWeight: '700',
  },
  v: {
    fontSize: wp(4),
    color: '#0F172A',
  },

  // bottom actions
  bottomBar: {
    position: 'absolute',
    left: wp(4),
    right: wp(4),
    bottom: hp(2.2),
    flexDirection: 'row',
    gap: wp(4),
  },
  shareBtn: {
    flex: 1,
    height: hp(5),
    borderRadius: hp(3.4),
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#264C3F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareTxt: {
    fontSize: wp(4.6),
    fontWeight: '700',
    color: '#264C3F',
  },
  doneBtn: {
    flex: 1,
    height: hp(5),
    borderRadius: hp(3.4),
    backgroundColor: '#264C3F',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  doneTxt: {
    fontSize: wp(4.6),
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
