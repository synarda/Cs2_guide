import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/product/navigate/route_navigate';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, View, StyleSheet } from 'react-native';
import { appStyle } from './src/product/styles/app_style';

export default function App() {
  return (

    <View style={appStyle.appLayout}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
}

