import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {useTheme} from "../theme/useTheme";

const CategoriesList = () => {
  const {colors, radius, isDark} = useTheme();

  const categories = [
    {
      name: "House",
      slug: "house-cleaning",
      description:
        "Complete home cleaning services including dusting, sweeping, and mopping",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/739/739249.png",
      color: "neel",
      isActive: true,
    },
    {
      name: "Kitchen",
      slug: "kitchen-cleaning",
      description:
        "Deep cleaning for kitchen surfaces, cabinets, and appliances",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/739/739249.png",
      color: "blue",
      isActive: true,
    },
    {
      name: "Bathroom",
      slug: "bathroom-cleaning",
      description:
        "Disinfection and scrubbing of bathrooms, tiles, and fittings",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/739/739249.png",
      color: "yellow",
      isActive: true,
    },
    {
      name: "Carpet",
      slug: "carpet-cleaning",
      description:
        "Professional carpet and rug cleaning using eco-friendly products",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/739/739249.png",
      color: "green",
      isActive: true,
    },
    {
      name: "Window",
      slug: "window-cleaning",
      description:
        "Glass and window frame cleaning for residential and commercial spaces",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/739/739249.png",
      color: "orange",
      isActive: false,
    },
    {
      name: "Furniture",
      slug: "furniture-cleaning",
      description: "Upholstery and sofa cleaning services",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/739/739249.png",
      color: "purple",
      isActive: true,
    },
    {
      name: "Move In",
      slug: "move-in-out-cleaning",
      description: "Complete deep cleaning service for shifting homes",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/739/739249.png",
      color: "blue",
      isActive: true,
    },
    {
      name: "Officesss",
      slug: "office-cleaning",
      description:
        "Regular and deep cleaning for offices and commercial buildings",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/739/739249.png",
      color: "red",
      isActive: true,
    },
  ];
  // Using the first 8 items from categories array for display

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <TouchableOpacity
        style={[
          styles.serviceItem,
          {
            borderRadius: radius.lg,
          },
        ]}
        activeOpacity={0.7}
        disabled={!item.isActive}>
        <View
          style={[styles.iconContainer, {backgroundColor: colors.background}]}>
          <Image
            source={{uri: item.imageUrl}}
            style={[styles.icon, {tintColor: item.color}]}
            resizeMode='contain'
          />
        </View>
        <Text style={[styles.serviceName, {color: colors.textSecondary}]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, {color: colors.text}]}>Services</Text>
        <TouchableOpacity>
          <Ionicons
            name='chevron-forward'
            size={18}
            color={colors.textSecondary}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories.slice(0, 8)}
        renderItem={renderItem}
        keyExtractor={(item) => item.slug}
        numColumns={4}
        columnWrapperStyle={styles.columnWrapper}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  seeAll: {
    fontSize: 14,
    fontWeight: "400",
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  serviceItem: {
    width: "22%",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  icon: {
    width: 28,
    height: 28,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default CategoriesList;
