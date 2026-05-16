import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider'

export default function MonthlyLimit() {
    return (
        <View className="gap-5">
            
            <Text className="text-[#1E1E2D] text-[22px] font-medium">
                Monthly spending limit
            </Text>

            <AmountSlider />

        </View>
    )
}

function AmountSlider() {

    const [amount, setAmount] = useState(4600)

    return (
        <View className="bg-[#F5F5F7] rounded-[34px] px-6 py-7 mb-10">

            {/* Amount */}
            <Text className="text-[18px] text-[#7B7B80] font-medium mb-2">
                Amount
            </Text>

            <Text className="text-[28px] font-semibold text-[#1E1E2D] mb-10">
                ${amount.toLocaleString()}.00
            </Text>

            {/* Slider */}
            <View className="justify-center">

                <Slider
                    style={{
                        width: '100%',
                        height: 28,
                    }}
                    minimumValue={0}
                    maximumValue={10000}
                    value={amount}
                    onValueChange={(value) => setAmount(Math.floor(value))}
                    minimumTrackTintColor="#3D5CFF"
                    maximumTrackTintColor="#E7E7EA"
                    thumbTintColor="#3D5CFF"
                    step={50}
                />

            </View>

            {/* Labels */}
            <View className="flex-row items-center justify-between mt-3">

                <Text className="text-[18px] text-[#A2A2A7] font-medium">
                    $0
                </Text>

                <Text className="text-[20px] text-[#1E1E2D] font-semibold">
                    ${amount.toLocaleString()}
                </Text>

                <Text className="text-[18px] text-[#A2A2A7] font-medium">
                    $10,000
                </Text>

            </View>

        </View>
    )
}