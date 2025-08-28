import {useTheme} from "@/theme";
import {Feather, Ionicons} from "@expo/vector-icons";
import React from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";

interface HomeHeaderProps {
  name: string;
  profileImageUrl: string;
  greeting?: string;
  onNotificationPress?: () => void;
  onBookmarkPress?: () => void;
  onProfilePress?: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  name,
  profileImageUrl,
  greeting = "Good Morning",
  onNotificationPress,
  onBookmarkPress,
  onProfilePress,
}) => {
  const {colors, spacing, radius, fontSizes} = useTheme();

  const themedStyles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: spacing.md,
    },
    leftSection: {
      flexDirection: "row",
      alignItems: "center",
    },
    rightSection: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.md,
    },
    profileImage: {
      width: 48,
      height: 48,
      borderRadius: 25,
      marginRight: spacing.sm,
    },
    textContainer: {
      justifyContent: "center",
    },
    greetingText: {
      fontSize: fontSizes.xs,
      color: colors.textSecondary,
      marginBottom: spacing.xs / 2,
    },
    nameText: {
      fontSize: fontSizes.md,
      fontWeight: "600",
      color: colors.text,
    },
    iconButton: {
      width: 40,
      height: 40,
      borderRadius: radius.full,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.border,
    },
  });

  return (
    <View style={themedStyles.container}>
      <Pressable style={themedStyles.leftSection} onPress={onProfilePress}>
        <Image
          source={{uri: profileImageUrl}}
          style={themedStyles.profileImage}
        />
        <View style={themedStyles.textContainer}>
          <Text style={themedStyles.greetingText}>
            {greeting} <Text>👋</Text>
          </Text>
          <Text style={themedStyles.nameText}>{name}</Text>
        </View>
      </Pressable>

      <View style={themedStyles.rightSection}>
        <Pressable
          style={themedStyles.iconButton}
          onPress={onNotificationPress}>
          <Ionicons
            name='notifications-outline'
            size={24}
            color={colors.text}
          />
        </Pressable>

        <Pressable style={themedStyles.iconButton} onPress={onBookmarkPress}>
          <Feather name='bookmark' size={22} color={colors.text} />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeHeader;
