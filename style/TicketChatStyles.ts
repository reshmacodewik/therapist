import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    backgroundColor: '#fff',
  },

  headerTitle: {
    flex: 1,
    marginLeft: wp(3),
    fontSize: wp(4.5),
    fontWeight: '600',
    color: '#111',
    marginTop: hp(2),
  },

  statusBadge: {
    backgroundColor: '#1F5F3B',
    paddingHorizontal: wp(4),
    paddingVertical: hp(0.8),
    borderRadius: wp(10),
    marginTop: hp(2),
  },

  statusText: {
    color: '#fff',
    fontSize: wp(3.5),
    fontWeight: '500',
  },

  chatContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
    paddingBottom: hp(10),
  },

  messageRow: {
    flexDirection: 'row',
    marginBottom: hp(2),
    alignItems: 'flex-end',
  },

  leftAlign: {
    justifyContent: 'flex-start',
  },

  rightAlign: {
    justifyContent: 'flex-end',
  },

  avatar: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(4),
    marginHorizontal: wp(2),

    alignSelf: 'flex-start',
  },

  bubble: {
    maxWidth: wp(70),
    padding: wp(4),
    borderRadius: wp(4),
  },

  supportBubble: {
    backgroundColor: '#fff',
  },

  userBubble: {
    backgroundColor: '#fff',
  },

  sender: {
    fontSize: wp(3.8),
    fontWeight: '600',
    marginBottom: hp(0.5),
    color: '#111',
  },

  messageText: {
    fontSize: wp(4),
    color: '#1F2937',
  },

  time: {
    marginTop: hp(0.8),
    fontSize: wp(3),
    color: '#6B7280',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    backgroundColor: '#ffff',
  },
  inputWrapper: {
    position: 'absolute',
    bottom: hp(2),
    left: wp(4),
    right: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: wp(8),
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    height: hp(5.5),
  },

  addBtn: {
    marginRight: wp(2),
  },

  input: {
    flex: 1,
    fontSize: wp(4),
    paddingVertical: hp(1),
    color: '#111',
  },

  sendBtn: {
    borderRadius: wp(6),
    tintColor: '#000',
  },
  backBtn: {
    marginTop: wp(5),
  },
});

export default styles;
