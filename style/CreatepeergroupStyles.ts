import { StyleSheet } from 'react-native';
import { useResponsive } from "../components/Responsive/useResponsive";

const { wp, hp, fontSize, spacing, borderRadius, shadow } = useResponsive();

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
   
    paddingTop: hp(2), // Use numeric value instead of string
  },
   innerContainer: {
 
    padding:20,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: wp(4),

    paddingBottom: hp(10), // Use numeric value instead of string
  },
  titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(1.5),
      marginLeft: hp(-1),
      marginTop: hp(2),
    },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(3), // Use numeric value instead of string
  },
  headerText: {
    fontSize: wp(6), // Use numeric value instead of string
    fontWeight: 'bold',
    color: 'white',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: wp(5), // Use numeric value instead of string
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },

  textarea: {
    height: hp(12), // Use numeric value instead of string
    textAlignVertical: 'top',
  },
  fileButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: hp(1.5), // Use numeric value instead of string
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: hp(2), // Use numeric value instead of string
  },
  fileButtonText: {
    color: '#fff',
    fontSize: wp(4), // Use numeric value instead of string
  },
  fileName: {
    fontSize: wp(4), // Use numeric value instead of string
    color: '#666',
  },

  verifytext: {
    fontSize: fontSize(12), // Use the proper fontSize value
    fontFamily: "Gabarito-Regular",
    paddingHorizontal: spacing(5), // Use proper spacing
    marginVertical: hp(1), // Use numeric value instead of string
  },
  section: {
    marginTop: hp(-1), // Use numeric value instead of string
  },
  input: {
    width: "100%",
    height: hp(6), // Use numeric value instead of string
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: borderRadius(25), // Use numeric value instead of string
    paddingHorizontal: spacing(12), // Use proper spacing value
    fontSize: fontSize(14), // Use proper fontSize value
    marginBottom: spacing(3), // Use proper spacing value
    backgroundColor: "#FFF",
  },
  dropdown: {
    width: "100%",
    height: hp(6), // Use numeric value instead of string
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: borderRadius(20), // Use numeric value instead of string
    paddingHorizontal: spacing(12), // Use proper spacing value
    marginBottom: spacing(3), // Use proper spacing value
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownText: {
    fontSize: fontSize(14), // Use proper fontSize value
    color: "#A0A0A0",
  },
  bio: {
    height: hp(6), // Use numeric value instead of string
    textAlignVertical: "top",
    paddingTop: spacing(10), // Use proper spacing value
  },
  submitButton: {
    width: "100%",
    height: hp(6), // Use numeric value instead of string
    borderRadius: borderRadius(30), // Use numeric value instead of string
    backgroundColor: "#2E4D2E",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    ...shadow, // Using the shadow from useResponsive hook
  },
  submitBtn: {
    width: "100%",
    height: hp(5), // Use numeric value instead of string
    borderRadius: borderRadius(30), // Use numeric value instead of string
    backgroundColor: "#2E4D2E",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: spacing(20), // Use proper spacing value
    ...shadow, // Using the shadow from useResponsive hook
  },
  dateRow: {
    flexDirection: 'row',
    height: hp(6), // Use numeric value instead of string
    justifyContent: 'space-between',
    width: wp(80), // Use numeric value instead of string
    marginBottom: hp(2), // Use numeric value instead of string
  },
  datePicker: {
    flex: 1,
    borderRadius: wp(8), // Use numeric value instead of string
    marginHorizontal: wp(1), // Use numeric value instead of string
    backgroundColor: '#fff',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    justifyContent: 'center',
  },
  submitText: {
    fontSize: fontSize(16), // Use proper fontSize value
    fontWeight: "700",
    color: "#FFF",
  },
});
