import {useTheme} from "@/theme";
import React, {useEffect, useRef, useState} from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
  ViewToken,
} from "react-native";

// Define the interface for slide items
export interface SlideItem {
  id: string;
  imageUrl: string;
  onPress?: () => void;
}

interface SliderProps {
  slides: SlideItem[];
  autoSlideInterval?: number; // in milliseconds
  showIndicator?: boolean;
  borderRadius?: number;
  height?: number;
  width?: number;
}

const {width: windowWidth} = Dimensions.get("window");

const Slider: React.FC<SliderProps> = ({
  slides,
  autoSlideInterval = 3000,
  showIndicator = true,
  borderRadius,
  height = 200,
  width = windowWidth,
}) => {
  const {colors, radius} = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const viewabilityConfig = {viewAreaCoveragePercentThreshold: 50};
  const scrollX = useRef(new Animated.Value(0)).current;
  const autoScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle view change
  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setCurrentIndex(viewableItems[0].index);
      }
    }
  ).current;

  // Restart auto slide timer
  const resetAutoScroll = () => {
    if (autoScrollTimer.current) {
      clearTimeout(autoScrollTimer.current);
    }

    if (autoSlideInterval > 0) {
      autoScrollTimer.current = setTimeout(() => {
        if (slides.length > 1) {
          const nextIndex = (currentIndex + 1) % slides.length;
          flatListRef.current?.scrollToIndex({
            animated: true,
            index: nextIndex,
          });
        }
      }, autoSlideInterval);
    }
  };

  // Setup auto slide
  useEffect(() => {
    resetAutoScroll();

    return () => {
      if (autoScrollTimer.current) {
        clearTimeout(autoScrollTimer.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, autoSlideInterval, slides.length]);

  // Render each slide item
  const renderItem = ({item}: {item: SlideItem}) => {
    return (
      <Pressable
        activeOpacity={item.onPress ? 0.8 : 1}
        onPress={item.onPress}
        style={[styles.slide, {width: width}]}>
        <Image
          source={{uri: item.imageUrl}}
          style={[
            styles.image,
            {
              borderRadius: borderRadius ?? radius.md,
            },
          ]}
          resizeMode='cover'
        />
      </Pressable>
    );
  };

  // Render pagination indicator
  const renderPagination = () => {
    if (!showIndicator) return null;

    return (
      <View style={styles.paginationContainer}>
        {slides.map((_, i) => {
          const inputRange = [
            (i - 1) * windowWidth,
            i * windowWidth,
            (i + 1) * windowWidth,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 16, 8],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${i}`}
              style={[
                styles.dot,
                {
                  width: dotWidth,
                  opacity,
                  backgroundColor: colors.primary,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={[styles.container, {height: height}]}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        onMomentumScrollEnd={resetAutoScroll}
        onScrollBeginDrag={() => {
          if (autoScrollTimer.current) {
            clearTimeout(autoScrollTimer.current);
          }
        }}
        onScrollEndDrag={resetAutoScroll}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false}
        )}
      />
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%" as any,
    overflow: "hidden",
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%" as any,
    height: "100%" as any,
  },
  paginationContainer: {
    position: "absolute",
    bottom: 15,
    flexDirection: "row",
    width: "100%" as any,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default Slider;
