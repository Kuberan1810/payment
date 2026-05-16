import { ArrowLeft2 } from 'iconsax-react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderIcon from '@/components/ui/HeaderIcon'
import React from 'react'
import { Text, View } from 'react-native'
import { ClockIcon, History } from 'lucide-react-native'
import HistroyList from '@/features/histroy/histroyList'


export default function transactionHistroy() {
    return (
        <SafeAreaView className='flex-1 bg-white w-full px-5 pt-6 flex  gap-8'>
            <HeaderIcon
                Icon={ArrowLeft2}
                Icon2={History}
                onPress={() => router.back()}
                Title="Transaction Histroy"
            />
            <HistroyList />
        </SafeAreaView>
    )
}