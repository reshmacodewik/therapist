import { useWindowDimensions, Dimensions, Platform } from 'react-native';

export const useResponsive = () => {
  const { width, height } = useWindowDimensions();
  const screen = Dimensions.get('screen');

  // Width and height percentage calculations
  const wp = (percent: number) => (width * percent) / 100;
  const hp = (percent: number) => (height * percent) / 100;

  // Font size calculations
  const fontSize = (size: number) => {
    const baseWidth = 375; // iPhone X width as base
    const scale = width / baseWidth;
    const newSize = size * scale;
    return Math.round(newSize);
  };

  // Spacing calculations
  const spacing = (size: number) => {
    const baseWidth = 375;
    const scale = width / baseWidth;
    return Math.round(size * scale);
  };

  // Border radius calculations
  const borderRadius = (size: number) => {
    const baseWidth = 375;
    const scale = width / baseWidth;
    return Math.round(size * scale);
  };

  // Shadow calculations
  const shadow = {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: Platform.OS === 'android' ? 4 : 0,
  };

  // Device type detection
  const isSmallDevice = width < 375;
  const isMediumDevice = width >= 375 && width < 414;
  const isLargeDevice = width >= 414;

  // Screen orientation
  const isPortrait = height > width;
  const isLandscape = width > height;

  return {
    wp,
    hp,
    fontSize,
    spacing,
    borderRadius,
    shadow,
    width,
    height,
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    isPortrait,
    isLandscape,
    screen,
  };
};
