import { View } from 'react-native'
import React, { memo } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type prop = {
    children: React.ReactNode
}

const CustomView = ({ children }: prop) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            flex: 1
        }}>
            {children}
        </View>
    )
}

export default memo(CustomView);
