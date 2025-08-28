import {useTheme} from "@/theme";
import React from "react";
import {Text, View} from "react-native";

const Calender = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.surfaceSecondary,
      }}>
      <Text>Calender</Text>
    </View>
  );
};

export default Calender;
