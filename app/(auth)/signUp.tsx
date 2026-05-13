import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft2, Sms, Lock, Eye, EyeSlash, Call, UserSquare } from 'iconsax-react-native'
import { useRouter } from 'expo-router';
import BtnCom from '@/components/ui/btnCom';
import GoBack from '@/components/ui/goBack';

export default function SignUp() {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
    <SafeAreaView className='flex-1 bg-white px-5 py-10'>

            <View className='mb-10'>


                {/* BACK */}
                <View className='mb-14'>
                    <GoBack />
                </View>

                {/* TITLE */}
                <Text className='font-medium text-[32px] text-[#1E1E2D] mb-8'>
                    Sign Up
                </Text>

                {/* NAME */}
                <View className='mb-6'>
                    <Text className='text-base text-[#A2A2A7] mb-2'>Full Name</Text>
                    <View className='flex-row items-center gap-3 border-b border-[#F4F4F4] pb-2'>
                        <UserSquare size={20} color="#A2A2A7" />
                        <TextInput
                            placeholder="Enter your name"
                            className="flex-1"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                </View>

                {/* PHONE */}
                <View className='mb-6'>
                    <Text className='text-base text-[#A2A2A7] mb-2'>Phone Number</Text>
                    <View className='flex-row items-center gap-2 border-b border-[#F4F4F4] pb-2'>
                        <Call size={20} color="#A2A2A7" />


                        <View className="flex-row items-center ">

                            <Text className="text-base font- text-[#1E1E2D]">
                                +91
                            </Text>

                            {/* <View className="w-[1px] h-5 bg-gray-300" /> */}
                            <TextInput
                                className="flex-1"
                                placeholder="1234567890"
                                keyboardType="phone-pad"
                                maxLength={10}
                                onChangeText={setNumber}
                            />
                        </View>




                    </View>
                </View>

                {/* EMAIL */}
                <View className='mb-6'>
                    <Text className='text-base text-[#A2A2A7] mb-2'>Email Address</Text>
                    <View className='flex-row items-center gap-3 border-b border-[#F4F4F4] pb-2'>
                        <Sms size={20} color="#A2A2A7" />
                        <TextInput
                            placeholder="Enter your email"
                            className="flex-1"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                </View>

                {/* PASSWORD */}
                <View className='mb-6'>
                    <Text className='text-base text-[#A2A2A7] mb-2'>Password</Text>
                    <View className='flex-row items-center gap-3 border-b border-[#F4F4F4] pb-2'>
                        <Lock size={20} color="#A2A2A7" />
                        <TextInput
                            placeholder="Enter your password"
                            className="flex-1"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            {showPassword ? (
                                <Eye size={20} color="#1E1E2D" />
                            ) : (
                                <EyeSlash size={20} color="#A2A2A7" />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            {/* BUTTON + FOOTER */}
            <View>

                <BtnCom
                    title="Sign Up"
                    onPress={() => router.replace('/(tabs)/home')}
                />

                <View className="flex-row justify-center mt-5">
                    <Text className='text-base text-[#A2A2A7]'>
                        Already have an account?
                    </Text>

                    <TouchableOpacity onPress={() => router.push('/(auth)/signIn')}>
                        <Text className='text-base text-[#0066FF] font-medium ml-1'>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    )
}