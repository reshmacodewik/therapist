import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { headerStyles } from '../../style/headerStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface HeaderProps {
  showBackButton?: boolean;
  screenTitle?: string;
  showWelcomeText?: boolean;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({
  showBackButton = false,
  screenTitle,
  showWelcomeText = false,
  userName = 'Susan',
}) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={headerStyles(wp, hp).header}>
        <View style={headerStyles(wp, hp).leftContainer}>
          {showBackButton && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={wp(10)}
                color="#000"
              />
            </TouchableOpacity>
          )}
          {screenTitle ? (
            <Text style={headerStyles(wp, hp).screenTitle}>{screenTitle}</Text>
          ) : (
            <Image
              source={require('../../assets/Image/logo1.png')}
              style={headerStyles(wp, hp).logo}
            />
          )}
        </View>
        <View style={headerStyles(wp, hp).headerIcons}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icon/bell.png')}
              style={headerStyles(wp, hp).bellIcon}
            />
          </TouchableOpacity>
          <Image
            source={require('../../assets/Image/homeuser.png')}
            style={headerStyles(wp, hp).userIcon}
          />
        </View>
      </View>
      {showWelcomeText && (
        <Text style={headerStyles(wp, hp).headerText}>
          Welcome back, {'\n'}
          {userName}
        </Text>
      )}
    </>
  );
};

export default Header;
