import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: hp(6),
    paddingHorizontal: wp(5),
  },
  profileSection: {
    alignItems: "center",
    marginBottom: hp(3),
  },
  profileImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
    marginBottom: hp(1),
  },
  profileName: {
    fontSize: wp(4.5),
    fontWeight: "700",
    color: "#0D1B1E",
  },
  profileEmail: {
    fontSize: wp(3.5),
    color: "#7D7D7D",
    marginTop: hp(0.3),
  },
  divider: {
    height: 1,
    backgroundColor: "#E8E8E8",
    width: "100%",
    marginBottom: hp(2),
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp(1.3),
    borderBottomWidth: 0.5,
    borderBottomColor: "#F0F0F0",
  },
  menuIcon: {
    width: wp(5),
    height: wp(5),
    marginRight: wp(4),
  },
  menuText: {
    fontSize: wp(4),
    color: "#0D1B1E",
    fontWeight: "500",
  },
  settingsBtn: {
    backgroundColor: "#1A5D46",
    borderRadius: wp(2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp(1.5),
    marginTop: hp(3),
  },
  settingsIcon: {
    width: wp(5),
    height: wp(5),
    marginRight: wp(2),
    tintColor: "#fff",
  },
  settingsText: {
    color: "#fff",
    fontSize: wp(4),
    fontWeight: "600",
  },
  logoutSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(3),
  },
  logoutIcon: {
    width: wp(5),
    height: wp(5),
    marginRight: wp(2),
    tintColor: "#E53935",
  },
  logoutText: {
    color: "#E53935",
    fontSize: wp(4),
    fontWeight: "600",
  },
});
