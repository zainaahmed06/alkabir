import {Button} from "@/components/Button";
import {Input} from "@/components/Input";
import {useTheme} from "@/theme";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import React, {useState} from "react";
import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

// Rename component to use PascalCase for consistency
const AddNewCard = () => {
  const {colors} = useTheme();
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("699");

  const handleAddCard = () => {
    // Implement card adding logic here
    console.log("New card details:", {cardName, cardNumber, expiryDate, cvv});
    // Navigate back after adding card
    router.back();
  };

  const handleOptionsPress = () => {
    console.log("Options button pressed");
    // Show card options menu
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Back Button and Options */}
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name='chevron-back' size={24} color={colors.text} />
          </Pressable>
          <Text style={[styles.heading, {color: colors.text}]}>
            Add New Card
          </Text>
          <Pressable style={styles.optionsButton} onPress={handleOptionsPress}>
            <View style={styles.optionsIcon}>
              <Text style={{fontSize: 18, color: colors.text}}>⋯</Text>
            </View>
          </Pressable>
        </View>

        {/* Credit Card Preview */}
        <View style={styles.cardPreviewContainer}>
          <View style={[styles.cardPreview, {backgroundColor: colors.primary}]}>
            <View style={styles.cardPreviewTop}>
              <Text style={styles.cardBrand}>Mocard</Text>
              <Text style={styles.cardVendor}>amazon</Text>
            </View>

            <Text style={styles.cardNumber}>•••• •••• •••• ••••</Text>

            <View style={styles.cardPreviewBottom}>
              <View>
                <Text style={styles.cardDetailLabel}>Card Holder name</Text>
                <Text style={styles.cardDetailValue}>•••• ••••</Text>
              </View>
              <View>
                <Text style={styles.cardDetailLabel}>Expiry date</Text>
                <Text style={styles.cardDetailValue}>••••/••••</Text>
              </View>
              <View style={styles.cardChip}>
                <View style={styles.chipCircle1}></View>
                <View style={styles.chipCircle2}></View>
              </View>
            </View>
          </View>
        </View>

        {/* Card Form Fields */}
        <View style={styles.formContainer}>
          <Input
            label='Name'
            placeholder='Andrew Ainsley'
            variant='flat'
            size='lg'
            radius='lg'
            value={cardName}
            onValueChange={setCardName}
            style={styles.input}
          />

          <Input
            label='Card Number'
            placeholder='2672 4738 7837 7285'
            variant='flat'
            size='lg'
            radius='lg'
            value={cardNumber}
            onValueChange={setCardNumber}
            style={styles.input}
          />

          <View style={styles.formRow}>
            <View style={styles.formRowHalf}>
              <Input
                label='Expiry Date'
                placeholder='09/07/26'
                variant='flat'
                size='lg'
                radius='lg'
                value={expiryDate}
                onValueChange={setExpiryDate}
                endContent={
                  <View style={styles.inputIcon}>
                    <Text style={{color: colors.textSecondary}}>📅</Text>
                  </View>
                }
              />
            </View>

            <View style={styles.formRowHalf}>
              <Input
                label='CVV'
                placeholder='000'
                variant='flat'
                size='lg'
                radius='lg'
                value={cvv}
                onValueChange={setCvv}
                type='password'
              />
            </View>
          </View>
        </View>

        {/* Add Card Button */}
        <Button
          variant='solid'
          color='primary'
          size='lg'
          fullWidth
          radius='full'
          onPress={handleAddCard}
          style={styles.addButton}>
          Add New Card
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
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
  cardPreviewContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  cardPreview: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    padding: 24,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardPreviewTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardBrand: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cardVendor: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  cardNumber: {
    fontSize: 20,
    letterSpacing: 2,
    marginVertical: 20,
    color: "#FFFFFF",
  },
  cardPreviewBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardDetailLabel: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 4,
  },
  cardDetailValue: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  cardChip: {
    flexDirection: "row",
    alignItems: "center",
  },
  chipCircle1: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  chipCircle2: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginLeft: -15,
  },
  formContainer: {
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  input: {
    marginBottom: 20,
  },
  formRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formRowHalf: {
    width: "48%",
  },
  inputIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    marginBottom: 30,
  },
});

export default AddNewCard;
