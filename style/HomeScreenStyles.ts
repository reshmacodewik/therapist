import { StyleSheet } from "react-native";
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  scrollContent: {
    paddingTop: hp(2),
  },
 header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    logo: {
      width: wp(40),
      height: hp(6),
      resizeMode: 'contain',
    },
    headerText: {
      fontSize: 22,
      marginTop: hp(-0.5),
      color: '#000',
      marginLeft: hp(1),
      fontFamily: 'Poopins-Bold',
      fontWeight: '700',
    },
    headerIcons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    bellIcon: {
      width: wp(6),
      height: wp(6),
      marginRight: wp(3),
    },
    userIcon: {
      width: wp(8),
      height: wp(8),
      borderRadius: wp(4),
    },
  avatarText: {
    fontSize: wp(3.6),
  },

  welcomeText: {
    fontSize: wp(5),
    fontWeight: "700",
    color: "#0f3c30",
    marginBottom: hp(2),
    marginTop: hp(1),
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(1.5),
    marginBottom: hp(1),
  },
   sessionIcon: {
      width: wp(6),
      height: wp(6),
      alignSelf: 'center',
    },
//   sectionTitle: {
//     fontSize: wp(4.2),
//     fontWeight: "600",
//     color: "#103a2e",
//   },
  sectionAction: {
    fontSize: wp(6),
    color: "#103a2e",
  },

  circleList: {
    paddingVertical: hp(1),
    paddingBottom: hp(2),
  },

 
  totalGroupsTitle: {
    fontSize: wp(4),
    color: "#103a2e",
    marginBottom: hp(1),
  },
  totalGroupsBox: {
    backgroundColor: "#ffffffcc",
    borderRadius: wp(3),
    padding: wp(3),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  totalGroupsCount: {
    fontSize: wp(4),
    fontWeight: "700",
  },
  createGroupBtn: {
    backgroundColor: "#143f33",
    paddingVertical: hp(0.9),
    paddingHorizontal: wp(0),
    borderRadius: wp(10),
    width: wp(40),
  },
  createGroupText: {
    color: "#fff",
    fontWeight: "600",
    textAlign:'center'
  },

  requestsList: {
    marginTop: hp(1),
  },

  bottomRow: {
    flexDirection: "row",
    marginTop: hp(2),
    gap: wp(3),
    justifyContent: "space-between",
  },
//   calendarCard: {
//     flex: 1,
//     backgroundColor: "#ffffffcc",
//     padding: wp(3),
//     borderRadius: wp(3),
//     marginRight: wp(2),
//   },
//   earningCard: {
//     width: wp(44),
//     backgroundColor: "#ffffffcc",
//     padding: wp(3),
//     borderRadius: wp(3),
//     justifyContent: "center",
//   },
  smallHeader: {
    fontSize: wp(3.5),
    fontWeight: "600",
    color: "#103a2e",
    marginBottom: hp(1),
  },

  calendarMini: {
    backgroundColor: "#fff",
    borderRadius: wp(2),
    padding: wp(2),
    alignItems: "center",
  },
  calendarMonth: {
    fontWeight: "700",
    marginBottom: hp(0.5),
  },
  calendarGrid: {
    height: hp(12),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  earningInner: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp(2),
  },
  earningAmount: {
    fontSize: wp(6),
    fontWeight: "800",
    color: "#103a2e",
    marginBottom: hp(1),
  },
  
  withdrawBtnText: {
    color: "#fff",
    fontWeight: "700",
  },
   calendarContainer: {
      borderRadius: wp(4),
      padding: wp(2),
      width: wp(45),
      marginTop: hp(-4.5),
      marginLeft: hp(-3),
    },
    customCalendarHeader: {
      backgroundColor: '#264734',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      paddingVertical: hp(0.5),
      paddingBottom: wp(1),
      paddingHorizontal: wp(2),
    },
    calendarHeaderYear: {
      color: '#BFC9C6',
      fontSize: 9,
      fontFamily: 'Montserrat-Medium',
    },
    calendarHeaderDate: {
      color: '#fff',
      fontSize: 9,
      fontFamily: 'Poppins-Bold',
      marginTop: hp(0.5),
    },
    calendarNav: {
      fontSize: 9,
      color: '#264734',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: wp(0),
      backgroundColor: '#f5f5f5',
      paddingVertical: hp(0),
    },
    
    calendarDay: {
      width: '15%',
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: wp(2),
      marginBottom: hp(1),
      marginTop: hp(-1.4),
    },
    calendarDaySelected: {
      borderRadius: wp(10),
    },
    calendarDayText: {
      fontSize: 9,
      color: '#222',
      fontFamily: 'Montserrat-Medium',
    },
    calendarDayTextSelected: {
      color: '#000',
      fontFamily: 'Montserrat-Bold',
    },
    // Events Section Styles
    eventsSection: {
      marginTop: hp(3),
    },
     gridRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      rowGap: hp(2),            // use rowGap/columnGap instead of gap
    },
    gridItem: {
      width: '48%',
      backgroundColor: '#fff',
      borderRadius: wp(4),
      padding: wp(4),
      // Shadow (iOS) + elevation (Android)
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 12,
      elevation: 3,
    },

    // headers
    calendarHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: hp(1.2),
    },
    sectionTitle: {
      fontSize: wp(4.2),
      fontWeight: '600',
      color: '#0b0b0b',
    },

    sectionHeaderWeek: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: hp(1.5),
    },
    rowStart: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: wp(2.5),
    },
    // sessionIcon: {
    //   width: wp(5.5),
    //   height: wp(5.5),
    // },
    sectionTitleWeek: {
      fontSize: wp(3.5),
      color: '#1f3b2e',
      fontWeight: '500',
    },

    // calendar card
    calendarCard: {
      borderRadius: wp(0),
    
    
      padding: wp(2),
    },
    calendarTitle: {
      fontSize: 10,
      color: '#68866f',
      marginBottom: hp(0),
    },

    // earning card
    earningCard: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: hp(4),
      borderRadius: wp(4),
      backgroundColor: '#ffffff',
      
    },
    walletIcon: {
      width: wp(10),
      height: wp(10),
      marginBottom: hp(1),
    },
    earningText: {
      fontSize: wp(6),
      fontWeight: '700',
      color: '#1f3b2e',
      marginBottom: hp(1.6),
    },
    withdrawBtn: {
      paddingVertical: hp(1.2),
      paddingHorizontal: wp(6),
      backgroundColor: '#2f5a3f',
      borderRadius: wp(10),
    },
    withdrawText: {
      color: '#fff',
      fontSize: 13,
      fontWeight: '600',
    },
    sectionHeaderweek: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(1),
      marginTop: hp(-1.5),
      marginLeft: hp(12),
    },
   
    providerIcon: {
      width: wp(12),
      height: wp(12),
      alignSelf: 'center',
    },
    // sectionTitle: {
    //   fontSize: 15,
    //   fontWeight: '700',
    //   fontFamily: 'Poppins-Bold',
    // },
    sectionTitleweek: {
      fontSize: 13,
      fontWeight: '700',
      fontFamily: 'Poppins-Bold',
      color: '#264734',
    },
    arrow: {
      fontSize: wp(10),
      color: '#000',
    },
    sessionCard: {
      width: wp(43),
      backgroundColor: '#fff',
      borderRadius: wp(4),
      padding: wp(3),
      marginRight: wp(3),
      marginBottom: hp(2),
    },
    sessionImg: {
      width: '86%',
      height: hp(13),
      borderRadius: wp(5),
      marginBottom: hp(2),
      resizeMode: 'cover',
      alignSelf: 'center',
    },
    sessionContent: {
      flex: 1,
      justifyContent: 'space-between',
      gap: hp(0.5),
    },
    sessionTitle: {
      fontSize: 17,
      marginBottom: hp(0),
      marginTop: hp(-1),
      fontFamily: 'Poppins-Bold',
      color: '#000',
      textAlign: 'center',
    },
    sessionText: {
      fontSize: 16,
      color: '#6B7280',
      marginBottom: hp(0),
      fontFamily: 'Poppins-Regular',
      lineHeight: wp(4.5),
      textAlign: 'center',
    },
    sessiontime: {
      fontSize: 18,
      color: '#000',
      textAlign: 'center',
      fontFamily: 'Poppins-Medium',
    },
    detailsBtn: {
      backgroundColor: '#264734',
      paddingVertical: hp(1),
      borderRadius: wp(6),
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    detailsText: {
      color: '#fff',
      fontSize: wp(3.5),
      fontFamily: 'Poppins-SemiBold',
    },
    eventCard: {
      width: wp(55),
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(3),
      marginBottom: hp(2),
    },
});
