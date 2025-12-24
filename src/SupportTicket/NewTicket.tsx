import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import  styles  from '../../style/NewTicketStyle';

const NewTicket = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  return (
    <ImageBackground
      source={require('../../assets/Image/background.png')}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={36}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={styles.title}>New Ticket</Text>
        </View>

        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
          style={styles.input}
          placeholderTextColor="#9CA3AF"
        />

        {/* Category */}
        <Text style={styles.label}>Select your category</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>
            {category || 'Select'}
          </Text>
          <MaterialIcons name="keyboard-arrow-down" size={28} color="#000" />
        </TouchableOpacity>

        {/* Description */}
        <Text style={styles.label}>Briefly Describe your issue</Text>
        <TextInput
          placeholder="Describe....."
          multiline
          numberOfLines={6}
          textAlignVertical="top"
          value={description}
          onChangeText={setDescription}
          style={styles.textArea}
          placeholderTextColor="#9CA3AF"
        />

        {/* Attachment */}
        <Text style={styles.label}>Upload your Attachments</Text>
        <TouchableOpacity style={styles.uploadBox}>
          <MaterialIcons name="upload" size={28} color="#1F3D2B" />
          <Text style={styles.uploadText}>
            Upload your attachment here
          </Text>
        </TouchableOpacity>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate('TicketSuccess' as never)}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default NewTicket;
