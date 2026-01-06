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
  const onlyDate = (d: string | Date) => {
    const date = new Date(d);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };
const mapStatus = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'approved':
      return 'approved';
    case 'requested':
      return 'requested';
    case 'rejected':
      return 'REJECTED';
    default:
      return 'requested'; // fallback if API sends unexpected value
  }
};

  const todayDate = onlyDate(new Date());

  const upcomingEvents = events
    .filter((e: any) => onlyDate(e.date) >= todayDate)
    .sort(
      (a: any, b: any) =>
        onlyDate(a.date).getTime() - onlyDate(b.date).getTime(),
    );

  const pastEvents = events
    .filter((e: any) => onlyDate(e.date) < todayDate)
    .sort(
      (a: any, b: any) =>
        onlyDate(b.date).getTime() - onlyDate(a.date).getTime(),
    );

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
                  adminRejectReason?: string;
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
                      status={mapStatus(event?.status)}
                      onPress={() =>
                        navigation.navigate('EventDetailsScreen', {
                          eventId: event._id as string,
                        })
                      }
                      attendees={event.attendees}
                      isFree={event.isFree}
                      adminRejectReason={event?.adminRejectReason}
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
                    status={mapStatus(event?.status)}
                    attendees={event.attendees}
                    isFree={event.isFree}
                    adminRejectReason={event.adminRejectReason}
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
