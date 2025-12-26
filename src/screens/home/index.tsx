import React, { useState } from 'react'
import { Text, View } from 'react-native'
import CustomView from '../../components/customView'
import AuthButton from '../../components/common/AuthButton'
import { useAppDispatch } from '../../store/store'
import { logout } from '../../store/slices/auth/authSlice'
import { vw } from '../../utils/dimensions'
import { Toast } from 'toastify-react-native'

const HomeScreen = () => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const handleLogout = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            dispatch(logout())
        }, 2000);
    }
    return (
        <CustomView>
            <View style={{ flex: 1, paddingHorizontal: vw(20), gap: 20 }}>
                <Text>HomeScreen</Text>

                <AuthButton text="Logout" isLoading={loading} onPress={() => Toast.warn("Hello world")} />
            </View>
        </CustomView>
    )
}

export default HomeScreen