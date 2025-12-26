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
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { login } from "../../../store/slices/auth/authSlice";
import { Toast } from "toastify-react-native";



const LoginScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const dispatch = useAppDispatch();
    const { } = useAppSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);
    const loginForm = useFormik({
        initialValues: {
            emailOrPhoneNumber: "",
            password: "",
        },
        validationSchema: LoginSchema,
        onSubmit(values, helpers) {
            console.log("submitted value :", values);
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                helpers.resetForm();
                Toast.success("Login Successful!");
                dispatch(login({
                    email: values.emailOrPhoneNumber,
                    name: "Demo User",
                    token: "demo_token_123456"
                }));
            }, 2000)

        },
    });

    return (
        <CustomView>
            <View style={authStyles.container}>
                <Text style={authStyles.title}>Welcome Back!</Text>

                <View style={{ gap: vw(30) }}>

                    {/* EmailOrPhoneNumber Input */}
                    <CustomInput
                        value={loginForm.values.emailOrPhoneNumber}
                        onChangeText={loginForm.handleChange("emailOrPhoneNumber")}
                        onBlur={() => loginForm.handleBlur("emailOrPhoneNumber")}
                        placeholder="Email Or Phone number"
                        startIcon={Images.email}
                        error={
                            !!loginForm.touched.emailOrPhoneNumber &&
                            !!loginForm.errors.emailOrPhoneNumber
                        }
                        errorText={loginForm.errors.emailOrPhoneNumber}
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


