import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../style/createEventStyles';
const CreateEventScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation();

  const [isFree, setIsFree] = useState(false);

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={s.bg}
    >
      <ScrollView
        contentContainerStyle={s.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={s.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={wp(7)} />
          </TouchableOpacity>
          <Text style={s.headerTitle}>Create Events</Text>
        </View>

        {/* Event Name */}
        <Text style={s.label}>Name of the Event</Text>
        <TextInput placeholder="enter" style={s.input} />

        {/* Date & Time */}
        <View style={s.row}>
          <View style={s.half}>
            <Text style={s.label}>Date</Text>
            <TouchableOpacity style={s.iconInput}>
              <Text style={s.placeholder}>Date</Text>
              <MaterialIcons name="calendar-today" size={wp(5)} />
            </TouchableOpacity>
          </View>

          <View style={s.half}>
            <Text style={s.label}>Time</Text>
            <TouchableOpacity style={s.iconInput}>
              <Text style={s.placeholder}>Time</Text>
              <MaterialIcons name="access-time" size={wp(5)} />
            </TouchableOpacity>
          </View>
        </View>

        {/* About Event */}
        <Text style={s.label}>About Event</Text>
        <TextInput multiline style={s.textArea} />

        {/* Host Speaker */}
        <Text style={s.label}>Host Speaker</Text>
        <View style={s.speakerBox}>
          <Image
            source={require('../../../assets/Image/maskuser.png')}
            style={s.speakerImg}
          />
          <Text style={s.speakerName}>Stacy</Text>
        </View>

        {/* Included */}
        <Text style={s.label}>What will be Included ?</Text>
        <TextInput multiline style={s.textArea} />

        {/* Upload */}
        <Text style={s.label}>Upload Picture</Text>
        <TouchableOpacity style={s.uploadBox}>
          <Ionicons name="cloud-upload-outline" size={wp(8)} />
        </TouchableOpacity>

        {/* FAQ */}
        <Text style={s.label}>Add FAQ</Text>
        <View style={s.faqBox}>
          <TextInput placeholder="Question" style={s.faqInput} />
          <View style={s.divider} />
          <TextInput placeholder="Answer" style={s.faqInput} />
        </View>

        <TouchableOpacity style={s.addMore}>
          <Ionicons name="add-circle" size={wp(5)} />
          <Text style={s.addMoreText}>Add More</Text>
        </TouchableOpacity>

        {/* Terms */}
        <Text style={s.label}>
          Please Specify if any terms & Condition apply to this event ?
        </Text>
        <TextInput multiline style={s.textArea} />

        {/* Price */}
        <Text style={s.label}>Price</Text>
        <TextInput
          placeholder="enter"
          editable={!isFree}
          style={[s.input, isFree && s.disabled]}
        />

        {/* Free */}
        <TouchableOpacity
          style={s.checkboxRow}
          onPress={() => setIsFree(!isFree)}
        >
          <View style={[s.checkbox, isFree && s.checkboxChecked]} />
          <Text style={s.checkboxText}>This is a free session</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={s.labelnote}>
          Please note: you have to wait for the admin to grant you permission to
          host the event
        </Text>
        <View style={s.footer}>
          <TouchableOpacity style={s.cancelBtn}>
            <Text style={s.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={s.createBtn}>
            <Text style={s.createText}>Create Event</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default CreateEventScreen;
