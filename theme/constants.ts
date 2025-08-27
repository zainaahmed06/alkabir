import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {
  ColorPalette,
  FontSizeScale,
  RadiusScale,
  ShadowStyles,
  SpacingScale,
} from "./types";

// Light theme colors
export const lightColors: ColorPalette = {
  // Primary colors - Modern crypto blue/purple gradient
  primary: "#6366f1", // Indigo
  primaryLight: "#818cf8",
  primaryDark: "#4338ca",
  secondary: "#06b6d4", // Cyan
  secondaryLight: "#22d3ee",
  secondaryDark: "#0891b2",

  // Background colors
  background: "#ffffff",
  backgroundSecondary: "#f8fafc",
  backgroundTertiary: "#f1f5f9",
  surface: "#EBEBEB",
  surfaceSecondary: "#f8fafc",

  // Text colors
  text: "#0f172a",
  textSecondary: "#475569",
  textTertiary: "#94a3b8",
  textInverse: "#ffffff",

  // Status colors
  success: "#10b981",
  successLight: "#34d399",
  danger: "#ef4444",
  dangerLight: "#FFD8D8",
  warning: "#f59e0b",
  warningLight: "#fbbf24",
  info: "#3b82f6",
  infoLight: "#60a5fa",

  // Crypto specific colors
  bull: "#16a34a", // Green for gains
  bear: "#dc2626", // Red for losses
  neutral: "#6b7280", // Gray for no change

  // Border and divider colors
  border: "#e2e8f0",
  borderSecondary: "#cbd5e1",
  divider: "#e2e8f0",
};

// Dark theme colors
export const darkColors: ColorPalette = {
  // Primary colors
  primary: "#818cf8",
  primaryLight: "#a5b4fc",
  primaryDark: "#6366f1",
  secondary: "#22d3ee",
  secondaryLight: "#67e8f9",
  secondaryDark: "#06b6d4",

  // Background colors
  background: "#0f172a",
  backgroundSecondary: "#1e293b",
  backgroundTertiary: "#334155",
  surface: "#1e293b",
  surfaceSecondary: "#171F33",

  // Text colors
  text: "#f8fafc",
  textSecondary: "#cbd5e1",
  textTertiary: "#64748b",
  textInverse: "#0f172a",

  // Status colors
  success: "#22c55e",
  successLight: "#4ade80",
  danger: "#f87171",
  dangerLight: "#fca5a5",
  warning: "#fbbf24",
  warningLight: "#fcd34d",
  info: "#60a5fa",
  infoLight: "#93c5fd",

  // Crypto specific colors
  bull: "#22c55e", // Brighter green for dark mode
  bear: "#f87171", // Softer red for dark mode
  neutral: "#9ca3af",

  // Border and divider colors
  border: "#374151",
  borderSecondary: "#4b5563",
  divider: "#374151",
};

// Responsive spacing scale
export const spacing: SpacingScale = {
  xs: wp("1%"), // ~4px on most devices
  sm: wp("2%"), // ~8px on most devices
  md: wp("4%"), // ~16px on most devices
  lg: wp("6%"), // ~24px on most devices
  xl: wp("8%"), // ~32px on most devices
  xxl: wp("12%"), // ~48px on most devices
  xxxl: wp("16%"), // ~64px on most devices
};

// Responsive border radius scale
export const radius: RadiusScale = {
  xs: wp("1%"), // ~4px
  sm: wp("2%"), // ~8px
  md: wp("3%"), // ~12px
  lg: wp("4%"), // ~16px
  xl: wp("6%"), // ~24px
  full: 9999, // Fully rounded
};

// Responsive font size scale
export const fontSizes: FontSizeScale = {
  xxs: wp("2.5%"), // ~8px
  xs: wp("3%"), // ~12px
  sm: wp("3.5%"), // ~14px
  md: wp("4%"), // ~16px
  lg: wp("4.5%"), // ~18px
  xl: wp("5%"), // ~20px
  xxl: wp("6%"), // ~24px
  xxxl: wp("8%"), // ~32px
  xxxxl: wp("10%"), // ~32px
};

// Shadow styles for both themes
export const lightShadows: ShadowStyles = {
  small: {
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  medium: {
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  large: {
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  card: {
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
};

export const darkShadows: ShadowStyles = {
  small: {
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  medium: {
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3,
  },
  large: {
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  card: {
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 4,
  },
};
