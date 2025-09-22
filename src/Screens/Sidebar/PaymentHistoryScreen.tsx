import React, { useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Pressable,
  Image,
} from 'react-native';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from '../../../style/paymentHistoryStyles';

// ---- Fake data (grouped by month) ----
type Txn = {
  id: string;
  title: string;
  subtitle: string;
  amount: number; // negative = debit, positive = credit
  badgeColor: string;
};

type Section = {
  month: string;
  total: number;
  data: Txn[];
};

const DATA: Section[] = [
  {
    month: 'July',
    total: 14235,
    data: [
      {
        id: 'j1',
        title: 'Title',
        subtitle: 'Today 12:32PM',
        amount: -535.23,
        badgeColor: '#FBE4CC',
      },
      {
        id: 'j2',
        title: 'Title',
        subtitle: 'Today 12:32PM',
        amount: 430.23,
        badgeColor: '#EBDDFF',
      },
      {
        id: 'j3',
        title: 'Title',
        subtitle: 'Today 12:32PM',
        amount: -535.23,
        badgeColor: '#CFF5EC',
      },
      {
        id: 'j4',
        title: 'Title',
        subtitle: 'Today 12:32PM',
        amount: 430.23,
        badgeColor: '#EBDDFF',
      },
    ],
  },
  {
    month: 'June',
    total: 14235,
    data: [
      {
        id: 'jn1',
        title: 'Title',
        subtitle: 'Today 12:32PM',
        amount: -535.23,
        badgeColor: '#FBE4CC',
      },
      {
        id: 'jn2',
        title: 'Title',
        subtitle: 'Today 12:32PM',
        amount: 430.23,
        badgeColor: '#EBDDFF',
      },
    ],
  },
];

const currency = 'KES';

const PaymentHistoryScreen = ({ navigation }: any) => {
  // Flatten for one FlatList render pass with headers
  const flat = useMemo(() => {
    type Row =
      | { type: 'header'; key: string; month: string; total: number }
      | { type: 'item'; key: string; item: Txn };

    const out: Row[] = [];
    for (const s of DATA) {
      out.push({
        type: 'header',
        key: `h-${s.month}`,
        month: s.month,
        total: s.total,
      });
      for (const t of s.data) out.push({ type: 'item', key: t.id, item: t });
    }
    return out;
  }, []);

 const renderRow = ({ item }: any) => {
  if (item.type === 'header') {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{item.month}</Text>
        <Text style={styles.sectionTotal}>
          {currency} {Intl.NumberFormat().format(item.total)}
        </Text>
      </View>
    );
  }

  const tx: Txn = item.item;
  const isCredit = tx.amount >= 0;

  // 🔹 Wrap the whole card in Pressable
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('PaymentDetailsScreen', {
          txn: tx,            // pass the transaction
          currency,           // (optional) pass currency
        })
      }
      style={styles.card}    // keep same visuals
    >
      <View style={[styles.badge, { backgroundColor: tx.badgeColor }]}>
        <Image
          source={require('../../../assets/Image/logo.png')}
          style={{ width: 40, height: 20, resizeMode: 'contain' }}
        />
      </View>

      <View style={styles.cardMid}>
        <Text style={styles.cardTitle} numberOfLines={1}>{tx.title}</Text>
        <Text style={styles.cardSub}>{tx.subtitle}</Text>
      </View>

      <Text style={[styles.amount, isCredit ? styles.amountPos : styles.amountNeg]}>
        {(isCredit ? '+' : '-') + currency}{Math.abs(tx.amount).toFixed(2)}
      </Text>
    </Pressable>
  );
};


  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          style={styles.backBtn}
          onPress={() => navigation?.goBack?.()}
        >
          <Feather name="chevron-left" size={wp(7.5)} color="#000" />
        </Pressable>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
          <Text style={styles.headerTitle}>Payment History</Text>
          <Pressable
            style={styles.filterBtn}
            onPress={() => {
              /* open filter */
            }}
          >
            <Feather name="sliders" size={wp(5.4)} color="#000" />
          </Pressable>
        </View>
      </View>

      {/* List */}
      <FlatList
        data={flat}
        keyExtractor={(r: any) => r.key}
        renderItem={renderRow}
        contentContainerStyle={styles.listPad}
        showsVerticalScrollIndicator={false}
      />
    </ImageBackground>
  );
};

export default PaymentHistoryScreen;
