import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/store";
import SplashScreen from "../screens/SplashScreen";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";

export default function AppNavigator() {
    const { token } = useAppSelector((state) => state.auth);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simulate splash loading
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <SplashScreen />;

    return (
        <NavigationContainer>
            {token ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}
