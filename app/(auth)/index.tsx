import {
  OnboardingAssets01,
  OnboardingAssets02,
  OnboardingAssets03,
} from "@/constants/OnboardingAssets";
import {useTheme} from "@/theme";
import {router} from "expo-router";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import {SafeAreaView} from "react-native-safe-area-context";

const Welcome = () => {
  const {colors} = useTheme();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <Onboarding
        onDone={() => router.push("/welcome")}
        onSkip={() => router.push("/welcome")}
        bottomBarHighlight={false}
        pages={[
          {
            backgroundColor: colors.background,
            image: <OnboardingAssets01 />,
            title: "Friendly Prices",
            subtitle: "We provide professional service at a friendly price",
          },
          {
            backgroundColor: colors.background,
            image: <OnboardingAssets02 />,
            title: "Best Results",
            subtitle:
              "The best results and your satisfaction is our top priority",
          },
          {
            backgroundColor: colors.background,
            image: <OnboardingAssets03 />,
            title: "Make Home Heaven",
            subtitle: "Let's make awesome changes to your home",
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default Welcome;
