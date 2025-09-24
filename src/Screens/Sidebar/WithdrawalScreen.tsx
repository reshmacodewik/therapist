// screens/wallet/WithdrawalScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  StatusBar,
  Modal,
  Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../../Theme/Const/color";
import { withdrawStyles } from "../../../style/withdraw";

const s = withdrawStyles(wp, hp);

const WithdrawalScreen: React.FC<{ navigation?: any }> = ({ navigation }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require("../../../assets/Image/background.png")}
        style={s.bg}
        resizeMode="cover"
      >
        {/* Header */}
        <View style={s.header}>
          <TouchableOpacity onPress={() => navigation?.goBack()} style={s.headerBtn}>
            <Ionicons name="chevron-back" size={wp(5.8)} color={colors.text} />
          </TouchableOpacity>
          <Text style={s.headerTitle}>Withdrawal</Text>
          <View style={s.headerBtn} />
        </View>

        {/* Balance */}
        <Text style={s.label}>Available Balance</Text>
        <Text style={s.available}>$1,250.00</Text>

        {/* Amount */}
        <Text style={[s.label, { marginTop: hp(2) }]}>Withdrawal Amount</Text>
        <TextInput
          placeholder="Enter withdrawal amount"
          placeholderTextColor="#a1a1a1"
          keyboardType="numeric"
          style={s.input}
        />

        {/* Destination */}
        <Text style={[s.label, { marginTop: hp(3) }]}>Destination Account</Text>
        <TouchableOpacity    onPress={() => navigation.navigate('BankDetailsScreen')}>
        <View style={s.bankCard}>
          <View style={s.bankIconWrap}>
            <Image
              source={require("../../../assets/Image/bank.png")}
              style={s.bankIcon}
              resizeMode="contain"
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.bankTitle}>Checking</Text>
            <Text style={s.bankSub}>Bank of America …1234</Text>
          </View>
          <Ionicons name="checkmark-circle" size={wp(6)} color="#2F6D4F" />
        </View>
        </TouchableOpacity>

        {/* Add new account */}
        <Text style={[s.label, { marginTop: hp(3) }]}>Add New Account</Text>
        <View style={s.addRow}>
          <Ionicons name="add" size={wp(6)} color={colors.text} />
          <Text style={s.addLabel}>Add Bank Account</Text>
          <Ionicons name="chevron-forward" size={wp(6)} color={colors.text} />
        </View>

        {/* Footer buttons */}
        <View style={s.footerRow}>
          <TouchableOpacity style={s.outlineBtn} onPress={() => navigation?.goBack()}>
            <Text style={s.outlineText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.filledBtn} onPress={() => setShowSuccess(true)}>
            <Text style={s.filledText}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Success Popup */}
      <Modal
        transparent
        visible={showSuccess}
        animationType="fade"
        onRequestClose={() => setShowSuccess(false)}
      >
        <Pressable style={s.modalBackdrop} onPress={() => setShowSuccess(false)}>
          {/* stop press propagation so taps on card don't close */}
          <Pressable style={s.modalCard}>
            <Image
              source={require("../../../assets/Image/wallet_success.png")}
              style={s.modalIcon}
              resizeMode="contain"
            />
            <Text style={s.modalTitle}>Withdrawal</Text>
            <Text style={s.modalText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>

            <TouchableOpacity style={s.modalCta} onPress={() => setShowSuccess(false)}>
              <Text style={s.modalCtaText}>Done</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};

export default WithdrawalScreen;
