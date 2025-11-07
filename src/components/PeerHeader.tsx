import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { styles } from "./style/PeerHeaderStyles";

interface PeerHeaderProps {
  onBellPress?: () => void;
}

const PeerHeader: React.FC<PeerHeaderProps> = ({ onBellPress }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  // open drawer when user image is pressed
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        {/* App Logo */}
        <Image
          source={require("../../assets/Image/logo1.png")}
          style={styles.logo}
        />

        {/* Right Icons */}
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={onBellPress}>
            <Image
              source={require("../../assets/icon/bell.png")}
              style={styles.bellIcon}
            />
          </TouchableOpacity>

          {/* Profile image opens drawer */}
          <TouchableOpacity onPress={openDrawer}>
            <Image
              source={require("../../assets/Image/homeuser.png")}
              style={styles.userIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PeerHeader;
