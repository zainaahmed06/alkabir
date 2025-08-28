import CategoriesList from "@/components/Categories";
import HomeHeader from "@/components/HomeHeader";
import {Input as SearchBar} from "@/components/Input";
import {useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

const Home = () => {
  const {spacing, colors} = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: spacing.md,
        backgroundColor: colors.surfaceSecondary,
      }}>
      <HomeHeader
        name='Shafqat Ullah'
        profileImageUrl='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
        greeting='Good Morning'
        onNotificationPress={() => console.log("Notification pressed")}
        onBookmarkPress={() => console.log("Bookmark pressed")}
        onProfilePress={() => console.log("Profile pressed")}
      />
      <SearchBar
        size='lg'
        placeholder='Search services'
        startContent={
          <Ionicons name='search' size={24} color={colors.border} />
        }
        endContent={<Ionicons name='filter' size={24} color={colors.text} />}
      />
      <CategoriesList />
    </SafeAreaView>
  );
};

export default Home;
