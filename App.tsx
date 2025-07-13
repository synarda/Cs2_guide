import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/product/navigate/route_navigate';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, View, StyleSheet } from 'react-native';
import { appStyle } from './src/product/styles/app_style';
import { Provider } from 'react-redux';
import store from './src/product/redux/store';

export default function App() {
  return (

    <View style={appStyle.appLayout}>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>

    </View>
  );
}

