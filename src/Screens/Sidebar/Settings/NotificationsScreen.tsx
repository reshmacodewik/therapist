import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './notificationsStyles';
import { useResponsive } from '../../../../components/Responsive/useResponsive';

const notificationsData = [
  {
    id: 1,
    title: 'Title',
    time: '10:30 PM',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    title: 'Title',
    time: '10:30 PM',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 3,
    title: 'Title',
    time: '10:30 PM',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 4,
    title: 'Title',
    time: '10:30 PM',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const NotificationsScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const themedStyles = styles(wp, hp);

  return (
    <ImageBackground
      source={require('../../../../assets/Image/background.png')}
      style={themedStyles.bgimg}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={themedStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={themedStyles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={wp(8)} color="#000" />
          </TouchableOpacity>
          <View style={themedStyles.headerTitleContainer}>
          <Text style={themedStyles.headerText}>Notifications</Text>
          <TouchableOpacity>
            <Text style={themedStyles.clearAll}>Clear All</Text>
          </TouchableOpacity>
          </View>
        </View>

        {/* Notification Cards */}
        {notificationsData.map((item) => (
          <View key={item.id} style={themedStyles.card}>
            <View style={themedStyles.cardIcon}>
              <MaterialIcons name="menu-book" size={wp(6)} color="#F6C16B" />
            </View>
            <View style={themedStyles.cardContent}>
              <View style={themedStyles.cardTitleRow}>
                <Text style={themedStyles.cardTitle}>{item.title}</Text>
                <Text style={themedStyles.cardTime}>{item.time}</Text>
              </View>
              <Text style={themedStyles.cardMessage}>{item.message}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default NotificationsScreen;