import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import TicketCard from '../components/TicketCard';
import styles from '../../style/SupportTicketStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const FILTERS = ['All', 'Open', 'In Progress', 'Resolved'];
const TICKETS = [
  {
    id: '1',
    title: 'Payment not received',
    ticketId: '12345',
    category: 'Billing',
    createdAt: '12 Dec 2025',
    lastReply: '2h ago',
    status: 'Open',
  },
  {
    id: '2',
    title: 'Payment not received',
    ticketId: '12346',
    category: 'Billing',
    createdAt: '12 Dec 2025',
    lastReply: '2h ago',
    status: 'In Progress',
  },
  {
    id: '3',
    title: 'Payment not received',
    ticketId: '12347',
    category: 'Billing',
    createdAt: '12 Dec 2025',
    lastReply: '2h ago',
    status: 'Resolved',
  },
];

const SupportTicket = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/Image/background.png')}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        {/* Header */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={35}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={styles.title}>Support Ticket</Text>
            <TouchableOpacity
              style={styles.createBtn}
              onPress={() => navigation.navigate('NewTicket' as never)}
            >
              <Text style={styles.createText}>+ Create New Ticket</Text>
            </TouchableOpacity>
          </View>

          {/* Filters */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterRow}
          >
            {FILTERS.map(item => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.filterBtn,
                  selectedFilter === item && styles.filterActive,
                ]}
                onPress={() => setSelectedFilter(item)}
              >
                <Text
                  style={[
                    styles.filterText,
                    selectedFilter === item && styles.filterTextActive,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Ticket List */}
          <View style={styles.ticketList}>
            {TICKETS.map(item => (
              <TicketCard
                key={item.id}
                title={item.title}
                ticketId={item.ticketId}
                category={item.category}
                createdAt={item.createdAt}
                lastReply={item.lastReply}
                status={item.status as 'Open' | 'In Progress' | 'Resolved'}
                onPress={() => navigation.navigate('TicketChat' as never)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default SupportTicket;
