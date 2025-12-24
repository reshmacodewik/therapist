import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../../style/TicketChatStyles';

type Message = {
  id: string;
  sender: 'support' | 'user';
  message: string;
  time: string;
};

const MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'support',
    message:
      'Welcome to Tuliar support, we received your issue regarding payment not received.',
    time: '10:33 AM',
  },
  {
    id: '2',
    sender: 'user',
    message: 'Any update regarding my issue ?',
    time: '10:33 AM',
  },
];

const TicketChat = () => {
  const renderItem = ({ item }: { item: Message }) => {
    const isUser = item.sender === 'user';

    return (
      <View
        style={[
          styles.messageRow,
          isUser ? styles.rightAlign : styles.leftAlign,
        ]}
      >
        {!isUser && (
          <Image
            source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
            style={styles.avatar}
          />
        )}

        <View
          style={[
            styles.bubble,
            isUser ? styles.userBubble : styles.supportBubble,
          ]}
        >
          {!isUser && <Text style={styles.sender}>Support Team</Text>}
          <Text style={styles.messageText}>{item.message}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>

        {isUser && (
          <Image
            source={{ uri: 'https://i.pravatar.cc/100?img=32' }}
            style={styles.avatar}
          />
        )}
      </View>
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/Image/background.png')}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Payment not received</Text>

        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Open</Text>
        </View>
      </View>

      {/* Chat */}
      <FlatList
        data={MESSAGES}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.chatContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Input */}
      <View style={styles.inputContainer}>
         <View style={styles.inputWrapper}>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add" size={22} color="#111" />
        </TouchableOpacity>

        <TextInput
          placeholder="Type something..."
          placeholderTextColor="#9CA3AF"
          style={styles.input}
        />

        <TouchableOpacity style={styles.sendBtn}>
          <Ionicons name="send" size={20} color="000" />
        </TouchableOpacity>
      </View>
      </View>
     
    </ImageBackground>
  );
};

export default TicketChat;
