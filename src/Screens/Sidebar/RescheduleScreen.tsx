// screens/RescheduleScreen.tsx
import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { rescheduleStyles as s } from '../../../style/RescheduleStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/types';

type Slot = { id: string; label: string };

const DEFAULT_SLOTS: Slot[] = [
  { id: '1030a-1', label: '10:30 AM' },
  { id: '1130a-1', label: '11:30 AM' },
  { id: '1230p-1', label: '12:30 PM' },
  { id: '1030a-2', label: '10:30 AM' },
  { id: '1230p-2', label: '12:30 PM' },
  { id: '1130a-2', label: '11:30 AM' },
];

// Build a month grid matrix starting on Monday (Mo–Su) to match the mock.
function buildMonthMatrix(year: number, monthIndex: number) {
  const first = new Date(year, monthIndex, 1);
  const last = new Date(year, monthIndex + 1, 0);
  // JS: 0=Sun..6=Sat -> convert to Mon=0..Sun=6
  const firstDow = (first.getDay() + 6) % 7;
  const daysInMonth = last.getDate();

  const cells: Array<number | null> = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const rows: Array<Array<number | null>> = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
  return rows;
}

export default function RescheduleScreen({ navigation }: { navigation: NavigationProp<RootStackParamList, 'RescheduleScreen'> }) {
  // default to July 2024 to mirror the design
  const [cursor, setCursor] = useState({ y: 2024, m: 6 }); // 0-indexed month
  const [selectedDay, setSelectedDay] = useState<number | null>(15);
  const [selectedSlot, setSelectedSlot] = useState<string>('1030a-1');

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

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={s.bg}
      imageStyle={{ resizeMode: 'cover' }}
    >
      {/* Header */}
      <View style={s.header}>
        <TouchableOpacity style={s.backBtn} activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <MaterialIcons name="chevron-left" size={wp(8)} color="#264734" />
        </TouchableOpacity>
        <Text style={s.headerTitle}>Reschedule Sessions</Text>
        <View style={{ width: wp(9) }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: hp(6) }}>
        {/* Section: Appointment Detail */}
        <Text style={s.sectionTitle}>Appointment Detail</Text>

        <View style={s.cardWide}>
          <View style={s.row}>
            <Image
              source={require('../../../assets/Image/avatar1.png')}
              style={s.avatar}
            />
            <View style={{ flex: 1 }}>
              <View style={s.nameRow}>
                <Text style={s.nameTxt}>Sarah Johnson</Text>
              </View>
              <View style={s.metaRow}>
                <Image
                  source={require('../../../assets/icon/filledclock.png')}
                  style={s.clockIcon}
                />
                <Text style={s.metaTxt}>10:00 AM</Text>
                <Text style={s.pill}>Reschedule</Text>
              </View>
            </View>

            <View style={s.iconRow}>
              <TouchableOpacity style={s.circleIcon}>
                <Image
                  source={require('../../../assets/icon/phonechat.png')}
                  style={s.iconGlyph}
                />
              </TouchableOpacity>
              <TouchableOpacity style={[s.circleIcon, { marginLeft: wp(2) }]}>
                <Image
                  source={require('../../../assets/icon/chat.png')}
                  style={s.iconGlyph}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={s.cardWide}>
          <Text style={s.subHead}>Session’s Detail</Text>
          <View style={s.bulletRow}>
            <View style={s.bulletDot} />
            <Text style={s.bulletTxt}>Date: 25th June 2025, Monday</Text>
          </View>
          <View style={s.bulletRow1}>
            <View style={s.bulletDot} />
            <Text style={s.bulletTxt}>Time: 3:30 PM</Text>
          </View>
        </View>

        {/* Calendar */}
        <Text style={s.sectionTitle}>Select a new date</Text>
        <View style={s.calendarCard}>{renderCalendar()}</View>
        {/* Time slots */}
        <Text style={s.sectionTitle}>Select a new time slot</Text>
        <View style={s.slotCard}>
          <View style={s.slotGrid}>
            {DEFAULT_SLOTS.map(slot => {
              const active = selectedSlot === slot.id;
              return (
                <TouchableOpacity
                  key={slot.id}
                  onPress={() => setSelectedSlot(slot.id)}
                  activeOpacity={0.9}
                  style={[
                    s.slotPill,
                    active ? s.slotPillActive : s.slotPillIdle,
                  ]}
                >
                  <Text style={[s.slotTxt, active && s.slotTxtActive]}>
                    {slot.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* CTA */}
        <View style={s.ctaWrap}>
          <TouchableOpacity style={s.cta} activeOpacity={0.9}>
            <Text style={s.ctaText}>Reschedule</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
