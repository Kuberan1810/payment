import React from 'react';
import IconStyle from "@/components/ui/iconStyle";
import { SearchNormal1 } from "iconsax-react-native";
import { View, Text } from "react-native";
import Profile from "@/assets/images/home/profile.svg";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
    return (
       
            <View className="flex-row justify-between items-center ">

              
                <View className="flex-row items-center gap-3">

                    {/* Profile */}
                    <Profile width={50} height={50} />

              
                    <View>
                        <Text className="text-[#7E848D] text-sm">
                            Welcome back,
                        </Text>
                        <Text className="font-semibold text-[#1E1E2D] text-xl">
                            Aimal Naseem
                        </Text>
                    </View>
                </View>

                <IconStyle Icon={SearchNormal1} />

            </View>
        
    );
}