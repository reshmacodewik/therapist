import React from 'react';
import { View, Text } from 'react-native';
import { createTransactionCardStyles } from '../../style/transactionCardStyles';



interface TransactionCardProps {
  title: string;
  description: string;
  amount: string;
  wp: any;
  hp: any;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  title,
  description,
  amount,
  wp,
  hp,
}) => {
  const styles = createTransactionCardStyles(wp, hp);

  return (
     <View style={styles.card}>
      {/* Title + Amount in one row */}
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default TransactionCard;
