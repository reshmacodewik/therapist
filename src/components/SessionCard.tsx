import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { sessionsStyles } from '../../style/sessionsStyles';

interface SessionCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  attendees: number;
  image: any;
  showConductButton?: boolean;
  onManage: () => void;
  onConduct?: () => void;
}

const SessionCard: React.FC<SessionCardProps> = ({
  title,
  description,
  date,
  time,
  attendees,
  image,
  showConductButton = false,
  onManage,
  onConduct,
}) => {
  return (
    <View style={sessionsStyles(wp, hp).sessionCard}>
      <View style={sessionsStyles(wp, hp).sessionImageContainer}>
        <Image source={image} style={sessionsStyles(wp, hp).sessionImage} />
      </View>
      <View style={sessionsStyles(wp, hp).sessionContent}>
        <View style={sessionsStyles(wp, hp).sessionTitleContainer}>
          <Text style={sessionsStyles(wp, hp).sessionTitle}>{title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: wp(3) }}>
            <Image
              source={require('../../assets/icon/chat.png')}
              style={sessionsStyles(wp, hp).freeicon}
            />
            <Image
              source={require('../../assets/icon/free.png')}
              style={sessionsStyles(wp, hp).freeicon}
            />
          </View>
        </View>

        <Text style={sessionsStyles(wp, hp).sessionDescription}>
          {description}
        </Text>
        <Text style={sessionsStyles(wp, hp).sessionInfo}>
          {date} · {time}
        </Text>
        <Text style={sessionsStyles(wp, hp).sessionAttendees}>
          {attendees} Attending
        </Text>

        {showConductButton ? (
          <View style={sessionsStyles(wp, hp).buttonRow}>
            <TouchableOpacity
              style={sessionsStyles(wp, hp).manageButton}
              onPress={onManage}
            >
              <Text style={sessionsStyles(wp, hp).manageButtonText}>
                Manage
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={sessionsStyles(wp, hp).conductButton}
              onPress={onConduct}
            >
              <Text style={sessionsStyles(wp, hp).conductButtonText}>
                Conduct
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={sessionsStyles(wp, hp).singleButtonContainer}>
            <TouchableOpacity
              style={sessionsStyles(wp, hp).manageButton}
              onPress={onManage}
            >
              <Text style={sessionsStyles(wp, hp).manageButtonText}>
                Manage
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default SessionCard;
