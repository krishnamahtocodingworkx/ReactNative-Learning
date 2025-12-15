import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonStyles } from '../../../styles/commonStyle'

const IntroScreen = () => {

    return (
        <SafeAreaView style={commonStyles.screenWrapper}>
            <View style={introStyles.container}>
                <Text>Introduction</Text>
            </View>
        </SafeAreaView>
    )
}

export default IntroScreen;

const introStyles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        gap: 10
    }
})
