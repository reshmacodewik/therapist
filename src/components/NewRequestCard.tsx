import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Modal,
  TextInput,
} from 'react-native';
import cardStyles from '../components/style/newRequestCardStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  wp: (v: number) => number;
  hp: (v: number) => number;
  name: string;
  text: string;
  mode: 'Audio call' | 'Video call';
  image: ImageSourcePropType;
  onAccept?: () => void;
  onDecline?: (reason: string) => void;
}

const NewRequestCard: React.FC<Props> = ({
  wp,
  hp,
  name,
  text,
  mode,
  image,
  onAccept,
  onDecline,
}) => {
  const styles = cardStyles(wp, hp);
  const [showModal, setShowModal] = useState(false);
  const [reason, setReason] = useState('');

  const handleSend = () => {
    onDecline?.(reason);
    setReason('');
    setShowModal(false);
  };

  return (
    <>
      <View style={styles.newreqCard}>
        {/* Top */}
        <View style={styles.clientTop}>
          <Image source={image} style={styles.clientImg} />
          <View>
            <Text style={styles.clientName}>{name}</Text>

            <View style={styles.buttonRow}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.clientText}>Next Therapy:</Text>
                <Text style={styles.clientText}>{text}</Text>
              </View>

              <TouchableOpacity style={styles.clientBtn2} onPress={onAccept}>
                <Text style={styles.clientBtnText}>Accept</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.clientBtnOutline2}
                onPress={() => {
                  console.log('Decline pressed for', name);
                  setShowModal(true);
                }}
              >
                <Text style={styles.clientBtnOutlineText}>Decline</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: hp(0.5) }}>
              <Text style={styles.clientModeText}>Mode:</Text>
              <Text style={styles.clientModeText}>{mode}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* ❌ Decline Popup */}
      <Modal
        visible={showModal}
        transparent={true} // 🔥 REQUIRED
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setShowModal(false)}
            >
              <Ionicons name="close" size={wp(5)} />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>
              Specify the reason to cancel the session
            </Text>

            <TextInput
              placeholder="Type reason..."
              value={reason}
              onChangeText={setReason}
              style={styles.modalInput}
            />

            <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
              <Text style={styles.sendBtnText}>Sent</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default NewRequestCard;
