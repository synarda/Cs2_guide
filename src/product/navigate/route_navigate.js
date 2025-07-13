import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../features/splash/presentations/splash_screen';
import HomeScreen from '../../features/home/presentations/home_screen';
const Stack = createStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}
