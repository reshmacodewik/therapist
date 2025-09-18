import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useResponsive } from 'react-native-responsive-hook';
import { RefundPaymentStyles } from '../../../style/refundPaymentStyles';
import Header from '../../components/Header';

const RefundPaymentScreen = () => {
  const navigation = useNavigation();
  const { wp, hp } = useResponsive();
  const [amount, setAmount] = useState('500');
  const styles = RefundPaymentStyles(wp, hp);

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bgimg}
    >
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: hp(10) }}
          showsVerticalScrollIndicator={false}
        >
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
            <Text style={styles.title}>Refund Payment</Text>
          </View>
          {/* Title Row */}
       

          {/* Session Card */}
         <View style={{marginHorizontal:wp(1)}}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Mindfulness Practices</Text>
            <Text style={styles.cardSubtitle}>
              Share and learn mindfulness techniques
            </Text>
            <View style={styles.sessionRow}>
              <Text style={styles.sessionText}>April 25 at 5:00pm</Text>
              <Text style={styles.sessionPaid}>Paid Session</Text>
            </View>
            <Text style={styles.sessionType}>Voice Session</Text>
          </View>

          {/* Attendee */}
          <Text style={styles.label}>Attendee</Text>
          <Text style={styles.attendee}>Brain K.</Text>

          {/* Refund Input */}
          <Text style={styles.label}>Refund Amount (KES)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          {/* Refund Button */}
          <TouchableOpacity style={styles.refundBtn}>
            <Text style={styles.refundBtnText}>Refund</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
</View>
     
        
      
    </ImageBackground>
  );
};

export default RefundPaymentScreen;
