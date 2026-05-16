import { View, Text, Image } from 'react-native'
import React from 'react'
import { transactions } from '@/data/transaction';

export default function CardHistory() {
    return (
        <View>
            {transactions.slice(0, 3).map((item) => {
                const IconComponent = item.icon;
                return (
                    <View key={item.id} className="flex-row items-center justify-between mb-5">

                        <View className="flex-row items-center gap-4">

                            <View className="w-[58px] h-[58px] rounded-full bg-[#F5F5F5] items-center justify-center">
                                {item.type === 'image' ? (
                                    <Image
                                        source={
                                            typeof item.image === 'string'
                                                ? { uri: item.image }
                                                : item.image
                                        }
                                        className="w-[28px] h-[28px]"
                                        resizeMode="contain"
                                    />
                                ) : (
                                    IconComponent ? <IconComponent size={24} color="#1E1E2D" /> : null
                                )}
                            </View>

                            <View>
                                <Text className="text-[18px] font-medium text-[#1E1E2D]">
                                    {item.title}
                                </Text>
                                <Text className="text-[15px] text-[#A2A2A7] mt-1">
                                    {item.subtitle}
                                </Text>
                            </View>

                        </View>

                        <Text
                            style={{ color: item.amountColor }}
                            className="text-[18px] font-semibold"
                        >
                            {item.amount}
                        </Text>

                    </View>
                );
            })}
        </View>
    )
}