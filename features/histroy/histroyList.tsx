import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { transactions } from '@/data/transaction'

export default function HistroyList() {

    const renderItem = ({ item }: { item: any }) => {
        const IconComponent = item.icon

        return (
            <View className="flex-row items-center justify-between mb-5">
                
                <View className="flex-row items-center gap-4">

                    <View className="w-[58px] h-[58px] rounded-full bg-[#F5F5F5] items-center justify-center">
                        {item.type === 'image' ? (
                            <Image
                                source={item.image}
                                className="w-[28px] h-[28px]"
                                resizeMode="contain"
                            />
                        ) : (
                            IconComponent && (
                                <IconComponent
                                    size={24}
                                    color="#1E1E2D"
                                />
                            )
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
        )
    }

    return (
        <FlatList
            data={transactions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
        />
    )
}