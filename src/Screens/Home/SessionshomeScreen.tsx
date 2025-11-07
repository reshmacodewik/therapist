import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { makeSessionStyles } from '../../../style/SessionshomeStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const sessions = [
  {
    id: 1,
    type: 'Video call',
    typeColor: '#184D35',
    typeIcon: 'videocam-outline',
  },
  {
    id: 2,
    type: 'Audio call',
    typeColor: '#F7931A',
    typeIcon: 'call-outline',
  },
  {
    id: 3,
    type: 'Chat',
    typeColor: '#007AFF',
    typeIcon: 'chatbubble-outline',
  },
];

export default function SessionshomeScreen() {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const styles = makeSessionStyles(wp, hp);
  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')} // responsive background image
      style={styles.bg}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View>
            <Image
              source={require('../../../assets/Image/logo1.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/icon/bell.png')}
                style={styles.bellIcon}
              />
            </TouchableOpacity>
            <Image
              source={require('../../../assets/Image/homeuser.png')}
              style={styles.userIcon}
            />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Today Sessions</Text>
        </View>

        {sessions.map(session => (
          <View key={session.id} style={styles.card}>
            {/* Profile row */}
            <View style={styles.profileRow}>
              <Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/32.jpg',
                }}
                style={styles.avatar}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>Jimmy Deo</Text>
                <Text style={styles.schedule}>Schedule on 13/03/2025</Text>
              </View>
              <TouchableOpacity
                style={[styles.typeBtn, { backgroundColor: session.typeColor }]}
              >
                <Ionicons
                  name={session.typeIcon as any}
                  size={18}
                  color="#fff"
                />
                <Text style={styles.typeBtnText}>{session.type}</Text>
              </TouchableOpacity>
            </View>

            {/* Info row */}
            <View style={styles.infoRow}>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>
                  <Text style={styles.bold}>Age:</Text> 25
                </Text>
                <Text style={styles.infoText}>
                  <Text style={styles.bold}>Gender:</Text> male
                </Text>
                <Text style={styles.infoText}>Contact Info:</Text>
                <View style={styles.lineRow}>
                  <Ionicons
                    name="mail-outline"
                    size={wp(4.8)}
                    color="#fff"
                    style={styles.lineIcon}
                  />
                  <Text style={styles.lineText}>Jimmydeo@gmail.com</Text>
                </View>

                <View style={styles.lineRow}>
                  <Ionicons
                    name="call-outline"
                    size={wp(4.8)}
                    color="#fff"
                    style={styles.lineIcon}
                  />
                  <Text style={styles.lineText}>231 012 693 2</Text>
                </View>
              </View>

              <View style={styles.detailBox}>
                <Text style={styles.detailTitle}>Session’s Detail</Text>
                <Text style={styles.detailText}>• Lorem ipsum dolor sit</Text>
                <Text style={styles.detailText}>• Lorem ipsum dolor sit</Text>
                <Text style={styles.detailText}>• Lorem ipsum dolor sit</Text>
              </View>
            </View>

            {/* Action buttons */}
            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.startBtn}>
                <Text style={styles.startBtnText}>Start sessions</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rescheduleBtn}>
                <Text style={styles.rescheduleText}>Reschedule</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.remindBtn}>
                <Text style={styles.remindText}>Remind me</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}
