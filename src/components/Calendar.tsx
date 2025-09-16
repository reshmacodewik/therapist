import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { calendarStyles } from '../../style/calendarStyles';

interface CalendarProps {
  selectedDate: Date;
  currentMonth: Date;
  onDateSelect: (day: number, isCurrentMonth: boolean, date: Date) => void;
  onMonthChange: (direction: 'prev' | 'next') => void;
  getDaysInMonth: (date: Date) => Array<{
    day: number;
    isCurrentMonth: boolean;
    date: Date;
  }>;
}

const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  currentMonth,
  onDateSelect,
  onMonthChange,
  getDaysInMonth,
}) => {
  return (
    <View style={calendarStyles(wp, hp).calendarContainer}>
      <View style={calendarStyles(wp, hp).customCalendarHeader}>
        <Text style={calendarStyles(wp, hp).calendarHeaderYear}>
          {selectedDate.getFullYear()}
        </Text>
        <Text style={calendarStyles(wp, hp).calendarHeaderDate}>
          {selectedDate.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
      </View>
      <View style={calendarStyles(wp, hp).calendarNav}>
        <TouchableOpacity onPress={() => onMonthChange('prev')}>
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
        <TouchableOpacity onPress={() => onMonthChange('next')}>
          <MaterialIcons name="chevron-right" size={wp(6)} color="#264734" />
        </TouchableOpacity>
      </View>
      <View style={calendarStyles(wp, hp).calendarGrid}>
        {/* Days of week header */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
          (day, _index) => (
            <View
              key={day}
              style={[
                calendarStyles(wp, hp).calendarDay,
                { backgroundColor: 'transparent' },
              ]}
            >
              <Text
                style={[
                  calendarStyles(wp, hp).calendarDayText,
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
                calendarStyles(wp, hp).calendarDay,
                isSelected && calendarStyles(wp, hp).calendarDaySelected,
                isToday && !isSelected && { backgroundColor: '#fff' },
              ]}
              onPress={() =>
                onDateSelect(
                  dayData.day,
                  dayData.isCurrentMonth,
                  dayData.date,
                )
              }
            >
              <Text
                style={[
                  calendarStyles(wp, hp).calendarDayText,
                  !dayData.isCurrentMonth && { color: '#d9d9d9' },
                  isSelected && calendarStyles(wp, hp).calendarDayTextSelected,
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

export default Calendar;