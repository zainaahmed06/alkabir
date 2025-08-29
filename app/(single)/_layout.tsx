import {Stack} from "expo-router";
import React from "react";

const SingleLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name='bookmarks' />
      <Stack.Screen name='editable' />
      <Stack.Screen name='notifications' />
      <Stack.Screen name='search' />
      <Stack.Screen name='services' />
      <Stack.Screen name='special' />
    </Stack>
  );
};

export default SingleLayout;
