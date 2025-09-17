import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import Header from '../../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createSendPaymentStyles } from '../../../style/sendPaymentLinkStyles';
import { useNavigation } from '@react-navigation/native';
import { useResponsive } from 'react-native-responsive-hook';

const SendPaymentLink = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation();
  const styles = createSendPaymentStyles(wp, hp);
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>(
    [],
  );
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const participants = [
    { id: '1', name: 'Brian K.', status: 'Not Paid' },
    { id: '2', name: 'Brian K.', status: 'Pending' },
  ];

  const methods = ['In-App Message', 'Email', 'SMS / Whatsapp'];

  const toggleParticipant = (id: string) => {
    setSelectedParticipants(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id],
    );
  };

  const toggleMethod = (method: string) => {
    setSelectedMethod(method === selectedMethod ? null : method);
  };

  return (
    <ImageBackground
      source={require('../../../assets/Image/background.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: hp(10) }}>
          {/* Header */}
          <Header showWelcomeText={true} />
          {/* Title */}
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={wp(10)}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={styles.title}>Send Payment Link</Text>
          </View>

          {/* Event Card */}
          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>Mindfulness Practices</Text>
            <Text style={styles.eventSubtitle}>
              Share and learn mindfulness techniques
            </Text>
            <View style={styles.eventFooter}>
              <Text style={styles.eventDate}>April 25 at 5:00pm</Text>
              <Text style={styles.eventPrice}>KES300 Per participant</Text>
            </View>
          </View>

          {/* Participants */}
          <Text style={styles.sectionTitle}>Select Participants</Text>
          {participants.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.participantRow}
              onPress={() => toggleParticipant(item.id)}
            >
              <View
                style={[
                  styles.checkbox,
                  selectedParticipants.includes(item.id) &&
                    styles.checkboxActive,
                ]}
              />
              <Text style={styles.participantName}>{item.name}</Text>
              <Text style={styles.participantStatus}>{item.status}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.participantRow}>
            <View style={styles.checkbox} />
            <Text style={styles.participantName}>Add Custom Recipient</Text>
          </TouchableOpacity>

          {/* Optional Message */}
          <Text style={styles.sectionTitle}>Optional Message</Text>
          <TextInput
            style={styles.messageBox}
            multiline
            defaultValue="Hi, To Confirm Your Spot For Mindfullness Practices, Kindly Complete Your Payment Below"
          />

          {/* Payment Methods */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: wp(4),
            }}
          >
            <Text style={styles.sectionTitle}>Generated payment link</Text>
            <TouchableOpacity style={styles.copyLinkBtn}>
              <Text style={styles.copyLinkText}>Copy Link</Text>
            </TouchableOpacity>
          </View>
          {methods.map(method => (
            <TouchableOpacity
              key={method}
              style={styles.participantRow}
              onPress={() => toggleMethod(method)}
            >
              <View
                style={[
                  styles.checkbox,
                  selectedMethod === method && styles.checkboxActive,
                ]}
              />
              <Text style={styles.participantName}>{method}</Text>
            </TouchableOpacity>
          ))}

          {/* Send Button */}
          <TouchableOpacity style={styles.sendBtn}>
            <Text style={styles.sendBtnText}>Send Payment Request</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default SendPaymentLink;
