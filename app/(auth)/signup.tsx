import {Button} from "@/components/Button";
import {Input} from "@/components/Input";
import {useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import React, {useState} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const SignUp = () => {
  const {colors, spacing} = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = () => {
    // Implement signup logic here
    console.log("Sign up with:", {email, password, rememberMe});
  };

  const handleSocialSignUp = (provider: string) => {
    console.log(`Sign up with ${provider}`);
    // Implement social signup logic here
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
          Create your Account
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

          <View style={styles.inputSpacer} />

          <Input
            placeholder='Password'
            variant='flat'
            size='lg'
            radius='lg'
            type='password'
            value={password}
            onValueChange={setPassword}
            startContent={
              <View style={styles.inputIcon}>
                <Ionicons
                  name='lock-closed'
                  size={22}
                  color={colors.textSecondary}
                />
              </View>
            }
            endContent={
              <Pressable>
                <Text style={{color: colors.textSecondary}}>👁️</Text>
              </Pressable>
            }
          />
        </View>

        {/* Remember Me Checkbox */}
        <View style={styles.checkboxContainer}>
          <Pressable
            style={styles.checkbox}
            onPress={() => setRememberMe(!rememberMe)}>
            <View
              style={[
                styles.checkboxInner,
                {
                  backgroundColor: rememberMe ? colors.primary : "transparent",
                  borderColor: rememberMe ? colors.primary : colors.border,
                },
              ]}>
              {rememberMe && (
                <Text style={{color: "#fff", fontSize: 12}}>✓</Text>
              )}
            </View>
          </Pressable>
          <Text style={[styles.checkboxLabel, {color: colors.text}]}>
            Remember me
          </Text>
        </View>

        {/* Sign Up Button */}
        <Button
          variant='solid'
          color='primary'
          size='lg'
          fullWidth
          radius='full'
          onPress={handleSignUp}
          style={styles.signupButton}>
          Sign up
        </Button>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={[styles.divider, {backgroundColor: colors.border}]} />
          <Text style={[styles.dividerText, {color: colors.textSecondary}]}>
            or continue with
          </Text>
          <View style={[styles.divider, {backgroundColor: colors.border}]} />
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialButtonsContainer}>
          <Pressable
            style={[styles.socialButton, {borderColor: colors.border}]}
            onPress={() => handleSocialSignUp("Facebook")}>
            <Ionicons name='logo-facebook' size={24} color={colors.primary} />
          </Pressable>

          <Pressable
            style={[styles.socialButton, {borderColor: colors.border}]}
            onPress={() => handleSocialSignUp("Google")}>
            <Ionicons name='logo-google' size={24} color={colors.primary} />
          </Pressable>

          <Pressable
            style={[styles.socialButton, {borderColor: colors.border}]}
            onPress={() => handleSocialSignUp("Apple")}>
            <Ionicons name='logo-apple' size={24} color={colors.primary} />
          </Pressable>
        </View>

        {/* Sign In Link */}
        <View style={styles.signinContainer}>
          <Text style={[styles.signinText, {color: colors.textSecondary}]}>
            Already have an account?{" "}
          </Text>
          <Pressable onPress={() => router.push("/(auth)/signin")}>
            <Text style={[styles.signinLink, {color: colors.primary}]}>
              Sign in
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
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
  signupButton: {
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
  signinContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "center",
  },
  signinText: {
    fontSize: 14,
  },
  signinLink: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SignUp;
