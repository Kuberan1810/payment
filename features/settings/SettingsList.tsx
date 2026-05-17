import { View, Text, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ArrowRight2 } from 'iconsax-react-native'
import CustomToggle from '@/components/ui/toggleSwitch'
import { router } from 'expo-router'

const data = [
    {
        id: 1,
        title: 'Language',
        value: 'English',
    },
    {
        id: 2,
        title: 'My Profile',
        onPress:()=>{router.push('(profile)/profile')},
    },
    {
        id: 3,
        title: 'Contact Us',
        onPress:()=>{router.push('/contact')}
    },
]

const data2 = [
    {
        id: 1,
        title: 'Change Password',
        onPress:()=>{router.push('/change-password')}
    },
    {
        id: 2,
        title: 'Privacy Policy',
        onPress:()=>{router.push('/privacy-policy')}
    },
]

const data3 = [
    {
        id: 1,
        title: 'Biometric',
    },
]

export default function SettingsList() {
    const [isEnabled, setIsEnabled] = useState(false)

    return (
        <View className='flex-col gap-8'>
            <Text className='text-[#a2a2a7] text-lg'>General</Text>

            {data.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    onPress={item.onPress}
                >
                    <View
                        className='flex-row justify-between items-center pb-4 border-b border-[#F4F4F4]'

                    >
                        <Text className='text-[#1E1E2D] text-xl font-medium'>
                            {item.title}
                        </Text>

                        <View className='flex-row items-center gap-2'>
                            {item.value && (
                                <Text className='text-[#A2A2A7] text-lg'>
                                    {item.value}
                                </Text>
                            )}

                            <ArrowRight2 size={24} color='#7E848D' />
                        </View>
                    </View>
                </TouchableOpacity>
            ))}

            <Text className='text-[#a2a2a7] text-lg'>Account</Text>

            {data2.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    onPress={item.onPress}
                >
                    <View
                        className='flex-row justify-between items-center pb-4 border-b border-[#F4F4F4]'
                    >
                        <Text className='text-[#1E1E2D] text-xl font-medium'>
                            {item.title}
                        </Text>

                        <ArrowRight2 size={24} color='#7E848D' />
                    </View>
                </TouchableOpacity>
            ))}

            <Text className='text-[#a2a2a7] text-lg'>
                Choose what data you share with us
            </Text>

            {data3.map((item) => (


                <View
                    key={item.id}
                    className='flex-row justify-between items-center pb-4 border-b border-[#F4F4F4]'

                >
                    <Text className='text-[#1E1E2D] text-xl font-medium'>
                        {item.title}
                    </Text>

                    <CustomToggle />
                </View>

            ))}
        </View>
    )
}
