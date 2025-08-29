import {useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import React, {useState} from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {WebView} from "react-native-webview";

const HelpCenter = () => {
  const {colors} = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Replace this with your actual privacy policy URL
  const privacyPolicyUrl = "https://youtube.com/";

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}>
          <Ionicons name='chevron-back' size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.heading, {color: colors.text}]}>Help Center</Text>
        <View style={styles.backButtonPlaceholder} />
      </View>

      {/* WebView Content */}
      <View style={styles.webViewContainer}>
        <WebView
          source={{uri: privacyPolicyUrl}}
          style={styles.webView}
          onLoadStart={() => setIsLoading(true)}
          onLoad={() => setIsLoading(false)}
        />
        {/* For Loading */}
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size='large' color={colors.primary} />
          </View>
        )}
      </View>
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
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 20,
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
  webViewContainer: {
    flex: 1,
    position: "relative",
  },
  webView: {
    flex: 1,
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
});

export default HelpCenter;
