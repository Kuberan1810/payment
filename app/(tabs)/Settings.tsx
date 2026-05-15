import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderIcon from '@/components/ui/HeaderIcon'
import { ArrowLeft2, Logout } from 'iconsax-react-native'
import { router } from 'expo-router'

export default function Settings() {
  return (
    <SafeAreaView className='flex-1 bg-white w-full px-5 pt-6'>
      <HeaderIcon
        Icon={ArrowLeft2}
        onPress={() => router.back()}
        Icon2={Logout}
        Title="Settings"
      />
      

    </SafeAreaView>
  )
}