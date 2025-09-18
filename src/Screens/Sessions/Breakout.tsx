import React from "react";
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { useResponsive } from "react-native-responsive-hook";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import createStyles from "../../../style/BreakoutStyle";
import Header from "../../components/Header";


const rooms = [
  { id: 1, members: ["Amina K.", "Susan"] },
  { id: 2, members: ["Clara L.", "Komh J."] },
];

const Breakout = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation();
  const styles = createStyles(wp, hp);

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.bgimg}
    >
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header showWelcomeText={false} />
          {/* Title */}
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={wp(10)}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={styles.title}>Breakout Rooms</Text>
          </View>
 

      {/* Room Cards */}
      {rooms.map((room) => (
        <View key={room.id} style={styles.roomCard}>
          <View style={styles.roomHeader}>
            <Text style={styles.roomTitle}>Room {room.id}</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
          {room.members.map((member, idx) => (
            <Text key={idx} style={styles.memberName}>
              {member}
            </Text>
          ))}
        </View>
      ))}

      {/* Actions */}
      <TouchableOpacity style={styles.addRoomButton}>
        <Text style={styles.addRoomText}>Add Room</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.closeAllButton}>
        <Text style={styles.closeAllText}>Close All Rooms</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
    </ImageBackground>
  );
};

export default Breakout;
