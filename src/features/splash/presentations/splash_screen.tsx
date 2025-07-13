import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { splashPageStyle } from './styles/splash_page_styles'
import { appStyle } from '../../../product/styles/app_style'
import appColors from '../../../product/constants/colors';


export default function SplashScreen({ navigation }: any) {
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigation.replace('Home');
    //     }, 5000);
    //     return () => clearTimeout(timer);
    // }, [navigation]);

    return (
        <View style={appStyle.appLayout}>
            <View style={splashPageStyle.pageLayout}>
                <Text>CS2 Guide</Text>
                <ActivityIndicator size="large" color={appColors.primary} style={{ marginTop: 20 }} />
            </View>
        </View>
    )
}

