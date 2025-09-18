import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  ImageBackground,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useResponsive } from "react-native-responsive-hook";
import { createEditSessionStyles } from "../../../style/editSessionStyles";
import Header from "../../components/Header";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";


const EditSession = () => {
  const { wp, hp } = useResponsive();
  const styles = createEditSessionStyles(wp, hp);
    const navigation = useNavigation();

  const [sessionTitle, setSessionTitle] = useState("Mindfulness Practices");
  const [sessionDesc, setSessionDesc] = useState(
    "Share And learn mindfulness techniques"
  );
  const [category, setCategory] = useState("Mindfulness");
  const [paid, setPaid] = useState(false);
  const [format, setFormat] = useState("Chat");

  return (
    <ImageBackground source={require('../../../assets/Image/background.png')} style={{ flex: 1 }}>
          <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: hp(10) }} showsVerticalScrollIndicator={false}>
        <Header showWelcomeText={true} />

        {/* Title */}
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={wp(10)} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Edit Sessions</Text>
        </View>
      

      {/* Session Title */}
      <View style={{marginHorizontal:wp(2)}}>
      <Text style={styles.label}>Session Title</Text>
      <TextInput
        style={styles.input}
        value={sessionTitle}
        onChangeText={setSessionTitle}
      />

      {/* Session Description */}
      <Text style={styles.label}>Session Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={sessionDesc}
        onChangeText={setSessionDesc}
        multiline
      />

      {/* Category */}
      <Text style={styles.label}>Category</Text>
      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>{category}</Text>
        <Ionicons name="chevron-down" size={wp(4.5)} color="#000" />
      </TouchableOpacity>

      {/* Date & Time */}
      <Text style={styles.label}>Date & Time</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.datePicker}>
          <Ionicons name="calendar-outline" size={wp(4.5)} color="#000" />
          <Text style={styles.dateText}>April 23</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timePicker}>
          <Ionicons name="time-outline" size={wp(4.5)} color="#000" />
          <Text style={styles.dateText}>5:00 PM</Text>
        </TouchableOpacity>
      </View>

      {/* Format */}
      <Text style={styles.label}>Format</Text>
      <View style={styles.row}>
        {["Chat", "Audio", "Video"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.formatButton,
              format === item && styles.formatButtonActive,
            ]}
            onPress={() => setFormat(item)}
          >
            <Text
              style={[
                styles.formatText,
                format === item && styles.formatTextActive,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pricing */}
      <View style={styles.rowBetween}>
      <Text style={styles.label}>Pricing</Text>
       <Switch
          value={paid}
          onValueChange={setPaid}
          thumbColor={paid ? "#fff" : "#ccc"}
          trackColor={{ true: "#0A5735", false: "#ccc" }}
        />
        </View>
      <View style={styles.rowBetween}>
        <Text style={styles.subLabel}>Paid Session</Text>
       </View>
      
      {paid && (
        <TextInput style={styles.priceInput} value="KES 500" editable={false} />
      )}

      {/* Save Changes */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
   </View>
    </ScrollView>
       </View>
    </ImageBackground>
  );
};

export default EditSession;
