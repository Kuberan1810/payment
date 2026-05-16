import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SearchNormal1, CloseCircle } from 'iconsax-react-native'
import { X } from 'lucide-react-native'

export default function Search() {
    return (
        <View>
            <View className="h-[48px] rounded-[10px] bg-[#F4F4F4] flex-row items-center px-4">

                <SearchNormal1
                    size={22}
                    color="#A2A2A7"
                    variant="Linear"
                />

                <TextInput
                    placeholder="Search"
                    placeholderTextColor="#A2A2A7"
                    className="flex-1 text-[17px] text-[#1E1E2D] ml-3"
                />

                <TouchableOpacity activeOpacity={0.7}>
                    <X
                        size={22}
                        color="#A2A2A7"

                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}