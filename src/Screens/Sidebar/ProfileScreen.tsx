// screens/ProfileScreen.tsx
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { profileStyles as st } from '../../../style/profilestyles';
import Feather from 'react-native-vector-icons/Feather';

const Section = ({ title }: { title: string }) => (
  <View style={st.sectionHead}>
    <Text style={st.sectionTitle}>{title}</Text>
  </View>
);

const Row = ({ left, bottom }: { left: string; bottom?: string }) => (
  <View style={st.row}>
    <View style={{ flex: 1 }}>
      <Text style={st.rowLeft}>{left}</Text>
      {bottom && <Text style={st.rowBottom}>{bottom}</Text>}
    </View>
    <Pressable style={st.backBtn} >
      <Feather name="chevron-right" size={wp(5)} color="#000" />
    </Pressable>
  </View>
);

export default function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={st.bg}
      imageStyle={{ resizeMode: 'cover' }}
    >
      {/* Header */}
      <View style={st.header}>
        <Pressable style={st.backBtn} onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={wp(7.5)} color="#000" />
        </Pressable>
        <Text style={st.headerTitle}>Profile</Text>
        <View style={{ width: wp(9) }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: hp(5) }}>
        {/* Avatar + identity */}
        <View style={{ alignItems: 'center', marginTop: hp(1) }}>
          <View style={st.avatarWrap}>
            <Image
              source={require('../../../assets/Image/avatar1.png')}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
          <Text style={st.name}>Olivia Harper</Text>
          <Text style={st.meta}>28, Female</Text>
          <Text style={st.metaSmall}>
            olivia.harper@email.com · (555) 123-4567
          </Text>
        </View>

        {/* Wellness Overview */}
        <Section title="Wellness Overview" />
        <View style={st.card}>
          <View style={st.scaleRow}>
            <Text style={st.scaleLabel}>Wellness Scale</Text>
            <Text style={st.scaleVal}>7.5/10</Text>
          </View>
          <View style={st.progressTrack}>
            <View style={[st.progressFill, { width: '75%' }]} />
          </View>

          <View style={st.grid2}>
            <View>
              <Text style={st.key}>Primary Needs</Text>
              <Text style={st.val}>Anxiety, Grief, Career{'\n'}Challenges</Text>
            </View>
            <View>
              <Text style={st.key}>Preferred Language</Text>
              <Text style={st.val}>English</Text>
            </View>
          </View>
        </View>

        {/* History */}
        <Section title="History" />
        <View style={st.whitecard}>
          <Row left="Past Appointments" bottom="2024-03-15" />
          <Row left="Session Notes" bottom="2024-03-15" />
          <Row left="My Notes" bottom="2024-03-15" />
        </View>

        {/* Progress Tracking */}
        <Section title="Progress Tracking" />
        <View style={st.whitecard}>
          <Row left="Log Session Notes" />
          <Row left="Track Goals" />
          <Row left="Monitor Progress" />
        </View>

        {/* Emergency Contact */}
        <Section title="Emergency Contact" />
        <View style={st.whitecard}>
          <Row left="Liam Carter" bottom="Relationship: Partner" />
        </View>

        {/* Goals */}
        <Section title="Goals" />
        <View style={st.whitecard}>
          <View style={st.goalRow}>
            <View style={{ flex: 1 }}>
              <Text style={st.goalTitle}>Reduce Anxiety</Text>
              <Text style={st.goalSub}>Target Date: 2024-05-15</Text>
            </View>
            <View style={st.goalTrack}>
                <View style={[st.goalFill, { width: '65%' }]} />
              </View>
            <Text style={st.goalNum}>50</Text>
          </View>

          <View style={st.goalRow}>
            <View style={{ flex: 1 }}>
              <Text style={st.goalTitle}>Improve Career Satisfaction</Text>
              <Text style={st.goalSub}>Target Date: 2024-06-30</Text>
            
            </View>
              <View style={st.goalTrack}>
                <View style={[st.goalFill, { width: '35%' }]} />
              </View>
            <Text style={st.goalNum}>25</Text>
          </View>

          <View style={st.goalRow}>
            <View style={{ flex: 1 }}>
              <Text style={st.goalTitle}>Cope with Grief</Text>
              <Text style={st.goalSub}>Target Date: 2024-07-15</Text>
             
            </View>
              <View style={st.goalTrack}>
                <View style={[st.goalFill, { width: '90%' }]} />
               
              </View>
             <Text style={st.goalNum}>75</Text>
          </View>
        </View>

        {/* CTA */}
        <View style={st.ctaWrap}>
          <TouchableOpacity style={st.cta} activeOpacity={0.85}>
            <Text style={st.ctaText}>Add New Goal</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
