import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    bgimg: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      marginHorizontal: hp(2),
      marginTop: hp(4),
    },
    titleContainer: {
      marginTop: hp(-1),
      marginBottom: hp(2),
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      marginLeft: wp(-2),
    },
    titleevent: {
      fontSize: wp(5),
      fontWeight: 'bold',
      color: '#000',
      lineHeight: hp(2.8),
      marginHorizontal: wp(1),
    },
    innercontainer: {
      backgroundColor: '#fff',
      borderRadius: 15,
      height: hp(85),
      justifyContent: 'center',
      alignContent: 'center',
      paddingHorizontal: hp(0),
    },
    paidEventContainer: {
      position: 'absolute',
      top: hp(1.5),
      left: wp(4),
      backgroundColor: '#264734',
      paddingHorizontal: wp(6),
      paddingVertical: hp(0.5),
      borderRadius: wp(10),
      marginBottom: hp(3.5),
    },
    paidEventText: {
      color: '#fff',
      fontSize: wp(3.5),
      fontWeight: '500',
    },
    headerContainer: {
      position: 'relative',
      alignItems: 'center',
    },
    mainImage: {
      resizeMode: 'cover',
      borderRadius: wp(3),
      marginTop: hp(0),
    },

    backButtonContainer: {
      position: 'absolute',
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
    },

    backButton: {
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(5),
      backgroundColor: '#fff', // Optional for testing
    },

    moreButton: {
      position: 'absolute',
      backgroundColor: '#fff',
      padding: wp(1.5),
      borderRadius: wp(5),
    },
    contentContainer: {
      paddingHorizontal: wp(4),
      paddingVertical: hp(1),
    },
    titleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontWeight: '700',
    },
    title: {
      flex: 1,
      marginRight: wp(2),
      fontFamily: 'Poppins-Bold',
    },
    freeTag: {},
    freeText: {
      color: '#fff',
      fontFamily: 'Poppins-SemiBold',
    },
    dateText: {
      color: '#264734',
      marginTop: hp(-0.5),
      fontFamily: 'Poppins-SemiBold',
    },
    timeText: {
      color: '#264734',
      marginTop: hp(-0.5),
      fontFamily: 'Poppins-SemiBold',
    },
    attendanceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: hp(0.5),
    },
    attendeeImage: {
      borderRadius: wp(10),
    },
    attendanceText: {
      color: '#000',
      fontFamily: 'Poppins-Medium',
    },

    sectionTitle: {
      marginTop: hp(2),
      fontFamily: 'Poppins-Bold',
      fontWeight: '700',
    },
    descriptionText: {
      marginTop: hp(0),
      color: '#000',
      fontFamily: 'Poppins-Regular',
    },
    speakerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: hp(1.5),
    },
    speakerImage: {
      borderRadius: wp(10),
    },
    freeImage: {
      width: wp(5),
      height: wp(5),
    },
    speakerInfo: {
      marginLeft: wp(2),
    },
    speakerName: {
      fontFamily: 'Poppins-Bold',
    },
    speakerRole: {
      color: '#979797',
      fontFamily: 'Poppins-Medium',
      fontWeight: '700',
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginTop: hp(0.3),
    },
    bulletPoint: {
      marginRight: wp(2),
      color: '#000',
    },
    listText: {
      flex: 1,
      color: '#000',
      fontFamily: 'Poppins-Regular',
    },
    registerButton: {
      backgroundColor: '#264734',
      height: wp(12),
      borderRadius: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: wp(5),
    },
    registerText: {
      color: '#fff',
      fontSize: wp(4.4),
      fontFamily: 'Poppins-Bold',
    },
    accordionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: hp(1.5),
    },
    accordionTitle: {
      fontFamily: 'Gabarito-Regular',
      color: '#000',
      marginTop: wp(3.5),
    },
    accordionContent: {
      paddingVertical: hp(1),
      paddingHorizontal: wp(2),
 
 // optional
    },

    accessPaymentContainer: {
      marginTop: hp(2),
      backgroundColor: '#fff',
      padding: wp(2),
      borderRadius: wp(3),
    },

    paymentInfoContainer: {
      marginBottom: hp(2),
      marginTop: hp(2),
    },
    paymentRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: hp(0.5),
    },
    paymentLabeltitle: {
      fontSize: wp(3),
      color: '#333',

      marginBottom: hp(2),
    },
    paymentLabel: {
      fontSize: wp(3),
      color: '#333',
      fontFamily: 'Poppins-SemiBold',
      fontWeight: '700',
    },
    paymentLabelresource: {
      fontSize: wp(3),
      color: '#333',
      fontFamily: 'Poppins-SemiBold',
      fontWeight: '700',
      marginBottom: hp(2),
      marginLeft: wp(1),
      marginTop: hp(0.5),
    },
    paymentLabels: {
      fontSize: wp(3),
      color: '#333',

      marginTop: hp(0),
    },
    paymentLabelValue: {
      fontSize: wp(3),
      color: '#000',
      flexDirection: 'row',
      gap: 15,
      fontWeight: '700',

      marginTop: hp(-0.5),
    },
    paymentValue: {
      fontSize: wp(3),
      fontWeight: 'bold',
      color: '#000',
    },
    actionButtonsContainer: {
      width: '100%',
      flexDirection: 'column',
      marginTop: hp(0),
    },
    actionButtonsinnerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    primaryButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#14532d', // dark green
      borderRadius: wp(8),
      paddingVertical: hp(1.2),
      paddingHorizontal: wp(6),
      marginBottom: hp(1.5),
    },

    primaryButtonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 11,
    },
    sectionTitlePayment: {
      fontSize: wp(3),
      fontWeight: 'bold',
      color: '#000',
      marginTop: hp(0.7),
    },
    outlineButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#14532d',
      borderRadius: wp(8),
      paddingVertical: hp(1.2),
      paddingHorizontal: wp(6),
      flexBasis: '48%',
      marginBottom: hp(1.5),
    },
    outlineButtonupdate: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#14532d',
      borderRadius: wp(8),
      paddingVertical: hp(1.2),
      paddingHorizontal: wp(12),
      width: wp(100),
      flexBasis: '56%',
      marginBottom: hp(1.5),
    },

    outlineButtonText: {
      color: '#14532d',
      fontWeight: '600',
      fontSize: 11,
      justifyContent: 'center',
      textAlign: 'center',
    },
  });

export default styles;
