import { StyleSheet } from "react-native";

export const createEditSessionStyles = (wp: any, hp: any) =>
  StyleSheet.create({
      container: {
        flex: 1,
        padding: 16,
        marginTop: hp(1),
      },
    
      titleContainer: {
       
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
        marginLeft: wp(-1),
      },
    scroll: {
      padding: wp(5),
    },
    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: hp(2),
    },
    headerText: {
      fontSize: wp(5),
      fontWeight: "700",
      marginLeft: wp(3),
    },
    label: {
      fontSize: wp(4),
      fontWeight: "600",
      marginBottom: hp(1),
      marginTop: hp(2),
    },
    subLabel: {
      fontSize: wp(3.5),
      fontWeight: "500",
    },
    input: {
      
      borderRadius: wp(10),
      padding: wp(3),
      fontSize: wp(3.8),
      backgroundColor: "#fff",
    },
    textArea: {
      height: hp(6),
    },
    dropdown: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: wp(8),
      padding: wp(3),
      backgroundColor: "#fff",
    },
    dropdownText: {
      fontSize: wp(3.8),
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: hp(1),
    },
    datePicker: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
     
      borderRadius: wp(4),
      padding: wp(3),
      marginRight: wp(2),
      backgroundColor: "#fff",
    },
    timePicker: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      
      borderRadius: wp(3),
      padding: wp(3),
      marginLeft: wp(2),
      backgroundColor: "#fff",
    },
    dateText: {
      marginLeft: wp(2),
      fontSize: wp(3.8),
    },
    formatButton: {
      flex: 1,
      paddingVertical: hp(1),
      borderRadius: wp(4),
      borderWidth: 1,
      borderColor: "#0A5735",
      marginRight: wp(2),
      alignItems: "center",
    },
    formatButtonActive: {
      backgroundColor: "#0A5735",
    },
    formatText: {
      fontSize: wp(3.8),
      color: "#0A5735",
      fontWeight: "500",
    },
    formatTextActive: {
      color: "#fff",
    },
    rowBetween: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: hp(1.5),
    },
    priceInput: {
      marginTop: hp(1),
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: wp(3),
      padding: wp(3),
      fontSize: wp(3.8),
      textAlign: "center",
      backgroundColor: "#fff",
    },
    saveButton: {
      marginTop: hp(4),
      backgroundColor: "#0A5735",
      paddingVertical: hp(1.5),
      borderRadius: wp(8),
      alignItems: "center",
      marginHorizontal:wp(10)
    },
    saveButtonText: {
      color: "#fff",
      fontSize: wp(4),
      fontWeight: "600",
    },
  });
