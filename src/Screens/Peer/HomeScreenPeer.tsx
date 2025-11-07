import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../style/HomeScreenStyles';
import MyCircleCard from '../../components/MyCircleCard';
import RequestCard from '../../components/RequestCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CalendarCard from '../../components/Calendar';
import PeerHeader from '../../components/PeerHeader';
const sampleCircles = [
  {
    id: '1',
    callToAction: 'Group Call',
    title: 'Stress Management',
    members: 24,
    messages: 5,
    cta: 'View',
  },
  {
    id: '2',
    callToAction: 'Group Call',
    title: 'Anxiety Support',
    members: 10,
    messages: 5,
    cta: 'Join group sessions',
  },
  {
    id: '3',
    callToAction: 'Group Call',
    title: 'Communication Skill',
    members: 24,
    messages: 5,
    cta: 'View',
  },
];

const sampleRequests = [
  {
    id: 'r1',
    name: 'Emily Chen',
    note: "wants to be in depression peer's group",
  },
  {
    id: 'r2',
    name: 'Michael Stone',
    note: "wants to be in stress group's group",
  },
];

const HomeScreenPeer: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Image/background.png')}
        resizeMode="cover"
        style={styles.background}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header area */}
          <PeerHeader
            onBellPress={() => console.log('Bell pressed')}
           // onProfilePress={() => console.log('Profile pressed')}
          />

          {/* Welcome */}
          <Text style={styles.welcomeText}>
            Welcome to your{'\n'}peer circle susan
          </Text>

          {/* My Circle Section */}
          <View style={styles.sectionHeader}>
            <View style={{ flexDirection: 'row', gap: wp(2.5) }}>
              <Image
                source={require('../../../assets/icon/clock.png')}
                style={styles.sessionIcon}
              />
              <Text style={styles.sectionTitle}>My Circle</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={wp(6)} color="#000" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={sampleCircles}
            keyExtractor={item => item.id}
            horizontal
            contentContainerStyle={styles.circleList}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <MyCircleCard
                title={item.title}
                members={item.members}
                messages={item.messages}
                cta={item.cta}
                onPress={() => {}}
              />
            )}
          />

          {/* Total number of groups */}
          <View>
            <View style={styles.sectionHeader}>
              <View style={{ flexDirection: 'row', gap: wp(2.5) }}>
                <Image
                  source={require('../../../assets/icon/clock.png')}
                  style={styles.sessionIcon}
                />
                <Text style={styles.sectionTitle}>Total number of groups</Text>
              </View>
            </View>
            <View style={styles.totalGroupsBox}>
              <Text style={styles.totalGroupsCount}>07 Groups</Text>
              <TouchableOpacity style={styles.createGroupBtn} onPress={() => navigation.navigate('CreatePeerGroupScreen' as never)}>
                <Text style={styles.createGroupText}>Create New Group</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Requests & Approval */}
          <View style={styles.sectionHeader}>
            <View style={{ flexDirection: 'row', gap: wp(2.5) }}>
              <Image
                source={require('../../../assets/icon/clock.png')}
                style={styles.sessionIcon}
              />
              <Text style={styles.sectionTitle}>Requests & Approval</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('RequestApprovalScreen' as never)}>
              <Ionicons name="chevron-forward" size={wp(6)} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.requestsList}>
            {sampleRequests.map(r => (
              <RequestCard
                key={r.id}
                name={r.name}
                note={r.note}
                onAccept={() => {}}
                onDecline={() => {}}
              />
            ))}
          </View>

          {/* Bottom row: Calendar + Earnings */}
          <View style={styles.gridRow}>
            {/* Calendar Section */}
            <View style={styles.calendarHeader}>
              <Text style={styles.sectionTitle}>Calendar</Text>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: wp(1),
                  marginLeft: wp(20),
                }}
              >
                <Ionicons name="chevron-forward" size={wp(6)} color="#000" />
              </TouchableOpacity>
            </View>

            {/* CalendarCard reused from HomeScreen */}

            <View style={styles.sectionHeaderWeek}>
              <View style={styles.rowStart}>
                <Image
                  source={require('../../../assets/icon/message-circle.png')}
                  style={styles.sessionIcon}
                  resizeMode="contain"
                />
                <Text style={styles.sectionTitleWeek}>This Week Earning</Text>
              </View>
              <TouchableOpacity style={{ marginLeft: wp(3) }}>
                <Ionicons name="chevron-forward" size={wp(6)} color="#000" />
              </TouchableOpacity>
            </View>

            <View style={styles.gridItem}>
              <View style={styles.calendarCard}>
                <Text style={styles.calendarTitle}></Text>
                <CalendarCard />
              </View>
            </View>

            {/* Earnings card */}
            <View style={styles.gridItem}>
              <View style={styles.earningCard}>
                <Image
                  source={require('../../../assets/Image/wallet.png')}
                  style={styles.walletIcon}
                  resizeMode="contain"
                />
                <Text style={styles.earningText}>KES 800</Text>
                <TouchableOpacity style={styles.withdrawBtn}>
                  <Text style={styles.withdrawText}>Withdraw funds</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ height: hp(6) }} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreenPeer;
