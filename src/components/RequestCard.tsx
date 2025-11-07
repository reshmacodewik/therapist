import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../../style/RequestCardStyles";


type Props = {
  name: string;
  note: string;
  onAccept?: () => void;
  onDecline?: () => void;
};

const RequestCard: React.FC<Props> = ({ name, note, onAccept, onDecline }) => {
  return (
    <View style={styles.requestWrap}>
      <View style={styles.leftRow}>
        <Image source={require("../../assets/Image/maskuser.png")} style={styles.avatar} />
        <View style={styles.requestText}>
          <Text style={styles.requestName}>{name}</Text>
          <Text style={styles.requestNote}>{note}</Text>
        </View>
      </View>

      <View style={styles.rightRow}>
        <TouchableOpacity style={styles.acceptBtn} onPress={onAccept}>
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.declineBtn} onPress={onDecline}>
          <Text style={styles.declineText}>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RequestCard;
