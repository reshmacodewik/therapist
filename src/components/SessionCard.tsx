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
  image?: string | null;

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
  const imageSource =
    image && image.startsWith('http')
      ? { uri: encodeURI(image) } // ✅ ENCODE URL
      : require('../../assets/Image/yoga.png'); // fallback
  const formatTitle = (title: string) => {
    const words = title.trim().split(/\s+/);

    if (words.length <= 4) {
      return title;
    }

    return `${words.slice(0, 4).join(' ')}\n${words.slice(4).join(' ')}`;
  };

  return (
    <View style={sessionsStyles(wp, hp).sessionCard}>
      <View style={sessionsStyles(wp, hp).sessionImageContainer}>
        <Image
          source={imageSource}
          style={sessionsStyles(wp, hp).sessionImage}
        />
      </View>
      <View style={sessionsStyles(wp, hp).sessionContent}>
        <View style={sessionsStyles(wp, hp).sessionTitleContainer}>
          <Text
            style={sessionsStyles(wp, hp).sessionTitle}
            numberOfLines={1} // important
          >
            {formatTitle(title)}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: wp(1),
            }}
          >
            <Image
              source={
                sessionType === 'Chat'
                  ? require('../../assets/icon/chat1.png')
                  : require('../../assets/icon/video.png')
              }
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

        <Text
          style={sessionsStyles(wp, hp).sessionDescription}
          numberOfLines={3}
        >
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
