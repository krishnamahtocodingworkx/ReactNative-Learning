import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Images } from '../../utils/images'
import { vw } from '../../utils/dimensions'
import { colors } from '../../styles/color'

const SocialLoginButton = () => {
    return (
        <View style={styles.container}>
            <Image source={Images.google} style={{ height: vw(24), width: vw(24) }} />
        </View>
    )
}

export default SocialLoginButton

const styles = StyleSheet.create({
    container: {
        padding: vw(15),
        borderRadius: vw(50),
        borderWidth: 1,
        borderColor: colors.primary,
        alignSelf: "flex-start",
        backgroundColor: colors.lightPrimary
    },

})