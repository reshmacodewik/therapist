import { StyleSheet } from "react-native";
import { useResponsive } from "../components/Responsive/useResponsive";

const { wp, hp, fontSize, spacing, borderRadius, shadow } = useResponsive();

export const styles = StyleSheet.create({
   bg: {
    flex: 1,
  },
  container: {
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: wp(6),
    paddingTop: hp(5),
   
  },
  innerContainer: {
    backgroundColor: "#FFF",
    padding:20,
    marginTop: hp(5),
    borderRadius: borderRadius(20),
  
 
  },
  title: {
    fontSize: fontSize(20),
    fontWeight: "700",
    color: "#2E4D2E",
    marginBottom: spacing(1),
  },
  subtitle: {
    fontSize: fontSize(14),
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: spacing(3),
    marginTop: spacing(2),
  },
  verifytext:{
    fontSize: fontSize(12),
    fontFamily: "Gabarito-Regular",
    paddingHorizontal: spacing(5),
    marginVertical: hp(1)
    
  },   
  section:{
    marginTop: hp(-1),
  },
  input: {
    width: "100%",
    height: hp(6),
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: borderRadius(25),
    paddingHorizontal: spacing(12),
    fontSize: fontSize(14),
    marginBottom: spacing(3),
    backgroundColor: "#FFF",
  },
  dropdown: {
    width: "100%",
    height: hp(6),
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: borderRadius(20),
    paddingHorizontal: spacing(12),
    marginBottom: spacing(3),
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownText: {
    fontSize: fontSize(14),
    color: "#A0A0A0",
  },
  bio: {
    height: hp(6),
    textAlignVertical: "top",
    paddingTop: spacing(10),
  },
  submitButton: {
    width: "100%",
    height: hp(6),
    borderRadius: borderRadius(30),
    backgroundColor: "#2E4D2E",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
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
    fontWeight: "700",
    color: "#FFF",
  },
});
