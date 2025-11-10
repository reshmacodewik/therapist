import { StyleSheet } from "react-native";

export const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    card: {
      backgroundColor: "#FFFFFF",
      borderRadius: wp(4),
      padding: wp(4),
      marginBottom: hp(2),
      
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
      fontSize: 15,
      fontWeight: "700",
      color: "#1B3B2D",
      marginLeft: wp(2),
    },
    sessionTime: {
      fontSize: 13,
      color: "#25493B",
      fontWeight: "500",
      marginLeft: wp(2),
    },
    buttonRow: {
      flexDirection: "row",
      gap: wp(3),
      justifyContent: "flex-end",
    },
    viewProfileBtn: {
      backgroundColor: "#264734",
      paddingVertical: hp(0.6),
      paddingHorizontal: wp(3),
      borderRadius: wp(5),
      height: hp(3),
    },
    ViewProfilebuttonText: {
      color: "#FFF",
      fontSize: wp(2.8),
      fontWeight: "600",
    },
    rescheduleBtn: {
      backgroundColor: "#fff",
      paddingVertical: hp(0.6),
      paddingHorizontal: wp(3),
      borderRadius: wp(5),
      borderWidth: 1,
      borderColor: "#264734",
       height: hp(3),
    },
    buttonText: {
      color: "#264734",
      fontSize: wp(2.8),
      fontWeight: "600",
    },
  });
