import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { styles } from "../../style/MyCircleCardStyles";



type Props = {
callToAction?: string;
  title: string;
  members: number;
  messages: number;
  cta?: string;
  onPress?: (e?: GestureResponderEvent) => void;
};

const MyCircleCard: React.FC<Props> = ({ callToAction, title, members, messages, cta, onPress }) => {
  return (
    <View style={styles.cardWrap}>
      <Image source={require("../../assets/Image/circle.png")} style={styles.thumb} />
      <View style={styles.callToActionWrap}>
          <Text style={styles.callToAction}>{callToAction || "Group Call"}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardMeta}>{messages} Active Messages ·</Text> 
           <Text style={styles.cardMeta1}> {members} Members</Text>
        <TouchableOpacity style={styles.ctaBtn} onPress={onPress}>
          <Text style={styles.ctaText}>{cta || "View"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCircleCard;
