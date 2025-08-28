import {useTheme} from "@/theme";
import React, {forwardRef, useCallback, useMemo, useState} from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

export type ButtonVariant =
  | "solid"
  | "bordered"
  | "light"
  | "flat"
  | "faded"
  | "shadow"
  | "ghost";
export type ButtonColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonRadius = "none" | "sm" | "md" | "lg" | "full";
export type SpinnerPlacement = "start" | "end";

export interface ButtonProps extends Omit<TouchableOpacityProps, "style"> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  radius?: ButtonRadius;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  spinner?: React.ReactNode;
  spinnerPlacement?: SpinnerPlacement;
  fullWidth?: boolean;
  isIconOnly?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableRipple?: boolean;
  disableAnimation?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: (e: GestureResponderEvent) => void;
  onPressStart?: (e: GestureResponderEvent) => void;
  onPressEnd?: (e: GestureResponderEvent) => void;
  onPressChange?: (isPressed: boolean) => void;
  onPressUp?: (e: GestureResponderEvent) => void;
  onKeyDown?: (e: any) => void;
  onKeyUp?: (e: any) => void;
  onClick?: () => void;
}

export const Button = React.memo(
  forwardRef<any, ButtonProps>(
    (
      {
        children,
        variant = "solid",
        color = "default",
        size = "md",
        radius = "md",
        startContent,
        endContent,
        spinner,
        spinnerPlacement = "start",
        fullWidth = false,
        isIconOnly = false,
        isDisabled = false,
        isLoading = false,
        disableRipple = false,
        disableAnimation = false,
        style,
        onPress,
        onPressStart,
        onPressEnd,
        onPressChange,
        onPressUp,
        onKeyDown,
        onKeyUp,
        onClick,
        ...props
      },
      ref
    ) => {
      const {
        colors,
        spacing,
        radius: themeRadius,
        fontSizes,
        shadows,
      } = useTheme();
      const [isPressed, setIsPressed] = useState(false);

      // Memoized size configurations
      const sizeConfig = useMemo(
        () => ({
          sm: {
            height: wp("8%"),
            paddingHorizontal: spacing.md,
            fontSize: fontSizes.sm,
            fontFamily: "Cabin",
            iconSize: 16,
          },
          md: {
            height: wp("10%"),
            paddingHorizontal: spacing.lg,
            fontSize: fontSizes.md,
            fontFamily: "Cabin",
            iconSize: 18,
          },
          lg: {
            height: wp("12%"),
            paddingHorizontal: spacing.xl,
            fontSize: fontSizes.md,
            fontFamily: "Cabin",
            iconSize: 20,
          },
        }),
        [spacing.md, spacing.lg, spacing.xl, fontSizes.sm, fontSizes.md]
      );

      // Memoized radius configurations
      const radiusConfig = useMemo(
        () => ({
          none: 0,
          sm: themeRadius.sm,
          md: themeRadius.md,
          lg: themeRadius.lg,
          full: themeRadius.full,
        }),
        [themeRadius]
      );

      // Memoized color configurations based on variant and color
      const getColorConfig = useCallback(() => {
        const baseColors = {
          default: colors.text,
          primary: colors.primary,
          secondary: colors.secondary,
          success: colors.success,
          warning: colors.warning,
          danger: colors.danger,
        };

        const baseColor = baseColors[color as keyof typeof baseColors];
        const config = {
          backgroundColor: "transparent",
          textColor: colors.text,
          borderColor: "transparent",
          shadowColor: colors.text,
        };

        switch (variant) {
          case "solid":
            config.backgroundColor = baseColor;
            config.textColor =
              color === "default" ? colors.text : colors.textInverse;
            config.borderColor = baseColor;
            break;

          case "bordered":
            config.backgroundColor = "transparent";
            config.textColor = baseColor;
            config.borderColor = baseColor;
            break;

          case "light":
            config.backgroundColor = colors.backgroundSecondary;
            config.textColor = baseColor;
            config.borderColor = "transparent";
            break;

          case "flat":
            config.backgroundColor = colors.backgroundSecondary;
            config.textColor = baseColor;
            config.borderColor = "transparent";
            break;

          case "faded":
            config.backgroundColor = colors.backgroundTertiary;
            config.textColor = baseColor;
            config.borderColor = colors.border;
            break;

          case "shadow":
            config.backgroundColor = baseColor;
            config.textColor =
              color === "default" ? colors.text : colors.textInverse;
            config.borderColor = baseColor;
            config.shadowColor = baseColor;
            break;

          case "ghost":
            config.backgroundColor = "transparent";
            config.textColor = baseColor;
            config.borderColor = "transparent";
            break;
        }

        // Pressed state modifications
        if (isPressed && !isDisabled && !disableAnimation) {
          if (variant === "solid" || variant === "shadow") {
            // For solid buttons, slightly reduce opacity instead of changing color
            return {
              ...config,
              backgroundColor: baseColor,
            };
          } else if (variant === "bordered" || variant === "ghost") {
            config.backgroundColor = colors.backgroundSecondary;
          } else {
            config.backgroundColor = colors.backgroundTertiary;
          }
        }

        // Disabled state
        if (isDisabled) {
          config.backgroundColor = colors.backgroundSecondary;
          config.textColor = colors.textTertiary;
          config.borderColor = colors.borderSecondary;
        }

        return config;
      }, [colors, variant, color, isPressed, isDisabled, disableAnimation]);

      const colorConfig = useMemo(() => getColorConfig(), [getColorConfig]);
      const currentSizeConfig = useMemo(
        () => sizeConfig[size as keyof typeof sizeConfig],
        [sizeConfig, size]
      );

      const handlePressIn = useCallback(
        (e: GestureResponderEvent) => {
          if (!disableAnimation) {
            setIsPressed(true);
          }
          onPressChange?.(true);
          onPressStart?.(e);
        },
        [disableAnimation, onPressChange, onPressStart]
      );

      const handlePressOut = useCallback(
        (e: GestureResponderEvent) => {
          if (!disableAnimation) {
            setIsPressed(false);
          }
          onPressChange?.(false);
          onPressEnd?.(e);
          onPressUp?.(e);
        },
        [disableAnimation, onPressChange, onPressEnd, onPressUp]
      );

      const handlePress = useCallback(
        (e: GestureResponderEvent) => {
          if (!isDisabled && !isLoading) {
            onPress?.(e);
            onClick?.();
          }
        },
        [isDisabled, isLoading, onPress, onClick]
      );

      const renderSpinner = useCallback(() => {
        if (!isLoading) return null;

        if (spinner) {
          return spinner;
        }

        return <ActivityIndicator size='small' color={colorConfig.textColor} />;
      }, [isLoading, spinner, colorConfig.textColor]);

      const renderContent = useCallback(() => {
        if (isIconOnly) {
          return isLoading ? renderSpinner() : children;
        }

        const showStartSpinner = isLoading && spinnerPlacement === "start";
        const showEndSpinner = isLoading && spinnerPlacement === "end";

        return (
          <>
            {(startContent || showStartSpinner) && (
              <View style={styles.startContent}>
                {showStartSpinner ? renderSpinner() : startContent}
              </View>
            )}

            {children && (
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: currentSizeConfig.fontSize,
                    color: colorConfig.textColor,
                    fontFamily: "Cabin",
                  },
                  isLoading && styles.loadingText,
                ]}>
                {children}
              </Text>
            )}

            {(endContent || showEndSpinner) && (
              <View style={styles.endContent}>
                {showEndSpinner ? renderSpinner() : endContent}
              </View>
            )}
          </>
        );
      }, [
        isIconOnly,
        isLoading,
        renderSpinner,
        children,
        spinnerPlacement,
        startContent,
        endContent,
        currentSizeConfig.fontSize,
        colorConfig.textColor,
      ]);

      const buttonStyle: StyleProp<ViewStyle> = useMemo(
        () => [
          styles.button,
          {
            height: currentSizeConfig.height,
            width: isIconOnly ? currentSizeConfig.height : undefined,
            paddingHorizontal: isIconOnly
              ? 0
              : currentSizeConfig.paddingHorizontal,
            backgroundColor: colorConfig.backgroundColor,
            borderColor: colorConfig.borderColor,
            borderRadius: radiusConfig[radius as keyof typeof radiusConfig],
            borderWidth: variant === "bordered" || variant === "faded" ? 1 : 0,
          },
          fullWidth && !isIconOnly && styles.fullWidth,
          isDisabled && styles.disabled,
          variant === "shadow" &&
            !isDisabled && {
              ...shadows.medium,
              shadowColor: colorConfig.shadowColor,
            },
          style,
        ],
        [
          currentSizeConfig,
          isIconOnly,
          colorConfig,
          radiusConfig,
          radius,
          variant,
          fullWidth,
          isDisabled,
          shadows.medium,
          style,
        ]
      );

      return (
        <TouchableOpacity
          ref={ref}
          style={buttonStyle}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={handlePress}
          disabled={isDisabled || isLoading}
          activeOpacity={disableAnimation ? 1 : 0.9}
          {...props}>
          {renderContent()}
        </TouchableOpacity>
      );
    }
  )
);

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    minHeight: 32,
  },
  fullWidth: {
    width: "100%",
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    fontWeight: "400",
    textAlign: "center",
    flexShrink: 1,
  },
  loadingText: {
    opacity: 0.7,
  },
  startContent: {
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  endContent: {
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

Button.displayName = "Button";
