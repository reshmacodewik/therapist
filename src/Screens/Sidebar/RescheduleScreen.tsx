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
import { rescheduleStyles as s } from '../../../style/RescheduleStyles'

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

export default function RescheduleScreen() {
  // default to July 2024 to mirror the design
  const [cursor, setCursor] = useState({ y: 2024, m: 6 }); // 0-indexed month
  const [selectedDay, setSelectedDay] = useState<number | null>(15);
  const [selectedSlot, setSelectedSlot] = useState<string>('1030a-1');

  const monthMatrix = useMemo(
    () => buildMonthMatrix(cursor.y, cursor.m),
    [cursor],
  );

  const monthName = useMemo(
    () =>
      new Date(cursor.y, cursor.m, 1).toLocaleString('en', {
        month: 'long',
      }),
    [cursor],
  );

  const onPrev = () => {
    setCursor((c) => {
      const m = c.m - 1;
      return m < 0 ? { y: c.y - 1, m: 11 } : { y: c.y, m };
    });
    setSelectedDay(null);
  };
  const onNext = () => {
    setCursor((c) => {
      const m = c.m + 1;
      return m > 11 ? { y: c.y + 1, m: 0 } : { y: c.y, m };
    });
    setSelectedDay(null);
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={s.bg}
      imageStyle={{ resizeMode: 'cover' }}
    >
      {/* Header */}
      <View style={s.header}>
        <TouchableOpacity style={s.backBtn} activeOpacity={0.7}>
          <Text style={s.backIcon}>‹</Text>
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
              resizeMode="cover"
            />
            <View style={{ flex: 1 }}>
              <View style={s.nameRow}>
                <Text style={s.nameTxt}>Sarah Johnson</Text>
                <Text style={s.pill}>Reschedule</Text>
              </View>
              <View style={s.metaRow}>
                <View style={s.dot} />
                <Text style={s.metaTxt}>10:00 AM</Text>
              </View>
            </View>

            <View style={s.iconRow}>
              <TouchableOpacity style={s.circleIcon}>    
                <Text style={s.iconGlyph}>📞</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[s.circleIcon, { marginLeft: wp(2) }]}>
                <Text style={s.iconGlyph}>💬</Text>
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
          <View style={s.bulletRow}>
            <View style={s.bulletDot} />
            <Text style={s.bulletTxt}>Time: 3:30 PM</Text>
          </View>
        </View>

        {/* Calendar */}
        <Text style={s.sectionTitle}>Select a new date</Text>
        <View style={s.calendarCard}>
          <View style={s.calTop}>
            <View>
              <Text style={s.yearBadge}>{cursor.y}</Text>
              <Text style={s.selDayBadge}>
                {selectedDay
                  ? new Date(cursor.y, cursor.m, selectedDay).toLocaleDateString(
                      'en',
                      { weekday: 'short' },
                    )
                  : '—'}
                {selectedDay ? `, ${selectedDay}` : ''}
              </Text>
            </View>
          </View>

          <View style={s.monthHead}>
            <TouchableOpacity onPress={onPrev} style={s.chevBtn}>
              <Text style={s.chevTxt}>‹</Text>
            </TouchableOpacity>

            <Text style={s.monthTitle}>
              {monthName} {cursor.y}
            </Text>

            <TouchableOpacity onPress={onNext} style={s.chevBtn}>
              <Text style={s.chevTxt}>›</Text>
            </TouchableOpacity>
          </View>

          <View style={s.weekRow}>
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sat', 'Sun'].map((d) => (
              <Text key={d} style={s.weekTxt}>
                {d}
              </Text>
            ))}
          </View>

          {monthMatrix.map((row, ri) => (
            <View style={s.daysRow} key={`r-${ri}`}>
              {row.map((d, ci) => {
                const active = d != null && d === selectedDay;
                return (
                  <TouchableOpacity
                    key={`c-${ci}`}
                    style={[s.dayCell, active && s.dayActive]}
                    activeOpacity={d ? 0.8 : 1}
                    onPress={() => d && setSelectedDay(d)}
                  >
                    <Text style={[s.dayTxt, active && s.dayTxtActive]}>
                      {d ?? ''}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>

        {/* Time slots */}
        <Text style={s.sectionTitle}>Select a new time slot</Text>
        <View style={s.slotCard}>
          <View style={s.slotGrid}>
            {DEFAULT_SLOTS.map((slot) => {
              const active = selectedSlot === slot.id;
              return (
                <TouchableOpacity
                  key={slot.id}
                  onPress={() => setSelectedSlot(slot.id)}
                  activeOpacity={0.9}
                  style={[s.slotPill, active ? s.slotPillActive : s.slotPillIdle]}
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
