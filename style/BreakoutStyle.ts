import { StyleSheet } from "react-native";

const createStyles = (wp: any, hp: any) =>
  StyleSheet.create({
       bgimg: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      padding: 16,
      marginTop: hp(2),
    },
    titleContainer: {
      marginTop: hp(-1.5),
      marginBottom: hp(2),
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      marginLeft: wp(-2),
    },
    title: {
      fontSize: wp(5),
      fontWeight: 'bold',
      color: '#000',
      lineHeight: hp(2.8),
      marginHorizontal: wp(2),
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: hp(2),
    },
    headerTitle: {
      fontSize: wp(5),
      fontWeight: "600",
      marginLeft: wp(2),
    },
    roomCard: {
      backgroundColor: "#fff",
      padding: wp(4),
      marginBottom: hp(2),
      elevation: 2,
    },
    roomHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: hp(4),
    },
    roomTitle: { fontSize: wp(4.5), fontWeight: "600" },
    editButton: {
      backgroundColor: "#1C4E3F",
      borderRadius: wp(2),
      paddingVertical: hp(0.8),
      paddingHorizontal: wp(3),
    },
    editText: { color: "#fff", fontSize: wp(3.6), fontWeight: "600" },
    memberName: { fontSize: wp(4), marginVertical: hp(0.3), color: "#333",fontWeight: "600" },
    addRoomButton: {
      backgroundColor: "#1C4E3F",
      borderRadius: wp(8),
      paddingVertical: hp(1.5),
      alignItems: "center",
      marginBottom: hp(1.5),
      marginHorizontal:wp(12),
      marginTop:wp(2)
    },
    addRoomText: { color: "#fff", fontSize: wp(4.2), fontWeight: "600" },
    closeAllButton: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: wp(8),
      paddingVertical: hp(1.5),
      alignItems: "center",
      marginHorizontal:wp(12)
    },
    closeAllText: { fontSize: wp(4), fontWeight: "500", color: "#000" },
  });

export default createStyles;
