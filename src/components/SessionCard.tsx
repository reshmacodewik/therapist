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
  sessionType: 'Voice Call' | 'Video Call' | 'Chat';
  isFree: boolean;
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
  isFree,
  showConductButton = false,
  sessionType,
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
          <Text style={sessionsStyles(wp, hp).sessionTitle}>
            {(() => {
              const words = title.split(' ');
              return words.length > 1
                ? words.slice(0, 2).join(' ') + '\n' + words.slice(2).join(' ')
                : title;
            })()}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: wp(3),
            }}
          >
            <Image
              source={sessionType === 'Chat' ? require('../../assets/icon/chat1.png') : require('../../assets/icon/video.png')}
              style={sessionsStyles(wp, hp).freeicon}
            />

            <Image
              source={
                isFree
                  ? require('../../assets/icon/free.png')
                  : require('../../assets/icon/badge.png')
              }
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
