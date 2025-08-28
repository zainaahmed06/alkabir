import {useTheme} from "@/theme";
import {Feather, Ionicons} from "@expo/vector-icons";
import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

interface ProfileHeaderProps {
  onMorePress?: () => void;
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

const ProfileHeader = ({
  onMorePress,
  title = "Profile",
  showBackButton = true,
  onBackPress,
}: ProfileHeaderProps) => {
  const {colors, spacing, radius, fontSizes} = useTheme();

  // Using StyleSheet.create for proper typing
  const themedStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.md,
      width: "100%" as any, // Type assertion to fix width issue
    },
    iconContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    headerTitle: {
      fontSize: fontSizes.lg,
      fontWeight: "500",
      color: colors.text,
    },
    moreButton: {
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
      <View style={themedStyles.iconContainer}>
        {showBackButton && (
          <Pressable style={themedStyles.moreButton} onPress={onBackPress}>
            <Ionicons name='chevron-back' size={24} color={colors.text} />
          </Pressable>
        )}
      </View>
      <Text style={themedStyles.headerTitle}>{title}</Text>
      <Pressable onPress={onMorePress} style={themedStyles.moreButton}>
        <Feather name='more-horizontal' size={24} color={colors.text} />
      </Pressable>
    </View>
  );
};

export default ProfileHeader;
