import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashPage from '../../features/splash/presentations/splash_screen';

const Stack = createStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Splash" component={SplashPage} />
        </Stack.Navigator>
    );
}
