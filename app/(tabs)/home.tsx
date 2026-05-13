import React from 'react';
import Card from '@/features/home/card';
import Header from '@/features/home/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

export default function Home() {
  return (
    <View className='flex-1 gap-8  px-5 pt-4 pb-24 bg-white w-full'>
      <Header />
      <Card />
    </View>
  );
}