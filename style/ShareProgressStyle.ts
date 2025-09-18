import { StyleSheet } from 'react-native';

const createStyles = (wp: (p: number) => number, hp: (p: number) => number) =>
  StyleSheet.create({
   container: {
      flex: 1,
      padding: 10,
      marginTop: hp(1),
    },
    bgimg: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    titleContainer: {
      marginTop: hp(-1.5),
      marginBottom: hp(2),
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    title: {
      fontSize: wp(5),
      fontWeight: '700',
      marginLeft: wp(1),
    },
    greeting: {
      fontSize: wp(6),
      fontWeight: 'bold',
      marginBottom: hp(2),
      color: '#2c3e50',
    },
    innercontainer:{
      marginHorizontal:wp(4)
    },
    search: {
      height: hp(4.5),
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: wp(2),
      paddingLeft: wp(3),
      marginBottom: hp(2),
      fontSize: wp(4),
      backgroundColor:'#fff'
    },
    sectionTitle: {
      fontSize: wp(4.5),
      fontWeight: 'bold',
      marginBottom: hp(1.2),
      color: '#000',
    },
    awardBadgeContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: hp(2),
      backgroundColor:'#fff',
      borderRadius:wp(5),
      padding:wp(5)
    },
    awardItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: wp(5),
      marginBottom: hp(1.2),
    },
    awardIcon: {
      width: wp(10),
      height: wp(12),
      marginRight: wp(2),
    },
    awardTitle: {
      fontSize: 17,
      color: '#000',
      fontWeight:'700'
    },
    participateItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(1.5),
    },
    avatar: {
      width: wp(10),
      height: wp(10),
      borderRadius: wp(5),
      marginRight: wp(3),
    },
    participantName: {
      fontSize: wp(4),
      color: '#2c3e50',
    },
    sendButton: {
      backgroundColor: '#264734',
      paddingVertical: hp(1.8),
      borderRadius: wp(8),
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: hp(2.5),
      marginHorizontal:wp(10)
    },
    sendButtonText: {
      color: '#fff',
      fontSize: wp(4),
      fontWeight: '600',
    },
  });

export default createStyles;
                                        