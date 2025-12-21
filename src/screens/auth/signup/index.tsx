import React, { useState } from 'react'
import { Text, View } from 'react-native'
import CustomView from '../../../components/customView'
import { vw } from '../../../utils/dimensions'
import CustomInput from '../../../components/common/CustomInput'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../../utils/model'
import { useFormik } from 'formik'
import { SignupSchema } from '../../../utils/validationSchema'
import { Images } from '../../../utils/images'
import AuthButton from '../../../components/common/AuthButton'
import SocialLoginButton from '../../../components/common/SocialLoginButton'
import { colors } from '../../../styles/color'
import { authStyles } from '../style'

const SignupScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();;
    const [loading, setLoading] = useState(false);
    const signupForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: SignupSchema,
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
                <Text style={authStyles.title}>Create An Account</Text>

                <View style={{ gap: vw(30) }}>
                    <CustomInput
                        value={signupForm.values.name}
                        onChangeText={signupForm.handleChange("name")}
                        onBlur={() => signupForm.handleBlur("name")}
                        placeholder="Full Name"
                        startIcon={Images.user}
                        error={
                            !!signupForm.touched.name &&
                            !!signupForm.errors.name
                        }
                        errorText={signupForm.errors.name}
                    />

                    {/* Email Input */}
                    <CustomInput
                        value={signupForm.values.email}
                        onChangeText={signupForm.handleChange("email")}
                        onBlur={() => signupForm.handleBlur("email")}
                        placeholder="Email"
                        startIcon={Images.email}
                        error={
                            !!signupForm.touched.email &&
                            !!signupForm.errors.email
                        }
                        errorText={signupForm.errors.email}
                    />

                    {/* Password Input */}
                    <CustomInput
                        value={signupForm.values.password}
                        onChangeText={signupForm.handleChange("password")}
                        onBlur={() => signupForm.handleBlur("password")}
                        placeholder="Password"
                        startIcon={Images.password}
                        error={
                            !!signupForm.touched.password &&
                            !!signupForm.errors.password
                        }
                        errorText={signupForm.errors.password}
                        isPassword={true}

                    />

                    <CustomInput
                        value={signupForm.values.confirmPassword}
                        onChangeText={signupForm.handleChange("confirmPassword")}
                        onBlur={() => signupForm.handleBlur("confirmPassword")}
                        placeholder="Confirm Password"
                        startIcon={Images.password}
                        error={
                            !!signupForm.touched.confirmPassword &&
                            !!signupForm.errors.confirmPassword
                        }
                        errorText={signupForm.errors.confirmPassword}
                        isPassword
                    />
                </View>
                <Text style={[authStyles.buttonText, { textAlign: "left", color: colors.grey500 }]}>By clicking the <Text style={[authStyles.linkText, { textDecorationLine: "none" }]}>Register</Text> button, you agree to the public offer</Text>

                {/* Submit Button */}
                <AuthButton
                    text="Sign Up"
                    onPress={signupForm.handleSubmit}
                    isLoading={loading}
                />

                <View style={[authStyles.socialContainer, { marginTop: vw(30) }]}>

                    <Text style={authStyles.socialText}>- OR Continue with -</Text>

                    <View>
                        <SocialLoginButton />
                    </View>

                    <Text style={authStyles.socialText}>I Already Have an Account <Text style={authStyles.linkText}
                        onPress={() => navigation.navigate("Login")}
                    >Login</Text></Text>
                </View>

            </View>
        </CustomView>
    )
}

export default SignupScreen;