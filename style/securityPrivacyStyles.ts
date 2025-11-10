import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: hp(6),
    paddingHorizontal: wp(5),
    backgroundColor: "rgba(255,255,255,0.9)", // light overlay for readability
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(3),
  },
  headerTitle: {
    fontSize: wp(5),
    fontWeight: "700",
    color: "#000",
    marginLeft: wp(3),
  },
  scrollContainer: {
    paddingBottom: hp(10),
  },
  text: {
    fontSize: wp(3.7),
    color: "#333",
    lineHeight: hp(3),
    marginBottom: hp(2),
  },
  agreeButton: {
    position: "absolute",
    bottom: hp(4),
    alignSelf: "center",
    width: wp(90),
    backgroundColor: "#1A5D46",
    borderRadius: wp(3),
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp(1.8),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  agreeText: {
    color: "#fff",
    fontSize: wp(4.2),
    fontWeight: "700",
  },
});
