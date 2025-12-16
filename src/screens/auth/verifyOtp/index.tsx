import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { OtpInput } from "react-native-otp-entry";

import CustomView from '../../../components/customView'
import { authStyles } from '../../login';
import { vw } from '../../../utils/dimensions';
import AuthButton from '../../../components/common/AuthButton';
import { colors } from '../../../styles/color';

const VerifyOtp = () => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const submitHandler = () => {
        setLoading(true);
        setTimeout(() => {
            console.log("otp :", otp);
            setLoading(prev => !prev)
        }, 2000)
    }
    console.log("otp is :", otp);
    return (
        <CustomView>
            <View style={authStyles.container}>
                <Text style={authStyles.title}>Verify Otp</Text>

                <View style={{ gap: vw(30) }}>

                    <OtpInput
                        numberOfDigits={4}
                        focusColor={colors.primary}
                        autoFocus={false}
                        // hideStick={true}
                        // placeholder="0000"
                        // blurOnFilled={true}
                        // disabled={false}
                        type="numeric"
                        secureTextEntry={false}
                        focusStickBlinkingDuration={1000}
                        // onFocus={() => console.log("Focused")}
                        // onBlur={() => console.log("Blurred")}
                        onTextChange={(text) => setOtp(text)}
                        onFilled={(text) => console.log(`OTP is ${text}`)}
                        textInputProps={{
                            accessibilityLabel: "One-Time Password",
                        }}
                        textProps={{
                            accessibilityRole: "text",
                            accessibilityLabel: "OTP digit",
                            allowFontScaling: false,
                        }}
                        theme={{
                            containerStyle: {},
                            pinCodeContainerStyle: { width: "18%", borderWidth: 0, backgroundColor: colors.grey400 },
                            pinCodeTextStyle: {},
                            focusStickStyle: {},
                            focusedPinCodeContainerStyle: { borderColor: colors.primary, borderWidth: 1, backgroundColor: colors.white },
                            placeholderTextStyle: {},
                            filledPinCodeContainerStyle: { borderColor: colors.primaryDark, borderWidth: 1, backgroundColor: colors.grey200 },
                            disabledPinCodeContainerStyle: {},
                        }}
                    />

                </View>
                <Text style={[authStyles.socialText, { paddingBottom: vw(40), paddingTop: vw(16) }]} >We will send you a message to set or reset your new password</Text>

                {/* Submit Button */}
                <AuthButton
                    text="Submit"
                    onPress={submitHandler}
                    isLoading={loading}
                    disabled={otp.length === 4}
                />

            </View>
        </CustomView>
    )
}

export default VerifyOtp

