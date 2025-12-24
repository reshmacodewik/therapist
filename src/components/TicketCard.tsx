import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style/TicketCardStyles';

type TicketStatus = 'Open' | 'In Progress' | 'Resolved';

interface Props {
  title: string;
  ticketId: string;
  category: string;
  createdAt: string;
  lastReply: string;
  status: TicketStatus;
  onPress: () => void;
}

const STATUS_STYLE_MAP: Record<TicketStatus, any> = {
  Open: styles.Open,
  'In Progress': styles.InProgress,
  Resolved: styles.Resolved,
};

const TicketCard: React.FC<Props> = ({
  title,
  ticketId,
  category,
  createdAt,
  lastReply,
  status,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} >
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        <View style={[styles.statusBadge, STATUS_STYLE_MAP[status]]}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>

      <Text style={styles.meta}>
        Ticket ID: <Text style={styles.bold}>#{ticketId}</Text>
      </Text>

      <Text style={styles.meta}>
        {category} · Created: {createdAt}
      </Text>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#E5E7EB', marginTop: 10}} />
      <View style={styles.footer}>
        <Text style={styles.reply}>Last reply: {lastReply}</Text>
        <TouchableOpacity onPress={onPress}>
        <Ionicons name="chevron-forward" size={20} color="#9CA3AF"  />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default TicketCard;
