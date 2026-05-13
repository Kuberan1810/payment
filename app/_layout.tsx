import React from 'react';
import "../global.css";
import 'react-native-reanimated';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';
import { cssInterop } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, View } from "react-native";

cssInterop(SafeAreaView, { className: "style" });
cssInterop(TouchableOpacity, { className: "style" });

export default function Layout() {

  const [loaded] = useFonts({
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
  });

  if (!loaded) return null;

  return (
    <SafeAreaProvider>

      <Stack screenOptions={{ headerShown: false }} />

    </SafeAreaProvider>
  );
}