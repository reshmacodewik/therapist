import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; // <- adjust path
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import createStyles from '../../../style/CalendarrStyles';

type Status = 'confirmed' | 'pending';

type AppointmentCard = {
  id: string;
  name: string;
  time: string;
  avatar: any;
  status: Status;
};

const TODAY_APPTS: AppointmentCard[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    time: '10:00 AM',
    avatar: require('../../../assets/Image/user2.png'),
    status: 'confirmed',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    time: '10:00 AM',
    avatar: require('../../../assets/Image/user2.png'),
    status: 'pending',
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    time: '10:00 AM',
    avatar: require('../../../assets/Image/user2.png'),
    status: 'confirmed',
  },
];

const CalendarScreen = ({ navigation }: any) => {
  const s = useMemo(() => createStyles(wp, hp), []);
  const [month, setMonth] = useState({ label: 'July 2024' });
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [currentMonth, setCurrentMonth] = useState(new Date());
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
    <View style={s.calendarContainer}>
      <View style={s.customCalendarHeader}>
        <Text style={s.calendarHeaderYear}>{selectedDate.getFullYear()}</Text>
        <Text style={s.calendarHeaderDate}>
          {selectedDate.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
      </View>
      <View style={s.calendarNav}>
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
      <View style={s.calendarGrid}>
        {/* Days of week header */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
          (day, _index) => (
            <View
              key={day}
              style={[s.calendarDay, { backgroundColor: 'transparent' }]}
            >
              <Text
                style={[
                  s.calendarDayText,
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
                s.calendarDay,
                isSelected && s.calendarDaySelected,
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
                  s.calendarDayText,
                  !dayData.isCurrentMonth && { color: '#d9d9d9' },
                  isSelected && s.calendarDayTextSelected,
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
  const renderDay = (d: string, isMuted?: boolean, isUnderline?: boolean) => (
    <View key={d} style={s.dayCell}>
      <Text
        style={[
          s.dayText,
          isMuted && s.dayMuted,
          isUnderline && s.dayUnderline,
        ]}
      >
        {d}
      </Text>
    </View>
  );

  const AppointmentItem = ({ item }: { item: AppointmentCard }) => (
    <View style={s.card}>
      <View style={s.cardLeft}>
        <Image source={item.avatar} style={s.avatar} />
        <View style={s.cardTextWrap}>
          <Text style={s.cardName}>{item.name}</Text>
          <View style={s.timeRow}>
            <Ionicons name="time-outline" size={wp(4.4)} style={s.clockIcon} />
            <Text style={s.timeText}>{item.time}</Text>
          </View>
        </View>
      </View>

      <View style={s.cardRight}>
        <View
          style={[
            s.statusPill,
            item.status === 'confirmed' ? s.statusConfirmed : s.statusPending,
          ]}
        >
          <Text style={s.statusText}>{item.status}</Text>
        </View>

        <View style={s.actionIcons}>
          <Feather name="phone-call" size={wp(5.6)} style={s.actIcon} />
          <MaterialIcons name="videocam" size={wp(6)} style={s.actIcon} />
        </View>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={s.bgimg}
      resizeMode="cover"
    >
      <ScrollView style={s.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={s.header}>
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <Ionicons name="chevron-back" size={wp(7)} />
          </TouchableOpacity>
          <Text style={s.headerTitle}>Calendar</Text>
          <View style={{ width: wp(7) }} />
        </View>

        {/* Calendar Card */}
        <View style={s.calendarCard}>{renderCalendar()}</View>

        {/* Today's Appointments */}
        <Text style={s.sectionHeading}>Today’s Appointments</Text>
        <FlatList
          data={TODAY_APPTS}
          keyExtractor={item => item.id}
          renderItem={AppointmentItem}
          contentContainerStyle={{ paddingBottom: hp(2) }}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default CalendarScreen;
