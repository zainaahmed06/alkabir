import {useTheme} from "@/theme";
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

type NotificationItemProps = {
  title: string;
  isEnabled: boolean;
  onToggle: () => void;
};

const NotificationItem = ({
  title,
  isEnabled,
  onToggle,
}: NotificationItemProps) => {
  const {colors} = useTheme();

  return (
    <View style={styles.notificationItem}>
      <Text style={[styles.notificationTitle, {color: colors.text}]}>
        {title}
      </Text>
      <Switch
        value={isEnabled}
        onValueChange={onToggle}
        trackColor={{false: colors.border, true: colors.primary}}
        thumbColor={"#FFFFFF"}
      />
    </View>
  );
};

type NotificationSettings = {
  generalNotification: boolean;
  sound: boolean;
  vibrate: boolean;
  specialOffers: boolean;
  promoDiscount: boolean;
  payments: boolean;
  cashback: boolean;
  appUpdates: boolean;
  newServiceAvailable: boolean;
  newTipsAvailable: boolean;
};

const Notifications = () => {
  const {colors} = useTheme();
  const [notificationSettings, setNotificationSettings] =
    useState<NotificationSettings>({
      generalNotification: true,
      sound: true,
      vibrate: false,
      specialOffers: true,
      promoDiscount: false,
      payments: true,
      cashback: false,
      appUpdates: true,
      newServiceAvailable: false,
      newTipsAvailable: false,
    });

  const handleToggle = (setting: keyof NotificationSettings) => {
    setNotificationSettings((prevState) => ({
      ...prevState,
      [setting]: !prevState[setting],
    }));
  };

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
            Notification
          </Text>
          <View style={styles.backButtonPlaceholder} />
        </View>

        {/* Notification Settings */}
        <View style={styles.settingsContainer}>
          <NotificationItem
            title='General Notification'
            isEnabled={notificationSettings.generalNotification}
            onToggle={() => handleToggle("generalNotification")}
          />

          <View style={[styles.divider, {backgroundColor: colors.border}]} />

          <NotificationItem
            title='Sound'
            isEnabled={notificationSettings.sound}
            onToggle={() => handleToggle("sound")}
          />

          <View style={[styles.divider, {backgroundColor: colors.border}]} />

          <NotificationItem
            title='Vibrate'
            isEnabled={notificationSettings.vibrate}
            onToggle={() => handleToggle("vibrate")}
          />

          <View style={[styles.divider, {backgroundColor: colors.border}]} />

          <NotificationItem
            title='Special Offers'
            isEnabled={notificationSettings.specialOffers}
            onToggle={() => handleToggle("specialOffers")}
          />

          <View style={[styles.divider, {backgroundColor: colors.border}]} />

          <NotificationItem
            title='Promo & Discount'
            isEnabled={notificationSettings.promoDiscount}
            onToggle={() => handleToggle("promoDiscount")}
          />

          <View style={[styles.divider, {backgroundColor: colors.border}]} />

          <NotificationItem
            title='Payments'
            isEnabled={notificationSettings.payments}
            onToggle={() => handleToggle("payments")}
          />

          <View style={[styles.divider, {backgroundColor: colors.border}]} />

          <NotificationItem
            title='Cashback'
            isEnabled={notificationSettings.cashback}
            onToggle={() => handleToggle("cashback")}
          />

          <View style={[styles.divider, {backgroundColor: colors.border}]} />

          <NotificationItem
            title='App Updates'
            isEnabled={notificationSettings.appUpdates}
            onToggle={() => handleToggle("appUpdates")}
          />

          <View style={[styles.divider, {backgroundColor: colors.border}]} />

          <NotificationItem
            title='New Service Available'
            isEnabled={notificationSettings.newServiceAvailable}
            onToggle={() => handleToggle("newServiceAvailable")}
          />

          <View style={[styles.divider, {backgroundColor: colors.border}]} />

          <NotificationItem
            title='New Tips Available'
            isEnabled={notificationSettings.newTipsAvailable}
            onToggle={() => handleToggle("newTipsAvailable")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
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
  settingsContainer: {
    marginBottom: 20,
  },
  notificationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    opacity: 0.2,
  },
});

export default Notifications;
