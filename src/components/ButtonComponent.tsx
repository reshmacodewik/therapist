import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons'; // Correct import for MaterialIcons
import Feather from 'react-native-vector-icons/Feather'; // Correct import for Feather
import  Fontisto  from 'react-native-vector-icons/Fontisto'; // Correct import for Fontisto
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import sessionPaymentStyles from '../Screens/Sessions/sessionPaymentStyles';

interface ButtonProps {
  type: 'primary' | 'outline'; // primary for filled, outline for outlined button
  text: string;
  onPress: () => void;
  icon: 'link-2' | 'corner-up-left' | 'check' | 'eye' | 'checkbox-outline' | 'bookmark-outline' | 'upload' | 'bell' | 'groups' | 'arrow-return-left'; // extend with more icons if needed
}

const ButtonComponent: React.FC<ButtonProps> = ({ type, text, onPress, icon }) => {
      const styles = sessionPaymentStyles(wp, hp); 
  // Dynamically select icon based on the passed icon prop
  const renderIcon = () => {
    switch (icon) {
      case 'link-2':
        return <Feather name="link-2" size={wp(4.5)}  style={{ marginLeft: wp(2) }} color={type === 'primary' ? '#fff' : '#14532d'} />;
      case 'corner-up-left':
        return <MaterialIcons name="arrow-return-left"  style={{ marginLeft: wp(2) }} size={wp(4.5)} color={type === 'primary' ? '#fff' : '#14532d'} />;
      case 'check':
        return <Ionicons name="checkmark" size={wp(4.5)}  style={{ marginLeft: wp(2) }} color={type === 'primary' ? '#fff' : '#14532d'} />;
      case 'eye':
        return <Ionicons name="eye" size={wp(4.5)}  style={{ marginLeft: wp(2) }} color={type === 'primary' ? '#fff' : '#14532d'} />;
      case 'checkbox-outline':
        return <Ionicons name="checkbox-outline" size={wp(4.5)}  style={{ marginLeft: wp(2) }} color={type === 'primary' ? '#fff' : '#14532d'} />;
      case 'bookmark-outline':
        return <Fontisto name="bookmark" size={wp(4.5)}  style={{ marginLeft: wp(2) }} color={type === 'primary' ? '#fff' : '#14532d'} />;
      case 'upload':
        return <Feather name="upload" size={wp(4.5)}  style={{ marginLeft: wp(2) }} color={type === 'primary' ? '#fff' : '#14532d'} />;
      case 'bell':
        return <Fontisto name="bell" size={wp(4.5)}  style={{ marginLeft: wp(2) }} color={type === 'primary' ? '#fff' : '#14532d'} />;
      case 'groups':
        return <MaterialIcons name="groups" size={wp(4.5)}  style={{ marginLeft: wp(2) }} color={type === 'primary' ? '#fff' : '#14532d'} />;
      case 'arrow-return-left':
        return <MaterialIcons name="arrow-return-left" size={wp(4.5)}  style={{ marginLeft: wp(2) }}color={type === 'primary' ? '#fff' : '#14532d'} />;
      default:
        return null;
    }
  };

  return (
     <TouchableOpacity
      style={type === 'primary' ? styles.primaryButton : styles.outlineButton} // Use styles for buttons
      onPress={onPress}
    >
      <Text style={{ color: type === 'primary' ? '#fff' : '#14532d', fontSize: wp(3.5), fontWeight: '600' }}>
        {text}
      </Text>
      {renderIcon()}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
