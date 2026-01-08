import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import eventCardStyles from './style/eventCardStyles';

type StatusType = 'approved' | 'requested' | 'REJECTED';

interface Props {
  title: string;
  date: string;
  time: string;
  image?: string | null;
  attendees?: number;
  status: StatusType;
  isFree: boolean;
  adminRejectReason?: string;
  onPress?: () => void;
  onManage?: () => void;
  onConduct?: () => void;
}

const EventCard: React.FC<Props> = ({
  title,
  date,
  time,
  image,
  attendees,
  status,
  isFree,
  adminRejectReason,
  onPress,
  onManage,
  onConduct,
}) => {
  const styles = eventCardStyles(wp, hp);
  const truncateWords = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };
  const imageSource =
    image && image.startsWith('http')
      ? { uri: encodeURI(image) } // ✅ ENCODE URL
      : require('../../assets/Image/yoga.png'); // fallback
  return (
    <Pressable style={styles.card} onPress={onPress}>
      {/* Image */}
      <Image
        source={imageSource}
        style={styles.image}
      />

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.title}>{truncateWords(title, 3)}</Text>

          <View style={[styles.badge]}>
            <Image
              source={
                isFree
                  ? require('../../assets/icon/free.png')
                  : require('../../assets/icon/badge.png')
              }
              style={styles.badgeImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <Text style={styles.date}>
          {date} {'\n'}Onwards {time}
        </Text>

        {/* Attendees */}
        {attendees !== undefined && status === 'approved' && (
          <Text style={styles.attendees}>+{attendees} Registered</Text>
        )}

        {/* STATUS UI */}
        {status === 'approved' && (
          <>
            <View style={styles.approvedBadge}>
              <Text style={styles.approvedText}>Approved</Text>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.manageBtn} onPress={onManage}>
                <Text style={styles.manageText}>Manage</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.conductBtn} onPress={onConduct}>
                <Text style={styles.conductText}>Conduct</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {status === 'requested' && (
          <>
            <View style={styles.requestedBadge}>
              <Text style={styles.requestedText}>Requested</Text>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.disabledBtn}>
                <Text style={styles.disabledText}>Manage</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.disabledBtn}>
                <Text style={styles.disabledText}>Conduct</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {status === 'REJECTED' && (
          <>
            <Text style={styles.rejectedMsg}>
              {adminRejectReason }
            </Text>

            <View style={styles.rejectedBadge}>
              <Text style={styles.rejectedText}>Rejected</Text>
            </View>
          </>
        )}
      </View>
    </Pressable>
  );
};

export default EventCard;
