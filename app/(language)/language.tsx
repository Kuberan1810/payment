import HeaderIcon from '@/components/ui/HeaderIcon'
import { ArrowLeft2 } from 'iconsax-react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

export default function language() {
    return (
        <SafeAreaView>
            <HeaderIcon
                Icon={ArrowLeft2}
                Icon2={History}
                onPress={() => router.back()}
                Title="Language"
            />
        </SafeAreaView>

    )
}