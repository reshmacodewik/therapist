import { StyleSheet } from "react-native";
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  requestWrap: {
    backgroundColor: "#ffffffcc",
    borderRadius: wp(3),
    padding: wp(3),
    marginBottom: hp(1.2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
  },
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    marginRight: wp(3),
    resizeMode: "cover",
  },
  requestText: {
    flex: 1,
  },
  requestName: {
    fontWeight: "700",
    fontSize: wp(3.6),
    color: "#103a2e",
  },
  requestNote: {
    fontSize: wp(3),
    color: "#6b6b6b",
  },
  rightRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(2),
  },
  acceptBtn: {
    backgroundColor: "#143f33",
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(0),
    borderRadius: wp(10),
    marginRight: wp(2),
    width: wp(20),
  },
  acceptText: {
    color: "#fff",
    fontWeight: "700",
    textAlign:'center'
  },
  declineBtn: {
    borderWidth: 1,
    borderColor: "#143f33",
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(0),
    borderRadius: wp(10),
    width: wp(20),
    backgroundColor: "#fff",
  },
  declineText: {
    color: "#143f33",
    fontWeight: "700",
    textAlign:'center'
  },
});
