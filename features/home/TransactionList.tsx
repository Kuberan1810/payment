import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Import, ShoppingCart } from 'iconsax-react-native'


const transactions = [
    {
        id: 1,
        type: 'image',
        image: require('@/assets/images/home/apple-logo.png'),
        title: 'Apple Store',
        subtitle: 'Entertainment',
        amount: '- $5,99',
        amountColor: '#1E1E2D'
    },
    {
        id: 2,
        type: 'image',
        image: require('@/assets/images/home/spotify.png'),
        title: 'Spotify',
        subtitle: 'Music',
        amount: '- $12,99',
        amountColor: '#1E1E2D'
    },
    {
        id: 3,
        type: 'icon',
        icon: Import,
        title: 'Money Transfer',
        subtitle: 'Transaction',
        amount: '$300',
        amountColor: '#3D5CFF'
    },
    {
        id: 4,
        type: 'icon',
        icon: ShoppingCart,
        title: 'Grocery',
        subtitle: 'Shopping',
        amount: '- $88',
        amountColor: '#1E1E2D'
    },
      {
        id: 5,
        type: 'image',
        image: require('@/assets/images/home/apple-logo.png'),
        title: 'Apple Store',
        subtitle: 'Entertainment',
        amount: '- $5,99',
        amountColor: '#1E1E2D'
    },
    {
        id: 6,
        type: 'image',
        image: require('@/assets/images/home/spotify.png'),
        title: 'Spotify',
        subtitle: 'Music',
        amount: '- $12,99',
        amountColor: '#1E1E2D'
    },
   
]

export default function TransactionList() {

    return (
        <View className="bg-white">

            {/* Header */}
            <View className="flex-row items-center justify-between mb-7">
                <Text className="text-[22px] font-bold text-[#1E1E2D]">
                    Transaction
                </Text>

                <TouchableOpacity>
                    <Text className="text-[16px] font-medium text-[#3D5CFF]">
                        See all
                    </Text>
                </TouchableOpacity>
            </View>

         
            {transactions.map((item) => {
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