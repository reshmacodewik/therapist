import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

interface DropdownItem {
  label: string;
  value: string;
}

interface UniversalDropdownProps {
  value: string;
  setValue: (v: string) => void;
  data: DropdownItem[];
  placeholder?: string;

  variant?: 'square' | 'rounded' | 'pill';
  height?: number;

  /** NEW */
  showBorder?: boolean;
}

const UniversalDropdown: React.FC<UniversalDropdownProps> = ({
  value,
  setValue,
  data,
  placeholder = 'Select',
  variant = 'rounded',
  height = 50,
  showBorder = true,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const getBorderRadius = () => {
    switch (variant) {
      case 'square':
        return 6;
      case 'pill':
        return height / 2;
      default:
        return 16;
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Dropdown
        style={[
          styles.dropdown,
          {
            height,
            borderRadius: getBorderRadius(),
            borderWidth: showBorder ? 1 : 0,
            borderColor: isFocus ? '#264734' : '#ccc',
          },
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default UniversalDropdown;

const styles = StyleSheet.create({
  dropdown: {
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  placeholderStyle: {
    color: '#A0A0A0',
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
