import React from 'react';
import Card from '@/features/home/card';
import Header from '@/features/home/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import QuickAction from '@/features/home/QuickAction';
import TransactionList from '@/features/home/TransactionList';

export default function Home() {
  return (
    <SafeAreaView className='flex-1 bg-white w-full'>

      <View className='px-5 pt-4'>
        <Header />
      </View>

     
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 24, paddingBottom: 100, gap: 32 }}
      >
        <Card />
        <QuickAction />
        <TransactionList />
      </ScrollView>
    </SafeAreaView>
  );
}