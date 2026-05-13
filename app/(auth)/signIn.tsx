import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft2, Sms, Lock, Eye, EyeSlash } from 'iconsax-react-native'
import { useRouter } from 'expo-router';
import BtnCom from '@/components/ui/btnCom';
import GoBack from '@/components/ui/goBack';

export default function SignIn() {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <SafeAreaView className='flex-1 bg-white py-10 px-5'>
            <View className='mb-10 '>
                {/* BACK */}
                <View className='mb-14'>
                    <GoBack />
                </View>

                {/* TITLE */}
                <View className='mb-10'>
                    <Text className='font-medium text-[32px] text-[#1E1E2D]'>
                        Sign In
                    </Text>
                </View>

                {/* EMAIL */}
                <View className='mb-6'>
                    <Text className='text-base text-[#A2A2A7] mb-2'>
                        Email Address
                    </Text>

                    <View className='flex-row items-center gap-3 border-b border-[#F4F4F4] pb-2'>
                        <Sms size={20} color="#A2A2A7" />

                        <TextInput
                            placeholder="Enter your email"
                            className="flex-1 text-base"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                </View>

                {/* PASSWORD */}
                <View className=''>
                    <Text className='text-base text-[#A2A2A7] mb-2'>
                        Password
                    </Text>

                    <View className='flex-row items-center gap-3 border-b border-[#F4F4F4] pb-2'>
                        <Lock size={20} color="#A2A2A7" />

                        <TextInput
                            placeholder="Enter your password"
                            className="flex-1 text-base"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />

                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            className="p-2"
                        >
                            {showPassword ? (
                                <Eye size={20} color="#1E1E2D" />
                            ) : (
                                <EyeSlash size={20} color="#A2A2A7" />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View >
                <BtnCom

                    title="Sign In"
                    onPress={() => { router.push("/(tabs)/home") }}

                />
                <View className="flex-row justify-center mt-5">
                    <Text className='text-base text-[#A2A2A7] '>
                        Don't have an account?
                        <TouchableOpacity onPress={() => { router.push("/(auth)/signUp") }}>
                            <Text className='text-sm text-[#0066FF] font-medium ml-1 mt-1'>Sign Up</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}