import MenuList, {MenuItem} from "@/components/MenuList";
import ProfileCard from "@/components/ProfileCard";
import ProfileHeader from "@/components/ProfileHeader";
import {useTheme} from "@/theme";
import {Feather} from "@expo/vector-icons";
import React from "react";
import {ScrollView, StatusBar, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const Profile = () => {
  const {colors} = useTheme();
  // Static Arrays
  const menuItems: MenuItem[] = [
    {
      id: "edit-profile",
      icon: <Feather name='user' size={24} color='#243E36' />,
      title: "Edit Profile",
      showChevron: true,
      onPress: () => console.log("Edit Profile pressed"),
    },
    {
      id: "notification",
      icon: <Feather name='bell' size={24} color='#243E36' />,
      title: "Notification",
      showChevron: true,
      onPress: () => console.log("Notification pressed"),
    },
    {
      id: "payment",
      icon: <Feather name='credit-card' size={24} color='#243E36' />,
      title: "Payment",
      showChevron: true,
      onPress: () => console.log("Payment pressed"),
    },
    {
      id: "security",
      icon: <Feather name='shield' size={24} color='#243E36' />,
      title: "Security",
      showChevron: true,
      onPress: () => console.log("Security pressed"),
    },
    {
      id: "language",
      icon: <Feather name='globe' size={24} color='#243E36' />,
      title: "Language",
      rightComponent: <Text>English (US)</Text>,
      showChevron: true,
      onPress: () => console.log("Language pressed"),
    },
    {
      id: "dark-mode",
      icon: <Feather name='moon' size={24} color='#243E36' />,
      title: "Dark Mode",
      rightComponent: <Text>Good</Text>,
      onPress: () => console.log("Learning"),
    },
    {
      id: "privacy-policy",
      icon: <Feather name='lock' size={24} color='#243E36' />,
      title: "Privacy Policy",
      showChevron: true,
      onPress: () => console.log("Privacy Policy pressed"),
    },
    {
      id: "help-center",
      icon: <Feather name='help-circle' size={24} color='#243E36' />,
      title: "Help Center",
      showChevron: true,
      onPress: () => console.log("Help Center pressed"),
    },
    {
      id: "invite-friends",
      icon: <Feather name='users' size={24} color='#243E36' />,
      title: "Invite Friends",
      showChevron: true,
      onPress: () => console.log("Invite Friends pressed"),
    },
    {
      id: "logout",
      icon: <Feather name='log-out' size={24} color='#FF3B30' />,
      title: "Logout",
      type: "danger",
      onPress: () => console.log("Logout pressed"),
    },
  ];
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.backgroundSecondary,
      }}>
      <StatusBar barStyle={"dark-content"} />
      <ProfileHeader
        title='Settings'
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
