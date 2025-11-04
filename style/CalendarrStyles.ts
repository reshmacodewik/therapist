import { StyleSheet } from "react-native";

export default function createStyles(
  wp: (v: number) => number,
  hp: (v: number) => number
) {
  return StyleSheet.create({
    bgimg: { flex: 1, width: "100%", height: "100%" },
    container: { flex: 1, paddingHorizontal: wp(5), paddingTop: hp(3) },

    // Header
    header: {
      flexDirection: "row",
      alignItems: "center",
      gap: wp(2.5),
      marginBottom: hp(2),
    },
    headerTitle: { fontSize: wp(6), fontWeight: "700", color: "#000" },

    // Calendar card
    calendarCard: {
      backgroundColor: "#fff",
      borderRadius: wp(4),
      paddingBottom: hp(2),
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 10,
      elevation: 3,
      overflow: "hidden",
    },
    calendarHero: {
      backgroundColor: "#1f4a35", // deep green
      paddingHorizontal: wp(4),
      paddingVertical: hp(2.2),
    },
    heroYear: {
      color: "rgba(255,255,255,0.7)",
      fontWeight: "700",
      fontSize: wp(4),
      marginBottom: hp(0.6),
    },
    heroDate: {
      color: "#fff",
      fontWeight: "700",
      fontSize: wp(5),
      textTransform: "capitalize",
    },

    monthHeader: {
      marginTop: hp(2),
      paddingHorizontal: wp(4),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    monthTitle: {
      fontSize: wp(5),
      fontWeight: "700",
      color: "#1f4a35",
    },

    weekRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: wp(6),
      marginTop: hp(1.8),
    },
    weekText: {
      width: `${100 / 7}%`,
      textAlign: "center",
      fontWeight: "700",
      color: "#1f4a35",
      fontSize: wp(3.6),
    },

    daysGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      rowGap: hp(2.2),
      paddingHorizontal: wp(6),
      paddingVertical: hp(2),
    },
    dayCell: {
      width: `${100 / 7}%`,
      alignItems: "center",
      justifyContent: "center",
    },
    dayText: {
      fontSize: wp(3.8),
      fontWeight: "600",
      color: "#1f4a35",
    },
    dayMuted: { color: "rgba(31, 74, 53, 0.45)" },
    dayUnderline: {
      textDecorationLine: "underline",
      textDecorationColor: "#1f4a35",
      textDecorationStyle: "solid",
    },

    // Section heading
    sectionHeading: {
      fontSize: wp(5),
      fontWeight: "700",
      color: "#000",
      marginTop: hp(2.5),
      marginBottom: hp(1.2),
    },

    // Appointment Card
    card: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#fff",
      borderRadius: wp(4),
      paddingVertical: hp(1.6),
      paddingHorizontal: wp(4),
      marginBottom: hp(1.5),
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 2,
    },
    cardLeft: { flexDirection: "row", alignItems: "center", gap: wp(3) },
    avatar: { width: wp(14), height: wp(14), borderRadius: wp(7) },
    cardTextWrap: { justifyContent: "center" },
    cardName: { fontSize: wp(4.8), fontWeight: "700", color: "#000" },
    timeRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: hp(0.4),
      gap: wp(1.5),
    },
    clockIcon: { marginTop: hp(0.2) },
    timeText: { fontSize: wp(4), color: "rgba(0,0,0,0.5)", fontWeight: "600" },

    cardRight: { alignItems: "flex-end" },
    statusPill: {
      borderRadius: wp(5),
      paddingVertical: hp(0.6),
      paddingHorizontal: wp(3.5),
      alignSelf: "flex-end",
      marginBottom: hp(1),
    },
    statusConfirmed: { backgroundColor: "#0b0f1a" }, // dark navy/blackish
    statusPending: { backgroundColor: "#e6e6e6" },

    statusText: {
      color: "#fff",
      fontSize: wp(3.6),
      fontWeight: "600",
      textTransform: "capitalize",
    },

    actionIcons: { flexDirection: "row", alignItems: "center", gap: wp(4) },
    actIcon: { color: "#1f4a35" },
  });
}
