import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    ArrowUp,
    ArrowDown,
    DollarCircle,
    Import
} from 'iconsax-react-native'
import { CloudUpload } from 'lucide-react-native'

const actions = [
    {
        id: 1,
        title: 'Sent',
        icon: <ArrowUp size={28} color="#1E1E2D" />
    },
    {
        id: 2,
        title: 'Receive',
        icon: <ArrowDown size={28} color="#1E1E2D" />
    },
    {
        id: 3,
        title: 'Loan',
        icon: <DollarCircle size={28} color="#1E1E2D" />
    },
    {
        id: 4,
        title: 'Topup',
        icon: <CloudUpload strokeWidth={1.5} size={28} color="#1E1E2D" />
    }
]

export default function QuickAction() {
    return (
        <View className="flex-row justify-between">
            
            {actions.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    className="items-center gap-3"
                    // activeOpacity={0.8}
                >
                    
                    <View className="w-[72px] h-[72px] rounded-full bg-[#F4F4F4] items-center justify-center">
                        {item.icon}
                    </View>

                    <Text className="text-[#1E1E2D] text-[16px] font-regular">
                        {item.title}
                    </Text>

                </TouchableOpacity>
            ))}

        </View>
    )
}