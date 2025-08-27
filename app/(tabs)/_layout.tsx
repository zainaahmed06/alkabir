import {
  Bookings,
  BookingsActive,
  Calender,
  CalenderActive,
  Home,
  HomeActive,
  Inbox,
  InboxActive,
  Profile,
  ProfileActive,
} from "@/constants/TabsIcons";
import {Tabs} from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0066FF",
        tabBarInactiveTintColor: "#9E9E9E",
        tabBarStyle: {
          shadowColor: "white",
        },
      }}>
      <Tabs.Screen
        name='home'
        options={{
          title: "Home",
          tabBarIcon: ({color, focused}) =>
            focused ? <HomeActive color={color} /> : <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name='bookings'
        options={{
          title: "Bookings",
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <BookingsActive color={color} />
            ) : (
              <Bookings color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name='calender'
        options={{
          title: "Calender",
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <CalenderActive color={color} />
            ) : (
              <Calender color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name='inbox'
        options={{
          title: "Inbox",
          tabBarIcon: ({color, focused}) =>
            focused ? <InboxActive color={color} /> : <Inbox color={color} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <ProfileActive color={color} />
            ) : (
              <Profile color={color} />
            ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
