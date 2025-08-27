import {useTheme} from "@/theme";
import {Feather} from "@expo/vector-icons";
import React from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";

interface ProfileCardProps {
  profileImageUrl: string;
  username: string;
  email: string;
  onEditPress?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  profileImageUrl,
  username,
  email,
  onEditPress,
}) => {
  const {colors, spacing, radius, fontSizes, shadows} = useTheme();

  // Define styles with theme values
  const themedStyles = StyleSheet.create({
    container: {
      width: "100%" as any,
      paddingVertical: spacing.md,
      alignItems: "center",
      borderRadius: radius.lg,
    },
    contentContainer: {
      alignItems: "center",
      width: "100%" as any,
    },
    profileContainer: {
      position: "relative",
      marginBottom: spacing.sm,
    },
    profileImage: {
      width: 96,
      height: 96,
      borderRadius: 48,
      borderWidth: 3,
      borderColor: colors.border,
    },
    editButton: {
      position: "absolute",
      bottom: 2,
      right: 2,
      backgroundColor: colors.primary,
      width: 40,
      height: 40,
      borderRadius: 32,
      justifyContent: "center",
      alignItems: "center",
      ...shadows.medium,
    },
    userInfoContainer: {
      alignItems: "center",
      paddingHorizontal: spacing.md,
    },
    username: {
      fontSize: fontSizes.xl,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: spacing.xs,
      textAlign: "center",
    },
    email: {
      fontSize: fontSizes.xs,
      color: colors.textSecondary,
      marginBottom: spacing.xs,
      textAlign: "center",
    },
  });

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.contentContainer}>
        <View style={themedStyles.profileContainer}>
          <Image
            source={{uri: profileImageUrl}}
            style={themedStyles.profileImage}
          />
          <Pressable style={themedStyles.editButton} onPress={onEditPress}>
            <Feather name='edit-2' size={20} color={colors.textInverse} />
          </Pressable>
        </View>

        <View style={themedStyles.userInfoContainer}>
          <Text style={themedStyles.username}>{username}</Text>
          <Text style={themedStyles.email}>{email}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;
