import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { navigate } from 'expo-router/build/global-state/routing'
import BtnCom from '@/components/ui/btnCom'
import { ScreenWrapper } from '@/components/ui/screenWrapper'



export default function OnboardingScreenFinal() {
    return (
         <ScreenWrapper >

            <View className='items-center  gap-[60px] pt-[100px]'>
                <Image
                    source={require("@/assets/images/onboarding/Illustration.png")}
                    className='w-full h-[250px]'
                    resizeMode="contain"
                />
                <View className="flex-row gap-2">
                    <View className="h-1.5 w-1.5 rounded-full bg-[#0066FF]/20" />
                    <View className="h-1.5 w-1.5 rounded-full bg-[#0066FF]/20" />
                    <View className="h-1.5 w-5 rounded-full bg-[#0066FF]" />

                </View>
            </View>
            <View className='gap-[50px] '>

                <View className='px-5'>
                    <Text className='text-3xl font-semibold text-[#1E1E2D] text-center mb-5'>
                        Paying for Everything is Easy and Convenient
                    </Text>

                    <Text className='text-sm font-regular text-[#7E848D] text-center'>
                        Built-in Fingerprint, face recognition and more, keeping you completely safe
                    </Text>

                </View>
                <View className=''>
                    <BtnCom
                        title="Next"
                        onPress={() => { navigate("/(auth)/signIn") }}
                    />
                </View>
            </View>
        </ScreenWrapper >
    )
}