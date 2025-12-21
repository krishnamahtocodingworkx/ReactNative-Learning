import React, { useState } from "react";
import { Text, View } from "react-native";
import { useFormik } from "formik";
import { authStyles } from "../style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../utils/model";
import { LoginSchema } from "../../../utils/validationSchema";
import CustomView from "../../../components/customView";
import { vw } from "../../../utils/dimensions";
import CustomInput from "../../../components/common/CustomInput";
import { Images } from "../../../utils/images";
import AuthButton from "../../../components/common/AuthButton";
import SocialLoginButton from "../../../components/common/SocialLoginButton";



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
            <View style={authStyles.container}>
                <Text style={authStyles.title}>Welcome Back!</Text>

                <View style={{ gap: vw(30) }}>

                    {/* Email Input */}
                    <CustomInput
                        value={loginForm.values.email}
                        onChangeText={loginForm.handleChange("email")}
                        onBlur={() => loginForm.handleBlur("email")}
                        placeholder="Email"
                        startIcon={Images.email}
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
                <Text style={authStyles.buttonText} onPress={() => navigation.navigate("ForgotPassword")}>Forgot Password?</Text>

                {/* Submit Button */}
                <AuthButton
                    text="Login"
                    onPress={loginForm.handleSubmit}
                    isLoading={loading}
                />

                <View style={authStyles.socialContainer}>

                    <Text style={authStyles.socialText}>- OR Continue with -</Text>

                    <View>
                        <SocialLoginButton />
                    </View>

                    <Text style={authStyles.socialText}>Create An Account <Text style={authStyles.linkText}
                        onPress={() => navigation.navigate("Signup")}
                    >Sign Up</Text></Text>
                </View>

            </View>
        </CustomView>
    );
};

export default LoginScreen;


