import { View, Text } from 'react-native'
import React from 'react'
import HeaderIcon from '@/components/ui/HeaderIcon'
import { router } from 'expo-router'
import { ArrowLeft2, NotificationBing } from 'iconsax-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function statistics() {
  return (
    <SafeAreaView className='flex-1 bg-white w-full px-5 pt-6'>
      <HeaderIcon
        Icon={ArrowLeft2}
        onPress={() => router.back()}
        Icon2={NotificationBing}
        Title="Statistics"
      />


    </SafeAreaView>
  )
}