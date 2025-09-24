import { Platform } from "react-native";

export const colors = {
  text: "#000",
  sub: "#8D93A6",
  white: "#FFFFFF",
  green: "#16A34A",
  red: "#EF4444",
  cta: "#264734",
  peach: "#FFE6D6",
  lilac: "#EBDDFF",
  mint: "#D7F4EC",
  border: "#E5E7EB",
  shadow: "rgba(16, 24, 40, 0.08)",
};


export const cardShadow =
  Platform.OS === "ios"
    ? {
        shadowColor: colors.shadow,
        shadowOpacity: 1,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
      }
    : { elevation: 2 };