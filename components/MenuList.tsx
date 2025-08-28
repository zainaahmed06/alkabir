import {useTheme} from "@/theme";
import {Feather} from "@expo/vector-icons";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

// Define the interface for a menu item
export interface MenuItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  rightComponent?: React.ReactNode;
  showChevron?: boolean;
  onPress?: () => void;
  type?: "default" | "toggle" | "danger";
}

// Define props for the MenuList component
interface MenuListProps {
  items: MenuItem[];
  containerStyle?: ViewStyle;
  itemStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

const MenuList: React.FC<MenuListProps> = ({
  items,
  containerStyle,
  itemStyle,
  titleStyle,
}) => {
  const {colors, spacing, fontSizes} = useTheme();

  // Define themed styles
  const themedStyles = StyleSheet.create({
    container: {
      width: "100%" as any,
      overflow: "hidden",
      borderTopLeftRadius: spacing.md,
      borderTopRightRadius: spacing.md,
      paddingBottom: spacing.xl,
      backgroundColor: colors.background,
    },
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.md,
    },
    leftContent: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
    },
    rightContent: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.xs,
    },
    menuTitle: {
      fontSize: fontSizes.md,
      fontWeight: "400",
      color: colors.textSecondary,
      marginLeft: spacing.sm,
    },
    dangerText: {
      color: colors.danger,
    },
  });

  return (
    <View style={[themedStyles.container, containerStyle]}>
      {items.map((item) => (
        <Pressable
          key={item.id}
          style={[themedStyles.menuItem, itemStyle]}
          onPress={item.onPress}
          disabled={!item.onPress}>
          <View style={themedStyles.leftContent}>
            {item.icon}
            <Text
              style={[
                themedStyles.menuTitle,
                titleStyle,
                item.type === "danger" && themedStyles.dangerText,
              ]}>
              {item.title}
            </Text>
          </View>

          <View style={themedStyles.rightContent}>
            {item.rightComponent}
            {item.showChevron && (
              <Feather
                name='chevron-right'
                size={20}
                color={colors.textSecondary}
              />
            )}
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default MenuList;
