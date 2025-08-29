import {Button} from "@/components/Button";
import {Input} from "@/components/Input";
import {spacing, useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import React, {useState} from "react";
import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const EditProfile = () => {
  const {colors} = useTheme();
  const [fullName, setFullName] = useState("Andrew Ainsley");
  const [nickname, setNickname] = useState("Andrew");
  const [dateOfBirth, setDateOfBirth] = useState("12/27/1995");
  const [email, setEmail] = useState("andrew_ainsley@yourdomain.com");
  const [country, setCountry] = useState("United States");
  const [phoneNumber, setPhoneNumber] = useState("+1 111 467 378 399");
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState("267 New Avenue Park, New York");

  const handleUpdate = () => {
    // Implement profile update logic here
    console.log("Profile updated with:", {
      fullName,
      nickname,
      dateOfBirth,
      email,
      country,
      phoneNumber,
      gender,
      address,
    });
    // Navigate back after successful update
    router.back();
  };

  const renderDropdownArrow = () => (
    <View style={styles.dropdownIcon}>
      <Text style={{color: colors.textSecondary}}>▼</Text>
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Back Button */}
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name='chevron-back' size={24} color={colors.text} />
          </Pressable>
          <Text style={[styles.heading, {color: colors.text}]}>
            Edit Profile
          </Text>
          <View style={styles.backButtonPlaceholder} />
        </View>

        {/* Form Fields */}
        <View style={styles.formContainer}>
          <Input
            placeholder='Full Name'
            variant='flat'
            size='lg'
            radius='lg'
            value={fullName}
            onValueChange={setFullName}
            style={styles.input}
          />

          <Input
            placeholder='Nickname'
            variant='flat'
            size='lg'
            radius='lg'
            value={nickname}
            onValueChange={setNickname}
            style={styles.input}
          />

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
            style={styles.input}
          />

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
            style={styles.input}
          />

          <Input
            placeholder='Country'
            variant='flat'
            size='lg'
            radius='lg'
            value={country}
            onValueChange={setCountry}
            endContent={renderDropdownArrow()}
            style={styles.input}
          />

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

          <Input
            placeholder='Gender'
            variant='flat'
            size='lg'
            radius='lg'
            value={gender}
            onValueChange={setGender}
            endContent={renderDropdownArrow()}
            style={styles.input}
          />

          <Input
            placeholder='Address'
            variant='flat'
            size='lg'
            radius='lg'
            value={address}
            onValueChange={setAddress}
            style={styles.input}
          />
        </View>

        {/* Update Button */}
        <Button
          variant='solid'
          color='primary'
          size='lg'
          fullWidth
          radius='full'
          onPress={handleUpdate}
          style={styles.updateButton}>
          Update
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.md,
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
  },
  inputIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
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
  updateButton: {
    marginVertical: 24,
  },
});

export default EditProfile;
