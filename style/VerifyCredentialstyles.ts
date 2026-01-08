import { StyleSheet } from 'react-native';
import { useResponsive } from '../components/Responsive/useResponsive';

const { wp, hp, fontSize, spacing, borderRadius, shadow } = useResponsive();

export const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: wp(2),
    paddingTop: hp(5),
  },
  innerContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    marginTop: hp(5),
    borderRadius: borderRadius(20),

    width: wp(90),
  },
  title: {
    fontSize: fontSize(20),
    fontWeight: '700',
    color: '#2E4D2E',
    marginBottom: spacing(1),
  },
  subtitle: {
    fontSize: fontSize(14),
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: spacing(3),
    marginTop: spacing(2),
  },
  verifytext: {
    fontSize: fontSize(12),
    fontFamily: 'Gabarito-Regular',
    paddingHorizontal: spacing(5),
    marginVertical: hp(1),
  },
  multiOption: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 10,
  paddingHorizontal: 14,
  marginBottom: 8,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#D0D0D0',
  backgroundColor: '#FFFFFF',
},

multiOptionActive: {
  backgroundColor: '#0A5735',
  borderColor: '#0A5735',
},

multiOptionText: {
  fontSize: 14,
  color: '#1F3D2B',
  fontWeight: '500',
},

multiOptionTextActive: {
  color: '#FFFFFF',
},

  section: {
    marginTop: hp(-1),
  },
  input: {
    width: '100%',
    height: hp(6),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: borderRadius(25),
    paddingHorizontal: spacing(12),
    fontSize: fontSize(14),
    marginBottom: spacing(3),
    backgroundColor: '#FFF',
  },
  dropdown: {
    width: '100%',
    height: hp(6),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: borderRadius(20),
    paddingHorizontal: spacing(12),
    marginBottom: spacing(3),
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: fontSize(14),
    color: '#A0A0A0',
  },
  bio: {
    height: hp(6),
    textAlignVertical: 'top',
    paddingTop: spacing(10),
  },
  submitButton: {
    width: '100%',
    height: hp(6),
    borderRadius: borderRadius(30),
    backgroundColor: '#2E4D2E',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing(50),
    marginBottom: spacing(20),
    marginTop: 25,
    ...shadow,
  },
  submitBtn: {
    width: '100%',
    height: hp(5),
    borderRadius: borderRadius(30),
    backgroundColor: '#2E4D2E',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: spacing(20),
    ...shadow,
  },
  dateRow: {
    flexDirection: 'row',
    height: hp(6),
    justifyContent: 'space-between',
    width: wp(80),
    marginBottom: hp(2),
  },
  datePicker: {
    flex: 1,
    borderRadius: wp(8),
    marginHorizontal: wp(1),
    backgroundColor: '#fff',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    justifyContent: 'center',
  },
  submitText: {
    fontSize: fontSize(16),
    fontWeight: '700',
    color: '#FFF',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginRight: spacing(1),
    marginBottom: wp(2),
  },

  uploadSection: {
    marginTop: 18,
  },

  uploadTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2D1F',
    marginBottom: 10,
  },

  uploadBox: {
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#9DB1C9',
    borderRadius: 16,
    paddingVertical: 24,
    backgroundColor: '#FFF',
  },

  uploadInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploadIcon: {
    fontSize: 22,
    color: '#1F3D2B',
    marginBottom: 6,
  },

  uploadText: {
    fontSize: 14,
    color: '#1F3D2B',
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
  },
  previewImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#eee',
  },

  uploadedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#234A34',
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginTop: 12,
  },

  fileName: {
    color: '#FFFFFF',
    fontSize: 15,
    flex: 1,
    marginRight: 12,
  },

  trashIcon: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});
