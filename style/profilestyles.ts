// styles/profile.styles.ts
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const profileStyles = StyleSheet.create({
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
    marginLeft: wp(-2),
  },
  headerTitle: {
    flex: 1,

    fontSize: wp(5),
    fontWeight: '700',
    color: '#111827',
  },

  

  // profile top
  avatarWrap: {
    width: wp(28),
    height: wp(28),
    borderRadius: wp(14),
   
    overflow: 'hidden',
  },
  name: {
    marginTop: hp(1.4),
    fontSize: wp(5.4),
    fontWeight: '800',
    color: '#0B0B0B',
  },
  meta: { marginTop: hp(0.4), color: '#6B7280', fontSize: wp(3.7) },
  metaSmall: { marginTop: hp(0.6), color: '#86A096', fontSize: wp(3.3) },

  // sections
  sectionHead: { marginTop: hp(2), paddingHorizontal: wp(4) },
  sectionTitle: { fontWeight: '800', color: '#0B0B0B', fontSize: wp(4.3) },

  // card
  card: {
    marginHorizontal: wp(4),
  
    borderRadius: wp(5),
    padding: wp(0),
    marginTop: hp(1),
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  whitecard: {
    marginHorizontal: wp(0),
    backgroundColor: '#FFFFFF',
    padding: wp(4),
    marginTop: hp(1),
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  // wellness scale
  scaleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scaleLabel: { color: '#6B7280', fontSize: wp(3.6) },
  scaleVal: { color: '#6B7280', fontSize: wp(3.6) },
  progressTrack: {
    height: hp(1.2),
    backgroundColor: '#D7E4DD',
    borderRadius: hp(0.8),
    marginTop: hp(1.2),
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#264C3F',
    borderRadius: hp(0.8),
  },

  grid2: {
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: wp(4),
  },
  key: { color: '#86A096', fontSize: wp(3.4), marginBottom: hp(0.4) },
  val: { color: '#0B0B0B', fontSize: wp(3.8), lineHeight: wp(5) },

  // rows
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(1.6),
  },
  rowLeft: { color: '#0B0B0B', fontSize: wp(4.2), fontWeight: '600' },
  rowRight: { color: '#86A096', fontSize: wp(3.6), marginRight: wp(1) },
  arrow: { color: '#86A096', fontSize: wp(5) },

  // goals
  goalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1.4),
    gap: wp(2),
  },
  goalTitle: { color: '#0B0B0B', fontSize: wp(4.1), fontWeight: '600' },
  goalSub: { color: '#86A096', fontSize: wp(3.3), marginTop: hp(0.4) },
  goalTrack: {
    height: hp(0.5),
    backgroundColor: '#E6EFEA',
    borderRadius: hp(0.6),
    marginTop: hp(1),
    overflow: 'hidden',
    flexDirection: 'row',
    width: wp(20),
  },
  goalFill: { height: '100%', backgroundColor: '#99C1B1' },
  goalNum: {
   
    textAlign: 'right',
    color: '#0B0B0B',
    fontWeight: '700',
  },

  // cta
  ctaWrap: { paddingHorizontal: wp(4), marginTop: hp(1.2) },
  
  cta: {
    height: hp(5),
    borderRadius: hp(3.2),
    backgroundColor: '#264C3F',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'flex-end',
    width: wp(35),
  },
  ctaText: { color: '#fff', fontWeight: '800', fontSize: wp(4.2),textAlign:'center' },
  rowBottom: {
  fontSize: wp(3.5),
  color: '#5C8A78',
  marginTop: hp(0.5),
},

});
