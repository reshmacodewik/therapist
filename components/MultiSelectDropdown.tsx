import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Item = { label: string; value: string };

type Props = {
  label: string;
  placeholder: string;
  value: string[];
  items: Item[];
  error?: string;
  touched?: boolean;
  onChange: (val: string[]) => void;
};

const PRIMARY = '#1F3D2B';
const BORDER = '#D0D5DD';

const MultiSelectDropdown: React.FC<Props> = ({
  label,
  placeholder,
  value,
  items,
  error,
  touched,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string[]>(value);
  const [list, setList] = useState<Item[]>(items);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  useEffect(() => {
    onChange(internalValue);
  }, [internalValue]);

  return (
    <View style={{ marginBottom: 22 }}>
      <Text style={{ marginBottom: 8, fontSize: 14, fontWeight: '600' }}>
        {label}
      </Text>

      <DropDownPicker
        open={open}
        value={internalValue}
        items={list}
        setOpen={setOpen}
        setItems={setList}
        setValue={setInternalValue}

        multiple
        mode="BADGE"
        listMode="MODAL"
        closeAfterSelecting={false}

        placeholder={placeholder}
        searchable
        searchPlaceholder="Search..."

        /* INPUT */
        style={{
          borderColor: BORDER,
          borderRadius: 10,
          minHeight: 52,
        }}

        placeholderStyle={{
          color: PRIMARY,
        }}

        /* SEARCH BAR */
        searchContainerStyle={{
          padding: 10,
          backgroundColor: '#FFFFFF',
          borderBottomWidth: 1,
          borderBottomColor: '#EAECF0',
        }}

        searchTextInputStyle={{
          height: 44,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: BORDER,
          paddingHorizontal: 14,
          fontSize: 14,
          backgroundColor: '#FFFFFF',
          color: '#101828',
        }}

        searchPlaceholderTextColor="#98A2B3"

        /* MODAL */
        modalTitle={label}
        modalTitleStyle={{
          fontSize: 16,
          fontWeight: '700',
        }}

        /* SELECTED */
        selectedItemContainerStyle={{
          backgroundColor: '#E9F3EF',
        }}

        selectedItemLabelStyle={{
          color: PRIMARY,
          fontWeight: '600',
        }}

        /* BADGES */
        badgeStyle={{
          backgroundColor: PRIMARY,
          borderRadius: 16,
          paddingHorizontal: 10,
          paddingVertical: 6,
        }}

        badgeTextStyle={{
          color: '#FFFFFF',
          fontSize: 12,
          fontWeight: '600',
        }}

        ArrowDownIconComponent={() => (
          <MaterialIcons
            name="keyboard-arrow-down"
            size={22}
            color="#1F3D2B"
          />
        )}
        ArrowUpIconComponent={() => (
          <MaterialIcons
            name="keyboard-arrow-up"
            size={22}
            color="#1F3D2B"
          />
        )}
      />

      {touched && error && (
        <Text style={{ marginTop: 6, color: '#D92D20', fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default MultiSelectDropdown;
