import React, { useCallback, useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';

// If you already have wp/hp helpers, use those.
// Example using react-native-responsive-screen:
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import createStyles from '../../../style/MyAppointmentStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/types';

type Appointment = {
  id: string;
  name: string;
  date: string;
  time: string;
  avatar: any;
  type: 'upcoming' | 'past';
};

const DATA: Appointment[] = [
  {
    id: '1',
    name: 'Cognitive Behavioral Therapy',
    date: '09 April 2025',
    time: '2:00 PM - 3:00 PM',
    avatar: require('../../../assets/Image/user2.png'),
    type: 'upcoming',
  },
  {
    id: '2',
    name: 'Anxiety Relief Coaching',
    date: '09 April 2025',
    time: '2:00 PM - 3:00 PM',
    avatar: require('../../../assets/Image/user2.png'),
    type: 'upcoming',
  },
  {
    id: '3',
    name: 'Anxiety Relief Coaching',
    date: '09 April 2025',
    time: '2:00 PM - 3:00 PM',
    avatar: require('../../../assets/Image/user2.png'),
    type: 'upcoming',
  },
  {
    id: '4',
    name: 'Anxiety Relief Coaching',
    date: '09 April 2025',
    time: '2:00 PM - 3:00 PM',
    avatar: require('../../../assets/Image/user2.png'),
    type: 'upcoming',
  },
  {
    id: '3',
    name: 'Mindfulness & Meditation Session',
    date: '09 April 2025',
    time: '2:00 PM - 3:00 PM',
    avatar: require('../../../assets/Image/user2.png'),
    type: 'past',
  },

  {
    id: '4',
    name: 'Couple’s Counseling',
    date: '09 April 2025',
    time: '2:00 PM - 3:00 PM',
    avatar: require('../../../assets/Image/user2.png'),
    type: 'past',
  },
];

const MyAppointment = () => {
  // build the real style object from the factory
  const s = useMemo(() => createStyles(wp, hp), []);
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'past'>(
    'upcoming',
  );
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'MyAppointment'>
    >();

  const filtered = DATA.filter(i => i.type === selectedTab);

  const onPressCard = useCallback(
    (item: Appointment) => {
      navigation.navigate('AppointmentDetails'); // ✅ now typed
    },
    [navigation],
  );
  const renderItem = ({ item }: { item: Appointment }) => (
    <Pressable
      onPress={() => onPressCard(item)}
      android_ripple={{ color: 'rgba(0,0,0,0.06)', borderless: false }}
      style={s.card}
      accessibilityRole="button"
      accessibilityLabel={`${item.name}, ${item.date} ${item.time}`}
    >
      <Image source={item.avatar} style={s.avatar} />
      <View style={s.textContainer}>
        <Text style={s.sessionTitle} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={s.sessionDate}>
          {item.date} | {item.time}
        </Text>
      </View>
    </Pressable>
  );
  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={s.bgimg}
      resizeMode="cover"
    >
      <View style={s.container}>
        <View style={s.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={s.backButton}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8.5)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={s.headerTitle} numberOfLines={1}>
            My Appointment
          </Text>
          <View style={{ width: wp(10) }} />
        </View>

        <View style={s.tabContainer}>
          <TouchableOpacity
            style={[s.tabButton, selectedTab === 'upcoming' && s.activeTab]}
            onPress={() => setSelectedTab('upcoming')}
          >
            <Text
              style={[s.tabText, selectedTab === 'upcoming' && s.activeTabText]}
            >
              Upcoming Session
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[s.tabButton, selectedTab === 'past' && s.activeTab]}
            onPress={() => setSelectedTab('past')}
          >
            <Text
              style={[s.tabText, selectedTab === 'past' && s.activeTabText]}
            >
              Past Session
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filtered}
          keyExtractor={i => i.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: hp(5) }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
};

export default MyAppointment;
