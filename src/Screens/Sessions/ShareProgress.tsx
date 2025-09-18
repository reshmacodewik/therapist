import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import createStyles from '../../../style/ShareProgressStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

// Sample award badge icons
const awardIcons = [
  {
    icon: require('../../../assets/Image/award.png'),
    title: 'Outstanding Participation',
  },
  {
    icon: require('../../../assets/icon/Group.png'),
    title: 'Self care Champion',
  },
];

type ParticipateItemProps = {
  name: string;
  styles: ReturnType<typeof createStyles>;
};

const ParticipateItem: React.FC<ParticipateItemProps> = ({ name, styles }) => (
  <View style={styles.participateItem}>
    <Image
      source={require('../../../assets/Image/avatar.png')}
      style={styles.avatar}
    />
    <Text style={styles.participantName}>{name}</Text>
  </View>
);

const ShareProgress: React.FC = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation();
  const styles = createStyles(wp, hp);

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bgimg}
    >
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: hp(10) }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <Header showWelcomeText={true} />

          {/* Title with Back Button */}
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={wp(10)}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={styles.title}>Share Progress</Text>
          </View>
        <View style={styles.innercontainer}>
          <TextInput
            style={styles.search}
            placeholder="Search"
            placeholderTextColor="#aaa"
          />

          {/* Award Badges */}
          <Text style={styles.sectionTitle}>Award Badge</Text>
          <View style={styles.awardBadgeContainer}>
            {awardIcons.map((award, index) => (
              <View key={index} style={styles.awardItem}>
                <Image source={award.icon} style={styles.awardIcon} />
                <Text style={styles.awardTitle}>{award.title}</Text>
              </View>
            ))}
          </View>

          {/* Participants */}
          <Text style={styles.sectionTitle}>Participate</Text>
          {['Brian K.', 'Brian K.', 'Brian K.'].map((name, index) => (
            <ParticipateItem key={index} name={name} styles={styles} />
          ))}

          {/* Send Button */}
          <View style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default ShareProgress;
