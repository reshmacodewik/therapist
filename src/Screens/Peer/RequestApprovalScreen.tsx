import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PeerHeader from '../../components/PeerHeader';
import { styles } from '../../../style/RequestApprovalStyles';
import RequestCard from '../../components/RequestCard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const sampleRequests = [
  {
    id: '1',
    name: 'Emily Chen',
    note: 'wants to be in depression peer’s group',
  },
  {
    id: '2',
    name: 'Emily Chen',
    note: 'wants to be in depression peer’s group',
  },
  {
    id: '3',
    name: 'Emily Chen',
    note: 'wants to be in depression peer’s group',
  },
  {
    id: '4',
    name: 'Emily Chen',
    note: 'wants to be in depression peer’s group',
  },
  {
    id: '5',
    name: 'Emily Chen',
    note: 'wants to be in depression peer’s group',
  },
];

const RequestApprovalScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <PeerHeader
          onBellPress={() => console.log('Bell pressed')}
          // onProfilePress={() => console.log('Profile pressed')}
        />
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Requests & Approval</Text>
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
      </ScrollView>
    </ImageBackground>
  );
};

export default RequestApprovalScreen;
