import {Button} from "@/components/Button";
import {Input} from "@/components/Input";
import {useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import React, {useState} from "react";
import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const AccountSetup = () => {
  const {colors} = useTheme();
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleContinue = () => {
    // Implement profile completion logic here
    console.log("Profile data:", {
      fullName,
      nickname,
      dateOfBirth,
      email,
      phoneNumber,
      address,
    });
    // Navigate to the next screen after profile setup
    // e.g., router.push("/(tabs)/home");
  };

  const handleUploadPhoto = () => {
    // Implement photo upload logic here
    console.log("Upload photo pressed");
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: colors.background, paddingHorizontal: 16},
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Back Button */}
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text
            style={{
              fontSize: 16,
              textAlign: "right",
              color: colors.textSecondary,
            }}>
            Skip
          </Text>
        </Pressable>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Header */}
          <Text style={[styles.heading, {color: colors.text}]}>
            Fill Your Profile
          </Text>

          {/* Profile Image */}
          <View style={styles.profileImageContainer}>
            <View
              style={[styles.profileImage, {backgroundColor: colors.border}]}>
              <View
                style={[
                  styles.avatarPlaceholder,
                  {backgroundColor: colors.backgroundSecondary},
                ]}
              />
            </View>
            <Pressable
              style={[styles.editButton, {backgroundColor: colors.primary}]}
              onPress={handleUploadPhoto}>
              <Ionicons name='pencil' size={22} color={colors.background} />
            </Pressable>
          </View>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <Input
              placeholder='Full Name'
              variant='flat'
              size='lg'
              radius='lg'
              value={fullName}
              onValueChange={setFullName}
            />

            <View style={styles.inputSpacer} />

            <Input
              placeholder='Nickname'
              variant='flat'
              size='lg'
              radius='lg'
              value={nickname}
              onValueChange={setNickname}
            />

            <View style={styles.inputSpacer} />

            <Input
              placeholder='Date of Birth'
              variant='flat'
              size='lg'
              radius='lg'
              value={dateOfBirth}
              onValueChange={setDateOfBirth}
              endContent={
                <View style={styles.inputIcon}>
                  <Text style={{color: colors.textSecondary}}>📅</Text>
                </View>
              }
            />

            <View style={styles.inputSpacer} />

            <Input
              placeholder='Email'
              variant='flat'
              size='lg'
              radius='lg'
              value={email}
              onValueChange={setEmail}
              endContent={
                <View style={styles.inputIcon}>
                  <Text style={{color: colors.textSecondary}}>✉️</Text>
                </View>
              }
            />
            <View style={styles.inputSpacer} />

            <View style={styles.phoneInputContainer}>
              <View style={[styles.countryFlag, {borderColor: colors.border}]}>
                <Text>🇺🇸</Text>
                <Text style={{color: colors.textSecondary, marginLeft: 4}}>
                  ▼
                </Text>
              </View>
              <View style={styles.phoneInputWrapper}>
                <Input
                  placeholder='Phone Number'
                  variant='flat'
                  size='lg'
                  radius='lg'
                  value={phoneNumber}
                  onValueChange={setPhoneNumber}
                  style={styles.phoneInput}
                />
              </View>
            </View>

            <View style={styles.inputSpacer} />

            <Input
              placeholder='Address'
              variant='flat'
              size='lg'
              radius='lg'
              value={address}
              onValueChange={setAddress}
              endContent={
                <View style={styles.inputIcon}>
                  <Text style={{color: colors.textSecondary}}>📍</Text>
                </View>
              }
            />
          </View>

          {/* Continue Button */}
          <Button
            variant='solid'
            color='primary'
            size='lg'
            fullWidth
            radius='full'
            onPress={handleContinue}
            style={styles.continueButton}>
            Continue
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "flex-end",
  },
  content: {
    flex: 1,
    paddingBottom: 40,
    alignItems: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 40,
    alignItems: "center",
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
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
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryFlag: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 58,
    borderRadius: 12,
    borderWidth: 1,
    marginRight: 8,
  },
  phoneInputWrapper: {
    flex: 1,
  },
  phoneInput: {
    width: "100%",
  },
  continueButton: {
    marginTop: 30,
    marginBottom: 20,
    width: "100%",
  },
});

export default AccountSetup;
