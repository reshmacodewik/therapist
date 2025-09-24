import { StyleSheet } from "react-native";

export const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    card: {
      backgroundColor: "#FFFFFF",
      borderRadius: wp(4),
      padding: wp(4),
      marginBottom: hp(2),
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5, // for android shadow effect
    },
    profileRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: hp(1),
    },
    avatar: {
      width: wp(12),
      height: wp(12),
      borderRadius: wp(6),
    },
    name: {
      fontSize: 16,
      fontWeight: "700",
      color: "#1B3B2D",
    },
    sessionTime: {
      fontSize: 14,
      color: "#25493B",
      fontWeight: "500",
    },
    buttonRow: {
      flexDirection: "row",
      gap: wp(3),
      justifyContent: "flex-end",
    },
    viewProfileBtn: {
      backgroundColor: "#264734",
      paddingVertical: hp(1.2),
      paddingHorizontal: wp(3),
      borderRadius: wp(5),
      height: hp(3.8),
    },
    rescheduleBtn: {
      backgroundColor: "#fff",
      paddingVertical: hp(1.2),
      paddingHorizontal: wp(3),
      borderRadius: wp(5),
      borderWidth: 1,
      borderColor: "#264734",
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize: wp(3.4),
      fontWeight: "600",
    },
  });
