import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  ListRenderItemInfo,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import createStyles from '../../../style/grantAccessStyles';
import { useResponsive } from 'react-native-responsive-hook';
import Header from '../../components/Header';
import SwitchToggle from 'react-native-switch-toggle';

// ---------- Types ----------
type Attendee = {
  id: string;
  name: string;
  status: string;
  avatar?: any; // require(...) or uri string
  selected?: boolean;
};

const GrantAccess: React.FC = () => {
  const navigation = useNavigation();
  const { wp, hp } = useResponsive();
  const styles = useMemo(() => createStyles(wp, hp), [wp, hp]);

  // sample data
  const [attendees, setAttendees] = useState<Attendee[]>(
    Array.from({ length: 5 }).map((_, i) => ({
      id: String(i + 1),
      name: 'Rachel J.',
      status: 'Pending Payment',
      avatar: require('../../../assets/Image/avatar.png'),
      selected: false,
    })),
  );

  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filtered = attendees.filter(a => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Paid') return a.status === 'Paid';
    if (activeFilter === 'Pending Payment')
      return a.status === 'Pending Payment';
    if (activeFilter === 'Already Granted') return a.status === 'Granted';
    return true;
  });

  const toggleAttendee = (id: string) =>
    setAttendees(prev =>
      prev.map(a => (a.id === id ? { ...a, selected: !a.selected } : a)),
    );

  const selectAllVisible = () =>
    setAttendees(prev =>
      prev.map(a =>
        filtered.some(f => f.id === a.id) ? { ...a, selected: true } : a,
      ),
    );

  const confirmAccess = () => {
    const selected = attendees.filter(a => a.selected);
    console.log(
      'Confirmed for: ',
      selected.map(s => s.name),
    );
  };

  // ---------- Reusable: Filter Button ----------
  const FilterButton: React.FC<{
    label: string;
    active?: boolean;
    onPress?: () => void;
  }> = ({ label, active = false, onPress }) => (
    <TouchableOpacity
      style={[styles.filterBtn, active && styles.filterBtnActive]}
      onPress={onPress}
    >
      <Text
        style={[styles.filterBtnText, active && styles.filterBtnTextActive]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  // ---------- Reusable: Attendee Row ----------
  const AttendeeRow: React.FC<{
    item: Attendee;
    onToggle: (id: string) => void;
  }> = ({ item, onToggle }) => (
    <View style={styles.attendeeRow}>
      <View style={styles.avatarAndInfo}>
        <Image
          source={item.avatar ?? require('../../../assets/Image/avatar.png')}
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.nameBlock}>
          <Text style={styles.attendeeName}>{item.name}</Text>
          <Text style={styles.attendeeStatus}>{item.status}</Text>
        </View>
      </View>
      <SwitchToggle
        switchOn={!!item.selected}
        onPress={() => onToggle(item.id)}
        circleColorOff="#fff"
        circleColorOn="#fff"
        backgroundColorOn="#2E7D32"
        backgroundColorOff="#ddd"
        containerStyle={styles.toggleContainer}
        circleStyle={styles.toggleCircle}
      />
    </View>
  );

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bgimg}
    >
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header showWelcomeText={true} />

          {/* Title */}
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={wp(10)}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={styles.screenTitle}>Grant Access</Text>
          </View>

          {/* Filter */}
          <Text style={styles.filterLabel}>Filter By:</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterRow}
          >
            <FilterButton
              label="All"
              active={activeFilter === 'All'}
              onPress={() => setActiveFilter('All')}
            />
            <FilterButton
              label="Paid"
              active={activeFilter === 'Paid'}
              onPress={() => setActiveFilter('Paid')}
            />
            <FilterButton
              label="Pending Payment"
              active={activeFilter === 'Pending Payment'}
              onPress={() => setActiveFilter('Pending Payment')}
            />
            <FilterButton
              label="Already Granted"
              active={activeFilter === 'Already Granted'}
              onPress={() => setActiveFilter('Already Granted')}
            />
          </ScrollView>

          {/* Attendees list */}
          <FlatList
            data={filtered}
            keyExtractor={item => item.id}
            renderItem={({ item }: ListRenderItemInfo<Attendee>) => (
              <AttendeeRow item={item} onToggle={toggleAttendee} />
            )}
            ItemSeparatorComponent={() => <View style={styles.rowSeparator} />}
            contentContainerStyle={styles.listContent}
          />

          {/* Actions */}
          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={styles.selectAllBtn}
              onPress={selectAllVisible}
            >
              <Text style={styles.selectAllText}>Select All Visible</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirmBtn} onPress={confirmAccess}>
              <Text style={styles.confirmBtnText}>Confirm Access</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default GrantAccess;
