import { StyleSheet } from "react-native";
import { vw } from "../../utils/dimensions";
import { colors } from "../../styles/color";

export const authStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: vw(30),

    },
    title: {
        fontSize: vw(36),
        lineHeight: vw(43),
        // fontWeight: "600",
        color: colors.black,
        marginVertical: vw(30),
        fontFamily: "Montserrat-ExtraBold"
    },
    buttonText: {
        marginTop: vw(8),
        color: colors.primary,
        fontSize: vw(12),
        fontWeight: "400",
        textAlign: "right",
        marginBottom: vw(50)
    },
    socialContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: vw(75),
        gap: vw(20)
    },
    socialText: {
        fontSize: vw(12),
        color: colors.grey500,
        fontWeight: "500"
    },
    linkText: {
        color: colors.primary,
        textDecorationLine: "underline"
    }

});