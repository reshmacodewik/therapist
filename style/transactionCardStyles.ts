import { StyleSheet } from "react-native";

export const createTransactionCardStyles = (wp: any, hp: any) =>
  StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: wp(3),
    padding: wp(4),
    marginVertical: hp(1),
    marginHorizontal: wp(4),
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(0.5),
  },
  title: {
    fontSize: wp(4),
    fontWeight: "700",
    color: "#000",
  },
  amount: {
    fontSize: wp(4),
    fontWeight: "700",
    color: "#000",
  },
  description: {
    fontSize: wp(3.5),
    color: "#666",
    lineHeight: hp(2.2),
  },
});
