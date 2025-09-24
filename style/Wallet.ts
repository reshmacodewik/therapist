// screens/wallet/wallet.styles.ts
import { Platform, StyleSheet } from "react-native";
import { cardShadow, colors} from "../src/Theme/Const/color";



export const walletStyles = (wp: any, hp: any) =>
  StyleSheet.create({
    
    bg: { flex: 1, },
    container: { paddingHorizontal: wp(4), paddingTop: hp(2) },
    // header
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: hp(1),
      marginBottom: hp(2),
      marginLeft:wp(-2)
    },
    headerBtn: { width: wp(9), height: wp(9), justifyContent: "center", alignItems: "center" },
    headerTitle: {
      flex: 1,
      fontSize: wp(4.6),
      fontFamily: "Poppins-Bold",
      color: colors.text,
    },

    // balance card
    balanceCard: {
      borderRadius: wp(3.5),
      paddingVertical: hp(4),
      paddingHorizontal: wp(3),
      ...cardShadow,
    },
    balanceRow: { flexDirection: "row", alignItems: "center", gap: wp(2.4), marginBottom: hp(0.5),alignContent:'center',justifyContent:'center' },
    balanceLabel: { color: colors.white, fontSize:22, fontFamily: "Poppins-SemiBold",textAlign:'center' },
    balanceValue: { color: colors.white, fontSize: 40, fontFamily: "Poppins-ExtraBold" },

    // section
    sectionTitle: {
      marginTop: hp(2.2),
      marginBottom: hp(1),
      fontSize: 14,
      color: colors.text,
      fontFamily: "Poppins-SemiBold",
    },

    // list
    listPad: { paddingBottom: hp(15) },

    // transaction card
    txnCard: {
      backgroundColor: colors.white,
      borderRadius: wp(3.2),
      padding: wp(4),
      flexDirection: "row",
      alignItems: "center",
      marginBottom: hp(1.2),
      ...cardShadow,
    },
    pill: {
      width: wp(12),
      height: wp(12),
      borderRadius: wp(3),
      alignItems: "center",
      justifyContent: "center",
      marginRight: wp(3.2),
    },
    pill_peach: { backgroundColor: colors.peach },
    pill_lilac: { backgroundColor: colors.lilac },
    pill_mint: { backgroundColor: colors.mint },
    pillText: { fontFamily: "Poppins-Bold", color: "#6B6B6B", fontSize: wp(3.2) },

    txnInfo: { flex: 1 },
    txnTitle: { fontSize: wp(3.8), color: colors.text, fontFamily: "Poppins-Bold" },
    txnTime: { fontSize: wp(3), color: colors.sub, fontFamily: "Poppins-Medium", marginTop: hp(0.2) },

    txnAmount: { fontSize: wp(3.8), fontFamily: "Poppins-ExtraBold" },
    amtPos: { color: colors.green },
    amtNeg: { color: colors.red },

    // bottom button
    bottomWrap: { position: "absolute", left: wp(4), right: wp(4), bottom: hp(2.5) },
    cta: {
      backgroundColor: colors.cta,
      borderRadius: wp(8),
      paddingVertical: hp(1.9),
      alignItems: "center",
      justifyContent: "center",
      ...cardShadow,
    },
    ctaText: { color: colors.white, fontSize: wp(4.4), fontFamily: "Poppins-ExtraBold" },
  });


