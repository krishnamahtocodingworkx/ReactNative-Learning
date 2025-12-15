import {
    Image,
    ImageSourcePropType,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import React, { useState } from "react";
import { vw } from "../../utils/dimensions";
import { colors } from "../../styles/color";
import { Images } from "../../utils/images";

type AuthInputProps = {
    value: string;
    onChangeText: (text: string) => void;
    onBlur: () => void;
    placeholder: string;
    startIcon?: ImageSourcePropType;
    error?: boolean;
    errorText?: string;
    isPassword?: boolean
};

const CustomInput: React.FC<AuthInputProps> = ({
    value,
    onChangeText,
    onBlur,
    placeholder,
    startIcon,
    error,
    errorText,
    isPassword
}) => {
    const [show, setShow] = useState(isPassword);
    return (
        <View>
            <View
                style={[
                    styles.inputFieldContainer,
                    error && styles.errorBorder,
                ]}
            >
                {startIcon && (
                    <Image source={startIcon} style={styles.startIcon} />
                )}

                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    onBlur={onBlur()}
                    placeholder={placeholder}
                    placeholderTextColor={colors.greyText}
                    style={styles.inputField}
                    secureTextEntry={show && isPassword}
                />
                {
                    isPassword && <Pressable style={styles.endIconContainer} onPress={() => setShow(prev => !prev)}><Image source={show ? Images.eyeOpen : Images.eyeClose} style={styles.endIcon} /></Pressable>
                }
            </View>

            {error && errorText && (
                <Text style={styles.errorText}>{errorText}</Text>
            )}
        </View>
    );
};

export default CustomInput;
const styles = StyleSheet.create({
    inputFieldContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.lightGrey,
        borderRadius: vw(10),
        borderWidth: 1,
        borderColor: colors.greyText,
    },

    errorBorder: {
        borderColor: colors.error,
    },

    startIcon: {
        height: vw(24),
        width: vw(24),
        position: "absolute",
        left: vw(10),
    },

    endIcon: {
        height: vw(24),
        width: vw(24),
    },
    endIconContainer: {
        position: "absolute",
        right: vw(15),
    },

    inputField: {
        flex: 1,
        paddingLeft: vw(42),
        paddingRight: vw(42),
        paddingVertical: vw(14),
        color: colors.greyInputText,
        fontSize: vw(14),
    },

    errorText: {
        marginTop: vw(4),
        marginLeft: vw(4),
        fontSize: vw(12),
        color: colors.error,
    },
});
