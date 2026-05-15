import CardBg from "@/assets/images/home/Card.svg";
import React from "react";
import { Text, View, Image } from "react-native";

export default function Card() {
  return (
    <View className="rounded-3xl overflow-hidden w-full">

    <Image source={require('@/assets/images/home/Card.png')} className="w-[400px] " />
    

    </View>
  );
}