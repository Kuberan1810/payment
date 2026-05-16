import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderIcon from '@/components/ui/HeaderIcon'
import { router } from 'expo-router'
import { ArrowLeft2, Add } from 'iconsax-react-native'
import Card from '@/features/home/card'
import CardHistory from '@/features/myCard/cardHistory'
import MonthlyLimit from '@/features/myCard/monthlyLimit'

export default function myCards() {
  return (
    <SafeAreaView className='flex-1 bg-white w-full px-5 pt-6 gap-8'>
      <HeaderIcon
        Icon={ArrowLeft2}
        onPress={() => router.back()}
        Icon2={Add}
        Title="My Cards"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, gap: 32 }}
      >

        <Card />
        <CardHistory />
        <MonthlyLimit />
      </ScrollView>
    </SafeAreaView >
  )
}