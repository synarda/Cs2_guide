import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../features/splash/presentations/splash_screen';
import HomeScreen from '../../features/home/presentations/home_screen';
import AgentsScreen from '../../features/agents/presentations/agents_screen';
import SkinListScreen from '../../features/skins/presentations/skins_screen';

const Stack = createStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Agents" component={AgentsScreen} />
            <Stack.Screen name="Skins" component={SkinListScreen} />
        </Stack.Navigator>
    );
}
