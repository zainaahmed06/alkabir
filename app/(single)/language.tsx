import {spacing, useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import React, {useState} from "react";
import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

type LanguageOptionProps = {
  name: string;
  isSelected: boolean;
  onSelect: () => void;
};

const LanguageOption = ({name, isSelected, onSelect}: LanguageOptionProps) => {
  const {colors} = useTheme();

  return (
    <Pressable
      style={[styles.languageItem, {borderBottomColor: colors.border}]}
      onPress={onSelect}>
      <Text style={[styles.languageName, {color: colors.text}]}>{name}</Text>
      <View
        style={[
          styles.radioButton,
          {
            borderColor: colors.primary,
            backgroundColor: isSelected ? colors.primary : "transparent",
          },
        ]}>
        {isSelected && <View style={styles.radioButtonInner} />}
      </View>
    </Pressable>
  );
};

const Language = () => {
  const {colors} = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");

  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language);
    console.log(`Selected language: ${language}`);
    // Here you would implement the language change logic
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
          <Text style={[styles.heading, {color: colors.text}]}>Language</Text>
          <View style={styles.backButtonPlaceholder} />
        </View>

        {/* Suggested Languages Section */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, {color: colors.text}]}>
            Suggested
          </Text>

          <LanguageOption
            name='English (US)'
            isSelected={selectedLanguage === "English (US)"}
            onSelect={() => handleSelectLanguage("English (US)")}
          />

          <View style={[styles.divider, {backgroundColor: colors.border}]} />

          <LanguageOption
            name='English (UK)'
            isSelected={selectedLanguage === "English (UK)"}
            onSelect={() => handleSelectLanguage("English (UK)")}
          />
        </View>

        {/* Languages Section */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, {color: colors.text}]}>
            Language
          </Text>

          <LanguageOption
            name='Arabic'
            isSelected={selectedLanguage === "Arabic"}
            onSelect={() => handleSelectLanguage("Arabic")}
          />
        </View>
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
  },
  languageName: {
    fontSize: 18,
    fontWeight: "500",
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "white",
  },
  divider: {
    height: 1,
    opacity: 0.2,
  },
});

export default Language;
