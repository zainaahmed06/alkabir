import {useTheme} from "@/theme";
import React from "react";
import {Text, View} from "react-native";

const Inbox = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.backgroundTertiary,
      }}>
      <Text>Inbox</Text>
    </View>
  );
};

export default Inbox;
