import { StyleSheet } from 'react-native';

const messagesStyles = (wp: (percent: number) => number, hp: (percent: number) => number) => {
  return StyleSheet.create({
    container: {
      flex: 1,
   
    },
    bgimg: {
      flex: 1,
      resizeMode: 'cover',
    },
    // Status Bar
    statusBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: wp(4),
      paddingTop: hp(2),
      paddingBottom: hp(1),
      backgroundColor: '#FFFFFF',
    },
    statusBarTime: {
      fontSize: wp(4),
      fontWeight: '600',
      color: '#000000',
    },
    statusBarIcons: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(2),
    },
    
    // Header
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(1),
      paddingVertical: hp(0),
      paddingTop: hp(3),
     
    },
    backButton: {
      padding: wp(2),
      marginRight: wp(3),
    },
    headerTitle: {
      fontSize: wp(5),
      fontWeight: '600',
      color: '#000000',
      marginLeft: wp(-3),
    },
       // Search Bar
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: wp(4),
      marginVertical: hp(1.5),
      paddingHorizontal: wp(4),
      paddingVertical: hp(0.5),
      backgroundColor: '#fff',
      borderRadius: wp(10),
      borderWidth: 1,
      borderColor: '#E5E7EB',
      tintColor:'#ECA14C'
    },
    searchInput: {
      flex: 1,
      marginLeft: wp(2),
      fontSize: wp(4),
      color: '#000000',
       tintColor:'#ECA14C'

    },
    
    // Message List
    messageList: {
      flex: 1,
      paddingHorizontal: wp(4),
    },
    
    // Message Thread
    messageThread: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: hp(2),
      paddingHorizontal: wp(3),
      marginBottom: hp(1),
      backgroundColor: '#fff',
      borderRadius: wp(4),
     
    },
    avatar: {
      width: wp(8),
      height: wp(8),
      borderRadius: wp(6),
      marginRight: wp(3),
      marginTop: wp(-1.8)
    },
    messageContent: {
      flex:1,
      marginRight: wp(2),
    },
    messagecontainer:{
        flexDirection:'row',
    },
    contactName: {
      fontSize: 13,
      fontFamily:'Poppins-Bold',
      color: '#000000',
      marginBottom: hp(0.5),
    },
    lastMessage: {
      fontSize: wp(3.8),
      color: '#6B7280',
      lineHeight: wp(5.5),
    },
    messageMeta: {
      alignItems: 'flex-end',
      gap: hp(1),
    },
    timestamp: {
      fontSize: wp(3.5),
      color: '#9CA3AF',
    },
    unreadBadge: {
      backgroundColor: '#059669',
      borderRadius: wp(3),
      minWidth: wp(6),
      height: wp(6),
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: wp(1),
    },
    unreadCount: {
      color: '#FFFFFF',
      fontSize: wp(3.2),
      fontWeight: '600',
    },
    
    // Bottom Navigation
    bottomNavigation: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingHorizontal: wp(2),
      paddingVertical: hp(2),
      backgroundColor: '#FFFFFF',
      borderTopWidth: 1,
      borderTopColor: '#E5E7EB',
      paddingBottom: hp(4), // Extra padding for home indicator
    },
    navItem: {
      alignItems: 'center',
      gap: hp(0.5),
    },
    navText: {
      fontSize: wp(3.2),
      color: '#9CA3AF',
      fontWeight: '500',
    },
    activeNavText: {
      color: '#FF6B35',
    },
    checkInButton: {
      backgroundColor: '#059669',
      borderRadius: wp(8),
      width: wp(16),
      height: wp(16),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -hp(2),
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 8,
    },
    checkInText: {
      color: '#FFFFFF',
      fontSize: wp(2.8),
      fontWeight: '600',
      marginTop: hp(0.5),
    },
  });
};

export default messagesStyles; 