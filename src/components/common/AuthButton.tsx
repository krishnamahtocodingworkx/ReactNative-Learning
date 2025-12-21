import React from "react";
import {
    ActivityIndicator,
    Pressable,
    StyleSheet,
    Text,
} from "react-native";
import { colors } from "../../styles/color";
import { vw } from "../../utils/dimensions";

type AuthButtonProps = {
    text: string;
    onPress: () => void;
    isLoading?: boolean;
    disabled?: boolean;
};

const AuthButton: React.FC<AuthButtonProps> = ({
    text,
    onPress,
    isLoading = false,
    disabled = false,
}) => {
    const isDisabled = disabled || isLoading;

    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                isDisabled && styles.disabledButton,
                pressed && !isDisabled && styles.pressed,
            ]}
            onPress={onPress}
            disabled={isDisabled}
        >
            {isLoading ? (
                <ActivityIndicator color={colors.white} />
            ) : (
                <Text style={styles.buttonText}>{text}</Text>
            )}
        </Pressable>
    );
};

export default AuthButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: vw(14),
        borderRadius: vw(10),
        alignItems: "center",
    },

    pressed: {
        opacity: 0.85,
    },

    disabledButton: {
        backgroundColor: colors.grey500,
    },

    buttonText: {
        color: colors.white,
        fontSize: vw(16),
        fontWeight: "600",
    },
});
