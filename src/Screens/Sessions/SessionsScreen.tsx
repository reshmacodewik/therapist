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
import { RootStackParamList } from '../../Navigation/types';
import { useQuery } from '@tanstack/react-query';
import { getApiWithOutQuery } from '../../utils/api/common';
import { API_SESSION_DETAILS } from '../../utils/api/APIConstant';

type Nav = NativeStackNavigationProp<RootStackParamList, 'SessionsScreen'>;

const SessionsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const navigation = useNavigation<Nav>();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['my-sessions'],
    queryFn: () =>
      getApiWithOutQuery({
        url: `${API_SESSION_DETAILS}`,
      }),
  });
  const today = new Date();
  const sessions = Array.isArray(data?.data?.data)
    ? data.data.data
    : Array.isArray(data?.data)
      ? data?.data
      : [];

  console.log(sessions, 'sessions');

  const upcomingSessions = sessions.filter((s: any) => {
    const sessionDate = new Date(`${s.date} ${s.time}`);
    return sessionDate >= today;
  });

  const pastSessions = sessions.filter((s: any) => {
    const sessionDate = new Date(`${s.date} ${s.time}`);
    return sessionDate < today;
  });

  const handleManage = (session: any) => {
    navigation.navigate('SessionPaymentScreen', {
      sessionId: session._id, // ✅ CORRECT
    });

    console.log(session._id, 'sessionId sent ✅');
  };

  const handleManagePast = (session: any) => {
    navigation.navigate('SessionPaymentScreen', {
      sessionId: session._id, // ✅ CORRECT
    });
  };

  const handleConduct = (session: any) => {
    console.log('Conduct session:', { sessionId: session._id }); // ✅ CORRECT
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
              {isLoading ? (
                <Text>Loading...</Text>
              ) : upcomingSessions.length === 0 ? (
                <Text>No upcoming sessions</Text>
              ) : (
                upcomingSessions.map((session: any, index: number) => (
                  <SessionCard
                    key={`${session.sessionId}-${index}`}
                    title={session.sessionName || 'Session'}
                    description={session.notes}
                    date={session.date}
                    time={session.time}
                    isFree={session.isFree || false}
                    attendees={session.registeredCount || 0}
                    sessionType={session.sessionType}
                    image={session.image}
                    showConductButton={true}
                    onManage={() => handleManage(session)}
                    onConduct={() => handleConduct(session)}
                  />
                ))
              )}
            </>
          ) : (
            <>
              {isLoading ? (
                <Text>Loading...</Text>
              ) : pastSessions.length === 0 ? (
                <Text>No past sessions</Text>
              ) : (
                pastSessions.map((session: any, index: number) => (
                  <SessionCard
                    key={`${session.sessionName}-${index}`}
                    title={session.sessionName || 'Session'}
                    description={session.notes}
                    date={session.date}
                    time={session.time}
                    attendees={session.registeredCount || 0}
                    sessionType={session.sessionType}
                    image={session.image}
                    isFree={session.isFree || false}
                    showConductButton={false}
                    onManage={() =>
                      navigation.navigate('SessionDetails', {
                        sessionId: session._id as string,
                      })
                    }
                    onConduct={() => handleManagePast(session.sessionId)}
                  />
                ))
              )}
            </>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default SessionsScreen;
