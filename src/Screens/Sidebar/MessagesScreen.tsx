import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from '../../../style/messagesStyles';
import { useResponsive } from 'react-native-responsive-hook';

const MessagesScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const themedStyles = styles(wp, hp);

  // Mock data for message threads
  const messageThreads = [
    {
      id: 1,
      name: 'Dr. John Smith',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent ne',
      timestamp: '09:25 AM',
      unreadCount: 1,
      avatar: require('../../../assets/Image/ellispe.png'),
    },
    {
      id: 2,
      name: 'Dr. John Smith',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent ne',
      timestamp: '09:25 AM',
      unreadCount: 0,
      avatar: require('../../../assets/Image/ellispe.png'),
    },
    {
      id: 3,
      name: 'Dr. John Smith',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent ne',
      timestamp: '09:25 AM',
      unreadCount: 1,
      avatar: require('../../../assets/Image/ellispe.png'),
    },
    {
      id: 4,
      name: 'Dr. John Smith',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent ne',
      timestamp: '09:25 AM',
      unreadCount: 0,
      avatar: require('../../../assets/Image/ellispe.png'),
    },
    {
      id: 5,
      name: 'Dr. John Smith',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent ne',
      timestamp: '09:25 AM',
      unreadCount: 1,
      avatar: require('../../../assets/Image/ellispe.png'),
    },
  ];

  const renderMessageThread = (thread: any) => (
    <TouchableOpacity
      // key={thread.id}
      style={themedStyles.messageThread}
      // onPress={() => navigation.navigate('ChatScreen')}
    >
      <View style={themedStyles.messageContent}>
        <View style={themedStyles.messagecontainer}>
          <Image source={thread.avatar} style={themedStyles.avatar} />
          <Text style={themedStyles.contactName}>{thread.name}</Text>
        </View>

        <Text style={themedStyles.lastMessage} numberOfLines={2}>
          {thread.lastMessage}
        </Text>
      </View>

      <View style={themedStyles.messageMeta}>
        <Text style={themedStyles.timestamp}>{thread.timestamp}</Text>
        {thread.unreadCount > 0 && (
          <View style={themedStyles.unreadBadge}>
            <Text style={themedStyles.unreadCount}>{thread.unreadCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles(wp, hp).bgimg}
    >
      <View style={themedStyles.container}>
        {/* Header */}
        <View style={themedStyles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={themedStyles.backButton}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8.5)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={themedStyles.headerTitle}>Messages</Text>
        </View>

        {/* Search Bar */}
        <View style={themedStyles.searchContainer}>
          <MaterialIcons name="search" size={wp(6)} color="#ECA14C" />
          <TextInput
            style={themedStyles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Message Threads */}
        <ScrollView
          style={themedStyles.messageList}
          showsVerticalScrollIndicator={false}
        >
          {messageThreads.map(renderMessageThread)}
        </ScrollView>

        {/* Bottom Navigation */}
      </View>
    </ImageBackground>
  );
};

export default MessagesScreen;
