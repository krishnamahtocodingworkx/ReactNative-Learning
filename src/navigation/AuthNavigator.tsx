import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login";
import SignupScreen from "../screens/signup";
import { SCREENS } from "../utils/constant";
import ForgotPassword from "../screens/auth/forgotPassword";
import VerifyOtp from "../screens/auth/verifyOtp";
// import IntroScreen from "../screens/auth/intro";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="Introduction" component={IntroScreen} /> */}
            <Stack.Screen name={SCREENS.OtpVerification} component={VerifyOtp} />
            <Stack.Screen name={SCREENS.Login} component={LoginScreen} />
            <Stack.Screen name={SCREENS.Signup} component={SignupScreen} />
            <Stack.Screen name={SCREENS.ForgotPassword} component={ForgotPassword} />
        </Stack.Navigator>
    );
}
