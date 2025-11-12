import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { useResponsive } from "../../../components/Responsive/useResponsive";
import { styles } from "../../../style/AddGoalStyles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ShowToast from "../../utils/ShowToast";


const AddGoalScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { wp, hp } = useResponsive();

  const [goalDesc, setGoalDesc] = useState("");
  const [desiredOutcome, setDesiredOutcome] = useState("");
  const [goalType, setGoalType] = useState("");
  const [initialStatus, setInitialStatus] = useState("");
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = () => {
    navigation.navigate("MyAppointment");
    // Validate input fields
    if (!goalDesc || !desiredOutcome || !targetDate) {
      ShowToast("Please fill in all fields");
      return;
    }

    // Save goal logic here
    console.log({
      goalDesc,
      desiredOutcome,
      goalType,
      initialStatus,
      targetDate,
    });
  };

  return (
    <ImageBackground
      source={require("../../../assets/Image/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Add New Goal</Text>
          </View>

          {/* Goal Description */}
          <Text style={styles.label}>Goal Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Describe  the goal in detail"
            placeholderTextColor="#7FA693"
            value={goalDesc}
            onChangeText={setGoalDesc}
          />

          {/* Desired Outcome */}
          <Text style={styles.label}>Desired Outcome</Text>
          <TextInput
            style={styles.input}
            placeholder="Specify  the desired outcome"
            placeholderTextColor="#7FA693"
            value={desiredOutcome}
            onChangeText={setDesiredOutcome}
          />

          {/* Goal Type */}
          <Text style={styles.label}>Goal Type (Optional)</Text>
          <TextInput
            style={styles.input}
            value={goalType}
            onChangeText={setGoalType}
          />

          {/* Initial Status */}
          <Text style={styles.label}>Initial Status (Optional)</Text>
          <TextInput
            style={styles.input}
            value={initialStatus}
            onChangeText={setInitialStatus}
          />

          {/* Target Completion Date */}
          <Text style={styles.label}>Target Completion Date</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowDatePicker(true)}
          >
            <Text
              style={{
                color: targetDate ? "#000" : "#7FA693",
              }}
            >
              {targetDate
                ? targetDate.toLocaleDateString()
                : "Select  Date"}
            </Text>
          </TouchableOpacity>

          {/* {showDatePicker && (
            <DateTimePicker
              value={targetDate || new Date()}
              mode="date"
              display="default"
              onChange={(event, date) => {
                setShowDatePicker(false);
                if (date) setTargetDate(date);
              }}
            />
          )} */}

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveText}>Save Goal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AddGoalScreen;
