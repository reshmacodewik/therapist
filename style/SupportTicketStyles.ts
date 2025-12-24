import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingTop: hp(5),
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
    marginLeft: wp(-2),
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginLeft: wp(-5),
  },

  createBtn: {
    backgroundColor: '#1F3D2B',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(6),
  },

  createText: {
    color: '#FFFFFF',
    fontSize: wp(3.4),
    fontWeight: '500',
  },

  filterRow: {
    marginTop: hp(2),
  },

  filterBtn: {
    borderRadius: wp(6),
    borderWidth: 1,
    borderColor: '#1F3D2B',
    marginRight: wp(2),
    height: hp(4),
    width: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },

  filterActive: {
    backgroundColor: '#1F3D2B',
  },

  filterText: {
    fontSize: 12,
    color: '#1F3D2B',
    textAlign: 'center',
  },

  filterTextActive: {
    color: '#FFFFFF',
  },
  ticketList: {
    marginTop: hp(3),
},

});
