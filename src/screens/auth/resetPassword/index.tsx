import { Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../../components/customView'
import { vw } from '../../../utils/dimensions'
import CustomInput from '../../../components/common/CustomInput'
import AuthButton from '../../../components/common/AuthButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../../utils/model'
import { useFormik } from 'formik'
import { ResetPasswordSchema } from '../../../utils/validationSchema'
import { Images } from '../../../utils/images'
import { authStyles } from '../style'

const ResetPassword = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();;
    const [loading, setLoading] = useState(false);
    const ResetPasswordForm = useFormik({
        initialValues: {
            password: "",
            confirmPassword: ""
        },
        validationSchema: ResetPasswordSchema,
        onSubmit(values, helpers) {
            console.log("submitted value :", values);
            setLoading(true)
            setLoading(false)
            helpers.resetForm();
            navigation.navigate("VerifyOtp")
        },
    });
    return (
        <CustomView>
            <View style={authStyles.container}>
                <Text style={authStyles.title}>Reset Password?</Text>

                <View style={{ gap: vw(30) }}>

                    {/* Password Input */}
                    <CustomInput
                        value={ResetPasswordForm.values.password}
                        onChangeText={ResetPasswordForm.handleChange("password")}
                        onBlur={() => ResetPasswordForm.handleBlur("password")}
                        placeholder="Password"
                        startIcon={Images.password}
                        error={
                            !!ResetPasswordForm.touched.password &&
                            !!ResetPasswordForm.errors.password
                        }
                        errorText={ResetPasswordForm.errors.password}
                        isPassword={true}

                    />

                    <CustomInput
                        value={ResetPasswordForm.values.confirmPassword}
                        onChangeText={ResetPasswordForm.handleChange("confirmPassword")}
                        onBlur={() => ResetPasswordForm.handleBlur("confirmPassword")}
                        placeholder="Confirm Password"
                        startIcon={Images.password}
                        error={
                            !!ResetPasswordForm.touched.confirmPassword &&
                            !!ResetPasswordForm.errors.confirmPassword
                        }
                        errorText={ResetPasswordForm.errors.confirmPassword}
                        isPassword
                    />
                </View>
                <Text style={[authStyles.socialText, { paddingBottom: vw(40), paddingTop: vw(16) }]} >We will send you a message to set or reset your new password</Text>

                {/* Submit Button */}
                <AuthButton
                    text="Submit"
                    onPress={ResetPasswordForm.handleSubmit}
                    isLoading={loading}
                />

            </View>
        </CustomView>
    )
}

export default ResetPassword
