import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import createStyles from '../../../style/AppointmentDetailsStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const joinedUsers = [
  {
    id: '1',
    name: 'John Marker',
    avatar: require('../../../assets/Image/user2.png'),
  },
  {
    id: '2',
    name: 'Jimmy Deo',
    avatar: require('../../../assets/Image/user2.png'),
  },
  {
    id: '3',
    name: 'Luwis',
    avatar: require('../../../assets/Image/user2.png'),
  },
  {
    id: '4',
    name: 'Susan',
    avatar: require('../../../assets/Image/user2.png'),
  },
];

const AppointmentDetails = () => {
  const s = createStyles(wp, hp);
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={s.bgimg}
      resizeMode="cover"
    >
      <ScrollView style={s.container} showsVerticalScrollIndicator={false}>
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
              Appointment Details
            </Text>
            <View style={{ width: wp(10) }} />
          </View>

          {/* Section Title */}
          <Text style={s.sectionHeading}>Session Information</Text>

          {/* Info Grid */}
          <View style={s.infoRow}>
            <View style={s.infoBox}>
              <Text style={s.infoLabel}>Date & Time</Text>
              <Text style={s.infoValue}>July 22, 2024, 3:00 PM</Text>
            </View>
            <View style={s.infoBox}>
              <Text style={s.infoLabel}>Session Type</Text>
              <Text style={s.infoValue}>Video Call</Text>
            </View>
          </View>

          <View style={s.divider} />

          {/* Focus Areas */}
          <View >
            <Text style={s.infoLabel}>Focus Areas</Text>
            <Text style={s.infoValue}>Stress Management, Career Goals</Text>
          </View>

          {/* Notes */}
          <Text style={s.sectionHeading}>Session Notes</Text>
          <Text style={s.notesText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>

          {/* Start Button */}
          <TouchableOpacity style={s.startButton}>
            <Text style={s.startButtonText}>Start Session</Text>
          </TouchableOpacity>

          {/* Joined Users */}
          <Text style={s.sectionHeading}>Joined Lists</Text>
          <FlatList
            data={joinedUsers}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={s.userRow}>
                <Image source={item.avatar} style={s.userAvatar} />
                <Text style={s.userName}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AppointmentDetails;
