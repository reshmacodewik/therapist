declare module "react-native-country-codes-picker" {
  import { ComponentType } from "react";
  import { ViewStyle, TextStyle } from "react-native";

  export interface CountryCode {
    code: string;
    name: string;
    dial_code: string;
    flag?: string;
  }

  export interface CountryPickerProps {
    show?: boolean;
    pickerButtonOnPress?: (item: CountryCode) => void;
    onBackdropPress?: () => void;
    lang?: "en" | "es" | "fr" | "de" | "pt" | string;
    style?: {
      modal?: ViewStyle;
      countryButtonStyles?: ViewStyle;
      textInput?: TextStyle;
      countryName?: TextStyle;
    };
    searchMessageText?: string;
    searchPlaceholderText?: string;
    inputPlaceholder?: string;
    showOnly?: string[];
    initialState?: string;
  }

  const CountryPicker: ComponentType<CountryPickerProps>;

  export default CountryPicker;
}
