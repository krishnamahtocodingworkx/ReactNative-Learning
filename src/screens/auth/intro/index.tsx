import React, { JSX, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonStyles } from '../../../styles/commonStyle'
import { Images } from '../../../utils/images'
import { colors } from '../../../styles/color'

type RenderViewMap = Record<"1" | "2" | "3", () => JSX.Element>;

const IntroScreen = () => {
    const [step, setStep] = useState<"1" | "2" | "3">("1");


    const renderFirstView = () => {
        return <View style={introStyles.innerContainer}>
            <Image source={Images.intro1} alt='choose product' style={introStyles.image} />
            <Text style={introStyles.title}>Choose Product</Text>
            <Text style={introStyles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
        </View>
    }

    const renderSecondView = () => {
        return <View style={introStyles.innerContainer}>
            <Image style={introStyles.image} source={Images.intro1} alt='choose product' resizeMode="contain" />
            <Text style={introStyles.title}>Choose Product</Text>
            <Text style={introStyles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
        </View>
    }

    const renderThirdView = () => {
        return <View style={introStyles.innerContainer}>
            <Image source={Images.intro1} alt='choose product' />
            <Text style={introStyles.title}>Choose Product</Text>
            <Text style={introStyles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
        </View>
    }
    const renderView: RenderViewMap = {
        "1": renderFirstView,
        "2": renderSecondView,
        "3": renderThirdView,
    }
    return (
        <SafeAreaView style={commonStyles.screenWrapper}>
            <View style={introStyles.container}>
                <View>
                    {/* <View></View> */}
                    
                </View>
                {renderView[step]()}
            </View>

        </SafeAreaView>
    )
}

export default IntroScreen;

const introStyles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 17,
        borderWidth: 1,
        borderColor: "#111111"
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.primary
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 32,
    },

    title: {
        fontSize: 22,
        fontWeight: "600",
        color: colors.black,
        marginBottom: 12,
        textAlign: "center",
    },

    description: {
        fontSize: 14,
        color: colors.greyText,
        textAlign: "center",
        lineHeight: 20,
        maxWidth: 320,
    },
});

