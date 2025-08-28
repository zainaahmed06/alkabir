import {Button} from "@/components/Button";
import {useTheme} from "@/theme";
import {router} from "expo-router";
import React, {useRef, useState} from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ViewToken,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const {width} = Dimensions.get("window");

interface OnboardingItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Welcome = () => {
  const {colors, spacing, fontSizes, radius} = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<OnboardingItem>>(null);

  // Generate styles with theme values
  const styleSheet = React.useMemo(
    () => styles(colors, spacing, fontSizes, radius),
    [colors, spacing, fontSizes, radius]
  );

  const onboardingData: OnboardingItem[] = [
    {
      id: "1",
      title: "We provide professional service",
      description: "at a friendly price",
      image:
        "https://images.squarespace-cdn.com/content/v1/58c9f49846c3c4a643f3ed82/1616085191669-33U8F12I0QY74ORHGYAZ/What+Should+A+Cleaning+Lady+Do%3F",
    },
    {
      id: "2",
      title: "Experienced & Trusted",
      description: "We have years of experience in the industry",
      image:
        "https://img.freepik.com/free-vector/cleaning-service-abstract-concept-illustration_335657-1886.jpg",
    },
    {
      id: "3",
      title: "Ready to Get Started?",
      description: "Join us today for the best service experience",
      image:
        "https://img.freepik.com/free-vector/cleaning-service-abstract-concept-vector-illustration-cleaning-company-janitorial-service-office-cleaning-business-professional-housekeeping-house-maintenance-cleaning-tools-abstract-metaphor_335657-1907.jpg",
    },
  ];

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems[0]) {
        setCurrentIndex(Number(viewableItems[0].index));
      }
    }
  ).current;

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      // Navigate to the auth screen or main app
      router.replace("/(auth)");
    }
  };

  const renderItem = ({item}: {item: OnboardingItem}) => {
    return (
      <View style={styleSheet.slide}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Image source={{uri: item.image}} style={styleSheet.image} />
        </View>
        <View style={styleSheet.textContainer}>
          <Text style={styleSheet.title}>{item.title}</Text>
          <Text style={styleSheet.description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  const Pagination = () => {
    return (
      <View style={styleSheet.paginationContainer}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styleSheet.paginationDot,
              {
                backgroundColor:
                  index === currentIndex ? colors.primary : colors.border,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styleSheet.container}>
      <View style={{flex: 1}}>
        <FlatList
          ref={flatListRef}
          data={onboardingData}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </View>

      <View style={{width: "100%"}}>
        <Pagination />

        <View style={styleSheet.buttonContainer}>
          <Button
            onPress={handleNext}
            radius='full'
            size='lg'
            variant='solid'
            color='primary'>
            {currentIndex === onboardingData.length - 1
              ? "Get Started"
              : "Next"}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = (colors: any, spacing: any, fontSizes: any, radius: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: "space-between",
    },
    slide: {
      width,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
    },
    image: {
      width: width * 0.8,
      height: width * 0.7,
      marginTop: spacing.xl,
      marginBottom: spacing.lg,
      resizeMode: "contain",
    },
    textContainer: {
      alignItems: "center",
      width: "100%",
      paddingHorizontal: spacing.md,
      marginTop: spacing.lg,
    },
    title: {
      fontSize: fontSizes.xxl,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: spacing.md,
      color: colors.text,
    },
    description: {
      fontSize: fontSizes.lg,
      textAlign: "center",
      color: colors.textSecondary,
      maxWidth: "90%",
    },
    paginationContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: spacing.lg,
    },
    paginationDot: {
      width: 8,
      height: 8,
      borderRadius: radius.full,
      marginHorizontal: spacing.xs,
    },
    buttonContainer: {
      paddingHorizontal: spacing.xl,
      paddingBottom: spacing.xxl,
      width: "100%",
    },
  });

export default Welcome;
