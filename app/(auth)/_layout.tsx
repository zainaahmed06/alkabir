import {Stack} from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' />
      <Stack.Screen name='signin' />
      <Stack.Screen name='signup' />
      <Stack.Screen name='accountSetup' />
      <Stack.Screen name='resetPassword' />
      <Stack.Screen name='forgotPassword' />
    </Stack>
  );
};

export default AuthLayout;
