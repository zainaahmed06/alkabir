import MenuList, {MenuItem} from "@/components/MenuList";
import ProfileCard from "@/components/ProfileCard";
import ProfileHeader from "@/components/ProfileHeader";
import {useTheme} from "@/theme";
import {Feather} from "@expo/vector-icons";
import {router} from "expo-router";
import React from "react";
import {ScrollView, Switch, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const Profile = () => {
  const {colors, toggleTheme, isDark} = useTheme();

  const menuItems: MenuItem[] = [
    {
      id: "edit-profile",
      icon: <Feather name='user' size={24} color={colors.textSecondary} />,
      title: "Edit Profile",
      showChevron: true,
      onPress: () => router.push("/(single)/editprofile"),
    },
    {
      id: "notification",
      icon: <Feather name='bell' size={24} color={colors.textSecondary} />,
      title: "Notification",
      showChevron: true,
      onPress: () => router.push("/(single)/notifications"),
    },
    {
      id: "payment",
      icon: (
        <Feather name='credit-card' size={24} color={colors.textSecondary} />
      ),
      title: "Payment",
      showChevron: true,
      onPress: () => router.push("/(single)/payments"),
    },
    {
      id: "security",
      icon: <Feather name='shield' size={24} color={colors.textSecondary} />,
      title: "Security",
      showChevron: true,
      onPress: () => router.push("/(single)/security"),
    },
    {
      id: "language",
      icon: <Feather name='globe' size={24} color={colors.textSecondary} />,
      title: "Language",
      rightComponent: (
        <Text style={{color: colors.textSecondary}}>English (US)</Text>
      ),
      showChevron: true,
      onPress: () => router.push("/(single)/language"),
    },
    {
      id: "dark-mode",
      icon: <Feather name='moon' size={24} color={colors.textSecondary} />,
      title: "Dark Mode",
      rightComponent: (
        <Switch
          trackColor={{
            false: colors.borderSecondary,
            true: colors.primaryLight,
          }}
          thumbColor={isDark ? colors.primaryDark : colors.text}
          onChange={toggleTheme}
          value={isDark}
        />
      ),

      onPress: () => console.log("Learning"),
    },
    {
      id: "privacy-policy",
      icon: <Feather name='lock' size={24} color={colors.textSecondary} />,
      title: "Privacy Policy",
      showChevron: true,
      onPress: () => router.push("/(single)/privacy"),
    },
    {
      id: "help-center",
      icon: (
        <Feather name='help-circle' size={24} color={colors.textSecondary} />
      ),
      title: "Help Center",
      showChevron: true,
      onPress: () => router.push("/(single)/helpCenter"),
    },
    {
      id: "invite-friends",
      icon: <Feather name='users' size={24} color={colors.textSecondary} />,
      title: "Invite Friends",
      showChevron: true,
      onPress: () => console.log("Invite Friends pressed"),
    },
    {
      id: "log-out",
      icon: <Feather name='log-out' size={24} color={colors.danger} />,
      title: "Log Out",

      onPress: () => console.log("Invite Friends pressed"),
    },
  ];
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.surfaceSecondary,
      }}>
      <ProfileHeader
        title='Profile'
        showBackButton={true}
        onBackPress={() => console.log("Learning Management")}
        onMorePress={() => console.log("Learnings")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileCard
          email='the****@gmail.com'
          profileImageUrl='https://fbi.cults3d.com/uploaders/15568075/illustration-file/39786a98-e1e2-41d5-8a00-ccc8974f0ff8/AVATAR2.jpg'
          username='theshafqatullah'
          onEditPress={() => console.log("learning")}
        />
        <MenuList items={menuItems} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
