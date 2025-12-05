import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
  Image,
  Animated,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styles } from '../../../style/paymentDetailsStyles';

const currency = 'KES';

const PaymentDetailsScreen = ({ navigation }: any) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={wp(7.5)} color="#000" />
        </Pressable>
        <Text style={styles.headerTitle}>Payment Details</Text>
        <View style={{ width: wp(9) }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollPad}
        showsVerticalScrollIndicator={false}
      >
        {/* Brand badge */}
        <View style={styles.brandBadge}>
          <Image
            source={require('../../../assets/Image/logo.png')}
            style={{ width: 55, height: 30, resizeMode: 'contain' }}
          />
        </View>

        {/* From, amount, status */}
        <Text style={styles.fromTxt}>FROM JIMMY DEO</Text>
        <Text style={styles.amountBig}>
          {currency} {Intl.NumberFormat().format(14235)}
        </Text>

        <View style={styles.statusWrap}>
          <View style={styles.checkCircle}>
            <MaterialIcons name="check" size={wp(9)} color="#16A34A" />
          </View>
          <Text style={styles.statusTxt}>Completed</Text>
        </View>

        <View style={styles.divider} />
        <Text style={styles.timeTxt}>Today 12:32 PM</Text>

        {/* Step 1 – Bank Card */}
        <View style={styles.stepCard}>
          {/* Left step bullet & line */}
          {/* <View style={styles.stepCol}>
            <View style={styles.stepBullet}>
              <Text style={styles.stepNum}>1</Text>
            </View>
            <View style={styles.stepLine} />
          </View> */}

          {/* Center content */}
          <View style={styles.stepBody}>
             {/* Right arrow toggle */}
          
            <Text style={styles.bankTitle}>Equity Bank Ltd</Text>
            <Text style={styles.bankSub}>VISA - 1038</Text>
            
            {expanded && (
              <>
                <View style={styles.timelineItem}>
                  <View style={styles.timelineLeft}>
                    <View style={styles.dot} />
                    <View style={styles.line} />
                  </View>

                  <View style={styles.timelineRight}>
                    <Text style={styles.timelineText}>
                      Card Payment started
                    </Text>
                     <Text style={styles.timelineTime}>3:30 PM</Text>
                  </View>
                </View>

                {/* Timeline steps */}
                {/* Timeline step */}
                <View style={styles.timelineItem}>
                  <View style={styles.timelineLeft}>
                    <View style={styles.dot} />
                    <View style={styles.line} />
                  </View>

                  <View style={styles.timelineRight}>
                    <Text style={styles.timelineText}>₹800 was debited</Text>
                    <Text style={styles.timelineTime}>3:30 PM</Text>
                  </View>
                </View>

                {/* Timeline step */}
                <View style={styles.timelineItem}>
                  <View style={styles.timelineLeft}>
                    <View style={styles.dot} />
                    <View style={styles.line} />
                  </View>

                  <View style={styles.timelineRight}>
                    <Text style={styles.timelineText}>₹800 was debited</Text>
                    <Text style={styles.timelineTime}>3:30 PM</Text>
                  </View>
                </View>

                {/* Timeline step */}
                <View style={styles.timelineItem}>
                  <View style={styles.timelineLeft}>
                    <View style={styles.checksCircle}>
                      <MaterialIcons
                        name="check"
                        size={wp(4)}
                        color="#16A34A"
                      />
                    </View>
                  </View>

                  <View style={styles.timelineRight}>
                    <Text style={styles.successText}>Payment completed</Text>
                    <Text style={styles.timelineTime}>3:30 PM</Text>
                  </View>
                </View>
              </>
            )}
          </View>

         <Pressable style={styles.arrowBtn} onPress={() => setExpanded(prev => !prev)}>
            <Feather
              name={expanded ? 'chevron-up' : 'chevron-down'}
              size={wp(6)}
              color="#000"
            />
          </Pressable>
        </View>

        {/* Transaction Details */}
        <View style={styles.detailsCard}>
          <View style={styles.row}>
            <Text style={styles.k}>Transfer ID:</Text>
            <Text style={styles.v}>#4567</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.k}>Transfer amount:</Text>
            <Text style={styles.v}>{currency} 200</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.k}>App fee:</Text>
            <Text style={styles.v}>{currency} 389</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.k}>Total Amount:</Text>
            <Text style={styles.v}>{currency} 2589</Text>
          </View>
        </View>
        <View style={{ height: wp(10) }} />

        {/* Sticky bottom actions */}
        <View style={styles.bottomBar}>
          <Pressable
            style={styles.shareBtn}
            onPress={() => {
              /* share */
            }}
          >
            <Text style={styles.shareTxt}>Share</Text>
          </Pressable>

          <Pressable
            style={styles.doneBtn}
            onPress={() => navigation?.goBack?.()}
          >
            <Text style={styles.doneTxt}>Done</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PaymentDetailsScreen;
