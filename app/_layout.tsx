import {useTheme} from "@/theme";
import {Stack} from "expo-router";
import {StatusBar} from "react-native";

export default function RootLayout() {
  const {isDark} = useTheme();
  return (
    <>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <Stack
        initialRouteName='(welcome)'
        screenOptions={{headerShown: false}}
      />
    </>
  );
}
