import HeaderIcon from '@/components/ui/HeaderIcon'
import HistroyList from '@/features/histroy/histroyList'
import Search from '@/features/search/search'
import { router } from 'expo-router'
import { ArrowLeft2 } from 'iconsax-react-native'
import { X } from 'lucide-react-native'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function search() {
    return (
        <SafeAreaView className='flex-1 bg-white w-full px-5 pt-6'>
            <View className='flex gap-8'>

                <HeaderIcon
                    Title="Search"
                    Icon={ArrowLeft2}
                    onPress={() => router.back()}
                    Icon2={X}
                />
                <Search />
                <HistroyList />
            </View>
        </SafeAreaView>
    )
}