import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp(4),
    padding: wp(4),
    marginBottom: hp(2),


   
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: wp(4),
    fontWeight: '600',
    color: '#111827',
    flex: 1,
  },

  statusBadge: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(0.6),
    borderRadius: wp(5),
  },

  Open: {
    backgroundColor: '#1F3D2B',
  },

  InProgress: {
    backgroundColor: '#FDEBD3',
  },

  Resolved: {
    backgroundColor: '#D1D5DB',
  },

  statusText: {
    color: '#FFFFFF',
    fontSize: wp(3.2),
    fontWeight: '500',
  },

  meta: {
    marginTop: hp(0.6),
    fontSize: wp(3.4),
    color: '#6B7280',
  },

  bold: {
    fontWeight: '600',
    color: '#374151',
  },

  footer: {
        marginTop: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  reply: {
    fontSize: wp(3.2),
    color: '#9CA3AF',
  },
});
