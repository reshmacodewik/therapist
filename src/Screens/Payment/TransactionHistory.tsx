import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import TransactionCard from '../../components/TransactionCard';
import { createTransactionHistoryStyles } from '../../../style/transactionHistoryStyles';
import Header from '../../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const TransactionHistory = () => {
  const { wp, hp } = useResponsive();
  const styles = createTransactionHistoryStyles(wp, hp);
  const navigation = useNavigation();

  // Dummy grouped data
  const data = [
    {
      month: 'July',
      total: 'KSh 14,235',
      transactions: [
        {
          id: '1',
          title: 'Mindfulness Practices',
          description: 'Paid by Amina R.\n to M-Pesa',
          amount: 'KES 2300',
        },
        {
          id: '2',
          title: 'Mindfulness Practices',
          description: 'Paid by Amina R.\n to M-Pesa',
          amount: 'KES 2300',
        },
      ],
    },
    {
      month: 'June',
      total: 'KSh 14,235',
      transactions: [
        {
          id: '3',
          title: 'Mindfulness Practices',
          description: 'Paid by Amina R.\n to M-Pesa',
          amount: 'KES 2300',
        },
        {
          id: '4',
          title: 'Mindfulness Practices',
          description: 'Paid by Amina R.\n to M-Pesa',
          amount: 'KES 2300',
        },
      ],
    },
  ];

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: hp(12) }}>
          {/* Header */}
          <Header showWelcomeText={true} />
          {/* Title */}
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={wp(10)}
                color="#000"
              />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={styles.title}>Transaction History</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="filter" size={wp(6)} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Loop by month */}
          {data.map(section => (
            <View key={section.month}>
              <View style={styles.monthRow}>
                <Text style={styles.monthTitle}>{section.month}</Text>
                <Text style={styles.monthTotal}>{section.total}</Text>
              </View>
              {section.transactions.map(tx => (
                <TransactionCard
                  key={tx.id}
                  title={tx.title}
                  description={tx.description}
                  amount={`KES ${tx.amount}`}
                  wp={wp}
                  hp={hp}
                />
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default TransactionHistory;
