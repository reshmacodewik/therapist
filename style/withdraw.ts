import { StyleSheet } from "react-native";
import { cardShadow, colors } from "../src/Theme/Const/color";

export const withdrawStyles = (wp: any, hp: any) =>
  StyleSheet.create({
    
    bg: { flex: 1, paddingHorizontal: wp(4), paddingTop: hp(3) },

    // header
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: hp(1),
      marginBottom: hp(2.2),
      marginLeft: wp(-3),
    },
    headerBtn: { width: wp(9), height: wp(9), justifyContent: "center", alignItems: "center" },
    headerTitle: {
      flex: 1,
     
      fontSize: wp(4.6),
      fontFamily: "Poppins-Bold",
      color: colors.text,
    },

    // labels
    label: {
      fontSize: 18,
      color: colors.text,
      fontWeight:'400',
      marginBottom: hp(0.6),
    },
    available: { fontSize: wp(6), color: colors.text, fontFamily: "Poppins-Bold",fontWeight:'bold' },

    // input
    input: {
      borderRadius: wp(10),
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: wp(4),
      paddingVertical: hp(1.8),
      fontSize: wp(3.8),
      backgroundColor: "#fff",
      fontFamily: "Poppins-Medium",
    },

    // bank selection card
    bankCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: wp(3.2),
      borderWidth: 1,
      borderColor: colors.border,
      padding: wp(3.6),
      
    },
    bankIconWrap: {
      width: wp(12),
      height: wp(12),
      borderRadius: wp(2.8),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000",
      marginRight: wp(3),
    },
    bankIcon: { width: "70%", height: "70%" },
    bankTitle: { fontSize: 15, fontFamily: "Poppins-Bold", color: colors.text },
    bankSub: { fontSize: 14, fontFamily: "Poppins-Medium", color: colors.text, marginTop: hp(0.3) },

    // add new account row
    addRow: {
      marginTop: hp(1),
      borderWidth: 1,
      borderStyle: "dashed",
      borderColor: colors.text,
      borderRadius: wp(3.2),
      paddingHorizontal: wp(3.6),
      paddingVertical: hp(2),
      backgroundColor: "#fff",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    
    },
    addLabel: { flex: 1, marginLeft: wp(2), fontSize: wp(3.8), fontFamily: "Poppins-Medium" },

    // footer buttons
    footerRow: {
      flexDirection: "row",
      gap: wp(3),
      justifyContent: "space-between",
      position: "absolute",
      left: wp(4),
      right: wp(4),
      bottom: hp(2.5),
    },
    outlineBtn: {
      flex: 1,
      borderRadius: wp(3.2),
      borderWidth: 1,
      borderColor: colors.cta,
      backgroundColor: "#fff",
      paddingVertical: hp(1.8),
      alignItems: "center",
      justifyContent: "center",
    },
    outlineText: { fontSize: wp(4), fontFamily: "Poppins-SemiBold", color: colors.cta },
    filledBtn: {
      flex: 1,
      borderRadius: wp(3.2),
      backgroundColor: colors.cta,
      paddingVertical: hp(1.8),
      alignItems: "center",
      justifyContent: "center",
      ...cardShadow,
    },
    filledText: { fontSize: wp(4), fontFamily: "Poppins-ExtraBold", color: "#fff" },


    //// Modal Css

     modalBackdrop: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.35)",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: wp(6),
    },
    modalCard: {
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: wp(4),
      paddingHorizontal: wp(6),
      paddingTop: hp(3),
      paddingBottom: hp(2.2),
      alignItems: "center",
      ...cardShadow,
    },
    modalIcon: {
      width: wp(18),
      height: wp(18),
      marginBottom: hp(1.2),
    },
    modalTitle: {
      fontSize: wp(5),
      color: colors.text,
      fontFamily: "Poppins-ExtraBold",
      marginBottom: hp(0.6),
      textAlign: "center",
    },
    modalText: {
      fontSize: wp(3.4),
      color: "#6B7280",
      fontFamily: "Poppins-Medium",
      textAlign: "center",
      lineHeight: hp(2.6),
      marginBottom: hp(2.4),
    },
    modalCta: {
      width: "100%",
      backgroundColor: "#274A3F",
      borderRadius: wp(8),
      paddingVertical: hp(1.8),
      alignItems: "center",
      justifyContent: "center",
      ...cardShadow,
    },
    modalCtaText: {
      color: "#fff",
      fontSize: wp(4.2),
      fontFamily: "Poppins-ExtraBold",
    },
  });