import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingTop: hp(5),
    paddingBottom: hp(0),
    marginLeft: wp(-5),
     marginBottom: hp(4),
  },
  backButton: {
    width: wp(10),
    height: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(5),
  },
  headerTitle: {
    fontSize: wp(5),
    fontFamily: 'Poppins-Bold',
    color: '#222',
     justifyContent: 'center',
    alignItems: 'center',
   
  },

  // Labels & Inputs
  label: {
    fontSize: wp(3.6),
    color: '#0F172A',
    marginBottom: hp(1.2),
    marginHorizontal: wp(5),
    fontWeight: '500',
    marginTop: hp(-1.5),
  },
  inputWrap: {
    height: hp(6.4),
    borderRadius: wp(8),
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginHorizontal: wp(5),
    paddingHorizontal: wp(4),
    justifyContent: 'center',
  },
  input: {
    fontSize: wp(3.7),
    color: '#111827',
    paddingVertical: 0,
  },

  // Picker
  pickerWrap: {
    height: hp(6.4),
    borderRadius: wp(8),
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginHorizontal: wp(5),
    paddingHorizontal: wp(2), // room for dropdown icon
    justifyContent: 'center',
  },

  // Add More
  addRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: hp(1),
    marginHorizontal: wp(7),
    gap: wp(1.5), 
  },
  addLabel: {
    fontSize: wp(3.6),
    color: '#111827',
    fontWeight: '500',
  },
removeIcon: {
  position: 'absolute',
  right: wp(3),
  height: '100%',
  justifyContent: 'center',
},

removePickerX: {
  position: 'absolute',
  right: wp(3),
  top: '50%',
  marginTop: -wp(2.5),
},

  // Chips
  chipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: wp(2),
    paddingHorizontal: wp(5),
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2F7',
    borderRadius: wp(10),
    paddingVertical: hp(0.7),
    paddingHorizontal: wp(3),
    maxWidth: '85%',
  },
  chipText: {
    color: '#111827',
    fontSize: wp(3.4),
    maxWidth: '90%',
  },
  chipX: {
    marginLeft: wp(1.5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  // License Row
  licenseRow: {
    height: hp(6.4),
    borderRadius: wp(8),
    marginHorizontal: wp(5),
    backgroundColor: '#F1F5F9',
    paddingHorizontal: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  licenseText: {
    fontSize: wp(3.7),
    color: '#111827',
    letterSpacing: 0.3,
  },
  verifiedPill: {
    borderRadius: wp(5),
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.7),
  },
  verifiedText: {
    color: '#264734',
    fontWeight: '700',
    fontSize: wp(3.2),
  },

  // Text Area
  textAreaWrap: {
    minHeight: hp(14),
    borderRadius: wp(4),
    backgroundColor: '#FFFFFF',
    marginHorizontal: wp(5),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.2),
  },
  textArea: {
    fontSize: wp(3.7),
    color: '#111827',
    textAlignVertical: 'top',
  },

  // CTA
  cta: {
    marginTop: hp(3),
    marginHorizontal: wp(5),
    height: hp(6.8),
    borderRadius: hp(3.4),
    backgroundColor: '#264C3F',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: wp(4.6),
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  // spacing helper
  mtBlock: { marginTop: hp(2) },
});
