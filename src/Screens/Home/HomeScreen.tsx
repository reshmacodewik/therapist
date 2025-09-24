/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { useResponsive } from '../../../components/Responsive/useResponsive';
import styles from '../../../style/homestyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [activeTab, setActiveTab] = useState('Home');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleCardPress = (cardId: string) => {
    console.log('Card pressed:', cardId);
  };

  const handleCheckCalendar = () => {
    console.log('Check Calendar pressed');
  };

  const handleSetNewGoal = () => {
    navigation.navigate('GoalsScreen');
  };
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add previous month's days
    const prevMonth = new Date(year, month, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthDays - i),
      });
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i),
      });
    }

    // Add next month's days to fill the grid
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i),
      });
    }

    return days;
  };

  const handleDayPress = (day: number, isCurrentMonth: boolean, date: Date) => {
    if (isCurrentMonth) {
      setSelectedDate(date);
    }
  };

  const changeMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth);
    if (direction === 'prev') {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };
  const renderCalendar = () => (
    <View style={styles(wp, hp).calendarContainer}>
      <View style={styles(wp, hp).customCalendarHeader}>
        <Text style={styles(wp, hp).calendarHeaderYear}>
          {selectedDate.getFullYear()}
        </Text>
        <Text style={styles(wp, hp).calendarHeaderDate}>
          {selectedDate.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
      </View>
      <View style={styles(wp, hp).calendarNav}>
        <TouchableOpacity onPress={() => changeMonth('prev')}>
          <MaterialIcons name="chevron-left" size={wp(6)} color="#264734" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: wp(4),
            color: '#264734',
            fontFamily: 'Poppins-Bold',
          }}
        >
          {currentMonth.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </Text>
        <TouchableOpacity onPress={() => changeMonth('next')}>
          <MaterialIcons name="chevron-right" size={wp(6)} color="#264734" />
        </TouchableOpacity>
      </View>
      <View style={styles(wp, hp).calendarGrid}>
        {/* Days of week header */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
          (day, _index) => (
            <View
              key={day}
              style={[
                styles(wp, hp).calendarDay,
                { backgroundColor: 'transparent' },
              ]}
            >
              <Text
                style={[
                  styles(wp, hp).calendarDayText,
                  { color: '#264734', fontFamily: 'Poppins-Bold' },
                ]}
              >
                {day}
              </Text>
            </View>
          ),
        )}

        {/* Calendar days */}
        {getDaysInMonth(currentMonth).map((dayData, index) => {
          const isSelected =
            selectedDate.toDateString() === dayData.date.toDateString();
          const isToday =
            new Date().toDateString() === dayData.date.toDateString();

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles(wp, hp).calendarDay,
                isSelected && styles(wp, hp).calendarDaySelected,
                isToday && !isSelected && { backgroundColor: '#fff' },
              ]}
              onPress={() =>
                handleDayPress(
                  dayData.day,
                  dayData.isCurrentMonth,
                  dayData.date,
                )
              }
            >
              <Text
                style={[
                  styles(wp, hp).calendarDayText,
                  !dayData.isCurrentMonth && { color: '#d9d9d9' },
                  isSelected && styles(wp, hp).calendarDayTextSelected,
                  isToday &&
                    !isSelected && {
                      color: '#264734',
                      fontFamily: 'Montserrat-Bold',
                      textDecorationLine: 'underline',
                    },
                ]}
              >
                {dayData.day}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles(wp, hp).bgimg}
    >
      <View style={styles(wp, hp).mainContainer}>
        <ScrollView
          style={styles(wp, hp).container}
          contentContainerStyle={{ paddingBottom: hp(5) }}
          showsVerticalScrollIndicator={false}
        >
          {/* HEADER */}
          <View style={styles(wp, hp).header}>
            <View>
              <Image
                source={require('../../../assets/Image/logo1.png')}
                style={styles(wp, hp).logo}
              />
            </View>
            <View style={styles(wp, hp).headerIcons}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/icon/bell.png')}
                  style={styles(wp, hp).bellIcon}
                />
              </TouchableOpacity>
              <Image
                source={require('../../../assets/Image/homeuser.png')}
                style={styles(wp, hp).userIcon}
              />
            </View>
          </View>
          <Text style={styles(wp, hp).headerText}>
            Welcome back, {'\n'}Susan
          </Text>

          {/* INNER CONTENT — ALL VISIBLE & SCROLLABLE */}
          <View style={[styles(wp, hp).innercontainer, { flexGrow: 1 }]}>
            {/* MY JOURNEY */}
            <View style={styles(wp, hp).sectionHeader}>
              <View style={{ flexDirection: 'row', gap: wp(2.5) }}>
                <Image
                  source={require('../../../assets/icon/clock.png')}
                  style={styles(wp, hp).sessionIcon}
                />
                <Text style={styles(wp, hp).sectionTitle}>
                  Today's Sessions
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('SessionshomeScreen')}
              >
                <Ionicons name="chevron-forward" size={wp(7)} color="#000" />
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginBottom: hp(2) }}
              contentContainerStyle={{ paddingRight: wp(4) }}
            >
              {[
                {
                  image: require('../../../assets/Image/sessionuser.png'),
                  title: 'Jimmy Deo',
                  text: 'Depression',
                  time: 'Starts in 5 Min',
                  buttonText: 'Join Now',
                },
                {
                  image: require('../../../assets/Image/sessionuser.png'),
                  title: 'Jimmy Deo',
                  text: 'Depression',
                  time: 'Today, 10:00 AM',
                  buttonText: 'Remind Me ',
                },

                {
                  image: require('../../../assets/Image/sessionuser.png'),
                  title: 'Jimmy Deo',
                  text: 'Depression',
                  time: 'Today, 6:00 AM',
                  buttonText: 'Remind Me',
                },
              ].map((item, i) => (
                <View key={i} style={styles(wp, hp).sessionCard}>
                  <Image
                    source={item.image}
                    style={styles(wp, hp).sessionImg}
                  />
                  <View style={styles(wp, hp).sessionContent}>
                    <Text style={styles(wp, hp).sessionTitle}>
                      {item.title}
                    </Text>
                    <Text style={styles(wp, hp).sessionText}>{item.text}</Text>
                    <Text style={styles(wp, hp).sessiontime}>{item.time}</Text>
                    <TouchableOpacity style={styles(wp, hp).detailsBtn}>
                      <Text style={styles(wp, hp).detailsText}>
                        {item.buttonText}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
            {/* AFTER Today’s Sessions Section */}
            <View style={styles(wp, hp).sectionHeader}>
              <View style={{ flexDirection: 'row', gap: wp(2.5) }}>
                <Image
                  source={require('../../../assets/icon/userscircle.png')}
                  style={styles(wp, hp).sessionIcon}
                />
                <Text style={styles(wp, hp).sectionTitle}>Your Clients</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Ionicons name="chevron-forward" size={wp(7)} color="#000" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: hp(2),
              }}
            >
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: hp(2) }}
                contentContainerStyle={{ paddingRight: wp(4) }}
              >
                {[
                  {
                    name: 'Emily Chen',
                    text: 'Next sess: 11:00 AM',
                    image: require('../../../assets/Image/maskuser.png'),
                  },
                  {
                    name: 'Michael Kim',
                    text: 'Tomorrow, 9:00 AM',
                    image: require('../../../assets/Image/user2.png'),
                  },
                ].map((client, i) => (
                  <View key={i} style={styles(wp, hp).clientCard}>
                    <View style={styles(wp, hp).clientTop}>
                      <Image
                        source={client.image}
                        style={styles(wp, hp).clientImg}
                      />
                      <View>
                        <Text style={styles(wp, hp).clientName}>
                          {client.name}
                        </Text>
                        <Text style={styles(wp, hp).clientText}>
                          {client.text}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: hp(-0.2),
                        marginBottom: hp(1),
                      }}
                    >
                      <TouchableOpacity style={styles(wp, hp).clientBtn}>
                        <Text style={styles(wp, hp).clientBtnText}>
                          View Profile
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles(wp, hp).clientBtnOutline}>
                        <Text style={styles(wp, hp).clientBtnOutlineText}>
                          Reschedule
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
            {/* New Request for Support */}
            <View style={styles(wp, hp).sectionHeader}>
              <View style={{ flexDirection: 'row', gap: wp(2.5) }}>
                <Image
                  source={require('../../../assets/icon/message-circle.png')}
                  style={styles(wp, hp).sessionIcon}
                />
                <Text style={styles(wp, hp).sectionTitle}>
                  New Request for support
                </Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={wp(7)} color="#000" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: hp(2),
              }}
            >
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: hp(2) }}
                contentContainerStyle={{ paddingRight: wp(4) }}
              >
                {[
                  {
                    name: 'Emily Chen',
                    text: 'Lorem ipsum dolor sit amet consectetur.',
                    image: require('../../../assets/Image/maskuser.png'),
                  },
                  {
                    name: 'Michael Kim',
                    text: 'Lorem ipsum dolor sit amet consectetur.',
                    image: require('../../../assets/Image/user2.png'),
                  },
                ].map((client, i) => (
                  <View key={i} style={styles(wp, hp).newreqCard}>
                    <View style={styles(wp, hp).clientTop}>
                      <Image
                        source={client.image}
                        style={styles(wp, hp).clientImg}
                      />
                      <View>
                        <Text style={styles(wp, hp).clientName}>
                          {client.name}
                        </Text>
                        <Text style={styles(wp, hp).clientText}>
                          {client.text}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: hp(-0.2),
                        marginBottom: hp(1),
                      }}
                    >
                      <TouchableOpacity style={styles(wp, hp).clientBtn2}>
                        <Text style={styles(wp, hp).clientBtnText}>Accept</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles(wp, hp).clientBtnOutline2}
                      >
                        <Text style={styles(wp, hp).clientBtnOutlineText}>
                          Decline
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>

            {/* Calendar & Earnings Row */}
            <View style={styles(wp, hp).gridRow}>
              {/* Calendar card */}
               <View style={styles(wp, hp).calendarHeader}>
                  <Text style={styles(wp, hp).sectionTitle}>Calendar</Text>
                  <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: wp(1), marginLeft:wp(15) }} >
                    <Ionicons
                      name="chevron-forward"
                      size={wp(7)}
                      color="#000"
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles(wp, hp).sectionHeaderWeek}>
                  <View style={styles(wp, hp).rowStart}>
                    <Image
                      source={require('../../../assets/icon/message-circle.png')}
                      style={styles(wp, hp).sessionIcon}
                      resizeMode="contain"
                    />
                    <Text style={styles(wp, hp).sectionTitleWeek}>
                      This Week Earning
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Ionicons
                      name="chevron-forward"
                      size={wp(7)}
                      color="#000"
                    />
                  </TouchableOpacity>
                </View>

              <View style={styles(wp, hp).gridItem}>
               
                <View style={styles(wp, hp).calendarCard}>
                  <Text style={styles(wp, hp).calendarTitle}></Text>
                  {renderCalendar()}
                </View>
              </View>

              {/* Earnings card */}
              <View style={styles(wp, hp).gridItem}>
                <View style={styles(wp, hp).earningCard}>
                  <Image
                    source={require('../../../assets/Image/wallet.png')}
                    style={styles(wp, hp).walletIcon}
                    resizeMode="contain"
                  />
                  <Text style={styles(wp, hp).earningText}>KES 800</Text>
                  <TouchableOpacity style={styles(wp, hp).withdrawBtn}>
                    <Text style={styles(wp, hp).withdrawText}>
                      Withdraw funds
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* New Request Section */}
            <View style={styles(wp, hp).eventsSection}>
              <View style={styles(wp, hp).sectionHeader}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: wp(2.5),
                  }}
                >
                  <MaterialCommunityIcons
                    name="clock-outline"
                    size={wp(6)}
                    color="#264734"
                  />
                  <Text style={styles(wp, hp).sectionTitle}>Events</Text>
                </View>
                <TouchableOpacity>
                  <Ionicons name="chevron-forward" size={wp(7)} color="#000" />
                </TouchableOpacity>
              </View>

              <View style={styles(wp, hp).eventButtonsContainer}>
                <TouchableOpacity
                  style={styles(wp, hp).createSessionBtn}
                  onPress={() =>
                    navigation.navigate('CreateSessionScreen' as never)
                  }
                >
                  <Text style={styles(wp, hp).sessionBtnText}>
                    Create Session
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles(wp, hp).mySessionsBtn}
                  onPress={() => navigation.navigate('SessionsScreen' as never)}
                >
                  <Text style={styles(wp, hp).sessionBtnText}>My Sessions</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Provider Resources Section */}
            <View style={styles(wp, hp).resourcesSection}>
              <View style={styles(wp, hp).sectionHeader}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: wp(2.5),
                  }}
                >
                  <Image
                    source={require('../../../assets/Image/book-open.png')}
                    style={styles(wp, hp).sessionIcon}
                  />
                  <Text style={styles(wp, hp).sectionTitle}>
                    Provider Resources
                  </Text>
                </View>
              </View>

              <View style={styles(wp, hp).resourceCardsContainer}>
                <View style={styles(wp, hp).resourceCard}>
                  <View style={styles(wp, hp).resourceIconContainer}>
                    <Image
                      source={require('../../../assets/Image/training.png')}
                      style={styles(wp, hp).providerIcon}
                    />
                  </View>
                  <Text style={styles(wp, hp).resourceTitle}>
                    Training & Capacity Building
                  </Text>
                  <Text style={styles(wp, hp).resourceDesc}>
                    Guides, videos, and self-paced courses
                  </Text>
                  <TouchableOpacity style={styles(wp, hp).resourceBtn}>
                    <Text style={styles(wp, hp).resourceBtnText}>
                      Explore Trainings
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles(wp, hp).resourceCard}>
                  <View style={styles(wp, hp).resourceIconContainer}>
                    <Image
                      source={require('../../../assets/Image/peershare.png')}
                      style={styles(wp, hp).providerIcon}
                    />
                  </View>
                  <Text style={styles(wp, hp).resourceTitle}>
                    Community & Peer Sharing
                  </Text>
                  <Text style={styles(wp, hp).resourceDesc}>
                    Forums, provider groups, and support circles
                  </Text>
                  <TouchableOpacity style={styles(wp, hp).resourceBtn}>
                    <Text style={styles(wp, hp).resourceBtnText}>
                      Join Provider Community
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default HomeScreen;
