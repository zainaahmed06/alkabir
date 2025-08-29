import {Button} from "@/components/Button";
import {useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import React from "react";
import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

type PaymentMethodProps = {
  icon: React.ReactNode;
  name: string;
  details?: string;
  isConnected: boolean;
  onPress: () => void;
};

const PaymentMethod = ({
  icon,
  name,
  details,
  isConnected,
  onPress,
}: PaymentMethodProps) => {
  const {colors} = useTheme();

  return (
    <Pressable
      style={[styles.paymentMethodItem, {borderBottomColor: colors.border}]}
      onPress={onPress}>
      <View style={styles.paymentMethodLeft}>
        <Text style={styles.paymentIcon}>{icon}</Text>
        <View style={styles.paymentTextContainer}>
          <Text style={[styles.paymentName, {color: colors.text}]}>{name}</Text>
          {details && (
            <Text
              style={[styles.paymentDetails, {color: colors.textSecondary}]}>
              {details}
            </Text>
          )}
        </View>
      </View>
      <Text style={[styles.connectedStatus, {color: colors.primary}]}>
        {isConnected ? "Connected" : "Connect"}
      </Text>
    </Pressable>
  );
};

const Payments = () => {
  const {colors} = useTheme();

  const handlePaymentMethodPress = (method: string) => {
    console.log(`${method} pressed`);
    // Add logic to manage payment methods
  };

  const handleAddNewCard = () => {
    router.push("/(single)/addNewCard");
    // Navigate to add new card screen
    // router.push('/add-card');
  };

  const handleOptionsPress = () => {
    console.log("Options button pressed");
    // Show payment options menu
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      {/* Header with Back Button and Options */}
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name='chevron-back' size={24} color={colors.text} />
        </Pressable>
        <Text style={[styles.heading, {color: colors.text}]}>Payment</Text>
        <Pressable style={styles.optionsButton} onPress={handleOptionsPress}>
          <View style={styles.optionsIcon}>
            <Text style={{fontSize: 18, color: colors.text}}>⋯</Text>
          </View>
        </Pressable>
      </View>

      {/* Payment Methods List */}
      <ScrollView style={styles.paymentMethodsContainer}>
        <PaymentMethod
          icon=<Ionicons name='logo-paypal' size={24} color={colors.primary} />
          name='PayPal'
          isConnected={true}
          onPress={() => handlePaymentMethodPress("PayPal")}
        />

        <PaymentMethod
          icon=<Ionicons name='logo-google' size={24} color={colors.primary} />
          name='Google Pay'
          isConnected={true}
          onPress={() => handlePaymentMethodPress("Google Pay")}
        />

        <PaymentMethod
          icon=<Ionicons name='logo-apple' size={24} color={colors.primary} />
          name='Apple Pay'
          isConnected={true}
          onPress={() => handlePaymentMethodPress("Apple Pay")}
        />

        <PaymentMethod
          icon=<Ionicons name='card' size={24} color={colors.primary} />
          name='•••• •••• •••• 4679'
          isConnected={true}
          onPress={() => handlePaymentMethodPress("MasterCard")}
        />
      </ScrollView>

      {/* Add New Card Button */}
      <View style={styles.buttonContainer}>
        <Button
          variant='solid'
          color='primary'
          size='lg'
          fullWidth
          radius='full'
          onPress={handleAddNewCard}>
          Add New Card
        </Button>
      </View>
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  optionsButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  optionsIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
  },
  paymentMethodsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  paymentMethodItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 24,
    borderBottomWidth: 1,
  },
  paymentMethodLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  paymentTextContainer: {
    justifyContent: "center",
  },
  paymentName: {
    fontSize: 18,
    fontWeight: "500",
  },
  paymentDetails: {
    fontSize: 14,
    marginTop: 4,
  },
  connectedStatus: {
    fontSize: 16,
    fontWeight: "500",
  },
  buttonContainer: {
    paddingVertical: 20,
  },
});

export default Payments;
