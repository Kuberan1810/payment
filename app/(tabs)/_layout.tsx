import React from 'react';
import { Tabs } from 'expo-router';
import { Home2, Card, Chart, Setting2 } from 'iconsax-react-native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {

  
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0066FF",
        tabBarInactiveTintColor: "#A2A2A7",
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
        tabBarStyle: {
          height: 70,
          paddingTop: 5,
          paddingBottom: 10,
          backgroundColor: "#000",
          marginHorizontal: 20,
          marginBottom: 20,
          borderRadius: 999,
          position: 'absolute',  // ← float effect
          borderTopWidth: 0,     // ← default line remove
          elevation: 0,          // ← Android shadow remove
        },
      }}
    >

        <Tabs.Screen
        name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Home2
                size={24}
                variant={focused ? "Bold" : "Outline"}
                color={focused ? "#0066FF" : "#A2A2A7"}
              />
            ),
          }} 
        />

        <Tabs.Screen
          name="myCards"
          options={{
            title: "My Cards",
            tabBarIcon: ({ focused }) => (
              <Card
                size={24}
                variant={focused ? "Bold" : "Outline"}
                color={focused ? "#0066FF" : "#A2A2A7"}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="statistics"
          options={{
            title: "Statistics",
            tabBarIcon: ({ focused }) => (
              <Chart
                size={24}
                variant={focused ? "Bold" : "Outline"}
                color={focused ? "#0066FF" : "#A2A2A7"}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="Settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ focused }) => (
              <Setting2
                size={24}
                variant={focused ? "Bold" : "Outline"}
                color={focused ? "#0066FF" : "#A2A2A7"}
              />
            ),
          }}
        />
      </Tabs>


  );
}

