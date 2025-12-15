import { View, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { Images } from "../utils/images";

export default function SplashScreen() {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={Images.logo}
                style={[styles.logo, { opacity: fadeAnim }]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 280,
        height: 100,
        resizeMode: "contain",
    },
});
