import { Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../../components/customView'
import { authStyles } from '../../login'
import { vw } from '../../../utils/dimensions'
import CustomInput from '../../../components/common/CustomInput'
import AuthButton from '../../../components/common/AuthButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../../utils/model'
import { useFormik } from 'formik'
import { ForgotPasswordSchema } from '../../../utils/validationSchema'
import { Images } from '../../../utils/images'

const ForgotPassword = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();;
    const [loading, setLoading] = useState(false);
    const forgotPasswordForm = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: ForgotPasswordSchema,
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
                <Text style={authStyles.title}>Forgot Password?</Text>

                <View style={{ gap: vw(30) }}>

                    {/* Email Input */}
                    <CustomInput
                        value={forgotPasswordForm.values.email}
                        onChangeText={forgotPasswordForm.handleChange("email")}
                        onBlur={() => forgotPasswordForm.handleBlur("email")}
                        placeholder="Email"
                        startIcon={Images.email}
                        error={
                            !!forgotPasswordForm.touched.email &&
                            !!forgotPasswordForm.errors.email
                        }
                        errorText={forgotPasswordForm.errors.email}
                    />
                </View>
                <Text style={[authStyles.socialText, { paddingBottom: vw(40), paddingTop: vw(16) }]} >We will send you a message to set or reset your new password</Text>

                {/* Submit Button */}
                <AuthButton
                    text="Submit"
                    onPress={forgotPasswordForm.handleSubmit}
                    isLoading={loading}
                />

            </View>
        </CustomView>
    )
}

export default ForgotPassword
