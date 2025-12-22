import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import eventCardStyles from './style/eventCardStyles';


type StatusType = 'approved' | 'requested' | 'rejected';

interface Props {
  title: string;
  date: string;
  time: string;
  image: any;
  attendees?: number;
  status: StatusType;
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
  onManage,
  onConduct,
}) => {
  const styles = eventCardStyles(wp, hp);

  return (
    <View style={styles.card}>
      {/* Image */}
      <Image source={image} style={styles.image} />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>
          {date}  {'\n'}Onwards {time}
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

        {status === 'rejected' && (
          <>
            <Text style={styles.rejectedMsg}>
              Event Information is incomplete
            </Text>

            <View style={styles.rejectedBadge}>
              <Text style={styles.rejectedText}>Rejected</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default EventCard;
