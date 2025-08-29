import {Button} from "@/components/Button";
import {spacing, useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import React, {useState} from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

type SecurityOptionProps = {
  title: string;
  isEnabled: boolean;
  onToggle: () => void;
  showToggle?: boolean;
  showArrow?: boolean;
  onPress?: () => void;
};

const SecurityOption = ({
  title,
  isEnabled,
  onToggle,
  showToggle = true,
  showArrow = false,
  onPress,
}: SecurityOptionProps) => {
  const {colors} = useTheme();

  return (
    <Pressable style={styles.securityOptionItem} onPress={onPress}>
      <Text style={[styles.securityOptionTitle, {color: colors.text}]}>
        {title}
      </Text>

      {showToggle && (
        <Switch
          value={isEnabled}
          onValueChange={onToggle}
          trackColor={{false: colors.border, true: colors.primary}}
          thumbColor={"#FFFFFF"}
        />
      )}

      {showArrow && (
        <Ionicons name='chevron-forward' size={24} color={colors.primary} />
      )}
    </Pressable>
  );
};

const Security = () => {
  const {colors} = useTheme();
  const [securitySettings, setSecuritySettings] = useState({
    rememberMe: true,
    faceId: false,
    biometricId: true,
  });

  const handleToggle = (setting: keyof typeof securitySettings) => {
    setSecuritySettings((prevState) => ({
      ...prevState,
      [setting]: !prevState[setting],
    }));
  };

  const handleGoogleAuthenticator = () => {
    console.log("Google Authenticator pressed");
    // Navigate to Google Authenticator setup
    // router.push('/google-authenticator');
  };

  const handleChangePin = () => {
    console.log("Change PIN pressed");
    // Navigate to change PIN screen
    // router.push('/change-pin');
  };

  const handleChangePassword = () => {
    console.log("Change Password pressed");
    // Navigate to change password screen
    // router.push('/change-password');
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: colors.background, paddingHorizontal: spacing.md},
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Back Button */}
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name='chevron-back' size={24} color={colors.text} />
          </Pressable>
          <Text style={[styles.heading, {color: colors.text}]}>Security</Text>
          <View style={styles.backButtonPlaceholder} />
        </View>

        {/* Security Options */}
        <View style={styles.securityOptionsContainer}>
          <SecurityOption
            title='Remember me'
            isEnabled={securitySettings.rememberMe}
            onToggle={() => handleToggle("rememberMe")}
          />

          <View style={[styles.divider, {backgroundColor: colors.border}]} />

          <SecurityOption
            title='Face ID'
            isEnabled={securitySettings.faceId}
            onToggle={() => handleToggle("faceId")}
          />

          <View style={[styles.divider, {backgroundColor: colors.border}]} />

          <SecurityOption
            title='Biometric ID'
            isEnabled={securitySettings.biometricId}
            onToggle={() => handleToggle("biometricId")}
          />

          <View style={[styles.divider, {backgroundColor: colors.border}]} />

          <SecurityOption
            title='Google Authenticator'
            isEnabled={false}
            onToggle={() => {}}
            showToggle={false}
            showArrow={true}
            onPress={handleGoogleAuthenticator}
          />
        </View>

        {/* Create Pin Button */}
        <Button
          onPress={handleChangePin}
          radius='full'
          variant='light'
          color='primary'
          size='lg'>
          Create Pin
        </Button>
        <View style={styles.inputSpacer} />
        {/* Create Pin Button */}
        <Button
          onPress={handleChangePassword}
          radius='full'
          variant='light'
          color='primary'
          size='lg'>
          Change Password{" "}
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  backButtonPlaceholder: {
    width: 40,
  },
  inputSpacer: {
    height: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  securityOptionsContainer: {
    marginBottom: 30,
  },
  securityOptionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  securityOptionTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    opacity: 0.2,
  },
});

export default Security;
