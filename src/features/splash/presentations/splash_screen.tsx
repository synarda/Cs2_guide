import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Dimensions, ActivityIndicator } from 'react-native';
import { splashPageStyle } from './styles/splash_page_styles';
import { imagesPaths } from '../../../product/constants/paths';
import AppImage from '../../../product/components/app_image';
import appColors from '../../../product/constants/colors';



export default function SplashScreen({ navigation }: any) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const screenWidth = Dimensions.get('window').width;
    useEffect(() => {
        const fadeInTimer = setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 100);

        const navTimer = setTimeout(() => {
            navigation.replace('Home');
        }, 5000);

        return () => {
            clearTimeout(fadeInTimer);
            clearTimeout(navTimer);
        };
    }, [fadeAnim, navigation]);

    return (
        <View style={splashPageStyle.pageLayout}>
            <Animated.View style={{ opacity: fadeAnim }}>
                <AppImage
                    source={imagesPaths.cs2Logo}
                    resizeMode="cover"
                    style={{ width: screenWidth, height: 50 }}
                />
                <ActivityIndicator size="large" color={appColors.background} />
            </Animated.View>
        </View>
    );
}
