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

import Header from '../../components/Header';
import SessionCard from '../../components/SessionCard';
// adjust path
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/types';
import { eventStyles } from '../../../style/eventStyle';
import EventCard from '../../components/eventCard';
import { useQuery } from '@tanstack/react-query';
import { getApiWithOutQuery } from '../../utils/api/common';
import { API_EVENT_LIST } from '../../utils/api/APIConstant';

type Nav = NativeStackNavigationProp<RootStackParamList, 'SessionsScreen'>;
// Sample session data
const upcomingSessions = [
  {
    id: '1',
    title: 'Wellness & Mental Health workshop',
    date: '15th July, 2025',
    time: '8:00 AM',
    attendees: 50,
    image: require('../../../assets/Image/yoga.png'),
    status: 'approved',
  },
  {
    id: '2',
    title: 'Mindfulness Session',
    date: '20th July, 2025',
    time: '6:00 PM',
    image: require('../../../assets/Image/group.png'),
    status: 'requested',
  },
  {
    id: '3',
    title: 'Self Growth Workshop',
    date: '22nd July, 2025',
    time: '7:00 PM',
    image: require('../../../assets/Image/photo.png'),
    status: 'rejected',
  },
];

const pastSessions = [
  {
    id: '4',
    title: 'Healthy Boundaries',
    date: '10th July, 2025',
    time: '5:00 PM',
    image: require('../../../assets/Image/writer.png'),
    status: 'approved',
    attendees: 30,
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
  const { data, isLoading, error } = useQuery({
    queryKey: ['eventList'],
    queryFn: () => getApiWithOutQuery({ url: API_EVENT_LIST }),
  });
  const events = data?.data || [];

  const upcomingEvents = events.filter(
    (e: any) => e.status === 'PENDING' || e.status === 'APPROVED',
  );

  const pastEvents = events.filter((e: any) => e.status === 'REJECTED');
  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const handleConduct = (sessionId: string) => {
    // Handle conduct session
    console.log('Conduct session:', sessionId);
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={eventStyles(wp, hp).bgimg}
    >
      <View style={eventStyles(wp, hp).container}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: hp(20) }}
          showsVerticalScrollIndicator={false}
        >
          <Header showWelcomeText={true} />

          <View style={eventStyles(wp, hp).mainContainer}>
            <Text style={eventStyles(wp, hp).headerText}>My Events</Text>

            <View style={eventStyles(wp, hp).tabsContainer}>
              <TouchableOpacity
                style={[
                  eventStyles(wp, hp).tabButton,
                  activeTab === 'upcoming'
                    ? eventStyles(wp, hp).activeTabButton
                    : eventStyles(wp, hp).inactiveTabButton,
                ]}
                onPress={() => setActiveTab('upcoming')}
              >
                <Text
                  style={[
                    eventStyles(wp, hp).tabText,
                    activeTab === 'upcoming'
                      ? eventStyles(wp, hp).activeTabText
                      : eventStyles(wp, hp).inactiveTabText,
                  ]}
                >
                  Upcoming
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  eventStyles(wp, hp).tabButton,
                  activeTab === 'past'
                    ? eventStyles(wp, hp).activeTabButton
                    : eventStyles(wp, hp).inactiveTabButton,
                ]}
                onPress={() => setActiveTab('past')}
              >
                <Text
                  style={[
                    eventStyles(wp, hp).tabText,
                    activeTab === 'past'
                      ? eventStyles(wp, hp).activeTabText
                      : eventStyles(wp, hp).inactiveTabText,
                  ]}
                >
                  Past
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {activeTab === 'upcoming' ? (
            <>
              {upcomingEvents.map(
                (event: {
                  isFree: boolean;
                  _id: React.Key | null | undefined;
                  name: string;
                  date: string;
                  time: string;
                  image: any;
                  status: string;
                  attendees: number | undefined;
                }) => (
                  console.log(event, 'event--0000'),
                  (
                    <EventCard
                      key={event._id}
                      title={event.name}
                      date={formatDate(event.date)}
                      time={event.time}
                      image={event?.image}
                      status={
                        event.status.toLowerCase() === 'approved'
                          ? 'approved'
                          : 'requested'
                      }
                      onPress={() =>
                        navigation.navigate('EventDetailsScreen', {
                          eventId: event._id as string,
                        })
                      }
                      
                      attendees={event.attendees}
                      isFree={event.isFree}
                      onManage={() => handleManage()}
                      onConduct={() => console.log('Conduct', event._id)}
                    />
                  )
                ),
              )}
            </>
          ) : (
            <>
              {activeTab === 'past' &&
                pastEvents.map((event: any) => (
                  <EventCard
                    key={event._id}
                    title={event.name}
                    date={formatDate(event.date)}
                    time={event.time}
                    image={event?.image} // just pass the string
                   status="REJECTED"
                    attendees={event.attendees}
                    isFree={event.isFree}
                    onManage={() => handleManage()}
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
