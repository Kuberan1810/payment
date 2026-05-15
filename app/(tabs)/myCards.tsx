import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderIcon from '@/components/ui/HeaderIcon'
import { router } from 'expo-router'
import { ArrowLeft2, Add } from 'iconsax-react-native'

export default function myCards() {
  return (
    <SafeAreaView className='flex-1 bg-white w-full px-5 pt-6'>
      <HeaderIcon
        Icon={ArrowLeft2}
        onPress={() => router.back()}
        Icon2={Add}
        Title="My Cards"
      />


    </SafeAreaView>
  )
}