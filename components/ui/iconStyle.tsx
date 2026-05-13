import React from "react";
import { TouchableOpacity } from "react-native";

type Props = {
    Icon: any;
    onPress?: () => void;
};

export default function IconStyle({ Icon, onPress }: Props) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="bg-[#f2f2f2] w-11 h-11 rounded-full items-center justify-center"
        >
            <Icon size={20} color="#1E1E2D" />
        </TouchableOpacity>
    );
}