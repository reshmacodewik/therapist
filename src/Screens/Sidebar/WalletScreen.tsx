// screens/wallet/WalletScreen.tsx
import React, { memo } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { walletStyles } from '../../../style/Wallet.ts';
import { colors } from '../../Theme/Const/color.ts';
const styles = walletStyles(wp, hp);

type Txn = {
  id: string;
  title: string;
  time: string;
  amount: number; // + credit, - debit
  tone?: 'peach' | 'lilac' | 'mint';
};

const DATA: Txn[] = [
  {
    id: '1',
    title: 'Title',
    time: 'Today 12:32PM',
    amount: -35.23,
    tone: 'peach',
  },
  {
    id: '2',
    title: 'Title',
    time: 'Today 12:32PM',
    amount: 430.23,
    tone: 'lilac',
  },
  {
    id: '3',
    title: 'Title',
    time: 'Today 12:32PM',
    amount: -35.23,
    tone: 'mint',
  },
  {
    id: '4',
    title: 'Title',
    time: 'Today 12:32PM',
    amount: 430.23,
    tone: 'peach',
  },
  {
    id: '5',
    title: 'Title',
    time: 'Today 12:32PM',
    amount: 430.23,
    tone: 'lilac',
  },
];

const formatKES = (n: number) => {
  const sign = n > 0 ? '+' : n < 0 ? '-' : '';
  const val = Math.abs(n).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${sign}KES${val}`;
};

const Pill = memo(({ tone = 'peach' }: { tone?: Txn['tone'] }) => (
  <View
    style={[
      styles.pill,
      tone === 'peach' && styles.pill_peach,
      tone === 'lilac' && styles.pill_lilac,
      tone === 'mint' && styles.pill_mint,
    ]}
  >
    <Text style={styles.pillText}>Tubar</Text>
  </View>
));

const Item = memo(({ item }: { item: Txn }) => {
  const pos = item.amount >= 0;
  return (
    <View style={styles.txnCard}>
      <Pill tone={item.tone} />
      <View style={styles.txnInfo}>
        <Text style={styles.txnTitle}>{item.title}</Text>
        <Text style={styles.txnTime}>{item.time}</Text>
      </View>
      <Text style={[styles.txnAmount, pos ? styles.amtPos : styles.amtNeg]}>
        {formatKES(item.amount)}
      </Text>
    </View>
  );
});

const WalletScreen: React.FC<{ navigation?: any }> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      resizeMode="cover"
      style={styles.bg}
    >
      <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerBtn}
        >
          <Ionicons name="chevron-back" size={wp(5.8)} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Wallet</Text>
        <View style={styles.headerBtn} />
      </View>

      {/* Balance Card */}
      <ImageBackground
        source={require('../../../assets/Image/linear-bg.png')} // put any soft gradient here
        style={styles.balanceCard}
        imageStyle={{ borderRadius: wp(3.5) }}
        resizeMode="cover"
      >
        <Text style={styles.balanceLabel}>Main Balance</Text>

        <View style={styles.balanceRow}>
         <Image source={require('../../../assets/Image/wallet.png')} tintColor={'#fff'} style={{width:wp(12),height:hp(5)}}/>
          <Text style={styles.balanceValue}>KSh 14,235</Text>
        </View>
      </ImageBackground>

      {/* Latest Transactions */}
      <Text style={styles.sectionTitle}>Latest Transactions</Text>

      <FlatList
        data={DATA}
        keyExtractor={i => i.id}
        renderItem={({ item }) => <Item item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listPad}
      />

      {/* Bottom CTA */}
      <View style={styles.bottomWrap}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.cta}
          onPress={() => navigation.navigate('WithdrawalScreen')}
        >
          <Text style={styles.ctaText}>Withdrawal</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
  );
};

export default WalletScreen;
