import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import createStyles from '../../../style/SessionDetailsStyle';
import Header from '../../components/Header';

const messages = [
  { id: 1, name: 'Brian K.', text: 'Hello Everyone', time: '11:45' },
  {
    id: 2,
    name: 'Brian K.',
    text: 'Hi, I’m excited to be here',
    time: '11:45',
  },
  { id: 3, name: 'Brian K.', text: 'Hello Everyone', time: '11:45' },
];

const SessionDetails = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation();
  const styles = createStyles(wp, hp);

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bgimg}
    >
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header showWelcomeText={true} />

          {/* Title */}
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={wp(10)}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={styles.title}>Mindfulness Practices</Text>
          </View>

          {/* People Joined */}
          <View style={styles.joinedContainer}>
            <Text style={styles.joinedText}>People Joined This Session</Text>
            <View style={styles.joinedBadge}>
              <Text style={styles.joinedCount}>3</Text>
            </View>
          </View>

          {/* Messages */}
          {messages.map(msg => (
            <View key={msg.id} style={styles.messageRow}>
              <Image
                source={require('../../../assets/Image/avatar.png')}
                style={styles.avatar}
              />
              <View style={styles.messageContent}>
                <Text style={styles.messageName}>{msg.name}</Text>
                <Text style={styles.messageText}>{msg.text}</Text>
              </View>
              <Text style={styles.messageTime}>{msg.time}</Text>
            </View>
          ))}

          {/* Input Box */}
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Send messages to everyone in this room"
              placeholderTextColor="#777"
              style={styles.input}
            />
            <Ionicons name="send" size={wp(6)} color="#000" />
          </View>

          {/* Session Notes */}
          <View style={styles.notesCard}>
            <Text style={styles.notesTitle}>Session Notes</Text>
            <Text style={styles.notesText}>
              Remember to focus on the breathing exercise throughout the session
            </Text>
          </View>

          {/* Buttons */}
          <TouchableOpacity style={styles.postUpdateButton}>
            <Text style={styles.postUpdateText}>Post Update</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#fff"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.breakoutButton} onPress={()=>navigation.navigate('Breakout' as never)}>
            <Text style={styles.breakoutText}>Breakout Room</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#000"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default SessionDetails;
