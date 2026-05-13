import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

export const ScreenWrapper = ({ children }: any) => {
    return (
        <SafeAreaView className="flex-1 bg-white px-5 pt-5 py-10 justify-between">
            {children}
        </SafeAreaView>
    );
};