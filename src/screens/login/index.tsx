import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomInput from "../../components/common/CustomInput";
import { vw } from "../../utils/dimensions";
import { colors } from "../../styles/color";
import { useFormik } from "formik";
import { LoginSchema } from "../../utils/validationSchema";
import { Images } from "../../utils/images";
import AuthButton from "../../components/common/AuthButton";
import SocialLoginButton from "../../components/common/SocialLoginButton";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CustomView from "../../components/customView";

type AuthStackParamList = {
    Login: undefined;
    Signup: undefined;
};

const LoginScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();;
    const [loading, setLoading] = useState(false);
    const loginForm = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginSchema,
        onSubmit(values, helpers) {
            console.log("submitted value :", values);
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                helpers.resetForm();
            }, 3000)
        },
    });

    return (
        <CustomView>
            <View style={loginStyles.container}>
                <Text style={loginStyles.title}>Welcome Back!</Text>

                <View style={{ gap: vw(30) }}>

                    {/* Email Input */}
                    <CustomInput
                        value={loginForm.values.email}
                        onChangeText={loginForm.handleChange("email")}
                        onBlur={() => loginForm.handleBlur("email")}
                        placeholder="Email"
                        startIcon={Images.user}
                        error={
                            !!loginForm.touched.email &&
                            !!loginForm.errors.email
                        }
                        errorText={loginForm.errors.email}
                    />

                    {/* Password Input */}
                    <CustomInput
                        value={loginForm.values.password}
                        onChangeText={loginForm.handleChange("password")}
                        onBlur={() => loginForm.handleBlur("password")}
                        placeholder="Password"
                        startIcon={Images.password}
                        error={
                            !!loginForm.touched.password &&
                            !!loginForm.errors.password
                        }
                        errorText={loginForm.errors.password}
                        isPassword={true}

                    />
                </View>
                <Text style={loginStyles.buttonText}>Forgot Password?</Text>

                {/* Submit Button */}
                <AuthButton
                    text="Login"
                    onPress={loginForm.handleSubmit}
                    isLoading={loading}
                />

                <View style={loginStyles.socialContainer}>

                    <Text style={loginStyles.socialText}>- OR Continue with -</Text>

                    <View>
                        <SocialLoginButton />
                    </View>

                    <Text style={loginStyles.socialText}>Create An Account <Text style={loginStyles.linkText}
                        onPress={() => navigation.navigate("Signup")}
                    >Sign Up</Text></Text>
                </View>

            </View>
        </CustomView>
    );
};

export default LoginScreen;


export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: vw(30),
    },
    title: {
        fontSize: vw(36),
        lineHeight: vw(43),
        fontWeight: "600",
        color: colors.black,
        marginVertical: vw(36)
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
        color: colors.greyInfoText,
        fontWeight: "500"
    },
    linkText: {
        color: colors.primary,
        textDecorationLine: "underline"
    }

});
