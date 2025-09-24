import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles as createStyles } from "./style/CardStyles";
import { useResponsive } from "react-native-responsive-hook";

const CardComponent = ({
  name,
  sessionTime,
  onProfilePress,
  onReschedulePress,
}: {
  name: string;
  sessionTime: string;
  onProfilePress: () => void;
  onReschedulePress: () => void;
}) => {
  const { wp, hp } = useResponsive();
  const styles = createStyles(wp, hp); // ✅ get styles object

  return (
    <View style={styles.card}>
      <View style={styles.profileRow}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.sessionTime}>Next sess: {sessionTime}</Text>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={onProfilePress} style={styles.viewProfileBtn}>
            <Text style={styles.buttonText}>View Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onReschedulePress} style={styles.rescheduleBtn}>
            <Text style={styles.buttonText}>Reschedule</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardComponent;
