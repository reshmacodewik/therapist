import { StyleSheet } from "react-native";
import { useResponsive } from "../components/Responsive/useResponsive";


const { wp, hp } = useResponsive();

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingTop: hp(5),
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(2),
    marginLeft: wp(-2),
  },
  backArrow: {
    fontSize: wp(6),
    color: "#000",
    marginRight: wp(2),
  },
  headerText: {
    fontSize: wp(5),
    fontWeight: "600",
    color: "#000",
  },
  label: {
    fontSize: wp(3.8),
    fontWeight: "500",
    color: "#000",
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  input: {
    width: "100%",
    borderRadius: wp(3),
    backgroundColor: "#FFFFFF",
    paddingVertical: hp(1.8),
    paddingHorizontal: wp(4),
    fontSize: wp(3.6),
    color: "#000",
    elevation: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(4),
    marginBottom: hp(4),
  },
  cancelButton: {
    backgroundColor: "#E8EDE6",
    paddingVertical: hp(1),
    paddingHorizontal: wp(6),
    borderRadius: wp(8),
  },
  cancelText: {
    color: "#000",
    fontSize: wp(3.8),
    fontWeight: "500",
  },
  saveButton: {
    backgroundColor: "#184B3E",
    paddingVertical: hp(1),
    paddingHorizontal: wp(6),
    borderRadius: wp(8),
  },
  saveText: {
    color: "#FFFFFF",
    fontSize: wp(3.8),
    fontWeight: "500",
  },
});
