import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../../style/homestyles';
import { useResponsive } from '../../components/Responsive/useResponsive';

const CalendarCard = () => {
  const { wp, hp } = useResponsive();
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

    // Previous month's days
    const prevMonth = new Date(year, month, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthDays - i),
      });
    }

    // Current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i),
      });
    }

    // Fill remaining next month's days to complete 6 rows
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i),
      });
    }

    return days;
  };

  const handleDayPress = (date: Date, isCurrentMonth: boolean) => {
    if (isCurrentMonth) setSelectedDate(date);
  };

  const changeMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth);
    if (direction === 'prev') newMonth.setMonth(newMonth.getMonth() - 1);
    else newMonth.setMonth(newMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  return (
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

      {/* Navigation */}
      <View style={styles(wp, hp).calendarNav}>
        <TouchableOpacity onPress={() => changeMonth('prev')}>
          <MaterialIcons name="chevron-left" size={wp(6)} color="#264734" />
        </TouchableOpacity>
        <Text style={{ fontSize: wp(4), color: '#264734', fontFamily: 'Poppins-Bold' }}>
          {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </Text>
        <TouchableOpacity onPress={() => changeMonth('next')}>
          <MaterialIcons name="chevron-right" size={wp(6)} color="#264734" />
        </TouchableOpacity>
      </View>

      {/* Days of week */}
      <View style={styles(wp, hp).calendarGrid}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <View key={day} style={[styles(wp, hp).calendarDay, { backgroundColor: 'transparent' }]}>
            <Text style={[styles(wp, hp).calendarDayText, { color: '#264734', fontFamily: 'Poppins-Bold' }]}>
              {day}
            </Text>
          </View>
        ))}

        {/* Calendar dates */}
        {getDaysInMonth(currentMonth).map((dayData, index) => {
          const isSelected = selectedDate.toDateString() === dayData.date.toDateString();
          const isToday = new Date().toDateString() === dayData.date.toDateString();

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles(wp, hp).calendarDay,
                isSelected && styles(wp, hp).calendarDaySelected,
                isToday && !isSelected && { backgroundColor: '#fff' },
              ]}
              onPress={() => handleDayPress(dayData.date, dayData.isCurrentMonth)}
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
};

export default CalendarCard;
