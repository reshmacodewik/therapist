import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import { styles } from '../../../style/NoteScreenStyles';
import { useResponsive } from '../../../components/Responsive/useResponsive';

const NoteScreen = () => {
  const navigation = useNavigation();
  const [note, setNote] = useState('');
  const {wp,hp} = useResponsive();

  const handleSave = () => {
    console.log('Note Saved:', note);
  };

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
          <Text style={styles.title}>Write a note</Text>
        </View>

        {/* Note Input */}
        <TextInput
          style={styles.textInput}
          placeholder="Write your notes here........."
          value={note}
          onChangeText={(text) => setNote(text)}
          multiline
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default NoteScreen;
