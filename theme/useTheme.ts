import {useThemeStore} from "./store";

/**
 * Custom hook for accessing the theme system
 *
 * @returns Object containing:
 * - colors: Color palette for the current theme
 * - spacing: Responsive spacing scale
 * - radius: Border radius scale
 * - fontSizes: Font size scale
 * - shadows: Shadow styles
 * - themeMode: Current theme mode ('light' | 'dark')
 * - setThemeMode: Function to set a specific theme mode
 * - toggleTheme: Function to toggle between light and dark modes
 */
export const useTheme = () => {
  const {theme, themeMode, setThemeMode, toggleTheme} = useThemeStore();

  return {
    // Full theme object
    theme,

    // Individual theme properties
    colors: theme.colors,
    spacing: theme.spacing,
    radius: theme.radius,
    fontSizes: theme.fontSizes,
    shadows: theme.shadows,

    // Theme mode management
    themeMode,
    setThemeMode,
    toggleTheme,

    // Utility functions
    isDark: themeMode === "dark",
    isLight: themeMode === "light",

    // Helper function to get spacing values
    getSpacing: (multiplier: number = 1) => theme.spacing.md * multiplier,

    // Helper function to create custom shadows
    createShadow: (
      color: string = theme.colors.text,
      opacity: number = 0.1,
      radius: number = 4,
      elevation: number = 3
    ) => ({
      shadowColor: color,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: opacity,
      shadowRadius: radius,
      elevation,
    }),
  };
};

export type UseThemeReturn = ReturnType<typeof useTheme>;
