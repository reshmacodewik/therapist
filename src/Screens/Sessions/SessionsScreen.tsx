import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { sessionsStyles } from '../../../style/sessionsStyles';
import Header from '../../components/Header';
import SessionCard from '../../components/SessionCard';
// adjust path
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/MyStack';

type Nav = NativeStackNavigationProp<RootStackParamList, 'SessionsScreen'>;
// Sample session data
const upcomingSessions = [
  {
    id: '1',
    title: 'Mindfulness Practices',
    description: 'Share and learn mindfulness techniques',
    date: 'April 25',
    time: '5:00pm',
    attendees: 5,
    image: require('../../../assets/Image/yoga.png'),
  },
  {
    id: '2',
    title: 'LGBTQ+ Support Group',
    description: 'Share and learn mindfulness techniques',
    date: 'April 25',
    time: '5:00pm',
    attendees: 5,
    image: require('../../../assets/Image/group.png'),
  },
  {
    id: '3',
    title: 'Building Self-Esteem',
    description: 'Share and learn mindfulness techniques',
    date: 'April 25',
    time: '5:00pm',
    attendees: 5,
    image: require('../../../assets/Image/photo.png'),
  },
  {
    id: '4',
    title: 'Healthy Boundaries',
    description: 'Share and learn mindfulness techniques',
    date: 'April 25',
    time: '5:00pm',
    attendees: 5,
    image: require('../../../assets/Image/writer.png'),
  },
];

const pastSessions = [
  {
    id: '1',
    title: 'Mindfulness Practices',
    description: 'Share and learn mindfulness techniques',
    date: 'April 25',
    time: '5:00pm',
    attendees: 5,
    image: require('../../../assets/Image/yoga.png'),
  },
  {
    id: '2',
    title: 'LGBTQ+ Support Group',
    description: 'Share and learn mindfulness techniques',
    date: 'April 25',
    time: '5:00pm',
    attendees: 5,
    image: require('../../../assets/Image/group.png'),
  },
  {
    id: '3',
    title: 'Building Self-Esteem',
    description: 'Share and learn mindfulness techniques',
    date: 'April 25',
    time: '5:00pm',
    attendees: 5,
    image: require('../../../assets/Image/photo.png'),
  },
  {
    id: '4',
    title: 'Healthy Boundaries',
    description: 'Share and learn mindfulness techniques',
    date: 'April 25',
    time: '5:00pm',
    attendees: 5,
    image: require('../../../assets/Image/writer.png'),
  },
];

const SessionsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const navigation = useNavigation<Nav>();
  const handleManage = () => {
    navigation.navigate('SessionPaymentScreen'); // ✅ simple navigate, no params
  };
   const handleManagePast = () => {
    navigation.navigate('PastSessionScreen' as never); // ✅ simple navigate, no params
  };


  const handleConduct = (sessionId: string) => {
    // Handle conduct session
    console.log('Conduct session:', sessionId);
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={sessionsStyles(wp, hp).bgimg}
    >
      <View style={sessionsStyles(wp, hp).container}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: hp(20) }}
          showsVerticalScrollIndicator={false}
        >
          <Header showWelcomeText={true} />

          <View style={sessionsStyles(wp, hp).mainContainer}>
            <Text style={sessionsStyles(wp, hp).headerText}>My Sessions</Text>

            <View style={sessionsStyles(wp, hp).tabsContainer}>
              <TouchableOpacity
                style={[
                  sessionsStyles(wp, hp).tabButton,
                  activeTab === 'upcoming'
                    ? sessionsStyles(wp, hp).activeTabButton
                    : sessionsStyles(wp, hp).inactiveTabButton,
                ]}
                onPress={() => setActiveTab('upcoming')}
              >
                <Text
                  style={[
                    sessionsStyles(wp, hp).tabText,
                    activeTab === 'upcoming'
                      ? sessionsStyles(wp, hp).activeTabText
                      : sessionsStyles(wp, hp).inactiveTabText,
                  ]}
                >
                  Upcoming
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  sessionsStyles(wp, hp).tabButton,
                  activeTab === 'past'
                    ? sessionsStyles(wp, hp).activeTabButton
                    : sessionsStyles(wp, hp).inactiveTabButton,
                ]}
                onPress={() => setActiveTab('past')}
              >
                <Text
                  style={[
                    sessionsStyles(wp, hp).tabText,
                    activeTab === 'past'
                      ? sessionsStyles(wp, hp).activeTabText
                      : sessionsStyles(wp, hp).inactiveTabText,
                  ]}
                >
                  Past
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {activeTab === 'upcoming' ? (
            <>
              {upcomingSessions.map(session => (
                <SessionCard
                  key={session.id}
                  title={session.title}
                  description={session.description}
                  date={session.date}
                  time={session.time}
                  attendees={session.attendees}
                  image={session.image}
                  showConductButton={true}
                  onManage={handleManage}
                  onConduct={() => handleConduct(session.id)}
                />
              ))}
            </>
          ) : (
            <>
              {pastSessions.map(session => (
                <SessionCard
                  key={session.id}
                  title={session.title}
                  description={session.description}
                  date={session.date}
                  time={session.time}
                  attendees={session.attendees}
                  image={session.image}
                  showConductButton={false}
                  onManage={handleManagePast}
                />
              ))}
            </>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default SessionsScreen;
