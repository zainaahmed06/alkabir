import {Button} from "@/components/Button";
import {Input} from "@/components/Input";
import {useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import React, {useState} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const SignIn = () => {
  const {colors, spacing} = useTheme();
  const [email, setEmail] = useState("");

  const handleForgot = () => {
    console.log("Sign in with:", {email});
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: colors.background, paddingHorizontal: spacing.md},
      ]}>
      {/* Back Button */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name='chevron-back' size={24} color={colors.text} />
      </Pressable>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Header */}
        <Text style={[styles.heading, {color: colors.text}]}>
          Forgot Password
        </Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Input
            placeholder='Email'
            variant='flat'
            size='lg'
            radius='lg'
            value={email}
            onValueChange={setEmail}
            startContent={
              <View style={styles.inputIcon}>
                <Ionicons name='mail' size={22} color={colors.textSecondary} />
              </View>
            }
          />
        </View>

        {/* Remember Me & Forgot Password */}
        <View style={styles.forgotPasswordRow}>
          {/* Forgot Password Link */}
          <Pressable onPress={() => router.push("/(auth)/forgotPassword")}>
            <Text style={[styles.forgotPasswordLink, {color: colors.primary}]}>
              Resend ?
            </Text>
          </Pressable>
        </View>

        {/* Sign In Button */}
        <Button
          variant='solid'
          color='primary'
          size='lg'
          fullWidth
          radius='full'
          onPress={handleForgot}
          style={styles.signinButton}>
          Send
        </Button>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <Text style={[styles.signupText, {color: colors.textSecondary}]}>
            Remember Password ?{" "}
          </Text>
          <Pressable onPress={() => router.push("/(auth)/signin")}>
            <Text style={[styles.signupLink, {color: colors.primary}]}>
              Sign In
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 32,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  inputSpacer: {
    height: 16,
  },
  inputIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPasswordRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxInner: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  forgotPasswordLink: {
    fontSize: 14,
    fontWeight: "500",
  },
  signinButton: {
    marginVertical: 20,
  },
  dividerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    paddingHorizontal: 16,
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
  },
  socialIcon: {
    fontSize: 24,
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "center",
  },
  signupText: {
    fontSize: 14,
  },
  signupLink: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SignIn;
